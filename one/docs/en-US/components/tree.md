# Tree

## Examples

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `m` / `s`.

[[ demo src="/demo/tree/size.vue" ]]

### Expanded and selected

[[ demo src="/demo/tree/default.vue" ]]

### Custom content

[[ demo src="/demo/tree/custom-item.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``expanded`` | `Array` | `[]` | [^expanded] |
| ``checkable`` | `boolean` | `false` | Whether child nodes can be checked. |
| ``checked`` | `Array` | `[]` | [^checked] |
| ``selectable`` | `boolean` | `false` | Whether the node is selected when the entire node area is clicked. |
| ``selected`` | `string` | - | [^selected] |
| ``merge-checked`` | `string` | `keep-all` | [^merge-checked] |
| ``include-indeterminate`` | `boolean` | `false` | Whether to include nodes in an indeterminate state in the selected nodes. If a non-leaf node in the [`datasource`](#props-datasource) has some of its descendant nodes selected, it is in an indeterminate state.

^^^ui
Preset style.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size. |
| `m` | Medium size. |
+++
^^^

^^^datasource
An array of data sources, each item in the array has the following properties: `{label, value, disabled, children, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the node. |
| `value` | `string` | The value corresponding to the node. |
| `disabled` | `boolean` | Whether the node is disabled. |
| `children` | `Array<Object>` | An array of child nodes for the node. The item type is the same as the item type in the `datasource` array. |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

Specifies the currently expanded nodes, which is an array of the `value` property of nodes in the `datasource` array.
^^^

^^^checked
:::badges
`v-model`
:::

The values of currently checked leaf nodes, which is an array of the `value` property of nodes in the `datasource` array.
^^^

^^^selected
:::badges
`.sync`
:::

The values of currently selected leaf nodes, which is an array of the `value` property of nodes in the `datasource` array.
^^^

^^^merge-checked

The strategy for merging checked values.

+++Enum values
| Value | Description |
| -- | -- |
| `keep-all` | Both parent and child nodes are included in the checked values. |
| `upwards` | Merge checked values upward as much as possible towards ancestors. |
| `downwards` | Merge checked values downward as much as possible towards descendants. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^item] |
| ``item-label`` | The text area of each node. The slot props are the same as the [`item`](#slots-item) slot. |
| ``item-before`` | The area before the text of each node. The slot props are the same as the [`item`](#slots-item) slot. |
| ``item-after`` | The area after the text of each node. The slot props are the same as the [`item`](#slots-item) slot. |

^^^item
The entire content area of each node.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the node. |
| `value` | `string` | The value corresponding to the node. |
| `disabled` | `boolean` | Whether the node is disabled. |
| `children` | `Array<Object>` | An array of child nodes for the node. The item type is the same as the item type in the `datasource` array. |
| `index` | `number` | The index of the current data node in the hierarchy of the parent node. |
| `depth` | `number` | The depth of the current data node in the tree. |
+++

In addition, any properties in the data item in [`datasource`](#props-datasource) other than the properties described above will also be automatically bound to slot props through `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``click`` | [^click] |
| ``expand`` | [^expand] |
| ``collapse`` | [^collapse] |
| ``check`` | [^check] |

^^^click
Fired when a node is clicked. Callback parameter: `(item, parents, index, depth)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `item` | `Object` | The node data. The type of the array items is the same as the `datasource` property. |
| `parents` | `Array<Object>` | The path from the root node to the current node's parent node. The type of the array items is the same as the `datasource` property. |
| `index` | `number` | The index of the current node in its own level. |
| `depth` | `number` | The depth of the current node in the tree hierarchy. |
+++
^^^

^^^expand
Fired when a node is expanded. Callback parameter: `(item, index, depth)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `item` | `Object` | The node data. The type of the array items is the same as the `datasource` property. |
| `index` | `number` | The index of the current node in its own level. |
| `depth` | `number` | The depth of the current node in the tree hierarchy. |
+++
^^^

^^^collapse
Fired when the collapse icon or the entire node is clicked. Determined by the [`item-click`](#props-item-click) prop. Callback parameter: `(item, index, depth)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `item` | `Object` | The node data. The type of the array items is the same as the `datasource` property. |
| `index` | `number` | The index of the current node in its own level. |
| `depth` | `number` | The depth of the current node in the tree hierarchy. |
+++
^^^

^^^check
:::badges
`v-model`
:::

Fired when the check state changes. Callback parameter: `(value: Array)`. The `value` is an array consisting of the `value` field of the currently checked leaf nodes (affected by the [`keys`](#props-keys) prop).
^^^

### Icons

| Name | Description |
| -- | -- |
| ``expand`` | The icon for the collapsed state, which expands when clicked. |
| ``collapse`` | The icon for the expanded state, which collapses when clicked. |
