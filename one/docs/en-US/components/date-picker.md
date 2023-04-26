# DatePicker <small>Date picker</small>

## Example

### Single date

By default, clicking on a date in the drop-down layer can select a date. You can configure the [`clearable`](#props-clearable) prop to allow clearing the selected value and use the [`placeholder`](#props-placeholder) prop to configure the placeholder text when nothing is selected.

[[ demo src="/demo/date-picker/default.vue" ]]

### Date ranges

When configuring the [`range`](#props-range) prop, you can select a date range in the drop-down layer.

[[ demo src="/demo/date-picker/range.vue" ]]

### Shortcut options

When selecting a date range, you can provide shortcut options by configuring the [`shortcuts`](#props-shortcuts) prop.

[[ demo src="/demo/date-picker/shortcuts.vue" ]]

### Disabled and read-only

Setting the [`disabled`](#props-disabled) prop makes the component disabled.

Setting the [`readonly`](#props-readonly) prop makes the component read-only.

[[ demo src="/demo/date-picker/disabled.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``type`` | `string` | `'date'` | The type of the calendar, with available values of `'date'` / `'month'` / `'year'`, corresponding to `the` date / month / year view. |
| ``range`` | `boolean` | `false` | Whether to select a date range. |
| ``selected`` | `Date | Array` | - | [^selected] |
| ``today`` | `Date` | `new Date()` | The date for "today". |
| ``week-start`` | `number` | `calendar.weekStart` | The start of the week. Can be [configured globally](./calendar#configs-calendar-weekStart). |
| ``fill-month`` | `boolean` | `true` | When there is only one panel, whether to display non-current month dates in the current month panel. |
| ``date-class`` | `string | Array | Object | function` | `{}` | Custom HTML `class` for specific dates. When passed a non-function, the data format is all Vue-supported `class` expressions; when passed a function, the signature is `function(Date): string | Array<string>|Object<string, boolean>`, and the return value format is also all Vue-supported `class` expressions. |
| ``disabled-date`` | `function(Date, Date=): boolean` | `() => false` | Used to customize whether a specified date is disabled. The first parameter is the date to be tested for disableness. When in the process of selecting a range and a date has already been selected, it will be passed as the second parameter. |
| ``clearable`` | `boolean` | `false` | Whether the selected value can be cleared. |
| ``placeholder`` | `string` | `range ? datepicker.rangePlaceholder : datepicker.placeholder` | The placeholder text when nothing is selected. Can be configured globally for [date ranges](#configs-datepicker-rangePlaceholder) and [single dates](#configs-datepicker-placeholder). |
| ``format`` | `string | function(Date): string` | `'yyyy-MM-dd'` / `'yyyy-MM'` / `'yyyy'` | When passed a string, it represents the string expression used for formatting/parsing, with specific formats available in the [date-fns documentation](https://date-fns.org/v2.12.0/docs/format). When passed a function, custom formatting logic can be defined. |
| ``parse`` | `function(string): Date` | - | A function that customizes the parsing of input strings into `Date` objects. |
| ``shortcuts`` | `Array<Object>` | `datepicker.shortcuts` | [^shortcuts] |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``disabled`` | `boolean` | `false` | Whether the component is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the component is readonly. |

^^^selected
:::badges
`v-model`
:::

The value(s) of the selected date range, depending on the value of the `range` prop.

+++Value types
| `range` | Type |
| -- | -- |
| `false` | `Date` |
| `true` | `[Date, Date]` |
+++
^^^

^^^shortcuts
A list of shortcut selection items in the customizable overlay when selecting a range, in the format `Array<{label, from, to}>`. Can be globally configured. See [the corresponding configuration](#configs-datepicker-shortcuts).

+++Properties
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>label</code></td>
      <td><code>string</code></td>
      <td>The text of the shortcut option.</td>
    </tr>
    <tr>
      <td><code>from</code></td>
      <td colspan="2">The calculation method for the start time, as described in the [Shortcut options](#shortcut-options) below.</td>
    </tr>
    <tr>
      <td><code>to</code></td>
      <td colspan="2">The calculation method for the end time, as described in the [Shortcut options](#shortcut-options) below.</td>
    </tr>
  </tbody>
</table>
+++
^^^

#### Shortcut options

The `from` and `to` fields in the `shortcuts` list items have the same format, each used to set the calculation method for the start and end dates, respectively. The format is `number | Object` with a default value of `0`.

* When the type is `number`, it represents the number of days offset from "today". For example, `-1` is equivalent to `{ startOf: 'day', days: -1 }`, which means "yesterday".
* When the type is `Object`, the supported formats are: `{startOf: string=, days: number=, weeks: number=, months: number=, }`.

  +++Properties
  | Name | Type | Default | Description |
  | -- | -- | -- | -- |
  | `startOf` | `string` | `'day'` | The base date for the start. Supported values are `'day'`, `'week'`, `'month'`, `'quarter'`, `'year'`. |
  | `day` | `number` | - | The number of days offset. |
  | `week` | `number` | - | The number of weeks offset. |
  | `month` | `number` | - | The number of months offset. |
  | `quarter` | `number` | - | The number of quarters offset. |
  | `year` | `number` | - | The number of years offset. |

The calculation method sets the base date according to `startOf`, and then adds the offset based on the other fields.

You can quickly set shortcut options by combining the following example with `label`.

```js
[
  {
    label: 'Last month',
    // The first day of this month is one month ago, i.e. the first day of last month
    from: {
      startOf: 'month',
      month: -1
    },
    // One day before the first day of this month, i.e. the last day of last month
    to: {
      startOf: 'month',
      days: -1
    }
  },
  {
    label: 'This month',
    // The first day of this month
    from: {
      startOf: 'month'
    },
    // Today
    to: 0
  },
  {
    label: 'This week',
    // The first day of this week, days can be omitted when it is 0
    from: {
      startOf: 'week',
      days: 0
    },
    // Today
    to: 0
  },
  {
    label: 'Last 7 days',
    // Six days ago
    from: -6,
    // Until today
    to: 0
  },
  {
    label: 'Today',
    to: 0
  }
]
```

^^^expanded
:::badges
.sync
:::

Whether the dropdown overlay is expanded.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``date`` | [^slot-date] |

[^slot-date]: The area inside the single day unit cell of the calendar in the overlay, which can be used to customize the content of the corresponding area for each day.

Default content: The `date` corresponding to the date.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `year` | `number` | Full year. |
| `month` | `number` | Month number, `0` means January. |
| `date` | `number` | Date in the month. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``select`` | [^event-select] |
| ``selectstart`` | Triggered when the starting date is selected when selecting a date range, callback parameter `(picking: Date)`, representing the selected starting date. |
| ``selectprogress`` | [^event-selectprogress] |
| ``toggle`` | Triggered when the dropdown overlay expansion state is toggled, callback parameter is `(expanded: boolean)`. `expanded` indicates whether the operation will trigger the dropdown overlay expansion or collapse. |

^^^event-select
Triggered after selection is modified, callback parameter is `(selected)`. Data type is consistent with the [`selected`](#props-selected) prop.
^^^

^^^event-selectprogress
Triggered when the end date marked by mouse or keyboard interaction is changed after the start date has been selected when selecting a date range. The callback parameter is `(picking)`, which represents the current marked date range, and the type depends on the value of the [`multiple`](#props-multiple) prop.

+++Parameter types
| `multiple` | Type |
| ---------- | ---- |
| `false` | `[Date, Date]` |
| `true` | `Array<[Date, Date]>` |
+++
^^^

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``datepicker.shortcuts`` | `Array` | `[]` | Shortcut options configuration. |
| ``datepicker.placeholder`` | `string` | `@@datepicker.selectDate` | Placeholder text when a single date has not been selected. |
| ``datepicker.monthPlaceholder`` | `string` | `@@datepicker.selectMonth` | Placeholder text when a month has not been selected. |
| ``datepicker.yearPlaceholder`` | `string` | `@@datepicker.selectYear` | Placeholder text when a year has not been selected. |
| ``datepicker.rangePlaceholder`` | `string` | `@@datepicker.selectRange` | Placeholder text when a date range has not been selected. |
| ``datepicker.monthRangePlaceholder`` | `string` | `@@datepicker.selectMonthRange` | Placeholder text when a month range has not been selected. |
| ``datepicker.yearRangePlaceholder`` | `string` | `@@datepicker.selectYearRange` | Placeholder text when a year range has not been selected. |

:::tip
Values starting with `@@` refer to the corresponding field in the multi-language configuration.
:::

### Icons

| Name | Description |
| -- | -- |
| ``calendar`` | The calendar icon. |
| ``clear`` | The clear content icon. |
