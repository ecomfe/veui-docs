# Cascader

## Demo

### Size

Available size variants for the ui prop:`xs` / `s` / `m` / `l`.

[[ demo src="/demo/cascader/size.vue" ]]

### Inline

Use the [`inline`](#props-inline) property to enable inline.

[[ demo src="/demo/cascader/inline.vue" ]]

### Search

Use the [`searchable`](#props-searchable) property to enable search.

[[ demo src="/demo/cascader/searchable.vue" ]]

### Multiple Choice

Use the [`multiple`](#props-multiple) property to enable multiple choice.

[[ demo src="/demo/cascader/multiple.vue" ]]

### Select

Use the [`select-mode`](#props-select-mode) property to control which items can be selected in single-select mode.

[[ demo src="/demo/cascader/select-mode.vue" ]]

### Column Trigger

Use the [`column-trigger`](#props-column-trigger) property to control when the subordinates in the dropdown panel are expanded.

[[ demo src="/demo/cascader/column-trigger.vue" ]]

### Render Selected

Use the [`value-display`](#props-value-display) property to control how the selected value is displayed.

[[ demo src="/demo/cascader/value-display.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``options`` | `Array<Object>` | - | [^options] |
| ``value`` | `Array<*>|*` | - | [^value] |
| ``multiple`` | `boolean` | `false` | Allow multiple selections. |
| ``inline`` | `boolean` | `false` | Whether the drop-down panel is displayed inline. |
| ``max`` | `number` | - | The maximum number of items allowed to be selected when multiple selections are made. |
| ``placeholder`` | `string` | `cascader.placeholder` | Placeholder text when not selected. |
| ``clearable`` | `boolean` | `false` | Clear selections. |
| ``searchable`` | `boolean` | `false` | Search options. |
| ``expanded`` | `boolean=` | `false` | [^expanded] |
| ``column-trigger`` | `hover | click` | `click` | [^column-trigger] |
| ``select-mode`` | `'leaf-only' | 'any'` | `any` | [^select-mode] |
| ``column-width`` | `number | string` | - | [^column-width] |
| ``show-select-all`` | `boolean` | `false` | In multiple selection mode is there a select all button. |
| ``value-display`` | `'complete' | 'simple'` | `simple` | [^value-display] |
| ``disabled`` | `boolean=` | `false` | Whether is it disabled state. |
| ``readonly`` | `boolean=` | `false` | Whether is it readonly state. |
| ``overlay-class`` | `string | Array | Object=` | - | See the [`overlay`](./overlay) component's [`overlay-class`](./overlay#props-overlay-class) property. |
| ``overlay-style`` | `string | Array | Object=` | - | See the [`Overlay`](./overlay) component's  [`overlay-style`](./overlay#props-overlay-style) property. |
| ``match`` | `(item, keyword, { ancestors }) => boolean | Array<[number, number]>` | - | Support custom highlighting logic, default case insensitive, refer to [`Autocomplete`](./Autocomplete#custom-search). |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | Support custom search hit logic, refer to [`Autocomplete`](./Autocomplete#custom-search). |

^^^ui
preset style.

+++Enum
| value | Description |
| -- | -- |
| `xs` | Ultra small size. |
| `s` | Small size. |
| `m` | Medium size. |
| `l` | Lage size. |
+++
^^^

^^^options
Options list, items of type `{label, value, options, disabled, position, ...}`.

+++Fields
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Textual description of the option. |
| `value` | `*` | The value corresponding to the option. |
| `position` | `string` | How to display subordinate nodes, pop up by default, set `inline` to display inline. |
| `options` | `Array<Object>=` | An array of options' sub-options, the array item type is the same as the [`options`](#props-options) property array item. |
| `disabled` | `boolean=` | Whether the option is disabled. |
+++
^^^

^^^value
:::badges
`v-model`
:::

Selected value.
^^^

^^^expanded
:::badges
`.sync`
:::

Whether the drop-down menu is expanded.
^^^

^^^column-trigger
Drop-down panel lower-level to be expanded at the time.

+++Enum
| Value | Description |
| -- | -- |
| `hover` | The cursor hovers to expand the next. |
| `click` | The cursor click to expand the next. |
+++
^^^

^^^select-mode
Controls which items can be selected in single-select mode.

+++Enum
| Value | Description |
| -- | -- |
| `leaf-only` | Only leaf nodes can be selected. |
| `any` | Each nodes can be selected. |
+++
^^^

^^^column-width
When there are multiple columns in the drop-down panel, uniformly control the width of the columns except the last column.

When there value is a numeric value or can be converted to a numeric value, it is treated as a pixel value.
^^^

^^^value-display
Controls how the selected value is displayed style.

+++Enum
| Value | Description |
| -- | -- |
| `complete` | A path that fully displays the selected value, such as "Hollywood > Disneyland Park". |
| `simple` | Only display the selected value text. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``trigger`` | [^slot-trigger] |
| ``pane`` | Content slot in drop-down panel. As [`trigger`](#slots-trigger) slot with domain parameter. |
| ``before`` | The content before the list of options. No default content. The scope parameter is the as the [`trigger`](#slots-trigger) slot. |
| ``after`` | The content after the option list. No default content. The scope parameter is the as the [`trigger`](#slots-trigger) slot. |
| ``column-before`` | [^slot-column-before] |
| ``column-after`` | The area after each column in the drop-down panel. No default content. The scope parameter is the as the [`column-before`](#slots-column-before) slot. |
| ``label`` | [^slot-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``selected`` | [^slot-selected] |

^^^slot-trigger
The entire pull down trigger area.

Default content: drop-down button.

+++Scopes
| Name | Type | Description |
| -- | -- | -- |
| `value` | `*` | Selected value. |
| `selected` | `Object` | Selected object. |
| `expanded` | `boolean` | Whether drop-down panel expane. |
| `keyword` | `string` | Search value. |
| `select` | `function(option: Object): void` | Use to set options. |
| `toggle` | `function(force: boolean): void` | Use to toggle the expanded state of the drop-down menu. |
| `clear` | `function(): void` | Use to clear selected options. |
| `remove` | `function(option: Object): void` | Use to remove a option, the parameter `option` is the option. |
| `updateKeyword` | `function(keyword: string): void` | Use to modify selected value. |
+++
^^^

^^^slot-column-before
The area in front of each column in the drop-down panel. No default content.

+++Scopes
| Name | Type | Description |
| -- | -- | -- |
| `option` | `Object` | This parent options of the column, where the `options` property can get the data of the current column. |
+++
^^^

^^^slot-label
Drop-down button text area.

Default content: the value of the `label` property corresponding to the selected option or the text content of the selected option in inline mode.

+++Scopes
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Selected text. |
| `value` | `*` | Selected value. |
| `checked` | `boolean` | Whether selected a certain value。 |
| `disabled` | `boolean=` | Whether option is disabled. |
+++

PS. Fields other than the fields described above in the current options data are also automatically bound to scope parameters via `v-bind`.
^^^


^^^slot-option-label
Text area for dropdown options (without `options`).

Default content: The value of the option `label` property.

+++Scopes
| Name | Type | Description |
| -- | -- | -- |
| `option` | `Object` | Current option. |
| `select` | `function(option: Object): void` | Selected current option. |
| `expand` | `function(option: Object): void` | Expand current option.  |
| `click` | `function(option: Object): void` | Click current option content area, The current option is selected and/or expanded as appropriate. |
+++
^^^

^^^slot-option
The entire area of drop-down options available for selection.

Default content: Component default structure inside `Option`.

The scope parameter is the same as the [`option-label`](#slots-option-label) slot.
^^^

^^^slot-selected
Selected value rendering area.

Default content: render the tag of the selected item when single selected; render the tag of each selected item as `Tag` when multiple selected.

+++Radio scopes
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Option text. |
| `value` | `*` | Option value. |
| `checked` | `boolean` | Whether already option. |
| `disabled` | `boolean=` | Whether option disable. |
+++

+++Multiple choice scopes
| Name | Type | Description |
| -- | -- | -- |
| `selected` | `Array<Object>` | Array of selected item data. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``input`` | Triggered when a search keyword is entered. The callback parameter is `(value: string)`, and `value` is the `value` value of the input box. |
| ``select`` | [^event-select] |
| ``afteropen`` | Fired when the drop-down menu is turned on. |
| ``afterclose`` | Fired when the drop-down menu is turned off. |

^^^event-select
:::badges
`v-model`
:::

Triggered after the selected state changes, the callback parameter is `(value: *)`. `value` is the value of the currently selected `value` field.
^^^

### Global config

| Config item | Type | Default | Description |
| -- | -- | -- | -- |
| ``cascader.placeholder`` | `string` | `@@cascader.placeholder` | Placeholder content when not selected. |

:::tip
A value starting with `@@` refers to the relevant field in the multilingual config.
:::

### Icon

| Name | Description |
| -- | -- |
| ``expand`` | Expand drop-down. |
| ``collapse`` | pack up drop-down. |
| ``clear`` | clear. |
| ``separator`` | separator. |
