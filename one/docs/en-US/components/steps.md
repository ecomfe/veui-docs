# Step

## Examples

### Style variants

Available [`ui`](#props-ui) prop values: `s` / `m` / `dot` / `vertical` / `label-vertical`.

The `stateless` prop can be used to switch to a pure display style without state.

[[ demo src="/demo/steps/default.vue" ]]

### Step status

The step status can be automatically defined by setting the `status` of the `steps` property data item. If the step is in error, it can be set to `error`.

[[ demo src="/demo/steps/status.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``steps`` | `Array` | - | [^steps] |
| ``current`` | `number` | - | The index value of the current step. |
| ``stateless`` | `boolean` | `false` | Whether to use a pure display style without state. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
| `dot` | Dot style. |
| `vertical` | Vertical style. |
| `label-vertical` | Text vertical style. |
+++
^^^

^^^steps
Step data source. The type is `{ label, desc, to, status }`.

+++Properties
| Name | Type | | Description |
| -- | -- | -- |
| `label` | `string` | Step title. |
| `desc` | `string` | Step description. |
| `to` | `string | Object` | Step link. Type is the same as the [`to`](./link#props-to) property of the [`Link`](./link) component. |
| `status` | `string` | Step status. The optional values are default and `error`. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | [^slot-default] |
| ``index`` | The content of the index part. By default, the index starts from `1`, completed steps display a completion icon, and error steps display an error icon. It is located inside the [`default`](#slots-default) slot, and the slot parameters are the same as those of the [`default`](#slots-default) slot. |
| ``label`` | The content of the step title. By default, it displays the `label` field of the project in `steps`. It is located inside the [`default`](#slots-default) slot, and the slot parameters are the same as those of the [`default`](#slots-default) slot. |
| ``desc`` | The content of the step description. By default, it displays the `desc` field of the project in `steps`. It is located inside the [`default`](#slots-default) slot, and the slot parameters are the same as those of the [`default`](#slots-default) slot. |

^^^slot-default
The content of the entire step item.

Default content: index/completion icon, step title, description, and other content.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Step title. The same as the `label` field of the project in [`steps`](#props-steps) property. |
| `desc` | `string` | Step description. The same as the `desc` field of the project in [`steps`](#props-steps) property. |
| `to` | `string | Object` | Step link. The same as the `to` field of the project in [`steps`](#props-steps) property. |
| `status` | `string` | Step status. The same as the `status` field of the project in [`steps`](#props-steps) property. |
| `index` | `number` | Step index value. |

In addition, properties other than those described above in the `steps` data item will also be automatically bound to the slot parameters through `v-bind`.
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``click`` | Triggered after any step is clicked. The callback parameter is `(index: number, event: Event)`. `index` is the index value of the clicked step, and `event` is the corresponding native event object. |

### Icons

| Name | Description |
| -- | -- |
| ``success`` | Completed step. |
| ``error`` | Error step. |
