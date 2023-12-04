# Input

## Examples

### Size variants

Available size variants of the [`ui`](#props-ui) prop: `xs` / `s` / `m` / `l`.

[[ demo src="/demo/input/size.vue" ]]

### Read-only

Set the [`readonly`](#props-readonly) prop to make the input field readonly.

[[ demo src="/demo/input/readonly.vue" ]]

### Disabled

Set the [`disabled`](#props-disabled) prop to disable the input field.

[[ demo src="/demo/input/disabled.vue" ]]

### Composition

Set the [`composition`](#props-composition) prop to handle input composition.

[[ demo src="/demo/input/composition.vue" ]]

### Trimming white spaces

Set the [`trim`](#props-trim) prop to automatically remove leading and trailing white spaces from user input.

[[ demo src="/demo/input/trim.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `string` | `''` | [^value] |
| ``disabled`` | `boolean` | `false` | Whether the input field is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the input field is read-only. |
| ``type`` | `string` | `'text'` | [^type] |
| ``placeholder`` | `string` | - | Placeholder text for the input field. |
| ``clearable`` | `boolean` | `false` | Whether to show the clear button. |
| ``composition`` | `boolean` | `false` | Whether to handle input composition. |
| ``autofocus`` | `boolean` | `false` | Whether to autofocus the input. |
| ``select-on-focus`` | `boolean` | `false` | Whether to select the input field text on focus. |
| ``maxlength`` | `number` | - | The maximum length of input characters. |
| ``get-length`` | `function(string): number` | - | Custom function to calculate the length of input characters. |
| ``strict`` | `boolean` | `false` | Whether to disallow input after maximum character limit is reached. |
| ``trim`` | `boolean | string` | `false` | [^trim] |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
| `l` | Large size style. |
| `inline` | Inline style. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The value of the input field.
^^^

^^^type
The type of input. See [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-type) in the native `<input>` element.

+++Enum values
| Value | Description |
| -- | -- |
| `text` | Text input field. |
| `password` | Password input field. |
| `hidden` | Hidden input field, but the value can be submitted. |
+++
^^^

^^^trim
Whether to trim leading and trailing white spaces. When set to `true`, leading and trailing white spaces will be removed. When set to `false`, they won't be removed. When set to a string, trimming will follow the specified method.

+++Enum values
| Value | Description |
| -- | -- |
| `both` | Remove both leading and trailing spaces. Equivalent to `true`. |
| `start` | Remove leading spaces. |
| `end` | Remove trailing spaces. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``before`` | Content to be placed before the input field. |
| ``after`` | Content to be placed after the input field. |
| ``placeholder`` | Placeholder content when no value is entered. |

#### Events

| Name | Description |
| -- | -- |
| `change` | [^event-change] |
| `input` | [^event-input] |
| `clear` | Triggered when the clear button is clicked. |

^^^event-change
Triggered when the content of the input changes, i.e. when the native `change` event is triggered. The callback parameters are `(value, event)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `string` | The value of the input. |
| `event` | [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/change) | The native `change` event object. |
+++
^^^

^^^event-input
:::badges
`v-model`
:::

Triggered when valid input is entered, affected by the [`composition`](#props-composition) prop. The callback parameter is `(value: string)`, where `value` is the `value` of the input.
^^^

In addition, `Input` supports the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, `focusout`.

The callback functions of these events receive the native event object as a parameter.

### Icons

| Name | Description |
| -- | -- |
| ``remove`` | Clear button. |
