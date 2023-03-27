# ButtonGroup

## Demos

### Stylistic variants

Available style variants for the [`ui`](#props-ui) prop: `primary` / `strong` / `basic`.

[[ demo src="/demo/button-group/style.vue" ]]

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `xs` / `s` / `m` / `l` / `xl`.

[[ demo src="/demo/button-group/size.vue" ]]

### Using datasource

Use the [`items`](#props-items) prop to provide content with a datasource.

[[ demo src="/demo/button-group/items.vue" ]]

### Disabled state

Use the [`disabled`](#props-disabled) prop to set the button group to disabled state.

[[ demo src="/demo/button-group/disabled.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | - | [^items] |
| ``disabled`` | `boolean` | `false` | Whether the button is disabled. |

^^^ui
Style variants. A space-separated list of enum values.

+++Enum values
| Value | Description |
| -- | -- |
| `primary` | Primary buttons. |
| `strong` | Strong buttons. |
| `basic` | Basic buttons. |
| `xs` | Extra small. |
| `s` | Small. |
| `m` | Medium. |
| `l` | Large. |
| `xl` | Extra large. |
+++
^^^

^^^items
The datasource array for buttons in the group. The type of each item is `{label, value}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The label text of the button. |
| `value` | `*` | Will emit an event with the same name when given a string value. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Button group's content. |
| ``item`` | [^slot-item] |

^^^slot-item
The content of each button.

Shows the text specified by the `label` property by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The label text of the button. |
| `value` | `*` | The value of button item. |
| `index` | `number` | The index of the button within `items`. |
| `disabled` | `boolean` | Whether the button is disabled. |
+++

Additionally, custom properties apart from the listed ones will also be passes into the slot props object via `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``click`` | [^click-event] |
| <var>&lt;value&gt;</var> | [^value-var-event] |

^^^click-event
Triggered upon clicks. The callback parameter list is `(item, index)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `item` | `{label: string, value: *=, ...}` | Datasource item. |
| `index` | `number` | The index of the button within `items`. |
+++
^^^

^^^value-var-event
If the corresponding item has a string `value` property, an event with the name of `value` value will be emitted each time the button is clicked. It shares the same parameters with the [`click`](#events-click) event.
^^^
