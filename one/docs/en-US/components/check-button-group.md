# CheckButtonGroup

## Examples

### Size

Available [`ui`](#props-ui) prop values: `s` / `m`.

[[ demo src="/demo/check-button-group/default.vue" ]]

### Simple style

Set [`ui`](#props-ui) prop value to `simple` for a simple style.

[[ demo src="/demo/check-button-group/simple.vue" ]]

### Mixed selection

Use the [`exclusive`](#props-exclusive) and [`empty-value`](#props-empty-value) props to achieve some scenarios where single and multiple selections coexist.

[[ demo src="/demo/check-button-group/exclusive.vue" ]]

### Additional description

Set the `desc` field in the data source items or specify the additional description through the [`desc`](#slots-desc) slot. The additional description will be displayed when hovering.

[[ demo src="/demo/check-button-group/desc.vue" ]]

### Minimum width

Set the [`ui`](#props-ui) prop value to `stable` to enable a minimum width for options, making the layout more stable in multi-line scenarios.

[[ demo src="/demo/check-button-group/stable.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``value`` | `Array` | `[]` | [^value] |
| ``disabled`` | `boolean` | `false` | Whether the component is in a disabled state. |
| ``readonly`` | `boolean` | `false` | Whether the component is in a read-only state. |
| ``empty-value`` | `*` | - | The default selected value when all selections are canceled, usually used in scenarios with the `exclusive` prop. |

^^^ui
Preset styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
| `simple` | Simple style. |
| `stable` | Stable style. Adds a minimum width to all buttons to make the layout more stable, making it easier to align between multiple lines. |
^^^

^^^items
Check button group data source, item type: `{ label, value, disabled, exclusive, desc, ... }`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Text description of the option. |
| `value` | `*` | The value corresponding to the option. |
| `disabled` | `boolean` | Whether the option is disabled. |
| `exclusive` | `boolean` | Whether the option is exclusive. When the option is exclusive, selecting it will deselect all other options. |
| `desc` | `string` | Additional description information of the option. |
+++
^^^

^^^value
:::badges
`v-model`
:::

List of `value` fields of selected items in `items`.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^slot-item] |
| ``desc`` | Additional description information of the button, with the same slot props as [`item`](#slots-item). |

^^^slot-item
Text area inside the button.

Default content: `label` prop value.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Option text. |
| `value` | `*` | Option value. |
| `index` | `number` | The index of the option in `items`. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

In addition, other fields in the data items of `items` besides those described above will be automatically bound to the slot props via `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |

^^^event-change
:::badges
`v-model`
:::

Triggered when the selection state changes, callback parameter is `(value: Array)`. `value` is an array of `value` fields of the currently selected options in the button group.
^^^

### Icons

| Name | Description |
| -- | -- |
| ``check`` | Selected icon. |

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-checkbox-button-min-width`` | `<length>` | - | The minimum width of the option when the [`ui`](#props-ui) prop is set to `stable`. |
