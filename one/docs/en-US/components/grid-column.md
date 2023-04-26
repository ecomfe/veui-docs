# GridColumn

:::tip
The `GridColumn` component needs to be used with the [`GridContainer`](./grid-container) and [`GridRow`](./grid-row) components.
:::

## Examples

See [`GridContainer` examples](./grid-container#examples) .

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``span`` | `number` | - | The number of columns spanned by the grid column. If not passed, it will take up the entire row by default. |
| ``offset`` | `number` | `0` | The number of columns the grid column is offset, which affects the position of subsequent grid columns. |
| ``pull`` | `number` | `0` | The number of columns the grid column is pulled to the left, without affecting the position of other grid columns. Cannot be used with `push` at the same time. |
| ``push`` | `number` | `0` | The number of columns the grid column is pushed to the right, without affecting the position of other grid columns. Cannot be used with `pull` at the same time. |

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the grid column. |
