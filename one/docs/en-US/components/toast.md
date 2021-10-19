# Toast

## Demos

### Types

`Toast` component has 4 contextual types, which are `success`, `info`, `warning` and `error`. Types are specified with the [`type`](#props-type) prop.

[[ demo src="/demo/toast/default.vue" ]]

### Imperative invocation

Use `veui/plugins/toast` to enable [`toast` plugin](../plugins/toast) and invoke the toast imperatively.

[[ demo src="/demo/toast/plugin.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``open`` | `boolean` | `false` | [^open] |
| ``type`` | `string` | `'success'` | [^type] |
| ``message`` | `string` | - | The toast message. |
| ``duration`` | `number` | `toast.duration` | Time (in milliseconds) to wait until the toast is automatically closed. |

^^^open
:::badges
`.sync`
:::

Whether the toast is displayed.
^^^

^^^type
The contextual type of the toast.

+++Enum values
| Value | Description |
| -- | -- |
| `info` | Information toast. |
| `success` | Succuess toast. |
| `warning` | Warning toast. |
| `error` | Error toast. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the toast. Displays the [`message`](#props-message) prop by default. |

### Events

| Name | Description |
| -- | -- |
| ``close`` | Triggered when the toast is closed. |

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``toast.duration`` | `number` | `3000` | The duration of the toast in milliseconds. |

### Icons

| Name | Description |
| -- | -- |
| ``info`` | Information toast. |
| ``success`` | Success toast. |
| ``warning`` | Warning toast. |
| ``error`` | Error toast. |
