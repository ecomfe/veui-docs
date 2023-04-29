# Popover

## Examples

### Style variants

Available [`ui`](#props-ui) prop values: `s` / `m`.

[[ demo src="/demo/popover/ui.vue" ]]

### Position

Use the [`position`](#props-position) prop to specify the position where the popover is displayed.

[[ demo src="/demo/popover/position.vue" ]]

### Trigger

Use the [`trigger`](#props-trigger) prop to specify when to show/hide the popover.

[[ demo src="/demo/popover/trigger.vue" ]]

### Title and operations

Use the [`title`](#props-title) prop or [`title`](#slots-title) slot to specify the title of the popover.

Use the [`foot`](#props-foot) prop to enable the bottom operation area. Use the [`ok-label`](#props-ok-label) prop and [`cancel-label`](#props-cancel-label) prop to set the text of the buttons in the popover. Use the [`foot`](#slots-foot) slot to customize the bottom operation area.

[[ demo src="/demo/popover/foot.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``open`` | `boolean` | `false` | [^open] |
| ``target`` | `string | Vue | Node` | - | Refer to the [`target`](./overlay#props-target) prop of the [`Overlay`](./overlay) component. |
| ``position`` | `string` | `'top'` | [^position] |
| ``trigger`` | `string` | `'hover'` | [^trigger] |
| ``hide-delay`` | `number` | `tooltip.hideDelays` | The delay time in milliseconds after the closing condition is met. It can be used to prevent the cursor from entering the popover before it is automatically closed after moving out of the `target`. |
| ``overlay-class`` | `string | Array | Object` | - | Refer to the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | Refer to the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |
| ``title`` | `string` | - | Used to customize the title content. |
| ``foot`` | `boolean` | `false` | Used to enable the bottom operation area. |
| ``ok-label`` | `string` | - | The text content of the "OK" button. |
| ``cancel-label`` | `string` | - | The text content of the "Cancel" button. |

^^^ui
The preset style.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^open
:::badges
`.sync`
:::

Whether to show the popover.
^^^

^^^position
Specify the positioning parameters. Use the positioning syntax of [Popper.js](https://popper.js.org/), and refer to [`Popper.placements`](https://popper.js.org/docs/v1/#Popper.placements) for details.
^^^

^^^trigger
The way to trigger the popover. The value specified by the `trigger` parameter bound to the `v-outside` directive is supported, and the <code>&#0096;${open}-${close}&#0096;</code> syntax is used to specify the timing of opening/closing the popover. Additionally, when `trigger` is set to `custom`, the `v-outside` functionality will not be automatically processed.

For example, `click` means to open after clicking the `target` and close when clicking on a blank area; `hover-mousedown` means to open after moving the cursor to the `target` and close when pressing the mouse button on a blank area.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the popover. |
| ``title`` | Used to customize the title content. |
| ``foot`` | Used to customize the bottom operation area. |

### Events

| Name | Description |
| -- | -- |
| ``ok`` | Triggered when the "OK" button is clicked. |
| ``cancel`` | Triggered when the "Cancel" button is clicked. |
