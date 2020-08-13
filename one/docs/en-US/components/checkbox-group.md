# CheckboxGroup

## Demos

### Size variants

Available size variant for the `ui` prop: `s`/`m`.

[[ demo src="/demo/checkbox-group/default.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `items` | `Array<Object>` | `[]` | [^items] |
| `value` | `Array` | `[]` | [^value] |
| `disabled` | `boolean=` | `false` | Whether the checkbox group is disabled. |
| `readonly` | `boolean=` | `false` | Whether the checkbox group is read-only. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small. |
| `m` | Medium. |
^^^

^^^items
The datasource of items with the item type being `{label, value, disabled, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the item. |
| `value` | `*` | The value of the item. |
| `disabled` | `boolean=` | Whether the item is disabled. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The `value`s of the selected items.
^^^

### Slots

| Name | Description |
| -- | -- |
| `item` | [^scoped-slot-item] |

^^^scoped-slot-item
The label content of each checkbox. Displays the value of the `label` prop by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of the item. |
| `value` | `*` | The value of the item. |
| `index` | `number` | The index of the item within `items`. |
| `disabled` | `boolean=` | Whether the item is disabled. |
+++

Additionally, custom properties apart from the listed ones will also be passes into the scope object via `v-bind`.
^^^

### Events

| Name | Description |
| -- | -- |
| `change` | [^event-change] |

^^^event-change
:::badges
`v-model`
:::

Triggers when the selected item changed. The callback parameter list is `(value: Array)` and `value` is the value array of the selected items.
^^^
