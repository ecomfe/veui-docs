# Badge

## Examples

### Text badge

The content of the badge can be plain text.

[[ demo src="/demo/badge/text.vue" ]]

### Number badge

The content of the badge can also be a number. When the value exceeds the maximum value, it will be displayed as "{max}+".

[[ demo src="/demo/badge/number.vue" ]]

### Corner badge

When no content is provided, the badge will be displayed as a dot in the upper right corner.

[[ demo src="/demo/badge/corner-dot.vue" ]]

### Dot badge

When no slot content is provided, the badge will be displayed as a dot.

[[ demo src="/demo/badge/dot.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``status`` | `string` | `'error'` | [^status] |
| ``type`` | `string` | `'error'` | Deprecated. Use [`status`](#props-status) instead. |
| ``value`` | `string | number` | - | The value of the badge content. If it is of type `number`, it will be limited by the [`max`](#props-max) prop. If it is of type `string`, the `max` prop will be ignored. |
| ``max`` | `number` | `badge.max` | The maximum value of the badge number. When the `value` exceeds this value, the badge content will be displayed as `{max}+`. This prop will be ignored if the `value` is of type `string`. |
| ``hidden`` | `boolean` | `false` | Whether the badge is in a hidden state. |

^^^status
The type of the badge status. The optional values with built-in styles are as follows. When using other values, you need to define the `.veui-badge-{status}` style yourself.

+++Enum values
| Value | Description |
| -- | -- |
| `info` | Informational status. |
| `success` | Success status. |
| `warning` | Warning status. |
| `error` | Error status. |
| `aux` | Auxiliary status. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content to which the badge needs to be displayed. |
