# TagInput <small>标签输入</small>

## 示例

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`xs` / `s` / `m` / `l`。

[[ demo src="/demo/tag-input/size.vue" ]]

### 只读状态

设置 [`readonly`](#props-readonly) 来使输入框处于只读状态。

[[ demo src="/demo/tag-input/readonly.vue" ]]

### 禁用状态

设置 [`disabled`](#props-disabled) 来使输入框处于禁用状态。

[[ demo src="/demo/tag-input/disabled.vue" ]]

### 允许重复

设置 [`allow-duplicate`](#props-allow-duplicate) 来允许输入重复的标签。

[[ demo src="/demo/tag-input/allow-duplicate.vue" ]]

### 最大标签数

设置 [`max`](#props-max) 来限制输入的标签数上限。

[[ demo src="/demo/tag-input/max.vue" ]]

### 最大字符数

设置 [`maxlength`](#props-maxlength) 来限制输入的字符数上限。

[[ demo src="/demo/tag-input/maxlength.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `string` | '' | [^value] |
| ``input-value`` | `string` | '' | [^input-value] |
| ``disabled`` | `boolean` | `false` | 标签输入框是否为禁用状态。 |
| ``readonly`` | `boolean` | `false` | 标签输入框是否为只读状态。 |
| ``placeholder`` | `string` | - | 输入占位符。 |
| ``clearable`` | `boolean` | `false` | 是否显示清除按钮。 |
| ``maxlength`` | `number` | - | 最大可输入的字符长度。 |
| ``max`` | `number` | - | 允许输入的标签数上限。 |
| ``get-length`` | `function(string): number` | - | 自定义的字符长度计算函数。 |
| ``allow-duplicate`` | `boolean` | `false` | 是否允许输入重复的标签。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `xs` | 超小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
| `l` | 大尺寸样式。 |
+++
^^^

^^^value
:::badges
`v-model`
:::

输入的标签列表值。
^^^

^^^input-value
:::badges
`.sync`
:::

文本输入框的值。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``change`` | [^event-change] |
| ``input`` | [^event-input] |
| ``clear`` | 点击清除按钮时触发。 |

^^^event-change
:::badges
`v-model`
:::

标签列表内容变化时触发。回调参数为 `(value: Array<string>)`，`value` 为已填写的标签列表。
^^^

^^^event-input
:::badges
`.sync`
:::

文本输入框中输入内容变化时。回调参数为 `(inputValue: string)`，`inputValue` 为输入框的文本内容。
^^^

此外，`TagInput` 支持如下的原生事件：

`auxclick`、`click`、`contextmenu`、`dblclick`、`mousedown`、`mouseenter`、`mouseleave`、`mousemove`、`mouseover`、`mouseout`、`mouseup`、`select`、`wheel`、`keydown`、`keypress`、`keyup`、`focus`、`blur`、`focusin`、`focusout`。

回调函数的参数都为原生事件对象。

### 图标

| 名称 | 描述 |
| -- | -- |
| ``remove`` | 清除按钮。 |
