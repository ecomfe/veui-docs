# Input <small>输入</small>

## 示例

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`xs` / `s` / `m` / `l`。

[[ demo src="/demo/input/size.vue" ]]

### 只读状态

设置 [`readonly`](#props-readonly) 来使输入框处于只读状态。

[[ demo src="/demo/input/readonly.vue" ]]

### 禁用状态

设置 [`disabled`](#props-disabled) 来使输入框处于禁用状态。

[[ demo src="/demo/input/disabled.vue" ]]

### 感知输入法

设置 [`composition`](#props-composition) 来感知输入法输入过程中的值。

[[ demo src="/demo/input/composition.vue" ]]

### 过滤首尾空白字符

设置 [`trim`](#props-trim) 来自动过滤用户输入的首尾空白字符。

[[ demo src="/demo/input/trim.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `string` | `''` | [^value] |
| ``disabled`` | `boolean` | `false` | 输入框是否为禁用状态。 |
| ``readonly`` | `boolean` | `false` | 输入框是否为只读状态。 |
| ``type`` | `string` | `'text'` | [^type] |
| ``placeholder`` | `string` | - | 输入占位符。 |
| ``clearable`` | `boolean` | `false` | 是否显示清除按钮。 |
| ``composition`` | `boolean` | `false` | 是否感知输入法输入过程的值。 |
| ``select-on-focus`` | `boolean` | `false` | 聚焦时是否自动选中输入框文本。 |
| ``maxlength`` | `number` | - | 最大可输入的字符长度。 |
| ``get-length`` | `function(string): number` | - | 自定义的字符长度计算函数。 |
| ``strict`` | `boolean` | `false` | 是否超出最大字符长度后不允许继续输入。 |
| ``trim`` | `boolean | string` | `false` | [^trim] |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `xs` | 超小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
| `l` | 大尺寸样式。 |
| `inline` | 行内样式。 |
+++
^^^

^^^value
:::badges
`v-model`
:::

输入框的值。
^^^

^^^type
输入类型。参见原生 `<input>` 元素的 [`type`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-type)。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `text` | 文本输入框。 |
| `password` | 密码输入框。 |
| `hidden` | 隐藏的输入框，但是值允许提交。 |
+++
^^^

^^^trim
是否移除前后空格。当为 `true` 时，会移除前后空格，当为 `false` 时，不移除前后空格。设置为字符串时，按指定方式进行移除。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `both` | 移除两端空格。等同于 `true` 时的行为。 |
| `start` | 移除开始空格。 |
| `end` | 移除末尾空格。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``before`` | 输入框内前置内容。 |
| ``after`` | 输入框内后置内容。 |
| ``placeholder`` | 未输入时的占位内容。 |

:::warning
注意，插槽宽度会挤压输入框宽度。
:::

### 事件

| 名称 | 描述 |
| -- | -- |
| ``change`` | [^event-change] |
| ``input`` | [^event-input] |
| ``clear`` | 点击清除按钮时触发。 |

^^^event-change
输入框内容变化时触发，即原生 `change` 事件触发时。回调参数为 `(value, event)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `value` | `string` | 输入框的值。 |
| `event` | [`Event`](https://developer.mozilla.org/zh-CN/docs/Web/Events/change) | 原生 `change` 事件对象。 |
+++
^^^

^^^event-input
:::badges
`v-model`
:::

有效输入时触发，受 [`composition`](#props-composition) 属性影响。回调参数为 `(value: string)`，`value` 为输入框的 `value` 值。
^^^

此外，`Input` 支持如下的原生事件：

`auxclick`、`click`、`contextmenu`、`dblclick`、`mousedown`、`mouseenter`、`mouseleave`、`mousemove`、`mouseover`、`mouseout`、`mouseup`、`select`、`wheel`、`keydown`、`keypress`、`keyup`、`focus`、`blur`、`focusin`、`focusout`。

回调函数的参数都为原生事件对象。

### 图标

| 名称 | 描述 |
| -- | -- |
| ``remove`` | 清除按钮。 |
