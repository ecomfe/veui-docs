# ConfirmBox

## Examples

The title and content are both customizable.

[[ demo src="/demo/confirm-box/custom.vue"]]

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ``open`` | `boolean` | `false` | [^open] |
| ``title`` | `string` | - | The title of the confirm box. |
| ``loading`` | `boolean` | `false` | Wehter the confirm box is in loading state. When loading, the OK button will enter loading state as well and become unclickable. |
| ``disabled`` | `boolean` | `false` | Wehter the confirm box is disabled. When disabled, the OK button will be disabled as well and become unclickable. |
| ``ok-label`` | `string` | - | The text content of the “OK” button. |
| ``cancel-label`` | `string` | - | The text content of the “Cancel” button. |
| ``before-close`` | `function(string): boolean=|Promise<boolean=>` | - | Executed when user interaction is about to trigger closing the confirm box. See the [`before-close`](./dialog#props-before-close) prop of the [`Dialog`](./dialog) component. |
| ``overlay-class`` | `string | Array | Object` | - | See the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | See the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

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
| `title` | The title of the confirm box. Will ignore the [`title`](#props-title) prop when specified. |
| `foot` | The foot area of the confirm box. Displays an “OK” and a “Cancel” button by default. |

### Events

| Name | Description |
| -- | -- |
| `ok` | Triggered when the “OK” button is clicked. |
| `cancel` | Triggered when the “Cancel” button is clicked. |
| ``afteropen`` | Triggered after the box overlay is opened. The box content won't be rendered until after the overlay is opened, so if there is logic that depends on content rendering, please execute it after this event is triggered. |
| `afterclose` | Triggered after the box overlay is closed. If leaving transition is provided by the theme, the event will be triggered after the transition completes. |
