# Fieldset

:::tip
The `Fieldset` component needs to be used with the [`Form`](./form) and [`Field`](./field) components. A `Fieldset` can contain multiple `Field`s.
:::

## Example

See [`Form` examples](./form#examples).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``readonly`` | `boolean` | `false` | Whether the internal input component is in readonly mode. |
| ``disabled`` | `boolean` | `false` | Whether the internal input component is disabled. |
| ``label`` | `string` | - | Description of the form fieldset. |
| ``tip`` | `string` | - | Hint for the form fieldset. |
| ``name`` | `string` | - | Name of the form fieldset, used to locate error messages. |
| ``required`` | `boolean` | - | Whether to show a required star. |

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Used for inline `Field` components. No default content. |
| ``label`` | Fills the content of the form fieldset description. Defaults to the text value of the [`label`](#props-label) prop. |
| ``tip`` | Fills the content of the form fieldset hint. Defaults to the text value of the [`tip`](#props-tip) prop. |
