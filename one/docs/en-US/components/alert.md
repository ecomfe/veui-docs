# Alert

## Demos

### Types

`Alert` component has 4 contextual types, which are `success`, `info`, `warning` and `error`. Types are specified with the [`type`](#props-type) prop.

[[ demo src="/demo/alert/type.vue" ]]

### Multiple messages

The [`message`](#props-message) prop can be an array to display multiple switchable messages.

[[ demo src="/demo/alert/multiple.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``type`` | `string=` | `'success'` | [^type] |
| ``title`` | `string` | - | The alert title. |
| ``message`` | `string | Array<string>` | - | The alert message. When specified as an array, multiple messages will be displayed with previous/next navigation. |
| ``closable`` | `boolean=` | `false` | Whether the alert is allowed to be closed by users. |
| ``open`` | `boolean=` | `true` | [^open] |
| ``index`` | `number=` | `0` | [^index] |

^^^type
The contextual type of the alert message.

+++Enum values
| Value | Description |
| -- | -- |
| `info` | Information message. |
| `success` | Success message. |
| `warning` | Warning message. |
| `error` | Error message. |
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

The index of current message displayed when having multiple messages.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | [^slot-default] |
| ``title`` | The content area of the alert title. |
| ``extra`` | The extra content after the alert message. |
| ``content`` | The content of the whole component, including message text, status icon, previous/next navigation and close button. |

^^^slot-default
The content of the message.

Default: message text.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `message` | `string` | Message text. |
| `index` | `number=` | The index of current message displayed when having multiple messages. |
+++
^^^

### Icons

| Name | Description |
| -- | -- |
| ``success`` | Success message. |
| ``warning`` | Warning message. |
| ``info`` | Information message. |
| ``error`` | Error message. |
| ``prev`` | Previous message. |
| ``next`` | Next message. |
| ``close`` | Close alert. |
