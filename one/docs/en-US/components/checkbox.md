# Checkbox

## Demos

### Size variants

Available size variant for the `ui` prop: `s`/`m`.

[[ demo src="/demo/checkbox/size.vue" ]]

### True/false values

Use the `true-value` and `false-value` props to customize the `model` value (used in its `v-model`) of the checkbox in checked/unchecked state.

[[ demo src="/demo/checkbox/value.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `checked` | `boolean` | `false` | [^checked] |
| `value` | `*` | - | Denotes the value of current checkbox when `v-model` is bound to an array. |
| `true-value` | `*=` | `true` | The value for checked state. |
| `false-value` | `*=` | `false` | The value for unchecked state. |
| `indeterminate` | `boolean=` | `false` | Whether the checkbox is in an indeterminate state. |
| `disabled` | `boolean=` | `false` | Whether the checkbox is disabled. |
| `readonly` | `boolean=` | `false` | Whether the checkbox is read-only. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small. |
| `m` | Medium. |
+++
^^^

^^^checked
:::badges
`.sync`
:::

Whether the checkbox is checked.
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | The label text of the checkbox. The checkbox is toggled when the label is clicked. Displays nothing by default. |

### Events

| Name | Description |
| -- | -- |
| `change` | Triggered when user toggles the state of the checkbox. The callback parameter list is `(checked: boolean)`. `checked` denotes whether the checkbox is checked. |
| `input` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

Triggered when the check state is changed. The callback parameter list is `(val: *)`, with `val` being the current value of `v-model`. Unlike the `change` event, `input` is triggered even without user interaction.
^^^

Additionally, `Checkbox` exposes the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, `focusout`.

The callback parameter is the corresponding native event object for all events above.

### Icons

| Name | Description |
| -- | -- |
| `checked` | Checked state. |
| `indeterminate` | Indeterminate state. |
