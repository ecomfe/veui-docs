# RegionPicker

## Demos

[[ demo src="/demo/region-picker/default.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `datasource` | `Array<Object>` | `[]` | [^datasource] |
| `selected` | `Array<string>` | - | [^selected] |
| `include-indeterminate` | `boolean` | `false` | Whether to include indeterminate node into selected nodes. Non-leaf nodes inside `datasource` will be in indeterminate state if their descendant nodes are partially selected. |
| `disabled` | `boolean=` | `false` | Whether the region picker is disabled. |
| `readonly` | `boolean=` | `false` | Whether the region picker is read-only. |

^^^datasource
The datasource of the region picker. The type of node item is `{label, value, disabled, children, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the node. |
| `value` | `string` | The value of the node. |
| `disabled` | `boolean=` | Whether the node is disabled. |
| `children` | `Array<Object>=` | The child nodes of the node. The node type is the same as `datasource` items. |
+++
^^^

^^^selected
:::badges
`v-model`
:::

The array of selected `value`s.
^^^

### Slots

| Name | Description |
| -- | -- |
| `label` | [^slot-label] |

^^^slot-label
The label content of each node. Displays the `label` property of each item by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the node. |
| `value` | `string` | The value of the node. |
| `disabled` | `boolean=` | Whether the node is disabled. |
| `children` | `Array<Object>=` | The child nodes of the node. The node type is the same as `datasource` items. |
| `level` | `number` | The depth of the node within the tree structure. `0` stands for the top level. |
| `overlay` | `boolean=` | Whether the node is displayed inside the overlay. |
+++

Additionally, custom properties apart from the listed ones will also be passes into the scope object via `v-bind`.

:::tip
When `level` is `2` and `overlay` is `true`, the information of selected node count vs total node count will be displayed after the node label.
:::
^^^

### Events

| Name | Description |
| -- | -- |
| `select` | [^event-select] |

^^^event-select
:::badges
`v-model`
:::

Triggered when the selection changed. The callback parameter list is `(value: Array)`. The type of `value` is the same as the `selected` prop.
^^^
