# Badge

## Demos

### Text badge

Badge content can be text.

[[ demo src="/demo/badge/text.vue" ]]

### Numeric badge

The content can also be a number and can be can be displayed as “<var>max</var>+” when exceeding the maximum value.

[[ demo src="/demo/badge/number.vue" ]]

### Corner badge

When no badge content is provided, the badge will be displayed in the upper right corner in a dot style.

[[ demo src="/demo/badge/corner-dot.vue" ]]

### Dot badge

When no slot content is provided, the badge will be displayed in a dot style.

[[ demo src="/demo/badge/dot.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``type`` | `string=` | `'error'` | [^type] |
| ``value`` | `string | number` | - | The badge content value. When it is of type `number`, it is limited by the [`max`](#props-max) prop. `max` is ignored when it is of type `string`. |
| ``max`` | `number=` | `badge.max` | The maximum value of the badge, when `value` exceeds this value, the badge content will be displayed as “<var>max</var>+”. Ignored when `value` is `string`. |
| ``hidden`` | `boolean=` | `false` | Whether the badge is hidden. |

^^^type
The status type of the badge. The optional values for built-in styles are as follows. When using other values, you need to define the styles for `.veui-badge-{type}`.

+++Enum
| Value | Description |
| -- | -- |
| `info` | Info style. |
| `success` | Success style. |
| `warning` | Warning style. |
| `error` | Error style. |
| `aux` | Aux style. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The target content that the badge needs to display upon. |
