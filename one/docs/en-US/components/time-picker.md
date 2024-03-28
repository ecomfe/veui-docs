# TimePicker

## Examples

### Modes

Supports three modes, `hour`, `minute`, and `second`, which can be controlled by the [`mode`](#props-mode) prop.

[[ demo src="/demo/time-picker/mode.vue" ]]

### Custom options

Supports custom time options, which can be customized with [`hours`](#props-hours) , [`minutes`](#props-minutes) and [`seconds`](#props-seconds) props.

[[ demo src="/demo/time-picker/datasource.vue" ]]

### Range restriction

Supports range restriction, which can be set by [`min`](#props-min) and [`max`](#props-max) props respectively.

[[ demo src="/demo/time-picker/range.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``mode`` | `string` | `'second'` | Specifies the granularity of selection, which can be precise to hours (`hour`), minutes (`minute`), or seconds (`second`). |
| ``value`` | `string` | - | [^prop-value] |
| ``placeholder`` | `string` | `timepicker.placeholder` | The placeholder text when no option is selected. |
| ``hours`` | `Array<number>` | - | Options for hours, default is 0-23. |
| ``minutes`` | `Array<number>` | - | Options for minutes, default is 0-59. |
| ``seconds`` | `Array<number>` | - | Options for seconds, default is 0-59. |
| ``min`` | `string` | - | The minimum value. |
| ``max`` | `string` | - | The maximum value. |
| ``autofocus`` | `boolean` | `false` | Whether to automatically get focus. |
| ``clearable`` | `boolean` | `false` | Whether the selected value can be cleared. |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``disabled`` | `boolean` | `false` | Whether it is disabled. |
| ``readonly`` | `boolean` | `false` | Whether it is read-only. |
| ``overlay-class`` | `string | Array | Object` | - | Refer to the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | Refer to the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

^^^ui
Presets for style variants. A combination of space-separated enumerated values.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
| `l` | Large size style. |
+++
^^^

^^^prop-value
:::badges
`v-model`
:::

The currently selected value.
^^^

^^^expanded
:::badges
`.sync`
:::

Whether the dropdown is expanded.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``option`` | [^slot-option] |

^^^slot-option
Slot for time options in the dropdown panel.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | Text to display. |
| `value` | `string` | Corresponding value. |
| `disabled` | `boolean` | Whether the option is disabled. |
| `part` | `string` | Which part the option belongs to, can be `hour` / `minute` / `second`. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``input`` | [^event-input] |
| ``change`` | Triggered when the selected value changes. The parameter is the current selected value, and it is triggered when the dropdown panel is closed. |
| ``toggle`` | Triggered when the dropdown panel's expand state is toggled. The callback parameter is `(expanded: boolean)`, where `expanded` indicates whether the operation will expand or collapse the dropdown panel. |
| ``clear`` | Clear the currently selected value. |

^^^event-input
:::badges
`v-model`
:::

Triggered when the value is manually input or selected in the dropdown panel. The parameter is the current input value.
^^^

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``timepicker.placeholder`` | `string` | `@@timepickerpicker.placeholder` | Placeholder text when no value is selected. |

:::tip
Values starting with `@@` refer to the corresponding properties in the multilingual configuration.
:::

### Icons

| Name | Description |
| -- | -- |
| ``clock`` | Clock icon. |
| ``clear`` | Clear content icon. |

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-dropdown-max-display-items`` | `<integer>` | `8` | [^css-max-display-items] |

^^^css-max-display-items
The maximum number of items displayed in the dropdown options at the same time. The maximum height of the dropdown will be calculated based on this value.

:::tip
The [`overlay-style`](#props-overlay-style) property needs to be used to set this value.
:::
^^^
