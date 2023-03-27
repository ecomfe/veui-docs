# Textarea <small>文本域</small>

## 示例

### 尺寸

可选的 [`ui`](#props-ui) 属性值：`s` / `m`。

[[ demo src="/demo/textarea/size.vue" ]]

### 只读状态

设置 [`readonly`](#props-readonly) 来使文本域处于只读状态。

[[ demo src="/demo/textarea/readonly.vue" ]]

### 禁用状态

设置 [`disabled`](#props-disabled) 来使文本域处于禁用状态。

[[ demo src="/demo/textarea/disabled.vue" ]]

### 自动扩展

设置 [`autoresize`](#props-autoresize) 来使文本域处于自动扩展状态。

[[ demo src="/demo/textarea/autoresize.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `string` | '' | [^value] |
| ``disabled`` | `boolean` | `false` | 文本域是否为禁用状态。 |
| ``readonly`` | `boolean` | `false` | 文本域是否为只读状态。 |
| ``line-number`` | `boolean` | `false` | 是否显示行号。 |
| ``rows`` | `number | string` | - | 默认情况下文本域可视行数。 |
| ``placeholder`` | `string` | - | 输入占位符。 |
| ``composition`` | `boolean` | `false` | 是否感知输入法输入过程的值。 |
| ``select-on-focus`` | `boolean` | `false` | 聚焦时是否自动选中文本域文本。 |
| ``autoresize`` | `boolean` | `false` | 高度是否会被内容撑开。 |
| ``get-length`` | `function(string): number` | 自定义的字符长度计算函数。 |
| ``resizable`` | `boolean` | 指定是否可以调节长宽。 |
| ``maxlength`` | `number` | - | 最大可输入的字符长度。 |
| ``strict`` | `boolean` | `false` | 是否超出最大字符长度后不允许继续输入。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^value
:::badges
`v-model`
:::

文本域的值。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``change`` | [^event-change] |
| ``input`` | [^event-input] |

^^^event-change
输入框内容变化时触发，即原生 `change` 事件触发时。回调参数为 `(value, event)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `value` | `string` | 文本域的值。 |
| `event` | [`Event`](https://developer.mozilla.org/zh-CN/docs/Web/Events/change) | 原生 `change` 事件对象。 |
+++
^^^

^^^event-input
:::badges
`v-model`
:::

有效输入时触发，受 [`composition`](#props-composition) 属性影响。回调参数为 `(value: string)`，`value` 为输入框的 `value` 值。
^^^

此外，`Textarea` 支持如下的原生事件：

`auxclick`、`click`、`contextmenu`、`dblclick`、`mousedown`、`mouseenter`、`mouseleave`、`mousemove`、`mouseover`、`mouseout`、`mouseup`、`select`、`wheel`、`keydown`、`keypress`、`keyup`、`focus`、`blur`、`focusin`、`focusout`。

回调函数的参数都为原生事件对象。
