# Textarea

## Examples

### Size variants

Available [`ui`](#props-ui) prop values: `s` / `m`.

[[ demo src="/demo/textarea/size.vue" ]]

### Read-only

Set the [`readonly`](#props-readonly) prop to make the textarea read-only.

[[ demo src="/demo/textarea/readonly.vue" ]]

### Disabled

Set the [`disabled`](#props-disabled) prop to disable the textarea.

[[ demo src="/demo/textarea/disabled.vue" ]]

### Auto-resize

Set the [`autoresize`](#props-autoresize) prop to make the textarea automatically resize.

[[ demo src="/demo/textarea/autoresize.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `string` | '' | [^value] |
| ``disabled`` | `boolean` | `false` | Whether the textarea is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the textarea is read-only. |
| ``line-number`` | `boolean` | `false` | Whether to display line numbers. |
| ``rows`` | `number | string` | - | The number of visible rows of the textarea. |
| ``placeholder`` | `string` | - | The placeholder text. |
| ``composition`` | `boolean` | `false` | Whether to take into account the value of the input method editor. |
| ``select-on-focus`` | `boolean` | `false` | Whether to select the text in the textarea when it receives focus. |
| ``autoresize`` | `boolean` | `false` | Whether to automatically adjust the height of the textarea based on its content. |
| ``get-length`` | `function(string): number` | A custom function for calculating the length of characters. |
| ``resizable`` | `boolean` | Specifies whether the textarea can be resized. |
| ``maxlength`` | `number` | - | The maximum number of characters that can be entered. |
| ``strict`` | `boolean` | `false` | Whether to prevent further input when the maximum number of characters has been reached. |

^^^ui
Predefined style.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The value of the textarea.
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |
| ``input`` | [^event-input] |

^^^event-change
Triggered when the content of the textarea changes, i.e. when the native `change` event is triggered. The callback function receives `(value, event)` as parameters.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `string` | The value of the textarea. |
| `event` | [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/change) | The native `change` event object. |
+++
^^^

^^^event-input
:::badges
`v-model`
:::

Triggered when valid input is entered, affected by the [`composition`](#props-composition) prop. The callback function receives `(value: string)` as a parameter, where `value` is the `value` of the input.
^^^

In addition, `Textarea` supports the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, `focusout`.

The parameters of the callback functions are all native event objects.
