# NumberInput

## Examples

### Size variants

Available [`ui`](#props-ui) prop values: `xs` / `s` / `m`.

[[ demo src="/demo/number-input/size.vue" ]]

### Read-only

Set the [`readonly`](#props-readonly) prop to make the number input box readonly.

[[ demo src="/demo/number-input/readonly.vue" ]]

### Disabled

Set the [`disabled`](#props-disabled) prop to disable the number input box.

[[ demo src="/demo/number-input/disabled.vue" ]]

### Precision and stepping

Set the [`decimal-place`](#props-decimal-place) prop to specify the number of decimal places.

Set the [`step`](#props-step) prop to specify the value of each increment/decrement.

[[ demo src="/demo/number-input/decimal.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `number` | - | [^value] |
| ``readonly`` | `boolean` | `false` | Whether the number input box is in readonly state. |
| ``disabled`` | `boolean` | `false` | Whether the number input box is disabled. |
| ``placeholder`` | `string` | - | Input placeholder. |
| ``select-on-focus`` | `boolean` | `false` | Whether to automatically select the text in the number input box when focused. |
| ``max`` | `number` | - | The maximum allowed value. |
| ``min`` | `number` | - | The minimum allowed value. |
| ``decimal-place`` | `number` | 0 | The number of decimal places, default is integer, `-1` means no precision processing. |
| ``step`` | `number` | 1 | The value of each increment/decrement. |
| ``format`` | `(val: number, defaultFormattedValue: string) => string` | - | Custom number formatting. |
| ``parse`` | `(val: string) => number` | - | Custom parsing function to parse the input value into a number. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small style. |
| `s` | Small style. |
| `m` | Medium style. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The value of the number input box.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``before`` | The content before the number input box. |
| ``after`` | The content after the number input box, which comes after the increase and decrease buttons. |

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change-en] |
| ``input`` | [^event-input-en] |

^^^event-change-en
Native `change` event. Callback parameters: `(value, event)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `number` | The value of the number input box. |
| `event` | `Event` | The native event object. |
+++
^^^

^^^event-input-en
:::badges
`v-model`
:::

Triggered when valid input is entered and affected by number formatting. If the current value is formatted as an invalid value, it will not be triggered. Callback parameter: `(value: string)`, where `value` is the `value` of the number input box.
^^^

In addition, `NumberInput` supports the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, `focusout`.

The callback function is passed the native event object.

### Icons

| Name | Description |
| -- | -- |
| ``increase`` | The increase button. |
| ``decrease`` | The decrease button. |
