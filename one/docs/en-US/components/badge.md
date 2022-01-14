# Badge

## Demo

### Text Badge

Badge content can be text.

[[ demo src="/demo/badge/text.vue" ]]

### Digital Badge

Badge content can be number, When the maximum value is exceeded, it can be displayed as *Maximum+*.

[[ demo src="/demo/badge/number.vue" ]]

### Round Dots Badge

No badge content is provided, The badge will be displayed in a dot style in the upper right corner.

[[ demo src="/demo/badge/corner-dot.vue" ]]

No slot content is provided, the badge will be displayed in a dot style.

[[ demo src="/demo/badge/dot.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``type`` | `string=` | `'error'` | [^type] |
| ``value`` | `string | number` | - | Badge content value. When it is a value of type `number`, it is limited by the [`max`](#props-max) attribute. `max` is ignored when it is of type `string`. |
| ``max`` | `number=` | `badge.max` | The maximum value of the badge value, when `value` exceeds this value, the badge content will be displayed as `{max}+`. Ignored when `value` is `string`. |
| ``hidden`` | `boolean=` | `false` | hidden state. |

^^^type
Badge state type. The optional values for the built-in style are as follows. When using other values, you need to define the style of `.veui-badge-{type}`.

+++Enum
| Value | Description |
| -- | -- |
| `info` | Message notification. |
| `success` | Success. |
| `warning` | Warning. |
| `error` | Error |
| `aux` | Aux |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The target content that the badge needs to display. |


