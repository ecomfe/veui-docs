# DatePicker

## Examples

### Selecting a single date

By default, you can click a date cell in the dropdown overlay to select a single date. Use the [`clearable`](#props-clearable) prop to make selected values clearable. Use the [`placeholder`](#props-placeholder) prop to customize the description text displayed when nothing is selected yet.

[[ demo src="/demo/date-picker/default.vue" ]]

### Selecting a date range

When `range` is `true`, you can select a date range in the dropdown overlay.

[[ demo src="/demo/date-picker/range.vue" ]]

### Setting selection shortcuts

When selecting a date range, the [`shortcuts`](#props-shortcuts) prop can be used to provide predefined date range shortcuts to be selected from.

[[ demo src="/demo/date-picker/shortcuts.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``range`` | `boolean` | `false` | Whether users can select a date range. When the value is not `'date'`, `range` will be ignored. |
| ``selected`` | `Date | Array` | - | [^selected] |
| ``panel`` | `number` | `1` | The number of month panel displayed in the dropdown overlay. |
| ``today`` | `Date` | `new Date()` | The date of “today”. |
| ``week-start`` | `number` | `calendar.weekStart` | The start of a week. Can be [globally configured](./calendar#configs-calendar-weekStart). |
| ``fill-month`` | `boolean` | `true` | Whether to show dates of previous and next month in current panel when there's only one month panel. |
| ``date-class`` | `string | Array | Object | function` | `{}` | Custom HTML `class` for specified date. All [`class` expressions supported by Vue](https://vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes) are available for non-function values. When specified as a function, whose signature is `function(Date): string | Array<string>|Object<string, boolean>`, the return value is also `class` expressions suppported by Vue. |
| ``disabled-date`` | `function(Date, Date=): boolean` | `() => false` | Used to customize whether the specified date is disabled or not. The first parameter is the date to be used to determine if the date is disabled. When in the range selection process and a date is already selected, it is passed as the second parameter. |
| ``clearable`` | `boolean` | `false` | Whether selected date (ranges) can be cleared. |
| ``placeholder`` | `string` | `range ? datepicker.rangePlaceholder : datepicker.placeholder` | The placeholder text displayed when nothing is selected. Can be globally configured respectively for both [range](#configs-datepicker-rangePlaceholder) and [single date](#configs-datepicker-placeholder). |
| ``format`` | `string | function(Date): string` | `'YYYY-MM-DD'` | When being string type, denotes the format expression for displaying final selected date (ranges). See details at [the documentation of date-fns](https://date-fns.org/v1.29.0/docs/format). Can also be a function to customize the formatting logic. |
| ``parse`` | `function(string): Date` | Custom function to parse the input string expressions into `Date` objects. |
| ``shortcuts`` | `Array<Object>` | `datepicker.shortcuts` | [^shortcuts] |
(#configs-datepicker-shortcutsPosition). |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``disabled`` | `boolean` | `false` | Whether the date picker is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the date picker is read-only. |

^^^selected
:::badges
`v-model`
:::

The selected date (range). Value type is determined by whether `range` is `true`.

+++Value types
| `range` | Type |
| -- | -- |
| `false` | `Date` |
| `true` | `[Date, Date]` |
+++
^^^

^^^shortcuts
Selection shortcuts can be custmized when selecting a date range. The data type is `Array<{label, from, to}>`. Can be [globally configured](#configs-datepicker-shortcuts).

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
      <td>Text displayed for the shortcut option.</td>
    </tr>
    <tr>
      <td><code>from</code></td>
      <td colspan="2">Denotes the start date of the shortcut option. See more at <a href="#date-offset-format-for-shortcut-option">Date offset format for shortcut option</a> below.</td>
    </tr>
    <tr>
      <td><code>to</code></td>
      <td colspan="2">Denotes the end date of the shortcut option. See more at <a href="#date-offset-format-for-shortcut-option">Date offset format for shortcut option</a> below.</td>
    </tr>
  </tbody>
</table>
+++
^^^

#### Date offset format for shortcut option

The `from` and `to` property in `shortcuts` options, which are used to calculate the start/end date of an shortcut option, share the same format which is `number | Object` and default to `0`.

* `number` values are the offset in days calculated against “today”. eg. `-1` means `{ startOf: 'day', days: -1 }`, which is “yesterday”.
* `Object` values have the type of `{startOf: string=, days: number=, weeks: number=, months: number=, }`.

  +++Properties
  | Name | Type | Default | Description |
  | -- | -- | -- | -- |
  | `startOf` | `string` | `'day'` | The base date. Supported values include `'day'` / `'week'` / `'month'` / `'quarter'` / `'year'`. |
  | `day` | `number` | - | Offset in days. |
  | `week` | `number` | - | Offset in weeks. |
  | `month` | `number` | - | Offset in months. |
  | `quarter` | `number` | - | Offset in quarters. |
  | `year` | `number` | - | Offset in years. |

The final date is calculated by accumulating the offset onto the base date.

The following example with `label`s may help to better understand the calculation logic. You can rapidly set shortcut options once you understand the underlying logic.

```js
[
  {
    label: 'Last month',
    // Turn back a month from the first day of current month,
    // which is the first day of last month
    from: {
      startOf: 'month',
      month: -1
    },
    // Turn back a day from the first day of current month,
    // which is the last day of last month
    to: {
      startOf: 'month',
      days: -1
    }
  },
  {
    label: 'This month',
    // The first day of current month
    from: {
      startOf: 'month'
    },
    // Today
    to: 0
  },
  {
    label: 'This week',
    // The first day of the week, days being 0 can be omitted
    from: {
      startOf: 'week',
      days: 0
    },
    // Today
    to: 0
  },
  {
    label: 'Last 7 days',
    // Turn back 6 days backward from today
    from: -6,
    // To today
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
`.sync`
:::

Whether the dropdown overlay is expanded.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``date`` | [^slot-date] |

^^^slot-date
The content of each date cell in the dropdown overlay. Displays the corresponding day of month by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `year` | `number` | The full representation of year. |
| `month` | `number` | Month of a year, starting from `0` as January. |
| `date` | `number` | The day of month. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``select`` | [^event-select] |
| ``selectstart`` | Triggered when selecting a date range and a start date is selected. The callback parameter list is `(picking: Date)`, being the selected start date. |
| ``selectprogress`` | [^event-selectprogress] |
| ``toggle`` | Triggered when the expanded state is going to change. The callback parameter list is `(expanded: boolean)`. `expanded` denotes whether the dropdown overlay is to be expanded or collapsed. |

^^^event-select
:::badges
`v-model`
:::

Triggered when the selected date (range) is changed. The callback parameter list is `(selected)` with `selected` having the same type with the [`selected`](#props-selected) prop.
^^^

^^^event-selectprogress
Triggered when selecting a date range and an end date is marked with pointer/keyboard interaction, and for each time the end date changes. The callback parameter list is `(picking)`, with `picking` being the marked date range. The type of `picking` depends on the value of the [`multiple`](#props-multiple) prop.

+++Parameters types
| `multiple` | Type |
| -- | -- |
| `false` | `[Date, Date]` |
| `true` | `Array<[Date, Date]>` |
+++
^^^

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``datepicker.shortcuts`` | `Array` | `[]` | Default shortcut options. |
| ``datepicker.shortcutsPosition`` | `string` | `'before'` | Shows the shortcut options before or after month panels. Corresponds to `'before'` and `'after'` respectively. |
| ``datepicker.placeholder`` | `string` | `@@datepicker.selectDate` | Placeholder text displayed when selecting a single date. |
| ``datepicker.monthPlaceholder`` | `string` | `@@datepicker.selectMonth` | Placeholder text displayed when selecting a month. |
| ``datepicker.yearPlaceholder`` | `string` | `@@datepicker.selectYear` | Placeholder text displayed when selecting a year. |
| ``datepicker.rangePlaceholder`` | `string` | `@@datepicker.selectRange` | Placeholder text displayed when selecting a date range. |

:::tip
`@@` prefixed values denote corresponding properties in the locale settings.
:::

### Icons

| Name | Description |
| -- | -- |
| ``calendar`` | Calendar. |
| ``clear`` | Clear selection. |
