# Switch

## Examples

### Size variants

Available `ui` prop values: `xs` / `s` / `m`.

[[ demo src="/demo/switch/size.vue" ]]

### True/false values

You can modify the `v-model` value when the switch is on or off by setting the `true-value` and `false-value` props.

[[ demo src="/demo/switch/value.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``checked`` | `boolean` | `false` | [^checked] |
| ``true-value`` | `*` | `true` | The value corresponding to the on state. |
| ``false-value`` | `*` | `false` | The value corresponding to the off state. |
| ``disabled`` | `boolean` | `false` | Whether the switch is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the switch is read-only. |
| ``loading`` | `boolean` | `false` | Whether the switch is in loading state. |

^^^ui
Preset styles.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small size. |
| `s` | Small size. |
| `m` | Medium size. |
+++
^^^

^^^checked
:::badges
`.sync`
:::

Whether the switch is on.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The text that describes the switch. Clicking on it will toggle the switch. No default content. |

### Events

| Name | Description |
| -- | -- |
| ``change`` | Triggered when the user toggles the switch. The callback parameter is `(checked: boolean)`, where `checked` indicates whether the switch is currently on. |
| ``input`` | Triggered when the switch is toggled. The callback parameter is `(val: *)`, where `val` is the current `v-model` value. Unlike the `change` event, the `input` event is also triggered when the state changes due to data manipulation.

In addition, `Switch` supports the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, and `focusout`.

The callback parameter for all events is the corresponding native event object.
