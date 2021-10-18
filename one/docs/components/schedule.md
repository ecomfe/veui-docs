# Schedule <small>时段选择</small>

## 示例

[[ demo src="/demo/schedule/default.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `selected` | `Object` | - | [^selected] |
| `hour-class` | `string | Array | Object | function` | `{}` | 特定小时的自定义 HTML `class`。传非函数时，数据格式为所有 [Vue 支持的 `class` 表达式](https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A-HTML-Class)；传函数时，签名为 `function(day: number, hour: number): string | Array<string>|Object<string, boolean>`，返回值格式亦为所有 Vue 支持的 `class` 表达式。 |
| `disabled-date` | `function(number, number): boolean` | `() => false` | 特定小时是否禁用。参数类型为 `(day: number, hour: number)`，分别表示一周的第几天（`0` 表示周日）及对应的小时数。 |
| `shortcuts` | `Array` | `schedule.shortcuts` | [^shortcuts] |
| `shortcuts-display` | `string` | `'inline'` | 快捷选择项的显示方式，支持 `inline`/`popup`，分别对应内联按钮组与下拉选择。 |
| `statuses` | `Array<{label: string, value: string}>` | `schedule.statuses` | 图例数据源。会为图例项目添加 `class` 值 <code>&#0096;veui-schedule-legend-${value}&#0096;</code>，`label` 则会显示为图例文本。 |
| `disabled` | `boolean=` | `false` | 是否为禁用状态。 |
| `readonly` | `boolean=` | `false` | 是否为只读状态。 |

^^^selected
:::badges
`v-model`
:::

已选时段。类型为 `Object<number, Array>`。

键为一周的第几天，`0` 表示周日，与 [`Date.prototype.getDay()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) 返回值相同。值为每天被选取的时段，每个时段格式为 `[start: number, end: number]`，`start` 与 `end` 均为 `0`–`23` 的小时数。

+++数据样例
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

本例表示周一的 9:00–18:00 与周六的 0:00–3:00 和 18:00–21:00。结束时间表示的是时段最后一小时的开始时间。
+++
^^^

^^^shortcuts
快捷选择选项列表。类型为 `{label: string, selected: boolean | Array}`。

`label` 为显示的提示文字。`selected` 表示预选择的时段，类型为数组时，格式与 `selected` 属性相同；值为 `true` 时等同于 `[[0, 23]]`。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `header` | 顶部区域。 |
| `header-content` | 顶部区域的内容，不包括外层容器。 |
| `shortcuts` | 顶部快捷选项区域。 |
| `legend` | 顶部图例区域。 |
| `legend-label` | [^slot-legend-label] |
| `hour` | [^slot-hour] |
| `label` | [^slot-label] |
| `tooltip` | [^slot-tooltip] |

^^^slot-legend-label
每个图例的文本区域。

默认内容：每个图例状态 `label` 字段对应的文本内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 图例状态的文字说明。 |
| `value` | `string` | 图例状态对应的值。 |
+++

另外，`status` 内对应图例状态对象中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

^^^slot-hour
每小时区域的内容。

默认内容：无。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `day` | `number` | 一周的第几天，`0` 表示周日。 |
| `hour` | `number` | 小时序号。 |
+++
^^^

^^^slot-label
已选时间段的区域。

默认内容：时段在 3 小时及以上时，显示时段范围 <code>&#0096;${from}:00–${to + 1}:00&#0096;</code>；选择全天的显示为“全天”；小于 3 小时无内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `from` | `number` | 时段开始的小时。 |
| `to` | `number` | 时段结束的小时。 |
+++
^^^

^^^slot-tooltip
光标移入每个小时格子的悬浮提示内容。

默认内容：当前小时格子的时间范围 <code>&#0096;${hour}:00–${hour + 1}:00&#0096;</code>。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `day` | `number` | 一周的第几天，`0` 表示周日。 |
| `hour` | `number` | 小时序号。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `select` | [^event-select] |

^^^event-select
:::badges
`v-model`
:::

选中状态变化后触发，回调参数为 `(value: Object)`。`value` 类型与 `selected` 属性相同。
^^^

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `schedule.statuses` | Array<{name, label}> | 见描述。 | [^config-statuses] |

^^^config-statuses
默认图例状态数组。数组项类型为 `{name: string, label: string}`，默认值为：

```js
[
  { name: 'selected', label: '@@schedule.selectedRanges' },
  { name: 'available', label: '@@schedule.availableRanges' }
]
```

:::tip
`@@` 开头的值表示引用多语言配置中的相应字段。
:::
^^^
