# GridContainer

:::tip
`GridContainer` component needs to be used with the [`GridRow`](./grid-row) and [`GridColumn`](./grid-column) components.
:::

## Examples

### Default grid

[[ demo src="/demo/grid/default.vue" browser="/demos/grid/default.vue" ]]

### Fixed grid

[[ demo src="/demo/grid/fixed.vue" browser="/demos/grid/fixed.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``columns`` | `number` | `gridcontainer.columns` | Number of columns in the grid. |
| ``margin`` | `number` | `gridcontainer.margin` | Margin on both sides of the grid, in pixels. |
| ``gutter`` | `number` | `gridcontainer.gutter` | Spacing between columns in the grid, in pixels. |
| ``width`` | `number` | - | When creating a fixed layout, the width of the container in pixels. |

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The layout content, only[`GridRow`](./grid-row) components can be direct children. |

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``gridcontainer.columns`` | `number` | `12` | Number of columns in the grid. |
| ``gridcontainer.gutter`` | `number` | `30` | Spacing between columns in the grid, in pixels. |
| ``gridcontainer.margin`` | `number` | `0` | Margin on both sides of the grid, in pixels. |

#### Default configs in `veui-theme-dls`

| Key | Type | Default |
| -- | -- | -- |
| `gridcontainer.columns` | `number` | `24` |
| `gridcontainer.gutter` | `number` | `20` |
| `gridcontainer.margin` | `number` | `20` |
