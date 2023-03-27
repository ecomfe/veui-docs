# Schedule

## Demos

[[ demo src="/demo/schedule/default.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``selected`` | `Object` | - | [^selected] |
| ``hour-class`` | `string | Array | Object | function` | `{}` | The customized HTML `class` for the hour cell. When not being a function, supports all values defined by [Vue's `class` expressions](https://vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes). If it's a function, the signature is `function(day: number, hour: number): string | Array<string>|Object<string, boolean>`. The return value is also a Vue `class` expression. |
| ``disabled-date`` | `function(number, number): boolean` | `() => false` | Whether the hour cell is disabled. Parameter list is `(day: number, hour: number)`. `day` and `hour` denote the day of week and the hour respectively. Return value specifies whether the hour cell is disabled from selection. |
| ``shortcuts`` | `Array` | `schedule.shortcuts` | [^shortcuts] |
| ``shortcuts-display`` | `string` | `'inline'` | The display mode of the shortcuts. Supported values are `inline` / `popup`, which denote inline button groups and dropdown select, respectively. |
| ``statuses`` | `Array<{label: string, value: string}>` | `schedule.statuses` | The datasource of the legends. Legend items will have a `class` value of <code>&#0096;veui-schedule-legend-${value}&#0096;</code> and the `label` property will be the text label of each status. |
| ``disabled`` | `boolean` | `false` | Whether the schedule component is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the schedule component is read-only. |

^^^selected
:::badges
`v-model`
:::

Selected time ranges. The data type is `Object<number, Array>`.

The keys denote day of week, corresponding to the return value of [`Date.prototype.getDay()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay). The values denote the selected time ranges for each day. The data type of each time range is `[start: number, end: number]`, while `start` and `end` are both hours between `0`–`23`.

+++Sample data
```json
{
  1: [
    [9, 17]
  ],
  6: [
    [0, 2],
    [18, 20]
  ]
}
```

This sample stands for 9:00–18:00 of Monday and 0:00–3:00 & 18:00–21:00 of Saturday. The end hour denotes the start point of the last hour in the time range.
+++
^^^

^^^shortcuts
Shortcut selection list. The type is `{label: string, selected: boolean | Array}`.

`label` denotes the text label of each item. `selected` denotes the predefined time ranges. When being an array, it shares the same data type with the [`selected`](#props-selected) prop. When being `true`, it's same as `[[0, 23]]`.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``header`` | The entire header section. |
| ``header-content`` | The content of the header section, not including the container. |
| ``shortcuts`` | The shortcuts section of the header section. |
| ``legend`` | The legends section of the header section. |
| ``legend-label`` | [^slot-legend-label] |
| ``hour`` | [^slot-hour] |
| ``label`` | [^slot-label] |
| ``tooltip`` | [^slot-tooltip] |

^^^slot-legend-label
The text label of each legend. Displays the `label` property of each legend by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text label of the legend. |
| `value` | `string` | The value of the legend. |
+++

Additionally, custom properties inside `statuses` apart from the listed ones will also be passes into the slot props object via `v-bind`.
^^^

^^^slot-hour
The content of each hour cell.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `day` | `number` | The day of week. `0` denotes Sunday. |
| `hour` | `number` | The hour value. |
+++
^^^

^^^slot-label
The content of the selected label. By default, displays the time range in the form of <code>&#0096;${from}:00–${to + 1}:00&#0096;</code> when it's more than 3 hours, displays “Entire Day” when every hour of a day are selected; displays nothing for less than 3 hours.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `from` | `number` | The first hour of the time range. |
| `to` | `number` | The last hour of the time range. |
+++
^^^

^^^slot-tooltip
The tooltip for each hour cell. Displays <code>&#0096;${hour}:00–${hour + 1}:00&#0096;</code> for current hour by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `day` | `number` | The day of week. `0` denotes Sunday. |
| `hour` | `number` | The hour value. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``select`` | [^event-select] |

^^^event-select
:::badges
`v-model`
:::

Triggered when selection changed. The callback parameter list is `(value: Object)`. `value` shares the same type with the [`selected`](#props-selected) prop.
^^^

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``schedule.statuses`` | Array<{name, label}> | See description. | [^config-statuses] |

^^^config-statuses
The default status list with item type being `{name: string, label: string}`. The default value is:

```js
[
  { name: 'selected', label: '@@schedule.selectedRanges' },
  { name: 'available', label: '@@schedule.availableRanges' }
]
```

:::tip
`@@` prefixed values denote corresponding properties in the locale settings.
:::
^^^
