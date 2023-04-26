# ConfirmBox

## Examples

Custom title and content area.

[[ demo src="/demo/confirm-box/custom.vue"]]

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ``open`` | `boolean` | `false` | [^open] |
| ``title`` | `string` | - | Title. |
| ``loading`` | `boolean` | `false` | Whether the dialog is in loading state. When in loading state, the OK button will also be in loading state and cannot be clicked. |
| ``disabled`` | `boolean` | `false` | Whether the dialog is disabled. When disabled, the OK button will also be disabled and cannot be clicked. |
| ``ok-label`` | `string` | - | The text content of the "OK" button. |
| ``cancel-label`` | `string` | - | The text content of the "Cancel" button. |
| ``before-close`` | `function(string): boolean=|Promise<boolean>` | - | Executed after the operation that triggers the close. Refer to the [`before-close`](./dialog#props-before-close) prop of the [`Dialog`](./dialog) component. |
| ``overlay-class`` | `string | Array | Object` | - | Refer to the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | Refer to the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

^^^open
:::badges
`.sync`
:::

Whether to show the confirm box.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Content area. |
| ``title`` | Title area. If both the [`title`](#props-title) prop and the [`title`](#slots-title) slot are specified, the latter will take precedence. |
| ``foot`` | Footer area. The "OK" and "Cancel" buttons will be displayed by default. |

### Events

| Name | Description |
| -- | -- |
| ``ok`` | Triggered when the "OK" button is clicked. |
| ``cancel`` | Triggered when the "Cancel" button is clicked. |
| ``afteropen`` | Triggered after the dialog is opened. The dialog content will not be rendered until after the event is triggered. So if there is logic that depends on content rendering, execute it after this event is triggered. |
| ``afterclose`` | Triggered after the dialog is closed. If the style theme provides an exit animation, it will be triggered after the animation is complete. |
