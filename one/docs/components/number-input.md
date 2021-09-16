# NumberInput <small>数字输入</small>

## 示例

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`xs` / `s` / `m`。

[[ demo src="/demo/number-input/size.vue" ]]

### 只读状态

设置 `readonly` 来使数字输入框处于只读状态。

[[ demo src="/demo/number-input/readonly.vue" ]]

### 禁用状态

设置 `disabled` 来使数字输入框处于禁用状态。

[[ demo src="/demo/number-input/disabled.vue" ]]

### 精度位数和递增/递减

设置 `decimal-place` 来指定数值的小数精度位数。

设置 `step` 来指定每次递增/减的数值。

[[ demo src="/demo/number-input/decimal.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``value`` | `number` | - | [^value] |
| ``readonly`` | `boolean=` | `false` | 数字输入框是否为只读状态。 |
| ``disabled`` | `boolean=` | `false` | 数字输入框是否为禁用状态。 |
| ``placeholder`` | `string` | - | 输入占位符。 |
| ``select-on-focus`` | `boolean` | `false` | 聚焦时是否自动选中数字输入框文本。 |
| ``max`` | `number` | - | 允许的最大值。 |
| ``min`` | `number` | - | 允许的最小值。 |
| ``decimal-place`` | `number` | 0 | 数值的小数精度位数，默认精确到整数位，`-1` 表示不处理精度。 |
| ``step`` | `number` | 1 | 每次递增/递减的数值。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `xs` | 超小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^value
:::badges
`v-model`
:::

数字输入框的值。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``before`` | 数字输入框前置内容。 |
| ``after`` | 数字输入框后置内容。位于增减按钮之后。 |

:::warning
注意，插槽宽度会挤压输入框宽度。
:::

### 事件

| 名称 | 描述 |
| -- | -- |
| ``change`` | [^event-change] |
| ``input`` | [^event-input] |

^^^event-change
原生 `change` 事件，回调参数为 `(value, event)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `value` | `number` | 数字输入框的值。 |
| `event` | `Event` | 原生事件对象。 |
+++
^^^

^^^event-input
:::badges
`v-model`
:::

有效输入时触发，受数字格式化影响，若当前值格式化为无效值，则不触发。回调参数为 `(value: string)`，`value` 为数字输入框的 `value` 值。
^^^

此外，`NumberInput` 支持如下的原生事件：

`auxclick`、`click`、`contextmenu`、`dblclick`、`mousedown`、`mouseenter`、`mouseleave`、`mousemove`、`mouseover`、`mouseout`、`mouseup`、`select`、`wheel`、`keydown`、`keypress`、`keyup`、`focus`、`blur`、`focusin`、`focusout`。

回调函数的参数都为原生事件对象。

### 图标

| 名称 | 描述 |
| -- | -- |
| ``increase`` | 增加按钮。 |
| ``decrease`` | 减少按钮。 |
