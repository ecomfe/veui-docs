# RadioButtonGroup

## Examples

### Size variants

Available [`ui`](#props-ui) prop values: `s` / `m`.

[[ demo src="/demo/radio-button-group/default.vue" ]]

### Simple style

Set [`ui`](#props-ui) prop value to `simple` to apply the style variant.

[[ demo src="/demo/radio-button-group/simple.vue" ]]

### Additional description

Set the `desc` field in the data source or use the [`desc`](#slots-desc) slot to specify additional description. The additional description will be displayed on hover.

[[ demo src="/demo/radio-button-group/desc.vue" ]]

### Minimum width

Set [`ui`](#props-ui) prop value to `stable` to enable minimum width for options, making the layout more stable in multi-line scenarios.

[[ demo src="/demo/radio-button-group/stable.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``value`` | `*` | - | [^value] |
| ``disabled`` | `boolean` | `false` | Whether the component is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the component is read-only. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size. |
| `m` | Medium size. |
| `simple` | Simple style. |
| `stable` | Stable style. Adds a minimum width to all buttons to make the layout more stable and easier to align between multiple lines. |
^^^

^^^items
Data source of radio buttons. The type of each item is `{ label, value, disabled, desc, ... }`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Text description of the option. |
| `value` | `*` | Value corresponding to the option. |
| `disabled` | `boolean` | Whether the option is disabled. |
| `desc` | `string` | Additional description information for the option. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The list of `value` of selected options in `items`.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^slot-item] |
| ``desc`` | Additional description information for the button. Slot parameters are the same as those of the [`item`](#slots-item) slot. |

^^^slot-item
Text area inside the button.

Default content: `label` attribute value.

+++Slot parameters
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Option text. |
| `value` | `string` | Option value. |
| `index` | `number` | Option index in `items`. |
| `disabled` | `boolean` | Whether the option is disabled. |
| `desc` | `string` | Additional description information for the option. |
+++

In addition, properties other than those described above in the `items` data will also be automatically bound to slot parameters via `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |

^^^event-change
:::badges
`v-model`
:::

Triggered after the selection status changes. The callback parameter is `(value: *)`. `value` is the value of the `value` field of the currently selected option in the button group.
^^^

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-checkbox-button-min-width`` | `<length>` | - | Minimum width of options when [`ui`](#props-ui) is set to `stable`. |
