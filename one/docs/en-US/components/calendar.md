# Calendar

## Examples

### Single date

By default, clicking on a date selects a single date.

[[ demo src="/demo/calendar/default.vue" ]]

### Multiple dates and date ranges

When the [`multiple`](#props-multiple) prop is set, multiple dates can be selected. When the [`range`](#props-range) prop is set, a date range can be selected.

[[ demo src="/demo/calendar/range-multiple.vue" ]]

### Multiple date ranges

When the [`multiple`](#props-multiple) and [`range`](#props-range) properties are set simultaneously, multiple date ranges can be selected. When the [`panel`](#props-panel) prop is set, the number of calendar panels can be specified. The strategy for merging the two selected time periods is to select the time period if no date has been selected, otherwise the time period is deselected.

[[ demo src="/demo/calendar/multiple-ranges.vue" ]]

### Calendar types

Set the [`type`](#props-type) prop to specify the type of calendar: year, month, or day.

[[ demo src="/demo/calendar/type.vue" ]]

### Show Dates from Other Months

Set the [`fill-month`](#props-fill-month) prop to control whether to display dates from other months.

[[ demo src="/demo/calendar/fill-month.vue" ]]

### Disabled Dates

Set the [`disabled-date`](#props-disabled-date) prop to customize whether a specific date is disabled.

[[ demo src="/demo/calendar/disabled-date.vue" ]]

### Custom date style

Set [`date-class`](#props-date-class) to customize the `class` of specified dates.

[[ demo src="/demo/calendar/date-class.vue" ]]

### Custom date content

Use the [`before`](#slots-before) slot to customize the content before the calendar.

[[ demo src="/demo/calendar/slots.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``type`` | `string` | `'date'` | The type of the calendar, available values are `'date'`, `'month'`, and `'year'`, corresponding to the date/month/year view. |
| ``multiple`` | `boolean` | `false` | Whether multiple dates (ranges) can be selected. |
| ``range`` | `boolean` | `false` | Whether to select a date range. |
| ``selected`` | `Date | Array` | - | [^selected] |
| ``panel`` | `number` | `1` | The number of calendar panels. |
| ``today`` | `Date` | `new Date()` | The date of "today". |
| ``week-start`` | `number` | `calendar.weekStart` | The start of the week. Can be configured globally [here](#configs-calendar-weekStart). |
| ``fill-month`` | `boolean` | `true` | Whether to display dates outside of the current month in the current month panel when there is only one panel. |
| ``date-class`` | `string | Array | Object | function` | `{}` | Custom HTML `class` for specific dates. When passed a non-function value, the data format is all [Vue-supported `class` expressions](https://v2.vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes); when passed a function, the signature is `function(Date): string | Array<string>|Object<string, boolean>`, and the return value format is also all Vue-supported `class` expressions. |
| ``disabled-date`` | `function(Date, Date=): boolean` | `() => false` | Used to customize whether specified dates are disabled. The first parameter is the date that needs to be checked for disablement. If in the process of selecting a range and a date has already been selected, it will be passed in as the second parameter. |
| ``disabled`` | `boolean` | `false` | Whether the calendar is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the calendar is read-only. |

^^^selected
:::badges
`v-model`
:::

The value of the selected date (range), depending on the values of the [`multiple`](#props-multiple) and [`range`](#props-range) properties, has a different data format.

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
| ``before`` | An area above the panel that can be customized. |
| ``after`` | An area below the panel that can be customized. |
| ``date`` | [^slot-date] |

^^^slot-date
An area within a single day cell that can be used to customize the content for each day.

Default content: the `date` of the corresponding date.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `year` | `number` | The full year. |
| `month` | `number` | The month number, `0` means January. |
| `date` | `number` | The date within the month. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``select`` | [^event-select] |
| ``selectstart`` | Triggered when selecting a date range, called back with `(picking: Date)`, representing the selected start date. |
| ``selectprogress`` | [^event-selectprogress] |
| ``viewchange`` | Triggered when the displayed month of the panel changes. Called back with `(month: Object<{year: number, month: number, index: number}>)`, representing the current year and month (`month` is `0` for January). |

^^^event-select
:::badges
`v-model`
:::

Triggered after selection changes, called back with `(selected)`. The data type is the same as the [`selected`](#props-selected) prop.
^^^

^^^event-selectprogress
Triggered when selecting a date range, and the end date marked by mouse or keyboard interaction changes after selecting the start date. Called back with `(picking)`, representing the current marked date range, the type depends on the value of the [`multiple`](#props-multiple) prop.

+++Parameter types
| `multiple` | Type |
| -- | -- |
| `false` | `[Date, Date]` |
| `true` | `Array<[Date, Date]>` |
+++
^^^

### Configs

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``calendar.weekStart`` | `number` | `1` | The day of the week when the week starts. Monday to Sunday corresponds to `1` to `7`. |

### Icons

| Name | Description |
| -- | -- |
| ``backward`` | Previous year. |
| ``prev`` | Previous page. |
| ``next`` | Next page. |
| ``forward`` | Next year. |
| ``expand`` | Expand the drop-down menu. |
