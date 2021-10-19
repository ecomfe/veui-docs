# GridContainer

:::tip
`GridContainer` is required to be used with [`GridRow`](./grid-row) and [`GridColumn`](./grid-row).
:::

## Demos

### Default grid

[[ demo src="/demo/grid/default.vue" browser="/demos/grid/default.vue" ]]

### Fixed-width grid

[[ demo src="/demo/grid/fixed.vue" browser="/demos/grid/fixed.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``columns`` | `number` | `gridcontainer.columns` | The number of columns. |
| ``margin`` | `number` | `gridcontainer.margin` | Margin around both sides of the grid container in `px`. |
| ``gutter`` | `number` | `gridcontainer.gutter` | Gutter between adjacent grid columns in `px`. |
| ``width`` | `number` | - | The width of the grid container in `px` when creating fixed-width grids. |

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the grid. Can only have [`GridRow`](./grid-row) components as direct children. |

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``gridcontainer.columns`` | `number` | `12` | The number of columns. |
| ``gridcontainer.gutter`` | `number` | `30` | Gutter between adjacent grid columns in `px`. |
| ``gridcontainer.margin`` | `number` | `0` | Margin around both sides of the grid container in `px`. |

#### Default config in `veui-theme-dls`

| Key | Type | Default |
| -- | -- | -- | -- |
| `gridcontainer.columns` | `number` | `24` |
| `gridcontainer.gutter` | `number` | `20` |
| `gridcontainer.margin` | `number` | `20` |
