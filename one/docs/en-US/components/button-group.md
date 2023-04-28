# ButtonGroup

## Examples

### Style variants

Available [`ui`](#props-ui) prop values: `primary` / `strong` / `basic`.

[[ demo src="/demo/button-group/style.vue" ]]

### Size variants

Available [`ui`](#props-ui) prop values: `xs` / `s` / `m` / `l` / `xl`.

[[ demo src="/demo/button-group/size.vue" ]]

### Using datasource

You can use the [`items`](#props-items) prop to specify button content via a data source.

[[ demo src="/demo/button-group/items.vue" ]]

### Disabled

Set the [`disabled`](#props-disabled) prop to disable the button.

[[ demo src="/demo/button-group/disabled.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | - | [^items] |
| ``disabled`` | `boolean` | `false` | Whether the button is disabled. |

^^^ui
A set of enumerated values separated by spaces.

+++Enum values
| Value | Description |
| -- | -- |
| `primary` | Primary button, background displayed as theme color. |
| `strong` | Enhanced style. |
| `basic` | Basic style. |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
| `l` | Large size style. |
| `xl` | Extra large size style. |
+++
^^^

^^^items
An array of button data items, with the format `{label, value}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Button text. |
| `value` | `*` | If passed a `string` value, the event with the same name will be triggered when the button is clicked. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Button group content area. |
| ``item`` | [^slot-item] |

^^^slot-item
Used to customize the content of each button.

Default content: [`label`](#props-label) prop value.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Button text. |
| `value` | `*` | The `value` of the button item. |
| `index` | `number` | The index of the button in `items`. |
| `disabled` | `boolean` | Whether the button is disabled. |
+++

In addition, any fields in the `items` data item other than those described above will also be automatically bound to the slot props via `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``click`` | [^click-event] |
| <var>&lt;value&gt;</var> | If the corresponding data item has a `value` field of type `string`, an event with the name of the `value` value will be triggered after clicking, with the same parameters as the [`click`](#events-click) event. |

^^^click-event
Triggered after clicking, with callback parameters `(item, index)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `item` | `{label: string, value: *=, ...}` | Data item. |
| `index` | `number` | The index of the button in `items`. |
+++
^^^
