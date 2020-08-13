# Dropdown

:::tip
`Dropdown` can be used with embedded [`Option`](./option) or [`OptionGroup`](./option-group).
:::

## Demos

### Style variants

Available style variants for the `ui` prop: `primary`/`text`.

[[ demo src="/demo/dropdown/style.vue" ]]

### Size variants

Available size values for the `ui` prop: `xs`/`s`/`m`/`l`.

[[ demo src="/demo/dropdown/size.vue" ]]

### Using embedded `OptionGroup`s & `Option`s

Can be used with embedded `OptionGroup`s & `Option`s.

[[ demo src="/demo/dropdown/inline.vue" ]]

### Searchable dropdown

Using`searchable` prop to make the component support search functionality.

[[ demo src="/demo/dropdown/searchable.vue" ]]

### Disabled dropdown

Use the `disabled` property in `options` items to disable single option.

[[ demo src="/demo/dropdown/disable.vue" ]]

### Trigger and split

Use the `trigger` prop to specify when to open the dropdown menu. Use the `split` prop to separate command button and dropdown button.

[[ demo src="/demo/dropdown/other.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `options` | `Array<Object>=` | `[]` | [^options] |
| `label` | `string` | - | The descriptive label of the dropdown button. |
| `trigger` | `string=` | `'click'` | When to trigger the dropdown to open. Available values are `'click'`/`'hover'`. |
| `split` | `boolean=` | `false` | Whether to split the dropdown button into a command button and a toggle button for the dropdown layer. |
| `disabled` | `boolean=` | `false` | Whether the dropdown is disabled. |
| `overlay-class` | `string|Array|Object=` | - | See the `overlay-class` prop of [`Overlay`](./overlay). |

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
| `options` | `Array<Object>=` | The child options of current option. The item type is the same as the items of the `options` prop. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | The content of the options dropdown layer. Can be used to place `Option`s or `OptionGroups`s when the `options` prop is not specified. |
| `before` | The content before the options in the dropdown layer. |
| `after` | The content after the options in the dropdown layer. |
| `label` | [^scoped-slot-label] |
| `group-label` | [^scoped-slot-group-label] |
| `option-label` | [^scoped-slot-option-label] |
| `option` | [^scoped-slot-option] |

^^^scoped-slot-label
The content of the select button. Displays the `label` prop by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the dropdown option. |
+++
^^^

^^^scoped-slot-group-label
The label text of each option group (option with child `options`). Displays the `label` of the option by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option group. |
| `disabled` | `boolean=` | Whether the option group is disabled. |
+++

Additionally, custom properties in current option, apart from the listed ones, will also be passes into the scope object via `v-bind`.
^^^

^^^scoped-slot-option-label
The label text of each option (option without child `options`). Displays the `label` of the option by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option. |
| `value` | `*` | The value of the option. |
| `selected` | `boolean` | Whether the the option is selected. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++

Additionally, custom properties in current option, apart from the listed ones, will also be passes into the scope object via `v-bind`.
^^^

^^^scoped-slot-option
The entire content area of each option (option without child `options`). Displays the default content of `Options` component by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option. |
| `value` | `*` | The value of the option. |
| `selected` | `boolean` | Whether the the option is selected. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++

Additionally, custom properties in current option, apart from the listed ones, will also be passes into the scope object via `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| `click` | Triggered when an option is clicked. The callback parameter list is `(value: *=)`. `value` is the `value` property of the option being clicked. Also triggered when `split` is `true` and the command button is clicked, in this case there won't be a `value` argument. |

### Icons

| Name | Description |
| -- | -- |
| `expand` | Expand the dropdown layer. |
| `collapse` | Collapse the dropdown layer. |
