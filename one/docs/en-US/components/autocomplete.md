# Autocomplete

## Demo

### Basic Trigger

Set [`suggest-trigger`](#props-suggest-trigger) specify trigger suggestions.

[[ demo src="/demo/autocomplete/normal.vue" ]]

### Strict

Set [`strict`](#props-strict) property to strict mode. If the input value does not exactly match the recommended value, the input value will be cleared when the focus is out of focus.

[[ demo src="/demo/autocomplete/strict.vue" ]]

### Custom Search

Set [`match`](#props-match) property to customize the highlighting logic; Set [`filter`](#props-filter) property to customize the search hit logic.

:::tip
`match` is used to highlight the logic of matching text; while `filter` is to control whether it is hit or not. By default, `filter` will filter out nodes are not matched by `match`, and will include non-leaf nodes. If you want all leaf nodes in the search results, you can filter out non-leaf nodes by rewriting `filter`.
:::

[[ demo src="/demo/autocomplete/custom.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``datasource`` | `Array<string | Object>=` | `[]` | [^datasource] |
| ``value`` | `*` | - | [^prop-value] |
| ``disabled`` | `boolean=` | `false` | Disabled state. |
| ``readonly`` | `boolean=` | `false` | Read only status. |
| ``match`` | `(item, keyword, { ancestors }) => boolean | [number, number] | Array<[number, number]>` | - | Supports custom highlighting logic, and matches case-insensitive substrings by default. |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | Support custom search hit logic. |
| ``suggest-trigger`` | `string | Array<string>=` | `'input'` | Trigger the suggestion drop-down panel, the available values are: `'input'`, `'focus'`. |
| ``expanded`` | `boolean=` | `false` | [^expanded] |
| ``placeholder`` | `string=` | - | Placeholder. |
| ``clearable`` | `boolean=` | `false` | Clear button is displayed. |
| ``composition`` | `boolean=` | `false` | Perceive value of input method input process. |
| ``select-on-focus`` | `boolean=` | `false` | The text in the input box is automatically selected. |
| ``maxlength`` | `number=` | - | The length of the input string is limited. |
| ``strict`` | `boolean=` | `false` | Maximum input length. |
| ``get-length`` | `function(string): number=` | Customize character length calculation function. |
| ``trim`` | `boolean | string=` | `false` | [^trim] |
| ``autofocus`` | `boolean=` | `false` | Focus automatically. |

^^^datasource
Data source array, item is `Object`, field is `{label, value, children, ...}`.

+++Field
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Text description of the node. |
| `value` | `string` | Value corresponding to the node is generally an in-page hash, such as `#button`. |
| `children` | `Array<Object>=` | Child node array of the node, Array item type is the same as the [`items`](#props-items) array item. |
+++
^^^

^^^prop-value
:::badges
`v-model`
:::

Selected value.
^^^

^^^expanded
:::badges
`.sync`
:::

Whether the panel should be expanded (if there is no option in `suggestions`, panel will be closed even if it is `true`).
^^^

^^^trim
Remove before and after spaces. When it is `true`, the before and after spaces will be removed; when it is `false`, the before and after spaces will not be removed. When it is set to a string, it will be removed in the specified way.

+++Enum
| Value | Description |
| -- | -- |
| `both` | Remove spaces at both ends. It is equivalent to the behavior when `true`. |
| `start` | Remove front space. |
| `end` | Remove end spaces. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``suggestions`` | [^slot-suggestions] |
| ``option-label`` | [^slot-option-label] |

^^^slot-suggestions

Pull down to suggest the panel slot.

+++Scopes
| Name | Type | Description |
| -- | -- | -- |
| `datasource` | `Array<string | Object>` | data source, type is the same as the [`datasource`](#props-datasource) property. |
| `keyword` | `string` | Search keyword. |
+++
^^^

^^^slot-option-label

Option slot in the drop down panel.

+++Scopes
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Node copy used to display, if doesn't exist, it will take `value`. |
| `value` | `string` | Actually select the value. |
| `matches` | `Array<{text: string, matched: boolean}>` | Case of matching, a node may be divided into multiple texts, `text` indicates the text, and `matched` indicates whether the text matches. |
+++
^^^

### Events

| Name  | Description |
| -- | -- |
| ``input`` | [^event-input] |
| ``select`` | Triggered when suggestion is adopted, the parameter is current value. |
| ``toggle`` | Triggered when expanded state of prompt panel is switched, callback parameter is `(expanded: boolean)`. `expanded` indicates whether operation will trigger prompt panel to expand or collapse. |
| ``clear`` | Triggers when current value is cleared. |

^^^event-input
:::badges
`v-model`
:::

Event will be triggered when inputting in `input` or selecting a value in drop down panel. Parameter is current input value or the `value` of selected item when selected.
^^^
