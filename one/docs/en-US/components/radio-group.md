# RadioGroup

## Examples

### Size variants

Available [`ui`](#props-ui) prop values: `s` / `m`.

[[ demo src="/demo/radio-group/default.vue" ]]

### Additional description

Set the `desc` property in the data source project or specify additional description through the [`desc`](#slots-desc) slot. The additional description will be displayed on hover.

[[ demo src="/demo/radio-group/desc.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``value`` | `*` | - | [^value] |
| ``disabled`` | `boolean` | `false` | Whether it is disabled. |
| ``readonly`` | `boolean` | `false` | Whether it is read-only. |

^^^ui
Predefined style.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
^^^

^^^items
Radio group data source, with project type `{ label, value, disabled, desc, ... }`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the option. |
| `value` | `*` | The value corresponding to the option. |
| `disabled` | `boolean` | Whether the option is disabled. |
| `desc` | `string` | Additional description information for the option. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The `value` of the selected option in `items`.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^slot-item] |
| ``desc`` | Additional description information for the button, with slot props same as the [`item`](#slots-item) slot. |

^^^slot-item
Option description text area.

Default content: `label` property value.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Option text. |
| `value` | `*` | Option value. |
| `index` | `number` | The index of the option in `items`. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

In addition, other properties in the data item in `items` will also be automatically bound to the slot props through `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |

^^^event-change
:::badges
`v-model`
:::

Triggered after the selection state changes, with the callback parameter `(value: *)`. `value` is the value of the `value` property in the currently selected options of the button group.
^^^
