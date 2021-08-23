# Popover

## Demos

### Style variants

Available size variants for the `ui` prop: `s`/`m`.

[[ demo src="/demo/popover/ui.vue" ]]

### Position

Use the `position` prop to specify the placement of the popover.

[[ demo src="/demo/popover/position.vue" ]]

### Triggers

Use the `trigger` prop to specify when to show/hide the popover.

[[ demo src="/demo/popover/trigger.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `open` | `boolean` | `false` | [^open] |
| `target` | `string|Vue|Node` | - | See the [`target` prop](./overlay#props) of thh [`Overlay`](./overlay) component. |
| `position` | `string` | `'top'` | [^position] |
| `trigger` | `string` | `'hover'` | [^trigger] |
| `hide-delay` | `number` | `tooltip.hideDelays` | Time (in milliseconds) to wait before hiding the popover after the close trigger is triggered. Can be used to prevent the popover being immediately closed after pointer leaves the `target` element and before it enters the popover itself. |
| `overlay-class` | `string|Array|Object=` | - | See the [`overlay-class`](./overlay#props) prop of the [`Overlay`](./overlay) component. |
| `overlay-style` | `string|Array|Object=` | - | See the [`overlay-style`](./overlay#props) prop of the [`Overlay`](./overlay) component. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | small border radius. |
| `m` | middle border radius. |
+++
^^^

^^^open
:::badges
`.sync`
:::

Whether the popover is displayed.
^^^

^^^position
Denotes the target element of the popover. Used with [Popper.js](https://popper.js.org/)-style placement syntax, see [`Popper.placements`](https://popper.js.org/popper-documentation.html#Popper.placements).
^^^

^^^trigger
The event that triggers the toggle of the popover. Can take valid values for `v-outside` directive's `trigger` parameter, and can use <code>&#0096;${open}-${close}&#0096;</code> syntax to specify different trigger event for showing/hiding the popover. When specified as `custom`, `v-outside` will not be leveraged to automatically toggle the popover.

eg. `click` denotes showing the popover after clicking the `target` and hiding it after clicking outside. `hover-mousedown` denotes showing the popover after hovering the `target`, and hiding it after clicking outside.
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | The content of the popover. |
