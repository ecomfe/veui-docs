# Progress

## Examples

### Progress bar

[[ demo src="/demo/progress/bar.vue" ]]

### Progress circle

[[ demo src="/demo/progress/circular.vue" ]]

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `xs` / `s` / `m`.

[[ demo src="/demo/progress/size.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``type`` | `string` | `'bar'` | Type of progress bar. Available values are `bar` / `circular`, which are for bar and circular progress bars respectively. |
| ``desc`` | `boolean` | `false` | Whether to display text hint. |
| ``value`` | `number` | `0` | Progress value. |
| ``min`` | `number` | `0` | Minimum value. |
| ``max`` | `number` | `1` | Maximum value. |
| ``decimal-place`` | `number` | `0` | Number of decimal places to keep. |
| ``status`` | `string` | - | [^status] |
| ``autosucceed`` | `boolean | number` | - | Whether to automatically enter the `success` state when the progress value reaches the maximum. `true` means directly entering the success state. If it is of type `number`, it means the number of milliseconds to wait before switching to the success state after reaching the maximum value. |
| ``indeterminate`` | `boolean` | `false` | Whether the progress is indeterminate. Currently only effective when `type` is `bar`. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `fluid` | Fluid style of bar progress. |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
^^^

^^^status
:::badges
`.sync`
:::

Progress status. Available values are `success` / `error`, which represent the success and error status respectively.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | [^slot-default] |
| ``after`` | Can be used to customize the content after the text hint area. Slot props refer to the `default` slot. |

^^^slot-default
Can be used to customize the content of the text hint area.

Default content: completion percentage.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `percent` | `number` | Percentage of progress completion. |
| `value` | `number` | Progress value, same as [`value`](#props-value) prop. |
| `status` | `string` | Progress status, same as [`status`](#props-status) prop. |
+++
^^^
