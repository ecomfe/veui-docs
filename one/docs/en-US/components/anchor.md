# Anchor

## Demos

### Basic anchor

Use the [`container`](#props-container) prop to set the container where scrolling occurs. When the `Anchor` component is not in the container (i.e. it does not scroll with the container), there's no need to set the [`sticky`](#props-sticky ) prop.

[[ demo src="/demo/anchor/normal.vue" ]]

### Sticky anchor

When the `Anchor` component is in the container (rolling with the container), the [`sticky`](#props-sticky) prop can be set to control the attachment of the component when it scrolls out of the container.

[[ demo src="/demo/anchor/sticky.vue" ]]

### Specify offset

Use the [`target-offset`](#props-target-offset) prop to control where the anchor scrolls into the container and becomes active.

Use the [`sticky-offset`](#props-sticky-offset) prop to control where in the container the `Anchor` starts to attach.

[[ demo src="/demo/anchor/offset.vue" ]]

## API

### Props

| Name | Types | Default | Description |
| -- | -- | -- | -- |
| ``items`` | `Array<{value, label, children}>` | `[]` | [^items] |
| ``sticky`` | `boolean=` | `false` | Whether to apply sticky effect. |
| ``container`` | `string | HTMLElement | Window=` | - | The container which the `Anchor` component attaches to and checks active state against. |
| ``target-offset`` | `string | number=` | `0` | When an anchor is at the `target-offset` position of the container, then the corresponding anchor link is active. The numeric type value is a `px` value, or a percentage string such as `'10%'` can also be used, which will be calculated based on the height of the `container`. |
| ``sticky-offset`` | `string | number=` | `0` | For a sticky `Anchor`, when the container scrolls to the `sticky-offset` position, then the `Anchor` starts to attach. Different value types have the same meaning as the [`target-offset`](#props-target-offset) prop. |

^^^items
The datasource array. The type of each item is `{label, value, children, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive labe of the item. |
| `value` | `string` | The value of the item, usually an in-page hash, such as `#button`. |
| `children` | `Array<Object>=` | The children array of the item, with the same type as the [`items`](#props-items) array item. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^slot-item] |
| ``item-label`` | [^slot-item-label] |

^^^slot-item
Renders each anchor link.

Default content: anchor link.

See the [`items`](#props-items) prop for scope properties details.
^^^

^^^slot-item-label
Renders the label of each anchor link.

Default content: the `label` of the anchor link.

See the [`items`](#props-items) prop for scope properties details.
^^^
