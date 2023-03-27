# Tree

## Demos

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `s` / `m`.

[[ demo src="/demo/tree/size.vue" ]]

### Item click behavior

[[ demo src="/demo/tree/default.vue" ]]

### Customize content

[[ demo src="/demo/tree/custom-item.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``expanded`` | `Array` | `[]` | [^expanded] |
| ``checkable`` | `boolean` | `false` | Whether the rows are checkable. |
| ``checked`` | `Array` | `[]` | [^checked] |
| ``selectable`` | `boolean` | `false` | Whether the nodes are selectable. |
| ``selected`` | `string` | - | [^selected] |
| ``merge-checked`` | `string` | `keep-all` | [^merge-checked] |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small tree. |
| `m` | Medium tree. |
+++
^^^

^^^datasource
The datasource of the tree. The type of node item is `{label, value, children, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of each node. |
| `value` | `string` | The value of each node. |
| `children` | `Array<Object>` | The child nodes of each node. The item type is the same as `datasource` items. |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

An array consists of the `value` from datasource items that denotes the expanded nodes.
^^^

^^^checked
:::badges
`v-model`
:::

An array consists of the `value` from datasource items that denotes the checked nodes.
^^^

^^^selected
:::badges
`.sync`
:::

An array consists of the `value` from datasource items that denotes the selected nodes.
^^^

^^^merge-checked

Merge strategy for selected values. When all child nodes under a node are selected, you can choose to keep only the parent node, only the child nodes, or both.

+++Enumerated values
| Value | Description |
| --- | --- |
| `keep-all` | The parent and child nodes will both be in the selected value. |
| `upwards` | Merge selected values as far as possible in the ancestor direction. |
| `downwards` | Merge selected values in the direction of descendants if possible. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^item] |
| ``item-label`` | The label of each node. Shares the same slot props with the [`item`](#slots-item) slot. |
| ``item-before`` | The area before the label of each node. Shares the same slot props with the [`item`](#slots-item) slot. |
| ``item-after`` | The area after the label of each node. Shares the same slot props with the [`item`](#slots-item) slot. |

^^^item
The content of each entire node.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of current node. |
| `value` | `string` | The value of current node. |
| `children` | `Array<Object>` | The array of the child nodes of each node. Shares the same type with `datasource` items. |
| `index` | `number` | The index value of current node among its siblings. |
| `depth` | `number` | The depth of current node. |
+++

Additionally, custom properties apart from the listed ones will also be passes into the slot props object via `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``click`` | [^click] |
| ``expand`` | [^expand] |
| ``collapse`` | [^collapse] |

^^^click
Triggered when the node is clicked. The callback parameter list is `(item, parents, index, depth)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `item` | `Object` | The node item. Shares the same type with `datasource` items. |
| `parents` | `Array<Object>` | All ancestor nodes from the top level down to the clicked node. Shares the same item type with `datasource` items. |
| `index` | `number` | The index of the clicked node among its siblings. |
| `depth` | `number` | The depth of the clicked node in the tree. |
+++
^^^

^^^expand
Triggered when the node is expanded. The callback parameter list is `(item, index, depth)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `item` | `Object` | The node item. Shares the same type with `datasource` items. |
| `index` | `number` | The index of the expanded node among its siblings. |
| `depth` | `number` | The depth of the expanded node in the tree. |
+++
^^^

^^^collapse
Triggered when the node is collapsed. The callback parameter list is `(item, index, depth)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `item` | `Object` | The node item. Shares the same type with `datasource` items. |
| `index` | `number` | The index of the collapsed node among its siblings. |
| `depth` | `number` | The depth of the collapsed node in the tree. |
+++
^^^

### Icons

| Name | Description |
| -- | -- |
| ``expand`` | Click to expand (currently being collapsed). |
| ``collapse`` | Click to collapse (currently being expanded). |
