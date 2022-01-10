# Anchor

## Demo

### Basic Anchor

Use [`container`](#props-container) property to set the container in which scrolling occurs. When the `Anchor` component is not in the container (that is, it does not scroll with the container), you do not need to set [`sticky`](#props-sticky ) property.

[[ demo src="/demo/anchor/normal.vue" ]]

### Adsorption Anchor

When `Anchor` component is in the container (rolling with the container), you can set [`sticky`](#props-sticky) property to control the adsorption of the component when it rolls out of the container.

[[ demo src="/demo/anchor/sticky.vue" ]]

### Specify Offset

Use [`target-offset`](#props-target-offset) property to control where the anchor point scrolls to the container to start to be active.

Use [`sticky-offset`](#props-sticky-offset) property to control where the `Anchor` is in the container to start the adsorption.

[[ demo src="/demo/anchor/offset-en.vue" ]]

## API

### Anchor Props

| Name | Types | Default | Description |
| -- | -- | -- | -- |
| ``items`` | `Array<{value, label, children}>` | `[]` | [^items] |
| ``sticky`` | `boolean=` | `false` | Produce adsorption effect. |
| ``container`` | `string | HTMLElement | Window=` | - | `Anchor` adsorption and determine the container referenced by the anchor point activation. |
| ``target-offset`` | `string | number=` | `0` | When an anchor point is in the `target-offset` position to the container, then the corresponding anchor point link is active. The numeric type value is a `px`, and a string such as `'10%'` can also be passed in. The calculation will be based on the proportion of the height of the container corresponding to the `container`. |
| ``sticky-offset`` | `string | number=` | `0` | sticky `Anchor`, when the container rolls to the position of `sticky-offset`, then the `Anchor` starts to adsorb. Different value types have the same meaning as [`target-offset`](#props-target-offset) property. |

^^^items
Data source array, item type is `{label, value, children, ...}`.

+++Field
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Text description of the node. |
| `value` | `string` | Value corresponding to the node is generally an in-page hash, such as `#button`. |
| `children` | `Array<Object>=` | Child node array of the node, Array item type is the same as the [`items`](#props-items) array item. |
+++
^^^

### Anchor Slots

| Name | Description |
| -- | -- |
| ``item`` | [^slot-item] |
| ``item-label`` | [^slot-item-label] |

^^^slot-item
Render each anchor link.

Default content: anchor link.

Scope parameters, see [`items`](#props-items) property details.
^^^

^^^slot-item-label
Render the text of each anchor link.

Default content: the description text `label` of the anchor link.

Scope parameters, see [`item`](#slots-item) slots.
^^^
