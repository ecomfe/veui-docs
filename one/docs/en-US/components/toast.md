# Toast

## Examples

### Types

`Toast` has four types: `info`, `success`, `warning`, and `error`. You can specify different types by using the [`type`](#props-type) prop.

[[ demo src="/demo/toast/default.vue" ]]

### Imperative call

You can use the `veui/plugins/toast` module to load the [`toast` plugin](../plugins/toast) for an imperative call.

[[ demo src="/demo/toast/plugin.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``open`` | `boolean` | `false` | [^open] |
| ``type`` | `string` | `'success'` | [^type] |
| ``title`` | `string` | - | The message title. |
| ``message`` | `string` | - | The message content. |
| ``duration`` | `number` | `toast.duration` | The duration in milliseconds that the message is displayed. If exceeded, the toast will automatically close. |
| ``closable`` | `boolean` | - | Whether there is a close button. |

^^^open
:::badges
`.sync`
:::

Whether to display the toast.
^^^

^^^type
The type of the toast.

+++Enumeration values
| Value | Description |
| -- | -- |
| `info` | Information prompt style. |
| `success` | Success style. |
| `warning` | Warning style. |
| `error` | Error style. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content area. Displays the content of the [`message`](#props-message) prop by default. |
| ``title`` | The title area. Displays the content of the [`title`](#props-title) prop by default. |

### Events

| Name | Description |
| -- | -- |
| ``close`` | Triggered after the toast is automatically closed. |
| ``ready`` | Triggered after the component is mounted. |

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``toast.duration`` | `number` | `3000` | The default duration in milliseconds that the message is displayed. |

### Icons

| Name | Description |
| -- | -- |
| ``info`` | Normal information. |
| ``success`` | Success status. |
| ``warning`` | Warning status. |
| ``error`` | Error status. |
