# Tooltip

## Examples

### Style variants

Available style variant for the [`ui`](#props-ui) prop: `alt`.

[[ demo src="/demo/tooltip/style.vue" ]]

### Position

Use the [`position`](#props-position) prop to specify the placement of the tooltip.

[[ demo src="/demo/tooltip/position.vue" ]]

### Triggers

Use the [`trigger`](#props-trigger) prop to specify when to show/hide the tooltip.

[[ demo src="/demo/tooltip/trigger.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``open`` | `boolean` | `false` | [^open] |
| ``target`` | `string | Vue | Node` | - | See the [`target`](./overlay#props-to) prop of thh [`Overlay`](./overlay) component. |
| ``position`` | `string` | `'top'` | [^position] |
| ``aim-center`` | `boolean` | `false` | Whether the tooltip arrow always points to the center of the target element. |
| ``trigger`` | `string` | `'hover'` | [^trigger] |
| ``interactive`` | `boolean` | `true` | Whether the tooltip content is interactive. When set to `false`, the tooltip will be automatically hidden after the event specified by `trigger` is triggered outside the `target`. |
| ``hide-delay`` | `number` | `tooltip.hideDelays` | Time (in milliseconds) to wait before hiding the tooltip after the close trigger is triggered. Can be used to prevent the tooltip being immediately closed after pointer leaves the `target` element and before it enters the tooltip itself. |
| ``overlay-class`` | `string | Array | Object` | - | See the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | See the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `alt` | Reverse style. |
| `s` | Small style. |
| `m` | Medium style. |
+++
^^^

^^^open
:::badges
`.sync`
:::

Whether the tooltip is displayed.
^^^

^^^position
Denotes the target element of the tooltip. Used with [Popper.js](https://popper.js.org/)-style placement syntax, see [`Popper.placements`](https://popper.js.org/popper-documentation.html#Popper.placements).
^^^

^^^trigger
The event that triggers the toggle of the tooltip. Can take valid values for `v-outside` directive's `trigger` parameter, and can use <code>&#0096;${open}-${close}&#0096;</code> syntax to specify different trigger event for showing/hiding the tooltip. When specified as `custom`, `v-outside` will not be leveraged to automatically toggle the tooltip.

eg. `click` denotes showing the tooltip after clicking the `target` and hiding it after clicking outside. `hover-mousedown` denotes showing the tooltip after hovering the `target`, and hiding it after clicking outside.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the tooltip. |

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``tooltip.hideDelay`` | `number` | `300` | See the [`hide-delay`](#props-hide-delay) prop. |
