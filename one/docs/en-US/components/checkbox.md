# Checkbox

## Examples

### Size variants

Available `ui` prop values: `s` / `m`.

[[ demo src="/demo/checkbox/size.vue" ]]

### True/false values

You can set the `v-model` value by using the `true-value` and `false-value` props.

[[ demo src="/demo/checkbox/value.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | Preset style. |
| ``checked`` | `boolean` | `false` | Whether the checkbox is checked. |
| ``value`` | `*` | - | When `v-model` is bound to an array, represents the value of the current checkbox. |
| ``true-value`` | `*` | `true` | The value corresponding to the checked state. |
| ``false-value`` | `*` | `false` | The value corresponding to the unchecked state. |
| ``indeterminate`` | `boolean` | `false` | Whether the checkbox is in the indeterminate state. |
| ``disabled`` | `boolean` | `false` | Whether the checkbox is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the checkbox is readonly. |

#### `ui` prop

Preset styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
+++

#### `checked` prop

:::badges
`.sync`
:::

Whether the checkbox is checked.

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The descriptive text of the checkbox, which toggles the selection state when clicked. No default content. |

### Events

| Name | Description |
| -- | -- |
| ``change`` | Triggered when the user toggles the selection state. The callback parameter is `(checked: boolean)`. `checked` indicates whether the checkbox is currently selected. |
| ``input`` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

Triggered after the selection state changes. The callback parameter is `(val: *)`. `val` is the current `v-model` value. Unlike the `change` event, the `input` event is also triggered when the state changes due to data operations.

In addition, `Checkbox` supports the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, `focusout`.

The callback parameters are the corresponding native event objects.
^^^

### Icons

| Name | Description |
| -- | -- |
| ``checked`` | Checked state. |
| ``indeterminate`` | Indeterminate state. |
