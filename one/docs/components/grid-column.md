# GridColumn <small>栅格栏</small>

:::tip
`GridColumn` 组件需要配合 [`GridContainer`](./grid-container) 及 [`GridRow`](./grid-row) 组件使用。
:::

## 示例

见 [`GridContainer` 示例](./grid-container#示例)。

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``span`` | `number` | - | 栅格栏横跨的列数，不传则默认占满整行。 |
| ``offset`` | `number=` | `0` | 偏移列数，将影响后续栅格栏的位置。 |
| ``pull`` | `number=` | `0` | 栅格栏向左偏移列数，不影响其它栅格栏的位置。不能与 `push` 同时使用。 |
| ``push`` | `number=` | `0` | 栅格栏向右偏移列数，不影响其它栅格栏的位置。不能与 `pull` 同时使用。 |

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 栅格栏内容。 |
