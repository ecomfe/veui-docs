# Transfer <small>穿梭框</small>

## 示例

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`s` / `m`。

[[ demo src="/demo/transfer/size.vue" ]]

### 无搜索

[[ demo src="/demo/transfer/no-search.vue" ]]

### 自定义搜索

[[ demo src="/demo/transfer/custom-search.vue" ]]

### 扁平输出树形数据

[[ demo src="/demo/transfer/flat.vue" ]]

### 选中值的合并模式

设置 [`merge-checked`](#props-merge-checked) 来指定选中值的合并模式。

[[ demo src="/demo/transfer/merge-checked.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``searchable`` | `boolean` | `true` | 是否允许搜索。 |
| ``filter`` | `function` | 见描述 | [^filter] |
| ``selected`` | `Array` | `[]` | [^selected] |
| ``candidate-placeholder`` | `string` | - | 待选区内搜索框的占位文本。 |
| ``selected-placeholder`` | `string` | - | 已选区内搜索框的占位文本。 |
| ``candidate-title`` | `string` | - | “待选项”标题的文字内容。 |
| ``selected-title`` | `string` | - | “已选项”标题的文字内容。 |
| ``selected-show-mode`` | `string` | `'tree'` | [^selected-show-mode] |
| ``keys`` | `string | function` | `'value'` | [^keys] |
| ``merge-checked`` | `string` | `keep-all` | [^merge-checked] |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^datasource
数据源数组，每个项目类型为 `{label, value, disabled, children, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 项目的文字描述。 |
| `value` | `string` | 项目对应的值。 |
| `disabled` | `boolean` | 项目是否被禁用。 |
| `children` | `Array<Object>` | 项目的子项目数组，数组项类型同 `datasource` 数组项。 |
+++
^^^

^^^filter
搜索过滤函数，签名为 `function(from, keyword, item, index, datasource): boolean`。返回值为 `false` 的项目将被从结果中过滤掉。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `from` | `string` | 搜索来源，可选枚举值：`'candidate'`、`'selected'`。`'candidate'` 表示是待选列表触发的搜索，`'selected'` 表示是已选列表触发的搜索。 |
| `keyword` | `string` | 搜索关键词。 |
| `item` | `Object` | 当前遍历到的数据项。 |
| `index` | `number` | 当前数据项在兄弟项目中的索引。 |
| `datasource` | `Array<Object>` | 与 [`datasource`](#props-datasource) 属性一致。 |
+++

+++默认值
```js
import { includes } from 'lodash'

function (keyword, { label }) {
  return includes(label, keyword)
}
```
+++
^^^

^^^selected
:::badges
`v-model`
:::

当前选中的值，是 `datasource` 中选中项的 `value` 集合（受 [`keys`](#props-keys) 属性影响）。
^^^

^^^selected-show-mode
选中框中选中项的显示方式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `tree` | 以树形结构展示。 |
| `flat` | 以扁平方式展示，数据展开成一维数组。 |
+++
^^^

^^^keys
自定义获取 `datasource` 中每一项的 `value` 值（具备唯一性）。可以用字符串的形式直接指定 `datasource` 中的哪个属性作为 `value`，也可以传递一个函数更加灵活地去生成 `value` 值。

若类型为 `function`，参数为 `(item: Object)`，`item` 是 `datasource` 中的一个节点的属性，返回值是添加到 `selected` 中的值。
^^^

^^^merge-checked

选中值的合并策略。当某个节点下的所有子节点都被选中时，可以选择只保留父节点、只保留子节点或都保留。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `keep-all` | 父子节点都会在选中值中。 |
| `upwards` | 尽可能往祖先方向合并选中值。 |
| `downwards` | 尽可能往后代方向合并选中值。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``candidate`` | 整个待选区。 |
| ``candidate-head`` | [^candidate-head] |
| ``selected-head`` | [^selected-head] |
| ``candidate-title`` | 待选区内顶部标题文本区域。作用域参数与 `candidate-head` 一致。 |
| ``selected-title`` | 已选区内顶部标题文本区域。作用域参数与 `selected-head` 一致。 |
| ``candidate-no-data`` | 数据源没数据时显示的内容。 |
| ``selected-no-data`` | 没有已选项时显示的内容。 |
| ``candidate-item`` | [^candidate-item] |
| ``selected-item`` | [^selected-item] |
| ``candidate-item-label`` | 待选区内每一项的文本区域。作用域参数与 `candidate-item` 一致。 |
| ``selected-item-label`` | 已选区内每一项的文本区域。当 `selected-show-mode` 为 `'tree'` 时作用域参数与 `selected-item` 一致。否则该插槽对应每个已选叶子项目的整条路径上的每个节点内容，此时作用域参数与 `candidate-item` 一致。 |

^^^candidate-head
待选区内顶部标题区域。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `count` | `number` | 待选项的数量。 |
+++
^^^

^^^selected-head
已选区内顶部标题区域。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `count` | `number` | 已选项的数量。 |
+++
^^^

^^^candidate-item
待选区内的每一项内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 项目的文本描述。 |
| `value` | `string` | 项目的值。 |
| `disabled` | `boolean` | 项目是否被禁用。 |
| `children` | `Array<Object>` | 项目的子项目数组，数组项类型同 `datasource` 数组项。 |
| `index` | `number` | 当前项目在同层级兄弟项中的索引。 |
| `depth` | `number` | 当前项目在树结构中的深度。 |
+++
^^^

^^^selected-item
已选区内的每一项内容。

+++作用域参数
如果 `Transfer` 组件的 `selected-show-mode` 为 `'tree'`，则作用域参数与 `candidate-item` 一致；如果 `selected-show-mode` 为 `'flat'`，则作用域参数为：

| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `items` | `Array<Object>` | 包含从树形结构的根项目到叶子项目的路径。数组项类型与 `datasource` 项目相同。 |
| `index` | `number` | 当前项目在展开数组中的索引。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``select`` | 切换选择时触发。回调参数为 `(selected: Array<string>)`。`selected` 为已选项 `value` 字段集合。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``checked`` | 已选状态。 |
| ``select`` | 待选择。 |
| ``remove`` | 移除。 |
| ``expand`` | 收起状态，点击后展开。 |
| ``collapse`` | 展开状态，点击后收起。 |
| ``separator`` | 当 `selected-show-mode` 为 `'flat'` 时层级间的分隔符。 |
