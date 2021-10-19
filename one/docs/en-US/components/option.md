# Option

:::tip
`Option` is required to be used within [`Select`](./select), [`Dropdown`](./dropdown) or [`OptionGroup`](./option-group).
:::

## Demos

See [the demos of `Select`](./select#demos) or [the demos of `Dropdown`](./dropdown#demos).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``label`` | `string` | The descriptive label of the option. |
| ``value`` | `*` | The value of the option. |
| ``disabled`` | `boolean=` | Whether the option is disabled. |
| ``hidden`` | `boolean=` | `false` | Whether the option is hidden. |

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The entire content area of the option. Displays the label and potential check icon by default.
| ``label`` | The content of the option label. Displays the [`label`](#props-label) prop by default. |

### Events

The `click` event is triggered upon clicks without callback parameters.

### Icons

| Name | Description |
| -- | -- |
| ``checked`` | Checked state. |
