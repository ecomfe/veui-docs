# Nav

## Examples

### Size variants

Available `ui` prop values for size variants: `m`.

[[ demo src="/demo/nav/size.vue" ]]

### Card Style

Set the `position` property of the first-level data item to `card` to display the drop-down menu as a card style.

[[ demo src="/demo/nav/card.vue" ]]

### Custom slots

[[ demo src="/demo/nav/slot.vue" ]]

### Adaptive layout

Automatically fold extra navigation items based on the actual rendering width.

[[ demo src="/demo/nav/more.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``active`` | `string` | - | [^active] |
| ``matches`` | `function(Object, string): boolean` | - | [^matches] |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `m` | Medium size style. |
+++
^^^

^^^active
The currently active node, if the node has a `name` property, it is the `name` value, otherwise the value is generated by the `to` prop ([route.path](https://router.vuejs.org/api/#route-object-properties)).
^^^

^^^items
An array of data sources, each node is of type `{label, to, name, icon, disabled, children, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the node. |
| `to` | `string | Object` | The navigation destination of the node. See the [`to`](./link#props) prop of the [`Link`](./link) component for reference. |
| `name` | `string` | The unique identifier of the node, either `name` or `to` must exist. |
| `disabled` | `boolean` | Whether the node is disabled. |
| `position` | `string` | The drop-down panel style of the first-level node. If set to `card`, it will be displayed as a card style. |
| `children` | `Array<Object>` | The child node array of the node, with the same item type as the [`items`](#props-items) prop array item. |
+++
^^^

^^^matches
Used to find the active item from `items` when the route changes.

Default implementation: if the project route path is equal (`===`) to the current route path, the project is considered active.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^item] |
| ``item-label`` | [^item-label] |

^^^item
The rendering slot for each node.

Default content: renders the icon and text description of the node.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the node. |
| `to` | `string | Object` | The navigation destination of the node. See the [`to`](./link#props) prop of the [`Link`](./link) component for reference. |
| `name` | `string` | The unique identifier of the node, either `name` or `to` must exist. |
| `disabled` | `boolean` | Whether the node is disabled. |
| `children` | `Array<Object>` | The child node array of the node, with the same item type as the [`items`](#props-items) prop array item. |
+++
^^^

^^^item-label
The `label` slot of the node.

Default content: renders the `Link` corresponding to the node.

Slot props refer to the [`item`](#slots-item) slot.
^^^

### Events

| Name | Description |
| -- | -- |
| ``activate`` | Triggered when the user clicks a node with `to`, and the parameter is the corresponding data item in [`items`](#props-items). |
| ``click`` | Triggered when the user clicks a node, and the parameter is the corresponding data item in [`items`](#props-items). |

### Icons
| Name | Description |
| -- | -- |
| ``expand`` | Expand. |
| ``more`` | More. |