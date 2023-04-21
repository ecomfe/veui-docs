# Cascader

## Demos

### Size variants

Available size variants for the ui prop:`xs` / `s` / `m` / `l`.

[[ demo src="/demo/cascader/size.vue" ]]

### Inline cascader

Use the [`inline`](#props-inline) prop to enable inline mode.

[[ demo src="/demo/cascader/inline.vue" ]]

### Searchable options

Use the [`searchable`](#props-searchable) prop to enable option searching.

[[ demo src="/demo/cascader/searchable.vue" ]]

### Multiple selections

Use the [`multiple`](#props-multiple) prop to enable multiple selections.

[[ demo src="/demo/cascader/multiple.vue" ]]

### Select mode

Use the [`column-trigger`](#props-column-trigger) prop to control when the option groups are expanded.

[[ demo src="/demo/cascader/select-mode.vue" ]]

### Column trigger

Use the [`column-trigger`](#props-column-trigger) prop to control when the subordinates in the dropdown panel are expanded.

[[ demo src="/demo/cascader/column-trigger.vue" ]]

### Displaying values

Use the [`value-display`](#props-value-display) prop to control how the selected value is displayed.

[[ demo src="/demo/cascader/value-display.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``options`` | `Array<Object>` | - | [^options] |
| ``value`` | `Array<*>|*` | - | [^value] |
| ``multiple`` | `boolean` | `false` | Whether to allow multiple selections. |
| ``inline`` | `boolean` | `false` | Whether the dropdown panel is displayed in inline mode (expanding options will split the panel instead of expanding it outwards).  |
| ``max`` | `number` | - | The maximum number of selectable options when performing multiple selections. |
| ``placeholder`` | `string` | `cascader.placeholder` | `cascader.placeholder` | Placeholder text when no option is selected. |
| ``clearable`` | `boolean` | `false` | Whether the cascader is clearable. |
| ``searchable`` | `boolean` | `false` | Whether the cascader is searchable. |
| ``expanded`` | `boolean=` | `false` | [^expanded] |
| ``column-trigger`` | `'hover' | 'click'` | `'click'` | [^column-trigger] |
| ``select-mode`` | `'leaf-only' | 'any'` | `'any'` | [^select-mode] |
| ``column-width`` | `number | string` | - | [^column-width] |
| ``show-select-all`` | `boolean` | `false` | In multiple selection mode is there a select all button. |
| ``value-display`` | `'complete' | 'simple'` | `'simple'` | [^value-display] |
| ``disabled`` | `boolean=` | `false` | Whether the cascader is disabled. |
| ``readonly`` | `boolean=` | `false` | Whether the cascader is read-only. |
| ``overlay-class`` | `string | Array | Object=` | - | See the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object=` | - | See the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |
| ``match`` | `(item, keyword, { ancestors }) => boolean | Array<[number, number]>` | - | To customize highlighting logic. Case insensitive by default, see [`Autocomplete`](./Autocomplete#custom-search). |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | To customize search hit logic, see [`Autocomplete`](./Autocomplete#custom-search). |

^^^ui
Style variants.

+++Enum
| Value | Description |
| -- | -- |
| `xs` | Extra small size. |
| `s` | Small size. |
| `m` | Medium size. |
| `l` | Large size. |
+++
^^^

^^^options
The list of options with items of type `{label, value, options, disabled, position, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the option. |
| `value` | `*` | The value of the option. |
| `position` | `string` | How to display subordinate nodes, pop up by default, set `inline` to display inline. |
| `options` | `Array<Object>=` | An array of options' sub-options, the array item type is the same as the [`options`](#props-options) prop array item. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The selected value / values.
^^^

^^^expanded
:::badges
`.sync`
:::

Whether the dropdown menu is expanded.
^^^

^^^column-trigger
The timing of expanding sub-options in the dropdown panel.

+++Enum
| Value | Description |
| -- | -- |
| `hover` | Expand on hover. |
| `click` | Expand on click.|
+++
^^^

^^^select-mode
Controls which items can be selected in single-select mode.

+++Enum
| Value | Description |
| -- | -- |
| `leaf-only` | Only leaf options can be selected. |
| `any` | Any option can be selected. |
+++
^^^

^^^column-width
When there are multiple columns in the dropdown panel, uniformly control the width of the columns except the last one.

When the value is a numeric value or can be converted to a numeric value, it is treated as a pixel value.
^^^

^^^value-display
Controls how the selected value is displayed.

+++Enum
| Value | Description |
| -- | -- |
| `complete` | Displays a path that fully displays the selected value, such as “China > Shanghai”. |
| `simple` | Only displays the label of the selected value. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``trigger`` | [^slot-trigger] |
| ``pane`` | The content of the dropdown panel. Shares the same slot props with the [`trigger`](#slots-trigger) slot. |
| ``before`` | The content before the list of options. No default content. Shares the same slot props with the [`trigger`](#slots-trigger) slot. |
| ``after`` | The content after the option list. No default content. Shares the same slot props with the [`trigger`](#slots-trigger) slot. |
| ``column-before`` | [^slot-column-before] |
| ``column-after`` | The area after each column in the dropdown panel. No default content. Shares the same slot props with the [`before`](#slots-before) slot. |
| ``label`` | [^slot-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``selected`` | [^slot-selected] |

^^^slot-trigger
The entire dropdown trigger area.

Default content: the dropdown button.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `value` | `*` | The selected value. |
| `selected` | `Object` | The selected option object. |
| `expanded` | `boolean` | Whether the dropdown panel is expanded. |
| `keyword` | `string` | The search keyword. |
| `select` | `function(option: Object): void` | Selects the specified option. |
| `toggle` | `function(force: boolean): void` | Toggles the expanded state of the dropddown menu. |
| `clear` | `function(): void` | Clears selected options. |
| `remove` | `function(option: Object): void` | Removes the specified option from seletions. |
| `updateKeyword` | `function(keyword: string): void` | Use to modify selected value. |
+++
^^^

^^^slot-column-before
The area in front of each column in the drop-down panel. No default content.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `option` | `Object` | The parent option of the column, where the `options` property gets the data of the current column. |
+++
^^^

^^^slot-label
The label of the dropdown button.

Displays the label of selected option or the text content of the selected embedded option by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the selected option. |
| `value` | `*` | The value of the selected option. |
| `checked` | `boolean` | Whether the cascader has a selected value. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++

Additionally, custom properties apart from the listed ones will also be passed into the slot props object via `v-bind`.
^^^


^^^slot-option-label

The label text of each option (option without `options` property). Displays the label of the option by default.

Default content: The value of the option `label` prop.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `option` | `Object` | The descriptive label of the option. |
| `select` | `function(option: Object): void` | Selects the current option. |
| `expand` | `function(option: Object): void` | Expands the current option.  |
| `click` | `function(option: Object): void` | Clicks the content of the current option, will select/expand the current option as appropriate. |
+++
^^^

^^^slot-option
The entire area of the option.

Default content: default content of the internal `Option` component.

Shares the same slot props with the [`option-label`](#slots-option-label) slot.
^^^

^^^slot-selected
The area that displays the selected value.

Default content: the label of selected option for single selection, the tags of each selected option for multiple selection.

+++Slot props (single selection)
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Option label. |
| `value` | `*` | Option value. |
| `checked` | `boolean` | Whether the option is selected. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++

+++Slot props (multiple selections)
| Name | Type | Description |
| -- | -- | -- |
| `selected` | `Array<Object>` | Array of the selected options. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``input`` | Triggered when a search keyword is entered. The callback parameter is `(value: string)`, and `value` is the value of the input box. |
| ``select`` | [^event-select] |
| ``afteropen`` | Triggered after the dropdown panel is expanded. |
| ``afterclose`` | Triggered after the dropdown panel is collapsed. |

^^^event-select
:::badges
`v-model`
:::

Triggered after the selected state changes, the callback parameter is `(value: *)`. `value` is the value of the currently selected option value.
^^^

### Global configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``cascader.placeholder`` | `string` | `@@cascader.placeholder` | Placeholder content when not selected. |

:::tip
`@@` prefixed values denote corresponding properties in the locale settings.
:::

### Icons

| Name | Description |
| -- | -- |
| ``expand`` | Expand the dropdown. |
| ``collapse`` | Collapse the dropdown. |
| ``clear`` | Clear selected. |
| ``separator`` | Toggle icon. |
