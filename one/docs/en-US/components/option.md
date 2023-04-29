# Option

:::tip
The `Option` component needs to be used in conjunction with the [`Select`](./select) or [`Dropdown`](./dropdown) or [`OptionGroup`](./option) component.
:::

## Examples

See [`Select` examples](./select#examples) or [`Dropdown` examples](./dropdown#examples).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``label`` | `string` | - | The text of the option. |
| ``value`` | `*` | - | The value corresponding to the option. |
| ``disabled`` | `boolean` | `false` | Whether the option is in a disabled state. |
| ``hidden`` | `boolean` | `false` | Whether the option is in a hidden state. |

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The entire area of the option. Displays the default text and check icon. |
| ``label`` | The text area of the option. Displays the [`label`](#props-label) property content by default. |

### Events

| Name | Description |
| -- | -- |
| ``click`` | Triggered when the option is clicked. No parameters. |

### Icons

| Name | Description |
| -- | -- |
| ``checked`` | The selected state. |
