# Column <small>表格列</small>

:::tip
`Column` 组件需要在 [`Table`](./table) 组件内使用。
:::

## 示例

见 [`Table` 示例](./table#示例)。

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `title` | `string` | - | 列标题。 |
| `field` | `string` | - | 列的键名，对应所属的 `Table` 组件 `data` 属性数据项的某个字段。 |
| `width` | `string=|number=` | - | 列宽，值为像素值。 |
| `sortable` | `boolean=` | `false` | [^sortable] |
| `align` | `string=` | - | 内容对齐方式，支持 `left`/`center`/`right`。 |
| `span` | `function(number): Object=` | | [^span] |
| `desc` | `string` | - | 表头描述。 |
| `filter-value` | `*` | - | 筛选条件取值，目前仅支持 `true` 表示已经过筛选。 |

^^^sortable
本列是否支持排序。

:::warning
组件本身不会处理排序逻辑，仅会在排序按钮被点击时在 `Table` 上抛出 `sort` 事件，使用者需要自行处理排序逻辑。
:::
^^^

^^^span
单元格合并配置。类型为 `function(index: number): { row: number, col: number }`。`index` 为当前行在所属 `Table` 组件的 `data` 属性中的索引。返回值的 `row`/`col` 字段对应于单元格的 `rowspan`/`colspan`，默认值均为 `1`。

:::tip
可以参考 `Table` 组件中的[示例 › 高级](./table#高级)来了解如何使用。
:::
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `head` | 列头区域。 |
| `foot` | [^slot-foot] |
| `default` | [^slot-default] |
| `sub-row` | [^slot-sub-row] |
| `desc` | [^slot-desc] |
| `filter` | [^slot-filter] |

^^^slot-foot
列脚区域。

:::warning
如果所属的 `Table` 组件定义了 `foot` 插槽，单独的列脚配置将被覆盖。
:::
^^^

^^^slot-default
单元格的内容。

默认内容：表格 `data` 数据项中与 `field` 属性对应的字段值。

作用域参数为 `data` 内当前行数据中的所有字段。
^^^

^^^slot-sub-row
展开行后子行的内容。使用此插槽时，内容会作为行展开下方子行中对应列的单元格内容。行数据源来自 `data` 中对应主行数据的 `children` 数组，展开的子行数与 `children` 内数据项数相同，使用相同的列配置。

默认内容：表格 `data[i].children[j]` 数据项中与 `field` 属性对应的字段值。

作用域参数当前子行数据中的所有字段，以及当前主行对应索引值 `index`。

:::warning
如果所属的 `Table` 组件定义了插槽 `sub-row`，单独列的 `sub-row` 将被覆盖。
:::
^^^

^^^slot-desc
表头描述。使用此插槽时会覆盖 `Column` 的 `desc` 属性。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `close` | `function(): void` | 关闭展现描述内容的容器。 |
+++
^^^

^^^slot-filter
筛选浮层的内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `close` | `function(): void` | 关闭筛选浮层。 |
+++
^^^
