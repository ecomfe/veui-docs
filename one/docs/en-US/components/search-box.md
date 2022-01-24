# SearchBox

## Demos

### Stylistic variants

Available stylistic values for the [`ui`](#props-ui) prop: `strong`.

[[ demo src="/demo/search-box/style.vue" ]]

### Size variants

Available size values for the [`ui`](#props-ui) prop: `xs` / `s` / `m` / `l`.

[[ demo src="/demo/search-box/size.vue" ]]

### Read-only and disabled

[[ demo src="/demo/search-box/disabled.vue" ]]

### Suggestion list

[[ demo src="/demo/search-box/suggestion.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``placeholder`` | `string` | - | The placeholder text of the search box. |
| ``value`` | `string` | - | [^value] |
| ``autofocus`` | `boolean` | `false` | Whether the search box gains focus automatically. |
| ``clearable`` | `boolean` | `false` | Whether the clear button is displayed. |
| ``select-on-focus`` | `boolean` | `false` | Whether to select all content upon focus. |
| ``composition`` | `boolean` | `false` | Whether the search box triggers value change upon composition of IME. |
| ``suggestions`` | `Array<string>|Array<Object>` | - | [^suggestions] |
| ``replace-on-select`` | `boolean` | `true` | Whether to replace the content with suggestion item value when it's selected. |
| ``suggest-trigger`` | `Array<string>|string` | `input` | [^suggest-trigger] |
| ``expanded`` | `boolean=` | `false` | [^expanded] |
| ``disabled`` | `boolean=` | `false` | Whether the search box is disabled. |
| ``readonly`` | `boolean=` | `false` | Whether the search box is read-only. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `strong` | Strong style. |
| `xs` | Extra small. |
| `s` | Small. |
| `m` | Medium. |
| `l` | Large. |
| `xl` | Extra large. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The value of the search box.
^^^

^^^suggestions
The suggestion list. When the item type is `Object`, the properties will be `{label, value}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the suggestion option. |
| `value` | `string` | The value of the suggestion option. |
+++
^^^

^^^suggest-trigger
Specifies when the suggestion list is displayed. Can be either an event name or a list of event names.

+++Enum values
| Value | Description |
| -- | -- |
| `focus` | When the search box is focused. |
| `input` | When the input triggers [`input`](#events-input) event. |
| `submit` | When the submit button is activated. |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

Whether the suggestion list is expanded (if there are no items in `suggestions`, the list won't be expanded even the value is `false`).
^^^

### Slots

| Name | Description |
| -- | -- |
| ``suggestions`` | [^slot-suggestions] |
| ``suggestions-before`` | The content before the suggestion list. |
| ``suggestions-after`` | The content after the suggestion list. |
| ``suggestion`` | [^slot-suggestion] |

^^^slot-suggestions
The content of the entire suggestion list.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `suggestions` | `Array<{value: string, label: string}>` | The normalized suggestions from the [`suggestions`](#props-suggestions) prop. |
| `select` | `function(suggestion: {value: string, label: string}): void` | Select the specified suggestion. |

^^^slot-suggestion
The content of each suggestion option.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text label of the suggestion option. |
| `value` | `string` | The value of the suggestion option. |

Additionally, custom properties apart from the listed ones will also be passes into the slot props object via `v-bind`.

When `suggestions` is an `Array<string>`, the `label` and `value` of the suggestion option will share the same `string` value.
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``input`` | [^event-input] |
| ``suggest`` | [^event-suggest] |
| ``select`` | [^event-select] |
| ``search`` | [^event-search] |
| ``toggle`` | Triggered when the expanded state is going to change. The callback parameter list is `(expanded: boolean)`. `expanded` denotes whether the suggestion list is to be expanded or collapsed. |

^^^event-input
Triggers when the input value changes. The callback parameter list is `(value: string)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `string` | The value of the input. |
+++
^^^

^^^event-suggest
Triggers when the suggestion list is displayed. The callback parameter list is `(value: string)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `string` | The value of the input. |
+++
^^^

^^^event-select
Triggered when an suggestion option is selected. The callback parameter list is `(item: Object)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `item` | `{label: string, value: string=, ...}` | The suggestion option. |
+++
^^^

^^^event-search
Triggered when the input value is submitted. The callback parameter list is `(value: string, event: Event)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `string` | The value of the input. |
| `event` | [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/click) | The native click event object. |
+++
^^^

### Icons

| Name | Description |
| -- | -- |
| ``search`` | Search. |
