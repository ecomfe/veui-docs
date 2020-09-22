# Calendar

## Demos

### Selecting a single date

Click to select a single date by default.

[[ demo src="/demo/calendar/default.vue" ]]

### Selecting multiple dates or a date range

You can select multiple date with the `multiple` prop set to `true` and can select a date range with the `range` prop set to `true`.

[[ demo src="/demo/calendar/range-multiple.vue" ]]

### Selecting multiple date ranges

When `multiple` and `range` are both set to `true`, you can select multiple date ranges. You can configure the number of month panels with the `panel` prop. The way we merge newly selected ranges into those are already select are that, if you start select on a unselected date, the range will be selected and if start on a selected one, the range will be unselected.

[[ demo src="/demo/calendar/multiple-ranges.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `type` | `string=` | `'date'` | The type of the calendar. Available values include `'date'`/`'month'`/`'year'`, denoting date/month/year view respectively. When the value is not `'date'`, `multiple` and `range` will be ignored. |
| `multiple` | `boolean=` | `false` | Whether users can select multiple dates (date ranges). |
| `range` | `boolean=` | `false` | Whether users can select a date range (date ranges). |
| `selected` | `Date|Array=` | - | [^selected] |
| `panel` | `number=` | `1` | The number of month panel displayed. |
| `today` | `Date=` | `new Date()` | The date of “today”. |
| `week-start` | `number=` | `calendar.weekStart` | The start of a week. Can be [globally configured](#global-config). |
| `fill-month` | `boolean=` | `true` | Whether to show dates of previous and next month in current panel when there's only one month panel. |
| `date-class` | `string|Array|Object|function=` | `{}` | Custom HTML `class` for specified date. All [`class` expressions supported by Vue](https://vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes) are available for non-function values. When specified as a function, whose signature is `function(Date): string|Array<string>|Object<string, boolean>`, the return value is also `class` expressions suppported by Vue. |
| `disabled-date` | `function(Date, Date=): boolean=` | `() => false` | Used to customize whether the specified date is disabled or not. The first parameter is the date to be used to determine if the date is disabled. When in the range selection process and a date is already selected, it is passed as the second parameter. |
| `disabled` | `boolean=` | `false` | Whether the calendar is disabled. |
| `readonly` | `boolean=` | `false` | Whether the calendar is read-only. |

^^^selected
:::badges
`v-model`
:::

Selected date(s) or date range(s). Data type differs according to `multiple` and `range`.

+++Value types
| `multiple` | `range` | Type |
| -- | -- | -- |
| `false` | `false` | `Date` |
| `true` | `false` | `Array<Date>` |
| `false` | `true` | `[Date, Date]` |
| `true` | `true` | `Array<[Date, Date]>` |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| `before` | Customizable area before the content of the month panel(s). |
| `after` | Customizable area after the content of the month panel(s). |
| `date` | [^scoped-slot-date] |

^^^scoped-slot-date
The content of each date cell. Displays the corresponding day of month by default.

+++Scope properties
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
| `select` | [^event-select] |
| `selectstart` | Triggered when selecting a date range and a start date is selected. The callback parameter list is `(picking: Date)`, being the selected start date. |
| `selectprogress` | [^event-selectprogress] |
| `viewchange` | Triggered when the month of the month panel changes. The callback parameter list is `(month: Object<{year: number, month: number}>)`, representing the current year and month of the first month panel. |

^^^event-select
:::badges
`v-model`
:::

Triggered when selection change. The callback parameter list is `(selected)`. The type of `selected` is the same as the `selected` prop.
^^^

^^^event-selectprogress
Triggered when selecting a date range and an end date is marked with pointer/keyboard interaction, and for each time the end date changes. The callback parameter list is `(picking)`, with `picking` being the marked date range. The type of `picking` depends on the value of the `multiple` prop.

+++Parameters types
| `multiple` | Type |
| -- | -- |
| `false` | `[Date, Date]` |
| `true` | `Array<[Date, Date]>` |
+++
^^^

### Global config

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| `calendar.weekStart` | `number` | `1` | The start of a week, with Monday being `1` and Sunday being `7`. |

### Icons

| Name | Description |
| -- | -- |
| `prev` | Previous page. |
| `next` | Next page. |
| `expand` | Expand dropdowns. |
