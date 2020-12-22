# Slider

## Demos

### Size variants

Available size variants for the `ui` prop: `s`/`m`.

[[ demo src="/demo/slider/size.vue" ]]

### Read-only/disabled

Use the `readonly` prop to set a slider read-only. Use the `disabled` prop to set a slider disabled.

[[ demo src="/demo/slider/editable.vue" ]]

### Steps

Use the `step` to make value change by specified step value when clicking spinner buttons, or pressing <kbd>▴</kbd> or <kbd>▾</kbd>.

[[ demo src="/demo/slider/steps.vue" ]]

### Range

Use the `max`/`min` props to specify the values at both ends of the slider.

[[ demo src="/demo/slider/range.vue" ]]

### Secondary bar

Use the `secondary-progress` prop to specify a secondary progress bar.

[[ demo src="/demo/slider/buffer.vue" ]]

### Customization

Use the `thumb`/`tip` slots to customize the content of slider thumb and tooltip.

[[ demo src="/demo/slider/variant.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `value` | `*|Array<*>` | - | [^value] |
| `secondary-progress` | `number|Array<number>` | `0` | Secondary progress value. |
| `min` | `number` | `0` | The minimun value after `value` is processed by the `parse` function. |
| `max` | `number` | `1` | The maximum value after `value` is processed by the `parse` function. |
| `step` | `number` | `0` | The step value  after `value` is processed by the `parse` function. |
| `mark` | `boolean` | `false` | Whether to display step marks. |
| `parse` | `function` | `val => val` | The parse function to transform input value. |
| `format` | `function` | `val => val` | The format function to transform output value. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small. |
| `m` | Medium. |
+++
^^^

^^^value
The value of the slider.

By default the type is `number` and the value should between `min` and `max` after parsed by the `parse` function.

When being the type of `Array<number>`, multiple thumbs will be rendered corresponding to each value.

:::tip
When `parse` and `format` are specified, values can be of any type, and `parse` should transform the value to `number` and `format` should transform the value to the same type as the `value` prop. `parse` and `format` only need to take care of single values instead of arrays and the component itself will apply transformation on multiple values if necessary.
:::
^^^

### Slots

| Name | Description |
| -- | -- |
| `track` | The track of the slider. Displays a bar by default. |
| `tip-label` | The tooltip content. Displays the current `value` or its item by default. |
| `thumb` | [^slot-thumb] |
| `tip` | [^slot-tip] |

^^^slot-thumb
The thumb(s) of the slider. Displays a round button by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `index` | `number` | The index of current thumb. |
| `focus` | `boolean` | Whether current thumb is focused. |
| `hover` | `boolean` | Whether user is pointing current thumb. |
| `dragging` | `boolean` | Whether the current thumb is being dragged. |
+++
^^^

^^^slot-tip
The entire tooltip for each thumb. Displays a `Tooltip` component with `value` as its content by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `target` | `HTMLElement` | The rendered `Element` for current thumb. |
| `open` | `boolean` | Whether there is any active thumb. |
| `active-index` | `boolean` | The index of the current active thumb. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| `input` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

Triggered after the value changed. The callback parameter type is `(value: *)`, where `value` is the new value (transformed by the `format` function).
^^^
