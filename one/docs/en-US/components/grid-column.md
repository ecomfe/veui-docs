# GridColumn

:::tip
`GridColumn` is required to be used with [`GridContainer`](./grid-container) and [`GridRow`](./grid-row).
:::

## Demos

See [the demos of `GridContainer`](./grid-container#demos).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``span`` | `number` | - | The number of original grid columns to span. If not specified it will span across the whole row. |
| ``offset`` | `number` | `0` | The number of original grid columns to move current column to the right. Will affect the position of following columns. |
| ``pull`` | `number` | `0` | The number of original grid columns to move current column to the left. Will *not* affect the position of following columns. |
| ``push`` | `number` | `0` | The number of original grid columns to move current column to the right. Will *not* affect the position of following columns. |

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the grid column. |
