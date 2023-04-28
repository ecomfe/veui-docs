# Message

## Examples

Different contextual states can be specified using the [`status`](#props-status) prop, and different display modes can be specified using the [`display`](#props-display) prop.

[[ demo src="/demo/message/default.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | `'m'` | [^ui] |
| ``status`` | `'success' | 'error' | 'info' | 'warning' | 'aux'` | `'info'` | [^status] |
| ``display`` | `'normal' | 'popup' | 'simple' | 'standalone'` | `'normal'` | [^display] |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
+++

^^^status
Message status.

+++Enum Values
| Value | Description |
| -- | -- |
| `info` | Informational message. |
| `success` | Success message. |
| `warning` | Warning message. |
| `error` | Error message. |
| `aux` | Auxiliary message. |
+++
^^^

^^^display
Message display mode.

+++Enum values
| Value | Description |
| -- | -- |
| `normal` | Normal style, with icon and text with state. |
| `popup` | Bubble style, only showing the icon by default, can be interacted with to display detailed content. |
| `simple` | Simple style, without icon. |
| `standalone` | Standalone style, showing icon and text without state. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Message content area |

### Icons

| Name | Description |
| -- | -- |
| ``success`` | Success message. |
| ``warning`` | Warning message. |
| ``info`` | Informational message. |
| ``error`` | Error message. |
| ``aux`` | Auxiliary message. |
