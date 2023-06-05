# Slider

## Examples

### Size variants

Available size variants in the [`ui`](#props-ui) prop: `s` / `m`.

[[ demo src="/demo/slider/size.vue" ]]

### Read-only / disabled

Set the [`readonly`](#props-readonly) prop to make the slider read-only, and set the [`disabled`](#props-disabled) prop to disable the slider.

[[ demo src="/demo/slider/editable.vue" ]]

### Step size

Use the [`step`](#props-step) prop to specify the step size. This adjusts the input value according to the specified step value when you click the adjustment buttons or press <kbd>←</kbd> and <kbd>→</kbd> keys.

[[ demo src="/demo/slider/steps.vue" ]]

### Range

Use the [`max`](#props-max) / [`min`](#props-min) props to specify the values at both ends of the drag range.

[[ demo src="/demo/slider/range.vue" ]]

### Secondary progress

Use the [`secondary-progress`](#props-secondary-progress) prop to specify a secondary progress bar.

[[ demo src="/demo/slider/buffer.vue" ]]

### Vertical

Use the [`vertical`](#props-vertical) prop to specify whether to use the vertical style.

[[ demo src="/demo/slider/vertical.vue" ]]

### Custom content

Use the [`thumb`](#slots-thumb) / [`tip`](#slots-tip) slots to customize the slider button, hover tips, and other content.

[[ demo src="/demo/slider/variant.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `*|Array<*>` | - | [^value] |
| ``secondary-progress`` | `number | Array<number>` | `0` | Secondary progress bar. |
| ``min`` | `number` | `0` | The minimum value allowed after the `parse` function processes the `value`. |
| ``max`` | `number` | `1` | The maximum value allowed after the `parse` function processes the `value`. |
| ``step`` | `number` | `0` | The step value after the `parse` function processes the `value`. |
| ``mark`` | `boolean` | `false` | Whether to display step marks. |
| ``vertical`` | `boolean` | `false` | Whether to display vertically. |
| ``parse`` | `function` | `val => val` | Value processing function. |
| ``format`` | `function` | `val => val` | Output value processing function. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^value
Value.

The default value type is `number`, and the value size range after the `parse` function processing should be between `min` and `max`.
When the value is in the form of `Array<number>`, the component renders multiple sliders corresponding to each value.

:::tip
When `parse` and `format` are provided, the value can be of any type, but `parse` needs to parse the incoming value into a `number` type and return it; `format` needs to format the output value into its original form. The implementation of `parse` and `format` only needs to process a single value, and the component will call these two functions for each item of multiple values.
:::
^^^

### Slots

| Name | Description |
| -- | -- |
| ``track`` | Slider track. Default content: a line. |
| ``tip-label`` | Floating prompt text. Default content: the current `value`. |
| ``thumb`` | [^slot-thumb] |
| ``tip`` | [^slot-tip] |

^^^slot-thumb
Slider thumb.

Default content: a round button.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `index` | `number` | Slider index. |
| `focus` | `boolean` | Whether the slider is focused. |
| `hover` | `boolean` | Whether the mouse is hovering. |
| `dragging` | `boolean` | Whether the slider is being dragged. |
+++
^^^

^^^slot-tip
Popup tooltip.

Default content: a Tooltip component with the content being `value`.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `target` | `HTMLElement` | Slider element. |
| `open` | `boolean` | Whether there is an active slider. |
| `active-index` | `boolean` | The index of the active slider. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``input`` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

Triggered after modification, with the callback parameter `(value: *)`. `value` is the new value processed by the `format` function after the change.
^^^
