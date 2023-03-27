# Textarea

## Demos

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `s` / `m`.

[[ demo src="/demo/textarea/size.vue" ]]

### Read-only state

Use the [`readonly`](#props-readonly) prop to set a textarea to read-only state.

[[ demo src="/demo/textarea/readonly.vue" ]]

### Disabled state

Use the [`disabled`](#props-disabled) prop to set a textarea to disabled state.

[[ demo src="/demo/textarea/disabled.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `string` | '' | [^value] |
| ``disabled`` | `boolean` | `false` | Whether the textarea is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the textarea is read-only. |
| ``line-number`` | `boolean` | `false` | Whether to show line numbers. |
| ``rows`` | `number | string` | - | The default visible rows of the textarea. |
| ``placeholder`` | `string` | - | The placeholder text of the textarea. |
| ``composition`` | `boolean` | `false` | Whether the input process should be aware of composition. |
| ``select-on-focus`` | `boolean` | `false` | Whether to select text content when focused. |
| ``autoresize`` | `boolean` | `false` | Whether the textarea should automatically expand when the content exceeds default height. |
| ``get-length`` | `function(string): number` | Used to customize length calculation of the input. |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | Small. |
| `m` | Medium. |
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
