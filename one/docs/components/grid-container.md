# GridContainer <small>栅格容器</small>

:::tip
`GridContainer` 组件需要配合 [`GridRow`](./grid-row) 及 [`GridColumn`](./grid-column) 组件使用。
:::

## 示例

### 默认栅格

[[ demo src="/demo/grid/default.vue" browser="/demos/grid/default.vue" ]]

### 定宽栅格

[[ demo src="/demo/grid/fixed.vue" browser="/demos/grid/fixed.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``columns`` | `number=` | `gridcontainer.columns` | 栅格列数。 |
| ``margin`` | `number=` | `gridcontainer.margin` | 栅格两侧边距 `px` 数值。 |
| ``gutter`` | `number=` | `gridcontainer.gutter` | 栅格列间距 `px` 数值。 |
| ``width`` | `number=` | - | 当需要创建定宽布局时，用来传入容器宽度 `px` 数值。 |

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 布局内容，直接子组件只能包含 [`GridRow`](./grid-row) 组件。 |

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``gridcontainer.columns`` | `number` | `12` | 栅格列数。 |
| ``gridcontainer.gutter`` | `number` | `30` | 栅格列间距 `px` 数值。 |
| ``gridcontainer.margin`` | `number` | `0` | 栅格两侧边距 `px` 数值。 |

#### `veui-theme-dls` 中的默认配置

| 配置项 | 类型 | 默认值 |
| -- | -- | -- | -- |
| `gridcontainer.columns` | `number` | `24` |
| `gridcontainer.gutter` | `number` | `20` |
| `gridcontainer.margin` | `number` | `20` |
