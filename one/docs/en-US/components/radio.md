# Radio

## Examples

### Size variants

Available values for the [`ui`](#props-ui) prop: `s` / `m`.

[[ demo src="/demo/radio/size.vue" ]]

### Model values

You can modify the value of `v-model` when selected by setting the [`value`](#props-value) prop.

[[ demo src="/demo/radio/model.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``checked`` | `boolean` | `false` | [^checked] |
| ``value`` | `*` | `true` | The value corresponding to the selected state. |
| ``disabled`` | `boolean` | `false` | Whether the component is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the component is read-only. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^checked
:::badges
`.sync`
:::

Whether the component is in the selected state.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The description text of the radio button. It will be selected when clicked. No default content. |

### Events

| Name | Description |
| -- | -- |
| ``change`` | Triggered when the user switches the selected state. The callback parameter is `(checked: boolean)`. `checked` indicates whether it is currently selected. |
| ``input`` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

Triggered after the selection state has changed. The callback parameter is `(val: *)`. `val` is the current value of `v-model`. Unlike the [`change`](#events-change) event, the `input` event will also be triggered when the data operation causes the state to change.
^^^

In addition, `Radio` supports the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, `focusout`.

The callback parameters are all corresponding native event objects.
