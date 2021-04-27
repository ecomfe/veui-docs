# Table <small>表格</small>

:::tip
`Table` 组件需要配合 [`Column`](./column) 组件使用。
:::

## 示例

### 内容密度

可选的 `ui` 尺寸属性值：`compact`/`loose`。

[[ demo src="/demo/table/basic.vue" ]]

### 高级

允许自定义唯一键、设定选择模式以及进行排序。

[[ demo src="/demo/table/advanced.vue" ]]

### 筛选

使用 `filter` 插槽来开启自定义筛选功能。

[[ demo src="/demo/table/filter.vue" ]]

### 内部滚动模式

允许启用内部滚动模式，以达到固定表头表底的效果。

[[ demo src="/demo/table/scrollable.vue" ]]

### 固定列

使用 `Table` 的 `scroll` 属性及 `Column` 组件的 `fixed` 属性来控制固定列的位置。

[[ demo src="/demo/table/fixed.vue" ]]

### 展开行

支持将带有子数据的行进行展开。

[[ demo src="/demo/table/expandable.vue" ]]

### 表头描述

使用 `desc` 属性或 `desc` 插槽来为表头增加描述信息。

[[ demo src="/demo/table/desc.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `data` | `Array<Object>` | - | 表格数据。 |
| `key-field` | `string` | - | 用于指定充当表格数据的键的列标志符。值对应 `data` 属性中数据项的某个字段名称。对应字段的值则会作为行元素的 [`key` 属性](https://cn.vuejs.org/v2/guide/list.html#key)输出。当 `selectable` 属性为 `true` 时，也可以用来指定在存在纵向合并单元格的情况下以哪一列的不同行作为选择项，此时值必须来自内部某个 `Column` 组件的 `field` 属性。 |
| `selectable` | `boolean` | `false` | 是否支持表格行的选择。 |
| `select-mode` | `string` | `'multiple'` | 选择模式，支持的值为 `single`/`multiple`，分别对应于单选/多选模式。 |
| `selected` | `Array<*>|*` | `[]` | [^selected] |
| `expandable` | `boolean` | `false` | 是否允许展开行。 |
| `expanded` | `Array<*>` | `[]` | [^expanded] |
| `order` | `string|boolean` | `false` | 排序顺序。为 `false` 时表示无序，为字符串值 `'asc'`/`'desc'` 时分别为升序/降序。 |
| `order-by` | `string` | - | 用于指定当前基于哪一列进行了排序，值必须来自内部某个 `Column` 组件的 `field` 属性。 |
| `scroll` | `number` | - | 指定滚动区域的最大高度，当超出此高度时，表格将进入固定表头和底部只允许数据区域滚动的模式。 |
| `loading` | `boolean` | `false` | 指定表格是否处于加载状态。 |
| `allowed-orders` | `Array` | `[false, 'desc', 'asc']` | [^allowed-orders] |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `compact` | 紧凑样式。 |
| `loose` | 宽松样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^selected
:::badges
`.sync`
:::

已选行。当 `select-mode` 为 `'multiple'` 时为已选行 `key-field` 对应字段值的数组；为 `'single'` 时为已选行 `key-field` 对应字段值。
^^^

^^^expanded
:::badges
`.sync`
:::

已展开行。为已展开行 `key-field` 对应字段值的数组。
^^^

^^^allowed-orders
在表格层级指定列的排序范围。

+++值范围
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
| `default` | 用于定义表格列，只能包含 `Column` 组件。 |
| `no-data` | 用于定义无数据时要展现的内容。 |
| `foot` | 表格脚部内容，整个区域将打通成为一个容器，不再保留分列。 |
| `sub-row` | [^slot-sub-row] |

^^^slot-sub-row
展开行后子行的内容。使用此插槽时，内容会作为行展开下方通栏显式的子行内容。使用此插槽时会覆盖 `Column` 的插槽 `sub-row` 内容。

作用域参数为 `data` 内当前行数据中的所有字段，以及当前行对应索引值 `index`。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `select` | [^event-select] |
| `sort` | [^event-sort] |

^^^event-select
切换已选项时触发。回调参数为 `(selected, item, selectedItems)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `selected` | `boolean` | `true` 表示已选择，`false` 则表示取消选择。 |
| `item` | `Object` | 选择状态发生变化的 `data` 属性中的数据项。当存在纵向合并单元格且以相应行作为键进行选择时，将返回第一条相关的 `data` 数据项。 |
| `selectedItems` | `Object<string, Object|Array>` | 当前所有已选项的信息，键为 `key-field` 对应字段，值为对应的 `data` 数据项。当存在纵向合并单元格且以相应行作为键进行选择时，值为所有相关行数据项组成的数组。 |
+++
^^^

^^^event-sort
进行排序时触发的事件。回调参数为 `(field, order)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `field` | `string` | 基于哪一列进行排序。值来自对应 `Column` 组件的 `field` 属性。 |
| `order` | `string|boolean` | 同 [`order` 属性](#属性)。 |
+++
^^^
