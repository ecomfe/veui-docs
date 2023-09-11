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
| ``title`` | `string` | - | 列标题。 |
| ``field`` | `string` | - | 列的键名，对应所属的 `Table` 组件 [`data`](./table#props-data) 属性数据项的某个字段。 |
| ``width`` | `string=|number` | - | 列宽，值为像素值。 |
| ``sortable`` | `boolean` | `false` | [^sortable] |
| ``align`` | `string` | - | 内容对齐方式，支持 `left` / `center` / `right`。 |
| ``span`` | `function(number): Object` | | [^span] |
| ``desc`` | `string` | - | 表头描述。 |
| ``fixed`` | `boolean | 'left' | 'right'` | `false` | 该列是否固定，`'left'` 表示固定在左侧，`'right'` 表示在右侧。 |
| ``filter-value`` | `*` | - | [^filter-value] |
| ``filter-multiple`` | `boolean` | `false` | 内置筛选是否为多选。 |
| ``filter-options`` | `Array<Object>` | - | 筛选选项列表，项目的类型为 `{label, value, options, disabled, ...}`，可参考 [`Select`](./select) 组件的 [`options`](./select#props-options) 属性。 |
| ``filter-title`` | `string` | - | 筛选下拉的标题。 |
| ``allowed-orders`` | `Array` | `[false, 'desc', 'asc']` | [^allowed-orders] |
| ``ellipsis`` | `boolean` | `tablecolumn.ellipsis` | 单元格内容溢出后是否自动截断。 |
| ``tooltip`` | `boolean | ((item: Object) => string)` | `tablecolumn.tooltip` | 单元格内容溢出时是否自动截断并自动显示悬浮提示。默认显示当前单元格的 `textContent`。传入函数时，`item` 参数为整个 data 数据项，返回的字符串将作为提示内容展示。 |

^^^sortable
本列是否支持排序。

:::warning
组件本身不会处理排序逻辑，仅会在排序按钮被点击时在 `Table` 上抛出 [`sort`](./table#events-sort) 事件，使用者需要自行处理排序逻辑。
:::
^^^

^^^span
单元格合并配置。类型为 `function(index: number): { row: number, col: number }`。`index` 为当前行在所属 `Table` 组件的 [`data`](./table#props-data) 属性中的索引。返回值的 `row` / `col` 字段对应于单元格的 `rowspan` / `colspan`，默认值均为 `1`。

:::tip
可以参考 `Table` 组件中的[示例 › 选择模式与排序](./table#选择模式与排序)来了解如何使用。
:::
^^^

^^^filter-value
:::badges
`.sync`
:::

筛选条件取值，值为 `null` 表示未经过筛选。当 `filter-multiple` 为 `true` 时，值为已选项值的数组。
^^^

^^^allowed-orders
指定该列的排序范围。用户点击时将按设定的顺序进行切换。

+++值详情
| 值 | 描述 |
| -- | -- |
| `false` | 不排序。 |
| `'asc'` | 升序。 |
| `'desc'` | 降序。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``head`` | 列头区域。 |
| ``foot`` | [^slot-foot] |
| ``default`` | [^slot-default] |
| ``sub-row`` | [^slot-sub-row] |
| ``desc`` | [^slot-desc] |
| ``filter`` | [^slot-filter] |

^^^slot-foot
列脚区域。

:::warning
如果所属的 `Table` 组件定义了 [`foot`](./table#slots-foot) 插槽，单独的列脚配置将被覆盖。
:::
^^^

^^^slot-default
单元格的内容。

默认内容：表格 `data` 数据项中与 [`field`](#props-field) 属性对应的字段值。

插槽参数为 `data` 内当前行数据中的所有字段。
^^^

^^^slot-sub-row
展开行后子行的内容。使用此插槽时，内容会作为行展开下方子行中对应列的单元格内容。行数据源来自 `data` 中对应主行数据的 `children` 数组，展开的子行数与 `children` 内数据项数相同，使用相同的列配置。

默认内容：表格 `data[i].children[j]` 数据项中与 [`field`](#props-field) 属性对应的字段值。

插槽参数当前子行数据中的所有字段，以及当前主行对应索引值 `index`。

:::warning
如果所属的 `Table` 组件定义了 [`sub-row`](./table#slots-sub-row) 插槽，单独列的 `sub-row` 插槽将被覆盖。
:::
^^^

^^^slot-desc
表头描述。使用此插槽时会覆盖 `Column` 的 [`desc`](#props-desc) 属性。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `close` | `function(): void` | 关闭展现描述内容的容器。 |
+++
^^^

^^^slot-filter
筛选浮层的内容。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `close` | `function(): void` | 关闭筛选浮层。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``filterchange`` | 修改该列过滤器时触发。回调参数为 `(value)`。`value` 为过滤器的当前值。 |

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``tablecolumn.ellipsis`` | `boolean` | `false` | 单元格内容溢出后是否自动截断。 |
| ``tablecolumn.tooltip`` | `boolean | ((item: Object) => string)` | `false` | 单元格内容溢出后是否自动截断。 |
