# ConfirmBox

## Demos

The title and content are both customizable.

[[ demo src="/demo/confirm-box/custom.vue"]]

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | [^open] |
| `title` | `string=` | - | The title of the confirm box. |
| `overlay-class` | `string|Array|Object=` | - | See the `overlay-class` prop of [`Overlay`](./overlay). |

^^^open
:::badges
`.sync`
:::

Whether the confirm box is displayed.
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | The content of the confirm box. |
| `title` | The title of the confirm box. Will ignore the `title` prop when specified. |
| `foot` | The foot area of the confirm box. Displays an “OK” and a “Cancel” button by default. |

### Events

| Name | Description |
| -- | -- |
| `ok` | Triggered when the “OK” button is clicked. |
| `cancel` | Triggered when the “Cancel” button is clicked. |
| `afterclose` | Triggered after the box overlay is closed. If leaving transition is provided by the theme, the event will be triggered after the transition completes. |
