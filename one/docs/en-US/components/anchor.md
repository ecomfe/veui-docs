Please wrap the entire output inside a *one single* code block!

# Anchor

## Examples

### Normal anchor

Use the [`container`](#props-container) prop to set the scrolling container. When the `Anchor` component is not in the container (i.e., not scrolling with the container), the [`sticky`](#props-sticky) prop does not need to be set.

[[ demo src="/demo/anchor/normal.vue" ]]

### Sticky anchor

When the `Anchor` component is in the container (scrolling with the container), the [`sticky`](#props-sticky) prop can be set to prevent the component from scrolling out of the container.

[[ demo src="/demo/anchor/sticky.vue" ]]

### Specify offsets

Use the [`target-offset`](#props-target-offset) prop to control where the anchor starts to be activated when it scrolls to a position in the container.

Use the [`sticky-offset`](#props-sticky-offset) prop to control where the `Anchor` starts to become sticky to the container when it scrolls to a position.

[[ demo src="/demo/anchor/offset.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``items`` | `Array<{value, label, children}>` | `[]` | [^items] |
| ``sticky`` | `boolean` | `false` | Whether the component has sticky effect. |
| ``container`` | `string | HTMLElement | Window` | - | The container which `Anchor` sticks to and where activation is calculated against. |
| ``target-offset`` | `string | number` | `0` | When a certain anchor is at the `target-offset` position from the container, the corresponding anchor link is activated. The numerical value is in `px`, or a percentage string like `'10%'` can be passed in, which will be calculated based on the height ratio of the corresponding `container`. |
| ``sticky-offset`` | `string | number` | `0` | For the sticky `Anchor`, when the container scrolls to the `sticky-offset` position, the `Anchor` starts to become sticky. The meaning of different value types is the same as that of the [`target-offset`](#props-target-offset) prop. |

^^^items
The data source array, where each item is of type `{label, value, children, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the node. |
| `value` | `string` | The value corresponding to the node, usually the page hash, such as `#button`. |
| `children` | `Array<Object>` | The array of child nodes of the node, with the same item type as the `items` array. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^slot-item] |
| ``item-label`` | [^slot-item-label] |

^^^slot-item
Render each anchor link.

Default content: Anchor link.

The scope parameter refers to the [`items`](#props-items) property details.
^^^

^^^slot-item-label
Render the text of each anchor link.

Default content: The description text of the anchor link, `label`.

The scope parameter refers to the [`item`](#slots-item) slot.
^^^
