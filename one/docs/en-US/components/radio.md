# Radio

## Demos

### Sizes

Available size variant for the [`ui`](#props-ui) prop: `s` / `m`.

[[ demo src="/demo/radio/size.vue" ]]

### Setting value

Use the [`value`](#props-value) prop to specify the value bound to `v-model`.

[[ demo src="/demo/radio/model.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``checked`` | `boolean` | `false` | [^checked] |
| ``value`` | `*` | `true` | The value of the radio. |
| ``disabled`` | `boolean` | `false` | Whether the radio is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the radio is read-only. |

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
| ``default`` | The label text of the radio. The radio is selected when the label is clicked. Displays nothing by default. |

### Events

| Name | Description |
| -- | -- |
| ``change`` | Triggered when user checks the radio. The callback parameter list is `(checked: boolean)`. `checked` denotes whether the radio is checked. |
| ``input`` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

Triggered when the check state is changed. The callback parameter list is `(val: *)`, with `val` being the current value of `v-model`. Unlike the [`change`](#events-change) event, `input` is triggered even without user interaction.
^^^

Additionally, `Radio` exposes the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, `focusout`.

The callback parameter is the corresponding native event object for all events above.
