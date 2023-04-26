# Dropdown

:::tip
`Dropdown` can be used with embedded [`Option`](./option) or [`OptionGroup`](./option-group).
:::

## Examples

### Style variants

Available style variants for the [`ui`](#props-ui) prop: `primary` / `text`.

[[ demo src="/demo/dropdown/style.vue" ]]

### Size variants

Available size values for the [`ui`](#props-ui) prop: `xs` / `s` / `m` / `l`.

[[ demo src="/demo/dropdown/size.vue" ]]

### Embedded options

Can be used with embedded `OptionGroup`s & `Option`s.

[[ demo src="/demo/dropdown/inline.vue" ]]

### Searchable dropdown

Using[`searchable`](#props-searchable) prop to make the component support search functionality.

[[ demo src="/demo/dropdown/searchable.vue" ]]

### Disabled dropdown

Use the `disabled` property in `options` items to disable single option.

[[ demo src="/demo/dropdown/disable.vue" ]]

### Trigger and split

Use the [`trigger`](#props-trigger) prop to specify when to open the dropdown menu. Use the [`split`](#props-split) prop to separate command button and dropdown button.

[[ demo src="/demo/dropdown/other.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``options`` | `Array<Object>` | `[]` | [^options] |
| ``label`` | `string` | - | The descriptive label of the dropdown button. |
| ``trigger`` | `string` | `'click'` | When to trigger the dropdown to open. Available values are `'click'` / `'hover'`. |
| ``split`` | `boolean` | `false` | Whether to split the dropdown button into a command button and a toggle button for the dropdown layer. |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``disabled`` | `boolean` | `false` | Whether the dropdown is disabled. |
| ``overlay-class`` | `string | Array | Object` | - | See the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | See the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `primary` | Primary style. |
| `text` | Text style. |
| `xs` | Extra small. |
| `s` | Small. |
| `m` | Medium. |
| `l` | Large. |
^^^

^^^options
The list of options with the option type being `{label, value, dropdown, disabled, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option. |
| `value` | `*` | The value of the option. |
| `options` | `Array<Object>` | The child options of current option. The item type is the same as the items of the [`options`](#props-options) prop. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

Whether the dropdown menu is expanded.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the options dropdown layer. Can be used to place `Option`s or `OptionGroups`s when the [`options`](#props-options) prop is not specified. |
| ``before`` | The content before the options in the dropdown layer. |
| ``after`` | The content after the options in the dropdown layer. |
| ``label`` | [^slot-label] |
| ``group-label`` | [^slot-group-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``trigger`` | [^slot-trigger] |

^^^slot-label
The content of the select button. Displays the [`label`](#props-label) prop by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the dropdown option. |
+++
^^^

^^^slot-group-label
The label text of each option group (option with child `options`). Displays the `label` of the option by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option group. |
| `disabled` | `boolean` | Whether the option group is disabled. |
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
| `disabled` | `boolean` | Whether the option is disabled. |
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
| `disabled` | `boolean` | Whether the option is disabled. |
+++

Additionally, custom properties in current option, apart from the listed ones, will also be passes into the slot props object via `v-bind`.
^^^

^^^slot-trigger
The entire drop-down trigger area. Displays the dropdown button by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `attrs` | `Object` | Attributes that need to be output to the trigger element, including `aria-*` / `disabled`, etc., can be output using `v-bind="attrs"`. |
| `handlers` | `Object` | [^handlers-desc] |
| `expanded` | `boolean` | Whether the dropdown menu is expanded or not. |
| `toggle` | `function(force?: boolean): void` | Used to toggle the expanded state of the dropdown menu. |
+++
^^^

^^^handlers-desc
Event listeners that need to be bound to the trigger element, can be output using `v-on="handlers"`.

:::tip
The element used to bind `handlers` needs to support focus acquisition so that various keyboard interactions can still be triggered properly.
:::
^^^

### Events

| Name | Description |
| -- | -- |
| ``click`` | Triggered when an option is clicked. The callback parameter list is `(value: *=)`. `value` is the `value` property of the option being clicked. Also triggered when `split` is `true` and the command button is clicked, in this case there won't be a `value` argument. |
| ``toggle`` | Triggered when the expanded state is going to change. The callback parameter list is `(expanded: boolean)`. `expanded` denotes whether the dropdown menu is to be expanded or collapsed. |

### Icons

| Name | Description |
| -- | -- |
| ``expand`` | Expand the dropdown layer. |
| ``collapse`` | Collapse the dropdown layer. |
