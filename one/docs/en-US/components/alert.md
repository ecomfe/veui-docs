# Alert

## Examples

### Statuses

`Alert` has four statuses: `success`, `info`, `warning`, and `error`. You can specify different statuses using the [`status`](#props-status) prop.

[[ demo src="/demo/alert/status.vue" ]]

### Multiple messages

You can specify the `message` prop as an array to display multiple switchable messages.

[[ demo src="/demo/alert/multiple.vue" ]]

### With title

Set the `title` prop to specify the message title.

[[ demo src="/demo/alert/title.vue" ]]

### Extra content

Use the [`extra`](#slots-extra) slot to specify additional content after the message.

[[ demo src="/demo/alert/extra.vue" ]]


## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``status`` | `string` | `'success'` | [^status] |
| ``type`` | `string` | `'success'` | Deprecated. Use [`status`](#props-status) instead. |
| ``title`` | `string` | - | Message title. |
| ``message`` | `string | Array<string>` | - | Message content. When an array is passed, multiple messages will be displayed and switchable. |
| ``closable`` | `boolean` | `false` | Whether to allow closing. |
| ``open`` | `boolean` | `true` | [^open] |
| ``index`` | `number` | `0` | [^index] |

^^^status
The contextual status of the alert message.

+++Enum values
| Value | Description |
| -- | -- |
| `info` | Informational status. |
| `success` | Success status. |
| `warning` | Warning status. |
| `error` | Error status. |
+++
^^^

^^^open
:::badges
`.sync`
:::

Whether the message is displayed.
^^^

^^^index
:::badges
`.sync`
:::

The index of the currently displayed message when there are multiple messages.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | [^slot-default] |
| ``title`` | The content area of the message title. |
| ``extra`` | The additional content area after the message. |
| ``content`` | The entire message area, including status icons, switch buttons, close buttons, etc. |

^^^slot-default
Message content area.

Default content: message text.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `message` | `string` | The message text. |
| `index` | `number` | The index value of the current message when there are multiple messages. |
| `close` | `function` | Used to close the alert. |
+++
^^^

### Icons

| Name | Description |
| -- | -- |
| ``success`` | Success message. |
| ``warning`` | Warning message. |
| ``info`` | Informational message. |
| ``error`` | Error message. |
| ``prev`` | Previous message. |
| ``next`` | Next message. |
| ``close`` | Close the alert. |
```
