# Autocomplete

## Examples

### Suggestion trigger

Set the [`suggest-trigger`](#props-suggest-trigger) prop to specify when to trigger suggestions.

[[ demo src="/demo/autocomplete/normal.vue" ]]

### Strict mode

Set the [`strict`](#props-strict) prop to enable strict mode. `{ maxlength?: boolean }` is used to specify whether the input length is strictly limited and will be automatically truncated if exceeded; `{ select?: boolean }` is used to specify whether the input item must match exactly one of the search suggestions. If no match is found, the input will be automatically cleared when it loses focus.

[[ demo src="/demo/autocomplete/strict.vue" ]]

### Custom search logic

Set the [`match`](#props-match) prop to customize highlight logic and the [`filter`](#props-filter) prop to customize search hit logic.

:::tip
`match` is used to highlight matched text and `filter` controls whether the item is a hit. By default, `filter` filters out nodes that are not matched by `match` and includes non-leaf nodes. If you want all search results to be leaf nodes, you can override `filter` to filter out non-leaf nodes.
:::

[[ demo src="/demo/autocomplete/custom.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``datasource`` | `Array<string | Object>` | `[]` | [^datasource] |
| ``value`` | `*` | - | The value of the input. [^prop-value] |
| ``disabled`` | `boolean` | `false` | Whether the input is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the input is read-only. |
| ``match`` | `(item, keyword, { ancestors }) => boolean | [number, number] | Array<[number, number]>` | - | Supports custom highlighting logic. The default is a case-insensitive substring match. |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | Supports custom search hit logic. |
| ``suggest-trigger`` | `string | Array<string>` | `'input'` | Specifies when to trigger the suggestion dropdown panel. Valid values are `'input'` and `'focus'`. |
| ``expanded`` | `boolean` | `false` | Whether the suggestion panel is expanded. [^expanded] |
| ``placeholder`` | `string` | - | The placeholder text. |
| ``clearable`` | `boolean` | `false` | Whether to show the clear button. |
| ``composition`` | `boolean` | `false` | Whether to perceive the value during the input method editor (IME) input process. |
| ``select-on-focus`` | `boolean` | `false` | Whether to automatically select the input box text when focused. |
| ``maxlength`` | `number` | - | The maximum length of the input string. |
| ``strict`` | `boolean | Object` | `false` | [^strict] |
| ``get-length`` | `function(string): number` | A custom function to calculate the length of characters. |
| ``trim`` | `boolean | string` | `false` | [^trim] |
| ``autofocus`` | `boolean` | `false` | Whether to automatically focus the input. |
| ``overlay-class`` | `string | Array | Object` | - | Refers to the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | Refers to the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

^^^datasource
An array of data sources. If an item is an object, it should have the following properties: `{ label, value, options, ... }`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The textual description of the node. |
| `value` | `string` | The value corresponding to the node. |
| `options` | `Array<Object>` | An array of child nodes, with the same item type as the [`datasource`](#props-datasource) array. |
+++
^^^

^^^prop-value
:::badges
`v-model`
:::

The currently selected value.
^^^

^^^expanded
:::badges
`.sync`
:::

Whether the suggestion panel is expanded. If there are no options in `suggestions`, the panel will be closed even if this prop is set to `true`.
^^^

^^^strict
When `boolean`, the strict mode configures both the `maxlength` behavior and whether the input must match a suggestion value completely. When `Object`, you can configure them separately.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `maxlength` | `boolean` | Whether to enforce strict input length by disallowing input when it exceeds the maximum length. |
| `select` | `boolean` | Whether the input item must match a suggestion value completely. If it doesn't match, it will be automatically cleared when it loses focus. |
+++
^^^

^^^trim
Whether to remove leading and trailing spaces. When `true`, leading and trailing spaces are removed. When `false`, leading and trailing spaces are not removed. When set to a string, the removal behavior is specified accordingly.

+++Enum values
| Value | Description |
| -- | -- |
| `both` | Remove both leading and trailing spaces. Equivalent to the behavior when `true`. |
| `start` | Remove leading spaces. |
| `end` | Remove trailing spaces. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``suggestions`` | [^slot-suggestions] |
| ``option-label`` | [^slot-option-label] |

^^^slot-suggestions
Slot for the dropdown suggestion panel.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `datasource` | `Array<string | Object>` | Data source, same type as [`datasource`](#props-datasource) prop. |
| `keyword` | `string` | Search keyword. |
+++
^^^

^^^slot-option-label
Slot for each option in the dropdown panel.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Display text for the node, fallback to `value` if not exist. |
| `value` | `string` | Actual selected value. |
| `matches` | `Array<{text: string, matched: boolean}>` | Matching status, a node can be split into multiple text chunks, where `text` is the text of each chunk, `matched` indicates if each chunk is matched or not. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``input`` | [^event-input] |
| ``select`` | Triggered when a suggestion is accepted, with the current value as the parameter. |
| ``toggle`` | Triggered when the suggestion panel toggles its expanded state, with `(expanded: boolean)` as the callback parameter. `expanded` indicates if the panel will be expanded or collapsed after the operation. |
| ``clear`` | Triggered when the current value is cleared. |

^^^event-input
:::badges
`v-model`
:::

Triggered when the input value changes or a value is selected from the dropdown panel. The parameter is the current input value or the `value` property of the selected item.
^^^

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-dropdown-max-display-items`` | `<integer>` | `8` | [^css-max-display-items] |

^^^css-max-display-items
The maximum number of items to display simultaneously in the dropdown options. The maximum height of the dropdown will be calculated based on this value.

:::tip
Needs to be set via the [`overlay-style`](#props-overlay-style) prop.
:::
^^^
