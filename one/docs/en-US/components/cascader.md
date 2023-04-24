# Cascader <small>Cascader</small>

## Examples

### Size variants

Available size variants of the [`ui`](#props-ui) prop: `xs` / `s` / `m` / `l`.

[[ demo src="/demo/cascader/size.vue" ]]

### Inline mode

Use the [`inline`](#props-inline) prop to enable inline mode.

[[ demo src="/demo/cascader/inline.vue" ]]

### Searchable options

Use the [`searchable`](#props-searchable) prop to enable option searching.

[[ demo src="/demo/cascader/searchable.vue" ]]

### Multiple selection

Use the [`multiple`](#props-multiple) prop to enable multiple selection mode.

[[ demo src="/demo/cascader/multiple.vue" ]]

### Selection mode

Use the [`select-mode`](#props-select-mode) prop to control which items can be selected in single selection mode.

[[ demo src="/demo/cascader/select-mode.vue" ]]

### Sub-item expansion timing

Use the [`column-trigger`](#props-column-trigger) prop to control the timing of sub-items expansion in the dropdown panel.

[[ demo src="/demo/cascader/column-trigger.vue" ]]

### Render selected value

Use the [`value-display`](#props-value-display) prop to control how the selected value is displayed.

[[ demo src="/demo/cascader/value-display.vue" ]]

### Lazy loading of data items

Use the [`load`](#props-load) prop and the `lazy` property in data items to implement lazy loading of data.

[[ demo src="/demo/cascader/lazy.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``options`` | `Array<Object>` | - | [^options] |
| ``value`` | `Array<*>|*` | - | [^value] |
| ``multiple`` | `boolean` | `false` | Whether multiple options can be selected. |
| ``inline`` | `boolean` | `false` | Whether the dropdown panel is displayed in inline mode (the expanded options will split the `panel` rather than expanding outwards). |
| ``max`` | `number` | - | The upper limit of the number of selected items in multiple selection mode. |
| ``placeholder`` | `string` | `cascader.placeholder` | The placeholder text when no option is selected. |
| ``clearable`` | `boolean` | `false` | Whether the selected content can be cleared. |
| ``searchable`` | `boolean` | `false` | Whether to allow option search. |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``column-trigger`` | `'hover' | 'click'` | `'click'` | [^column-trigger] |
| ``select-mode`` | `'leaf-only' | 'any'` | `'any'` | [^select-mode] |
| ``column-width`` | `number | string` | - | [^column-width] |
| ``show-select-all`` | `boolean` | `false` | Whether to display the select-all button in multiple selection mode. |
| ``value-display`` | `'complete' | 'simple'` | `'simple'` | [^value-display] |
| ``merge-checked`` | `string` | `keep-all` | [^merge-checked] |
| ``include-indeterminate`` | `boolean` | `false` | Whether to include nodes in indeterminate state in the selected options. If a non-leaf node in the [`datasource`](#props-datasource) has some but not all descendant nodes selected, it is in an indeterminate state. |
| ``disabled`` | `boolean` | `false` | Whether it is disabled. |
| ``readonly`` | `boolean` | `false` | Whether it is read-only. |
| ``overlay-class`` | `string | Array | Object` | - | Refer to [`Overlay`](./overlay) component [`overlay-class`](./overlay#props-overlay-class) prop. |
| ``overlay-style`` | `string | Array | Object` | - | Refer to [`Overlay`](./overlay) component [`overlay-style`](./overlay#props-overlay-style) prop. |
| ``match`` | `(item, keyword, { ancestors }) => boolean | Array<[number, number]>` | - | Supports custom highlight logic. By default, it is case-insensitive. Refer to [`Autocomplete`](./Autocomplete#custom-search-logic). |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | Supports custom search hit logic. Refer to [`Autocomplete`](./Autocomplete#custom-search-logic). |
| ``load`` | `Function` | - | [^load] |

^^^ui
Predefined style.

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
Option list, with the item type being `{label, value, options, disabled, position, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The textual description of the option. |
| `value` | `*` | The value corresponding to the option. |
| `position` | `string` | How to display the sub-nodes. By default, they pop up. You can set `inline` to display them inline. |
| `options` | `Array<Object>` | The array of sub-options for the option, with the item type being the same as that of the [`options`](#props-options) property array item. |
| `disabled` | `boolean` | Whether the option is disabled. |
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

Whether the dropdown menu is expanded.
^^^

^^^column-trigger
The trigger mode of expanding sub-levels in the dropdown panel.

+++Enum values
| Value | Description |
| -- | -- |
| `hover` | Expand the next level when the cursor hovers over it. |
| `click` | Expand the next level when clicked. |
+++
^^^

^^^select-mode
Controls which items can be selected in single-selection mode.

+++Enum values
| Value | Description |
| -- | -- |
| `leaf-only` | Only leaf nodes can be selected. |
| `any` | Each level can be selected. |
+++
^^^

^^^column-width
Controls the width of columns except the last one when there are multiple columns in the dropdown panel.

If the value is a number or can be converted to a number, it will be treated as a pixel value.
^^^

^^^value-display
Controls how the selected value is displayed.

+++Enum values
| Value | Description |
| -- | -- |
| `complete` | Display the complete path of the selected value, such as "China > Shanghai". |
| `simple` | Only display the text of the selected value. |
+++
^^^

^^^merge-checked
The merge strategy of selected values. When all child nodes under a node are selected, you can choose to keep only the parent node, only the child nodes, or both.

+++Enum values
| Value | Description |
| -- | -- |
| `keep-all` | Both parent and child nodes will be included in the selected values. |
| `upwards` | Merge the selected values towards ancestors as much as possible. |
| `downwards` | Merge the selected values towards descendants as much as possible. |
+++
^^^

^^^load
Lazy loading of data items, used in conjunction with the `lazy` attribute on data items.

```ts
type Item {
  label: string,
  value: unknown,
  options?: Array<Item>,
  disabled?: boolean
  lazy?: boolean
}

function load({
  parent?: Item,
  scope: 'descendants' | 'children'
}): Item[] | void | Promise<Item[] | void>
```

The `parent` parameter indicates that more data needs to be loaded for that item.

The `scope` parameter indicates the range of data to be loaded.

+++Enum values
| Value | Description |
| -- | -- |
| `descendants` | Load all descendant data. |
| `children` | Load the data of child items. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``trigger`` | [^slot-trigger] |
| ``pane`` | Slot for the content in the dropdown panel. The scope parameters are the same as those of the [`trigger`](#props-trigger) slot. |
| ``before`` | Content before the option list. No default content. The scope parameters are the same as those of the [`trigger`](#props-trigger) slot. |
| ``after`` | Content after the option list. No default content. The scope parameters are the same as those of the [`trigger`](#props-trigger) slot. |
| ``column-before`` | [^slot-column-before] |
| ``column-after`` | The area after each column in the dropdown panel. No default content. The scope parameters are the same as those of the [`column-before`](#props-column-before) slot. |
| ``label`` | [^slot-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``selected`` | [^slot-selected] |

^^^slot-trigger
The entire area that triggers the dropdown.

Default content: Dropdown button.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `value` | `*` | The value of the selected option. |
| `selected` | `Object` | The object of the selected option. |
| `expanded` | `boolean` | Whether the dropdown menu is expanded. |
| `keyword` | `string` | The search value. |
| `select` | `function(option: Object): void` | Used to set the selected option. |
| `toggle` | `function(force: boolean): void` | Used to toggle the expanded state of the dropdown menu. |
| `clear` | `function(): void` | Used to clear the selected option. |
| `remove` | `function(option: Object): void` | Used to remove a selected option, where the parameter `option` is the selected option. |
| `updateKeyword` | `function(keyword: string): void` | Used to modify the search value. |
+++
^^^

^^^slot-column-before
The area before each column in the dropdown panel. No default content.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `option` | `Object` | The parent option of this column, where the `options` property can get the data of the current column. |
+++
^^^

^^^slot-label
The area for the text of the dropdown button.

Default content: the `label` property value of the selected option or the text content of the selected option in inline mode.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the selected option. |
| `value` | `*` | The value of the selected option. |
| `checked` | `boolean` | Whether a value is selected. |
| `disabled` | `boolean` | Whether an option is disabled. |
+++

In addition, any other fields in the current option data will also be automatically bound to the scope parameters via `v-bind`.
^^^

^^^slot-option-label
The text area of the dropdown option (option without `options`).

Default content: The `label` property value of the option.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `option` | `Object` | Current option. |
| `select` | `function(option: Object): void` | Selects the current option. |
| `expand` | `function(option: Object): void` | Expands the current option. |
| `click` | `function(option: Object): void` | Clicks the content area of the current option to select and/or expand it. |
+++
^^^

^^^slot-option
The entire area of the dropdown option that can be selected.

Default content: The default structure of the component inside `Option`.

Slot props are the same as the [`option-label`](#slots-option-label) slot.
^^^

^^^slot-selected
The rendered area of the selected value.

Default content: When a single option is selected, the text of the selected item is rendered. When multiple options are selected, the labels of each selected item are rendered as `Tag`.

+++Slot props (single)
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Option text. |
| `value` | `*` | Option value. |
| `checked` | `boolean` | Whether it is selected. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

+++Slot props (multiple)
| Name | Type | Description |
| -- | -- | -- |
| `selected` | `Array<Object>` | An array of selected item data. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``input`` | Triggered when the search keyword is entered. The callback parameter is `(value: string)`, where `value` is the value of the input box. |
| ``select`` | [^event-select] |
| ``afteropen`` | Triggered after the dropdown is opened. |
| ``afterclose`` | Triggered after the dropdown is closed. |

^^^event-select
:::badges
`v-model`
:::

Triggered when the selection state changes. The callback parameter is `(value: *)`, where `value` is the value of the `value` field of the currently selected option.
^^^

### Configs

| Configuration item | Type | Default | Description |
| -- | -- | -- | -- |
| ``cascader.placeholder`` | `string` | `@@cascader.placeholder` | The placeholder content when nothing is selected. |

:::tip
Values starting with `@@` refer to the corresponding fields from the multi-language configuration.
:::

### Icons

| Name | Description |
| -- | -- |
| ``expand`` | Expand dropdown. |
| ``collapse`` | Collapse dropdown. |
| ``clear`` | Clear selection. |
| ``separator`` | Separator. |

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-dropdown-max-display-items`` | `<integer>` | `8` | [^css-max-display-items] |

^^^css-max-display-items
The maximum number of items simultaneously displayed in the dropdown options. The maximum height of the dropdown box will be calculated based on this value.

:::tip
Needs to be set through the [`overlay-style`](#props-overlay-style) prop.
:::
^^^
