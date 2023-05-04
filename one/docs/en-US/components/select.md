# Select

:::tip
The `Select` component can be used inline with the [`Option`](./option) or [`OptionGroup`](./option-group) components.
:::

## Examples

### Size variants

Available `ui` prop values: `xs` / `s` / `m` / `l`.

[[ demo src="/demo/select/size.vue" ]]

### Inline options

Use the `OptionGroup` and `Option` components inside the `Select` component to replace the [`options`](#props-options) prop.

[[ demo src="/demo/select/inline.vue" ]]

### Searchable

Use the `searchable` prop to enable option search.

[[ demo src="/demo/select/searchable.vue" ]]

### Multiple selection

Use the `multiple` prop to enable multiple selection mode.

[[ demo src="/demo/select/multiple.vue" ]]

### Custom selected display

Use the `label` slot to customize how selected options are displayed when the dropdown is closed.

Use the `selected` slot to customize how selected options are displayed, regardless of whether the dropdown is closed.

[[ demo src="/demo/select/selected.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``options`` | `Array<Object>` | - | [^options] |
| ``value`` | `Array<*>|*` | - | [^value] |
| ``multiple`` | `boolean` | `false` | Whether to allow multiple selection. |
| ``max`` | `number` | - | The upper limit of items that can be selected in multiple selection mode. |
| ``placeholder`` | `string` | `select.placeholder` | Placeholder text when nothing is selected. |
| ``clearable`` | `boolean` | `false` | Whether the selected content can be cleared. |
| ``searchable`` | `boolean` | `false` | Whether to allow option search. |
| ``show-select-all`` | `boolean` | `false` | Whether to show the "Select All" option in multiple selection mode. |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``disabled`` | `boolean` | `false` | Whether it is disabled. |
| ``readonly`` | `boolean` | `false` | Whether it is read-only. |
| ``composition`` | `boolean` | `false` | Whether to perceive the value of input method input in the search box. |
| ``overlay-class`` | `string | Array | Object` | - | Refer to the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | Refer to the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |
| ``match`` | `(item, keyword, { ancestors }) => boolean | [number, number] | Array<[number, number]>` | - | Supports custom highlight logic, case-insensitive by default, refer to [`Autocomplete`](./Autocomplete#custom-search-logic). |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | Supports custom search hit logic, refer to [`Autocomplete`](./Autocomplete#custom-search-logic). |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
| `l` | Large size style. |
+++
^^^

^^^options
The option list, with items of type `{label, value, options, disabled, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the option. |
| `value` | `*` | The value corresponding to the option. |
| `options` | `Array<Object>` | The array of child options for the option, with item types the same as the [`options`](#props-options) prop array items. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The selected value.
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
| ``default`` | The content of the option list. When the [`options`](#props-options) property is not specified, it can be used to directly inline `Option` or `OptionGroup`. |
| ``before`` | [^slot-before] |
| ``after`` | The content after the option list. No default content. Slot parameters are the same as the [`before`](#slots-before) slot. |
| ``label`` | [^slot-label] |
| ``group-label`` | [^slot-group-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``trigger`` | [^slot-trigger] |
| ``selected`` | [^slot-selected] |
| ``no-data`` | Used to define the content to be displayed when there is no search data. |

^^^slot-before
The content before the option list. No default content.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `value` | `*` | The value of the selected option. |
| `select` | `function(value: *): void` | Used to switch the selected option. |
| `expanded` | `boolean` | Whether the dropdown menu is expanded. |
| `toggle` | `function(force?: boolean): void` | Used to toggle the dropdown menu expansion state. |
+++
^^^

^^^slot-label
The text area of the dropdown button.

Default content: The `label` property value of the selected option or the text content of the selected option in inline mode.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the selected option. |
| `value` | `*` | The value of the selected option. |
| `selected` | `boolean` | Whether a value has been selected. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

In addition, other properties in the current option data besides the above-described properties will also be automatically bound to the slot porps through `v-bind`.
^^^

^^^slot-group-label
The title text area of the dropdown option group (with `options`).

Default content: The `label` property value of the option.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The title text of the option group. |
| `disabled` | `boolean` | Whether the option group is disabled. |
+++

In addition, other properties in the current option data besides the above-described properties will also be automatically bound to the slot porps through `v-bind`.
^^^

^^^slot-option-label
The text area of the dropdown option (without `options`).

Default content: The `label` property value of the option.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the option. |
| `value` | `*` | The value of the option. |
| `selected` | `boolean` | Whether the option is selected. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

In addition, other properties in the current option data besides the above-described properties will also be automatically bound to the slot porps through `v-bind`.
^^^

^^^slot-option
The entire area of the selectable dropdown option.

Default content: The default structure of the `Option` component.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the option. |
| `value` | `*` | The value of the option. |
| `selected` | `boolean` | Whether the option is selected. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

In addition, other properties in the current option data besides the above-described properties will also be automatically bound to the slot porps through `v-bind`.
^^^

^^^^slot-trigger
The entire dropdown trigger area.

Default content: Dropdown button.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `attrs` | `Object` | The attributes that need to be output to the trigger element, including `aria-*` / `disabled`, etc. You can use `v-bind="attrs"` to output them uniformly. |
| `handlers` | `Object` | [^handlers-desc] |
| `value` | `*` | The value of the selected option. |
| `select` | `function(value: *): void` | Used to switch the selected option. |
| `expanded` | `boolean` | Whether the dropdown menu is expanded. |
| `toggle` | `function(force?: boolean): void` | Used to toggle the expansion state of the dropdown menu. |
+++

^^^handlers-desc
The event listeners that need to be bound to the trigger element can be output uniformly using `v-on="handlers"`.

:::tip
The element used to bind `handlers` needs to support focus so that various keyboard interactions can still be triggered normally.
:::
^^^
^^^^

^^^slot-selected
The selected value rendering area.

Default content: The label of the selected item is rendered for single selection; for multiple selection, the label of each selected item is rendered as a `Tag` component.

+++Slot props (single)
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The option text. |
| `value` | `*` | The option value. |
| `selected` | `boolean` | Whether the option is selected. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

+++Slot props (multiple)
| Name | Type | Description |
| -- | -- | -- |
| `selected` | `Array<Object>` | An array of data for the selected items. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``input`` | Triggered when the search keyword is entered. The callback function takes `(value: string)` as the parameter, where `value` is the `value` of the input box. |
| ``change`` | [^event-change] |
| ``toggle`` | Triggered when the drop-down menu's expanded state is toggled. The callback function takes `(expanded: boolean)` as the parameter. `expanded` indicates whether the operation will expand or collapse the drop-down menu. |
| ``clear`` | Triggered when the clear button is clicked. |
| ``afteropen`` | Triggered after the drop-down is opened. |

^^^event-change
:::badges
`v-model`
:::

Triggered when the selection state changes. The callback function takes `(value: *)` as the parameter, where `value` is the value of the `value` field of the currently selected option.
^^^

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``select.placeholder`` | `string` | `@@select.placeholder` | Placeholder content when nothing is selected. |

:::tip
Values that start with `@@` refer to properties in the language configuration.
:::

### Icons

| Name | Description |
| -- | -- |
| ``expand`` | Expand the overlay. |
| ``collapse`` | Collapse the overlay. |

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-dropdown-max-display-items`` | `<integer>` | `8` | [^css-max-display-items] |

^^^css-max-display-items
The maximum number of items to be displayed in the drop-down menu at the same time. The maximum height of the drop-down box will be calculated based on this value.

:::tip
This needs to be set via the [`overlay-style`](#props-overlay-style) prop.
:::
^^^
