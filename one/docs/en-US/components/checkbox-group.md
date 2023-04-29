# CheckboxGroup

## Examples

### Size variants

Available [`ui`](#props-ui) prop values: `s` / `m`.

[[ demo src="/demo/checkbox-group/default.vue" ]]

### Mixed selection

[`exclusive`](#props-exclusive) and [`empty-value`](#props-empty-value) can be used to enable coexistence of single and multiple selection scenarios.

[[ demo src="/demo/checkbox-group/exclusive.vue" ]]

### Additional description

Set the `desc` field in the data source item or specify additional description through the [`desc`](#slots-desc) slot. The additional description will be displayed when hovering over.

[[ demo src="/demo/checkbox-group/desc.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``value`` | `Array` | `[]` | [^value] |
| ``disabled`` | `boolean` | `false` | Whether the component is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the component is read-only. |
| ``empty-value`` | `*` | - | The default value of the component when all selections are cancelled. Usually used in scenarios where `exclusive` option exists. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
^^^

^^^items
Data source of the checkbox group. The item type is `{ label, value, disabled, exclusive, desc, ... }`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Text description of the option. |
| `value` | `*` | The value corresponding to the option. |
| `disabled` | `boolean` | Whether the option is disabled. |
| `exclusive` | `boolean` | Whether the option is exclusive. |
| `desc` | `string` | Additional description information of the option. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The list of `value` of selected items in `items`.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^slot-item] |
| ``desc`` | Additional description information of the button, slot props are the same as the [`item`](#slots-item) slot. |

^^^slot-item
Area for option description text.

Default content: `label` prop value.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Option text. |
| `value` | `*` | Option value. |
| `index` | `number` | The index of the option in `items`. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

In addition, other properties in the `items` data item that are not described above will also be automatically bound to the slot props through `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |

^^^event-change
:::badges
`v-model`
:::

Triggered after the selection state changes, with the callback parameter `(value: Array)`. `value` is an array composed of the `value` properties of the selected items in the current checkbox group.
^^^
