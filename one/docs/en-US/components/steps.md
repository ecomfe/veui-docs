# Steps

## Demos

### Size and direction variants

Available style variants for the [`ui`](#props-ui) prop: `s` / `m` / `vertical` / `label-vertical`.

[[ demo src="/demo/steps/default.vue" ]]

### Step status

Set `status` property of the `step` to `error`, if the step fails.

[[ demo src="/demo/steps/status.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``steps`` | `Array` | - | [^steps] |
| ``current`` | `number` | - | The index of current step. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small style. |
| `m` | Medium. |
| `vertical` | Vertical style. |
| `label-vertical` | Label vertical style. |
+++
^^^

^^^steps
The datasource of steps with item type being `{ label, desc, to, status }`.

+++Properties
| Name | Type | | Description |
| -- | -- | -- |
| `label` | `string` | The label of the step. |
| `desc` | `string` | The description of the step. |
| `to` | `string | Object` | The target link of the step. The type is the same as the [`to`](./link#props-to) prop of [`Link`](./link) component. |
| `status` | `string` | The statue of the step. Available variants are default normal and `error`. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | [^slot-default] |
| ``index`` | The step index. Displays an index value starts from `1`, a success icon for finished steps by default and an error icon for error steps. Resides inside the [`default`](#slots-default) slot and share the same slot props. |
| ``label`` | The step label. Displays the `label` property by default. Resides inside the [`default`](#slots-default) slot and share the same slot props. |
| ``desc`` | The step description. Displays the `desc` property by default. Resides inside the [`default`](#slots-default) slot and share the same slot props. |

^^^slot-default
The content of each step. Displays the step index/completed icon, label and description by default.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The label of the step. Same as the `label` property from items of the [`steps`](#props-steps) prop. |
| `desc` | `string` | The description of the step. Same as the `desc` property from items of the [`steps`](#props-steps) prop. |
| `to` | `string | Object` | The target link of the step. Same as the `to` property from items of the [`steps`](#props-steps) prop. |
| `status` | `string` | The status of the step. Same as the `status` property from items of the [`steps`](#props-steps) prop. |
| `index` | `number` | The index of the step. (Starts from `0`.) |

Additionally, custom properties in current step, apart from the listed ones, will also be passes into the slot props object via `v-bind`.
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``click`` | Triggered when any step is clicked. The callback parameter type is `(index: number, event: Event)`, where `index` is the index of the clicked step and `event` is the corresponding native event object. |

### Icons

| Name | Description |
| -- | -- |
| ``success`` | Steps finished successfully. |
| ``error`` | Steps with error. |
