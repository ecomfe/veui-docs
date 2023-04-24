# Calendar <small>日历</small>

## 示例

### 单日选择

默认情况下，单击日期可以选中一个日期。

[[ demo src="/demo/calendar/default.vue" ]]

### 多日、日期范围选择

配置 [`multiple`](#props-multiple) 属性时，可以选择多个日期。配置 [`range`](#props-range) 属性时，可以选择一个日期范围。

[[ demo src="/demo/calendar/range-multiple.vue" ]]

### 多日期范围选择

同时配置 [`multiple`](#props-multiple) 及 [`range`](#props-range) 属性时，可以选择多段日期范围。配置 [`panel`](#props-panel) 属性时，可以指定日历面板的数量。两次选择的时间段合并的策略为，若从未选日期开始选择则选中该时段，否则则取消选择该时段。

[[ demo src="/demo/calendar/multiple-ranges.vue" ]]

### 日历类型

设置 [`type`](#props-type) 来指定日历的类型：年、月、日。

[[ demo src="/demo/calendar/type.vue" ]]

### 显示非本月日期

设置 [`fill-month`](#props-fill-month) 来控制是否显示非本月日期。

[[ demo src="/demo/calendar/fill-month.vue" ]]

### 禁用日期

设置 [`disabled-date`](#props-disabled-date) 来自定义指定日期是否禁用。

[[ demo src="/demo/calendar/disabled-date.vue" ]]

### 自定义日期样式

设置 [`date-class`](#props-date-class) 来自定义指定日期的 `class`。

[[ demo src="/demo/calendar/date-class.vue" ]]

### 自定义日期内容

通过 [`before`](#slots-before) 插槽来自定义前置内容。

[[ demo src="/demo/calendar/slots.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``type`` | `string` | `'date'` | 日历的类型，可用值为 `'date'` / `'month'` / `'year'`，分别对应日期/月/年视图。 |
| ``multiple`` | `boolean` | `false` | 是否可以选择多个日期（范围）。 |
| ``range`` | `boolean` | `false` | 是否选择日期范围。 |
| ``selected`` | `Date | Array` | - | [^selected] |
| ``panel`` | `number` | `1` | 日历面板数量。 |
| ``today`` | `Date` | `new Date()` | 「今天」的日期。 |
| ``week-start`` | `number` | `calendar.weekStart` | 一周的起始。可进行[全局配置](#configs-calendar-weekStart)。 |
| ``fill-month`` | `boolean` | `true` | 当只有一个面板时，是否要在当前月份面板显示非本月日期。 |
| ``date-class`` | `string | Array | Object | function` | `{}` | 特定日期的自定义 HTML `class`。传非函数时，数据格式为所有 [Vue 支持的 `class` 表达式](https://v2.cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A-HTML-Class)；传函数时，签名为 `function(Date): string | Array<string>|Object<string, boolean>`，返回值格式亦为所有 Vue 支持的 `class` 表达式。 |
| ``disabled-date`` | `function(Date, Date=): boolean` | `() => false` | 用于自定义指定日期是否禁用。第一个参数为需要判断是否禁用的日期。当处于范围选择过程中且已经选择了一个日期，会作为第二个参数传入。 |
| ``disabled`` | `boolean` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean` | `false` | 是否为只读状态。 |

^^^selected
:::badges
`v-model`
:::

已选日期（范围）的值，根据 [`multiple`](#props-multiple) 和 [`range`](#props-range) 属性值的不同，数据格式不同。

+++类型详情
| `multiple` | `range` | 类型 |
| -- | -- | -- |
| `false` | `false` | `Date` |
| `true` | `false` | `Array<Date>` |
| `false` | `true` | `[Date, Date]` |
| `true` | `true` | `Array<[Date, Date]>` |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``before`` | 日历内，面板上方可供定制的区域。 |
| ``after`` | 日历内，面板下方可供定制的区域。 |
| ``date`` | [^slot-date] |

^^^slot-date
单日单元格内的区域，可用来定制每一天对应区域的内容。

默认内容：对应日期的 `date`。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `year` | `number` | 完整年份。 |
| `month` | `number` | 月份数，`0` 表示一月。 |
| `date` | `number` | 月份内的日期。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``select`` | [^event-select] |
| ``selectstart`` | 选择日期范围时，选择完起始日期时触发，回调参数 `(picking: Date)`，表示已选的起始项日期。 |
| ``selectprogress`` | [^event-selectprogress] |
| ``viewchange`` | 面板显示的月份发生变化时触发。回调参数 `(month: Object<{year: number, month: number, index: number}>)`，表示当前年月（`month` 为 `0` 表示一月）。 |

^^^event-select
:::badges
`v-model`
:::

选择修改后触发，回调参数为 `(selected)`。数据类型和 [`selected`](#props-selected) 属性一致。
^^^

^^^event-selectprogress
选择日期范围时，在已经选择开始日期后，通过鼠标或键盘交互标记到的结束日期变更时触发。回调参数为 `(picking)`，表示当前标记的日期范围，类型取决于 [`multiple`](#props-multiple) 属性的值。

+++参数详请
| `multiple` | 类型 |
| -- | -- |
| `false` | `[Date, Date]` |
| `true` | `Array<[Date, Date]>` |
+++
^^^

### 全局配置

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``calendar.weekStart`` | `number` | `1` | 一周的第一天是星期几。周一到周日分别对应 `1` 到 `7`。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``backward`` | 上一年。 |
| ``prev`` | 上一页。 |
| ``next`` | 下一页。 |
| ``forward`` | 下一年。 |
| ``expand`` | 展开下拉菜单。 |
