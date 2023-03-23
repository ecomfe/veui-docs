# OptionGroup

:::tip
`Option` is required to be used within [`Select`](./select), [`Dropdown`](./dropdown) or other `OptionGroup`, and can be used with [`Option`](./option).
:::

## Demos

See [the demos of `Select`](./select#demos) or [the demos of `Dropdown`](./dropdown#demos).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``label`` | `string` | The descriptive label of the option group. |
| ``options`` | `Array<Object>` | `[]` | [^options] |
| ``position`` | `string` | `inline` | [^position] |
| ``overlay-class`` | `string | Array | Object=` | - | See the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object=` | - | See the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

^^^options
The list of options with the option type being `{label, value, disabled, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option. |
| `value` | `*` | The value of the option. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++
^^^

^^^position
The way to display child options.

+++Enum values
| Value | Description |
| -- | -- |
| `inline` | Displays child options inline. |
| `popup` | Displays child options in a separate popup menu. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the options dropdown. Can be used to place `Option`s or `OptionGroups`s when the [`options`](#props-options) prop is not specified. |
| ``label`` | [^slot-label] |
| ``group-label`` | [^slot-group-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |

^^^slot-label
The label of the option group. Displays the [`label`](#props-label) prop by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option group. |
| `disabled` | `boolean=` | Whether the option group is disabled. |
+++
^^^

^^^slot-group-label
The label text of each option group (option with child `options`). Displays the `label` of the option by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option group. |
| `disabled` | `boolean=` | Whether the option group is disabled. |
+++

Additionally, custom properties in current option, apart from the listed ones, will also be passes into the slot props object via `v-bind`.
^^^

^^^slot-option-label
The label text of each option (option without child `options`). Displays the `label` of the option by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option. |
| `value` | `*` | The value of the option. |
| `selected` | `boolean` | Whether the the option is selected. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++

Additionally, custom properties in current option, apart from the listed ones, will also be passes into the slot props object via `v-bind`.
^^^

^^^slot-option
The entire content area of each option (option without child `options`). Displays the default content of `Options` component by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option. |
| `value` | `*` | The value of the option. |
| `selected` | `boolean` | Whether the the option is selected. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++

Additionally, custom properties in current option, apart from the listed ones, will also be passes into the slot props object via `v-bind`.
^^^

### Icons

| Name | Description |
| -- | -- |
| ``expandable`` | Expandable options. |
