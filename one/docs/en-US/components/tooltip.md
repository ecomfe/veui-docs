# Tooltip

## Examples

### Style variants

Available `ui` prop values: `alt`.

[[ demo src="/demo/tooltip/style.vue" ]]

### Positioning

Use the `position` prop to specify the position of the tooltip.

[[ demo src="/demo/tooltip/position.vue" ]]

### Trigger

Use the `trigger` prop to specify when to show/hide the tooltip.

[[ demo src="/demo/tooltip/trigger.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``open`` | `boolean` | `false` | [^open] |
| ``target`` | `string | Vue | Node` | - | Refers to the `target` prop of the [`Overlay`](./overlay) component. |
| ``position`` | `string` | `'top'` | [^position] |
| ``aim-center`` | `boolean` | `false` | Specifies whether the tooltip arrow should always point to the center of the target element. |
| ``trigger`` | `string` | `'hover'` | [^trigger] |
| ``interactive`` | `boolean` | `true` | Specifies whether the content of the tooltip can be interacted with. If `false`, the tooltip will automatically close when the conditions specified by `trigger` are met outside of the `target`. |
| ``autofocus`` | `boolean` | - | Specifies whether to automatically focus on the first focusable element inside the tooltip. |
| ``hide-delay`` | `number` | `tooltip.hideDelays` | The number of milliseconds to wait before closing the tooltip after the conditions for closing are met. This can be used to prevent the tooltip from closing automatically before interacting with it after moving the cursor out of the `target`. |
| ``overlay-class`` | `string | Array | Object` | - | Refers to the `overlay-class` prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | Refers to the `overlay-style` prop of the [`Overlay`](./overlay) component. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `reverse` | Reversed style. |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^open
:::badges
`.sync`
:::

Specifies whether to show the tooltip or not.
^^^

^^^position
Specifies the positioning options. Uses the positioning syntax of [Popper.js](https://popper.js.org/), see [`Popper.placements`](https://popper.js.org/docs/v1/#Popper.placements) for more information.
^^^

^^^trigger
Specifies how to trigger the tooltip. The supported values are the [`trigger`](../directives/v-outside#options-trigger) option of the [`v-outside`](../directives/v-outside) directive binding value, and the <code>&#0096;${open}-${close}&#0096;</code> syntax specifies the timing of opening/closing the tooltip respectively. In addition, when `trigger` is set to `custom`, the `v-outside` functionality will not be automatically applied.

For example, `click` means that the tooltip opens when the `target` is clicked and closes when the blank space is clicked; `hover-mousedown` means that the tooltip opens when the cursor enters the `target` and closes when the mouse is pressed in the blank space.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the tooltip. |

### Events

| Name | Description |
| -- | -- |
| ``toggle`` | [^event-toggle] |

^^^event-toggle
:::badges
`v-model`
:::

Triggered when the tooltip's open state is toggled. The callback parameter is `(open: boolean)`.
^^^

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``tooltip.hideDelay`` | `number` | `300` | See the [`hide-delay`](#props-hide-delay) prop. |
