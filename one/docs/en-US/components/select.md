# Select

:::tip
`Select` can be used with embedded [`Option`](./option) or [`OptionGroup`](./option-group).
:::

## Demos

### Size variants

Available size variants for the `ui` prop: `xs`/`s`/`m`/`l`.

[[ demo src="/demo/select/size.vue" ]]

### Using embedded `OptionGroup`s & `Option`s

Can be used with embedded `OptionGroup`s & `Option`s.

[[ demo src="/demo/select/inline.vue" ]]

### Searchable options

Use the `searchable` prop to make options searchable.

[[ demo src="/demo/select/searchable.vue" ]]

### Multiple selections

Use the `multiple` prop to enable multiple selections.

[[ demo src="/demo/select/multiple.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `options` | `Array<Object>` | `-` | [^options] |
| `value` | `Array<*>|*` | - | [^value] |
| `multiple` | `boolean` | `false` | Whether users can select multiple items. |
| `max` | `number` | - | The max items users can select. |
| `placeholder` | `string` | `select.placeholder` | Placeholder text when no option is selected. |
| `clearable` | `boolean` | `false` | Whether the select is clearable. |
| `searchable` | `boolean` | `false` | Whether the options are searchable. |
| `filter` | `function` | - | Filter function for the options. The type is `function(option: Object): boolean`. The type of `option` is the same as the `options` prop. The return value denotes whether the option is shown inside the options dropdown. |
| `expanded` | `boolean=` | `false` | [^expanded] |
| `disabled` | `boolean=` | `false` | Whether the select is disabled. |
| `readonly` | `boolean=` | `false` | Whether the select is read-only. |
| `overlay-class` | `string|Array|Object=` | - | See the `overlay-class` prop of [`Overlay`](./overlay). |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small. |
| `s` | Small. |
| `m` | Medium. |
| `l` | Large. |
^^^

^^^options
The list of options with the option type being `{label, value, options, disabled, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option. |
| `value` | `*` | The value of the option. |
| `options` | `Array<Object>=` | The child options of current option. The item type is the same as the items of the `options` prop. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The value of the selected option.
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
| `default` | The content of the options dropdown layer. Can be used to place `Option`s or `OptionGroups`s when the `options` prop is not specified. |
| `before` | [^slot-before] |
| `after` | The content after the options in the dropdown layer. No default content. |
| `label` | [^slot-label] |
| `group-label` | [^slot-group-label] |
| `option-label` | [^slot-option-label] |
| `option` | [^slot-option] |
| `trigger` | [^slot-trigger] |

^^^slot-before
The content before the options in the dropdown layer. No default content.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `value` | `*` | The value of the selected option. |
| `select` | `function(value: *): void` | To select a specified value. |
| `expanded` | `boolean` | Whether the dropdown menu is expanded or not. |
| `toggle` | `function(force?: boolean): void` | Used to toggle the expanded state of the dropdown menu. |
+++
^^^

^^^slot-label
The content of the select button. Displays the `label` of selected option or the text content of the selected embedded option by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the selected option. |
| `value` | `*` | The value of the selected option. |
| `selected` | `boolean` | Whether the select has a selected value. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++

Additionally, custom properties apart from the listed ones will also be passes into the scope object via `v-bind`.
^^^

^^^slot-group-label
The label text of each option group (option with child `options`). Displays the `label` of the option by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option group. |
| `disabled` | `boolean=` | Whether the option group is disabled. |
+++

Additionally, custom properties in current option, apart from the listed ones, will also be passes into the scope object via `v-bind`.
^^^

^^^slot-option-label
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

^^^slot-option
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

^^^slot-trigger
The entire drop-down trigger area. Displays the select input by default.

+++Scope properties
| Name | Type | Description |
| --- | --- | --- |
| `attrs` | `Object` | Attributes that need to be output to the trigger element, including `aria-*`/`disabled`, etc., can be output using `v-bind="attrs"`. |
| `value` | `*` | The value of the selected option. |
| `select` | `function(value: *): void` | To select a specified value. |
| `handlers` | `Object` | [^handlers-desc] |
| `expanded` | `boolean` | Whether the dropdown menu is expanded or not. |
| `toggle` | `function(force?: boolean): void` | Used to toggle the expanded state of the dropdown menu. |
+++
^^^

^^^^handlers-desc
Event listeners that need to be bound to the trigger element, can be output using `v-on="handlers"`.

:::tip
The element used to bind `handlers` needs to support focus acquisition so that various keyboard interactions can still be triggered properly.
:::
^^^

### Events

| Name | Description |
| -- | -- |
| `change` | [^event-change] |
| `toggle` | Triggered when the expanded state is going to change. The callback parameter list is `(expanded: boolean)`. `expanded` denotes whether the dropdown menu is to be expanded or collapsed. |

^^^event-change
:::badges
`v-model`
:::

Triggers when the selected option changed. The callback parameter list is `(value: *)` and `value` is the value of the selected option.
^^^

### Global config

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| `select.placeholder` | `string` | `@@select.placeholder` | The placeholder text when no option is selected. |

:::tip
`@@` prefixed values denote corresponding properties in the locale settings.
:::

### Icons

| Name | Description |
| -- | -- |
| `expand` | Expand the dropdown layer. |
| `collapse` | Collapse the dropdown layer. |
