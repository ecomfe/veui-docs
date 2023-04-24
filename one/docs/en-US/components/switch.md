# Switch

## Examples

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `xs` / `s` / `m`.

[[ demo src="/demo/switch/size.vue" ]]

### True/false values

Use the [`true-value`](#props-true-value) and [`false-value`](#props-false-value) props to customize the `v-model` value of the checkbox in checked/unchecked state.

[[ demo src="/demo/switch/value.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``checked`` | `boolean` | `false` | [^checked] |
| ``true-value`` | `*` | `true` | The value for checked state. |
| ``false-value`` | `*` | `false` | The value for unchecked state. |
| ``disabled`` | `boolean` | `false` | Whether the switch is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the switch is read-only. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small. |
| `s` | Small. |
| `m` | Medium. |
+++
^^^

^^^checked
:::badges
`.sync`
:::

Whether the checkbox is on.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The label text of the switch. The switch is toggled when the label is clicked. Displays nothing by default. |

### Events

| Name | Description |
| -- | -- |
| ``change`` | Triggered when user toggles the state of the switch. The callback parameter list is `(checked: boolean)`. `checked` denotes whether the switch is on. |
| ``input`` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

Triggered when the check state is changed. The callback parameter list is `(val: *)`, with `val` being the current value of `v-model`. Unlike the [`change`](#events-change) event, `input` is triggered even without user interaction.
^^^

Additionally, `Switch` exposes the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, `focusout`.

The callback parameter is the corresponding native event object for all events above.
