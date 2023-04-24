# AlertBox

## Examples

### Types

`AlertBox` has three type variants: `info`, `success`, and `error`, which can be specified by the [`type`](#props-type) prop.

[[ demo src="/demo/alert-box/type.vue" ]]

### With title

The title of the alert box can be customized using the [`title`](#props-title) prop or the [`title`](#slots-title) slot.

[[ demo src="/demo/alert-box/title.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``open`` | `boolean` | `false` | [^open] |
| ``type`` | `string` | `'success'` | [^type] |
| ``title`` | `string` | - | The title of the alert box. |
| ``loading`` | `boolean` | `false` | Whether the alert box is in the loading state. When in the loading state, the OK button will also enter the loading state and cannot be clicked. |
| ``disabled`` | `boolean` | `false` | Whether the alert box is disabled. When disabled, the OK button will also be disabled and cannot be clicked. |
| ``ok-label`` | `string` | - | The text content of the "OK" button. |
| ``before-close`` | `function(string): boolean=|Promise<boolean>` | - | Executes after the operation that triggers the close, see [`before-close`](./dialog#props-before-close) prop of the [`Dialog`](./dialog) component for reference. |
| ``overlay-class`` | `string | Array | Object` | - | See the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component for reference. |
| ``overlay-style`` | `string | Array | Object` | - | See the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component for reference. |

^^^open
:::badges
`.sync`
:::

Whether to display the alert box.
^^^

^^^type
The contextual type of the alert box.

+++Enum values
| Value | Description |
| -- | -- |
| `info` | Informational style. |
| `success` | Success style. |
| `error` | Error style. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Content area. |
| ``title`` | Title area. If both the [`title`](#props-title) prop and the [`title`](#slots-title) slot are specified, the latter takes precedence. |
| ``foot`` | Footer area. By default, an “OK” button is displayed. |

### Events

| Name | Description |
| -- | -- |
| ``ok`` | Triggered when the “OK” button is clicked. |
| ``afteropen`` | Triggered after the alert box is opened. The alert box content is only rendered after opening, so if there is logic that depends on content rendering, execute it after this event is triggered. |
| ``afterclose`` | Triggered after the alert box is closed. If the theme provides an exit animation, it will be triggered after the exit animation is completed. |

### Icons

| Name | Description |
| -- | -- |
| ``info`` | Normal information. |
| ``success`` | Success state. |
| ``error`` | Error state. |
