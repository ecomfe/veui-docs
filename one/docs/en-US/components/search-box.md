# SearchBox

## Examples

### Style variants

Available [`ui`](#props-ui) prop values: `strong`.

[[ demo src="/demo/search-box/style.vue" ]]

### Size variants

Available [`ui`](#props-ui) prop values: `xs` / `s` / `m` / `l`.

[[ demo src="/demo/search-box/size.vue" ]]

### Read-only and disabled

[[ demo src="/demo/search-box/disabled.vue" ]]

### Suggestions

[[ demo src="/demo/search-box/suggestion.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `string` | - | [^value] |
| ``disabled`` | `boolean` | `false` | Whether the input is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the input is read-only. |
| ``placeholder`` | `string` | - | Placeholder text of the search box. |
| ``clearable`` | `boolean` | `false` | Whether to show the clear button. |
| ``select-on-focus`` | `boolean` | `false` | Whether to select text on focus. |
| ``composition`` | `boolean` | `false` | Whether to enable composition mode. |
| ``autofocus`` | `boolean` | `false` | Whether the input is autofocus. |
| ``suggestions`` | `Array<string>|Array<Object>` | - | [^suggestions] |
| ``replace-on-select`` | `boolean` | `true` | Whether to replace input with selected suggestion. |
| ``maxlength`` | `number` | - | Maximum length of input. |
| ``get-length`` | `function(string): number` | - | Custom function for calculating character length. |
| ``strict`` | `boolean` | `false` | Whether to disallow input when maximum length is reached. |
| ``trim`` | `boolean | string` | `false` | [^trim] |
| ``suggest-trigger`` | `Array<string>|string` | `input` | [^suggest-trigger] |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``match`` | `(item, keyword, { ancestors }) => boolean | Array<[number, number]>` | - | Custom function for highlighting matched text, case-insensitive by default. Refer to [`Autocomplete`](./Autocomplete#custom-search-logic) |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | Custom function for filtering search results. Refer to [`Autocomplete`](./Autocomplete#custom-search-logic) |
| ``overlay-class`` | `string | Array | Object` | - | The same as the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | The same as the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

^^^ui
Button preset style.

+++Enum values
| Value | Description |
| -- | -- |
| `strong` | Enhanced style. The search icon becomes a search button, and the background is the theme color. |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
| `l` | Large size style. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The value of the input.
^^^

^^^suggestions
The suggestion list. When the item is an `Object`, it should be in the format of `{label, value}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the suggestion item. |
| `value` | `string` | The value of the suggestion item. |
+++
^^^

^^^suggest-trigger
The trigger time for displaying the suggestion list. It can be an enum value or a combination of enum values.

+++Enum values
| Value | Description |
| -- | -- |
| `focus` | When the input is focused. |
| `input` | When the [`input`](#events-input) event is triggered. |
| `submit` | When the search button is clicked. |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

Whether the suggestion panel is expanded (the panel will be closed even if it is set to true when there are no suggestions to select from).
^^^

^^^trim
Whether to remove leading and trailing white space. When set to `true`, leading and trailing white space is removed; when set to `false`, it is not. When set to a string, leading and/or trailing white space is removed according to the specified mode.

+++Enum values
| Value | Description |
| -- | -- |
| `both` | Remove leading and trailing white space. Equivalent to the behavior when `true` is set. |
| `start` | Remove leading white space. |
| `end` | Remove trailing white space. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``suggestions`` | Content of the suggestion list. |
| ``suggestions-before`` | Content before the suggestion list. |
| ``suggestions-after`` | Content after the suggestion list. |
| ``suggestion`` | [^slot-suggestion] |
| ``clear`` | Triggered when the clear button is clicked. |
| ``group-label`` | Refers to the [`group-label`](./select#props-group-label) prop of the [`Select`](./select) component. |
| ``option-label`` | Refers to the [`option-label`](./select#props-option-label) prop of the [`Select`](./select) component. |

^^^slot-suggestions
Content of the suggestion list.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `suggestions` | `Array<{value: string, label: string}>` | The normalized suggestion list from the [`suggestions`](#props-suggestions) prop. |
| `select` | `function(suggestion: {value: string, label: string}): void` | Selects the specified suggestion. |

^^^slot-suggestion
A slot for a single item in the suggestion list, used to customize the content of the option.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The option text. |
| `value` | `string` | The option value. |

All properties of each item in `suggestions`, except for `label` and `value`, are automatically bound via `v-bind`.

When `suggestions` is of type `Array<string>`, both `label` and `value` are single `string` values.
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``input`` | Triggered when the text in the input box changes. The callback parameter is `(value: string)`, where `value` is the value in the input box. |
| ``suggest`` | Triggered when the recommendation list needs to be displayed. The callback parameter is `(value: string)`, where `value` is the value in the input box. |
| ``select`` | Triggered when a certain option in the recommendation list is selected. The callback parameter is `(item: {label: string, value: string, ...})`, where `item` is a single option object. |
| ``search`` | [^event-search] |
| ``toggle`` | Triggered when the expansion state of the prompt panel is toggled. The callback parameter is `(expanded: boolean)`. `expanded` indicates whether the operation will expand or collapse the prompt panel. |

^^^event-search
Triggered when the input content is submitted. The callback parameter is `(value: string, event: Event)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `string` | The value in the input box. |
| `event` | [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/click) | Native click event. |
+++
^^^

### Icons

| Name | Description |
| -- | -- |
| ``search`` | Search. |

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-dropdown-max-display-items`` | `<integer>` | `8` | [^css-max-display-items] |

^^^css-max-display-items
The maximum number of items displayed in the drop-down list at the same time. The maximum height of the drop-down box will be calculated based on this value.

:::tip
Needs to be set through the [`overlay-style`](#props-overlay-style) prop.
:::
^^^
