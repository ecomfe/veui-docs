# Tree <small>树形控件</small>

## 示例

### 尺寸

可选的尺寸 `ui` 属性值：`m`/`s`。

[[ demo src="/demo/tree/size.vue" ]]

### 控制展开、选中状态

[[ demo src="/demo/tree/default.vue" ]]

### 自定义内容

[[ demo src="/demo/tree/custom-item.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `datasource` | `Array<Object>` | `[]` | [^datasource] |
| `expanded` | `Array` | `[]` | [^expanded] |
| `checkable` | `boolean` | `false` | 子节点是否可勾选。 |
| `checked` | `Array` | `[]` | [^checked] |
| `selectable` | `boolean` | `false` | 点击整个节点区域时是否选中该节点。 |
| `selected` | `string` | - | [^selected] |
| `merge-checked` | `string` | `keep-all` | [^merge-checked] |

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
| `label` | `string` | 节点的文字描述。 |
| `value` | `string` | 节点对应的值。 |
| `disabled` | `boolean=` | 节点是否被禁用。 |
| `children` | `Array<Object>=` | 节点的子节点数组，数组项类型同 `datasource` 数组项。 |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

指定当前展开的节点，是一个对应于 `datasource` 中节点数据中 `value` 属性的数组。
^^^

^^^checked
:::badges
`v-model`
:::

当前被勾选的叶节点的值，是一个对应于 `datasource` 中节点数据中 `value` 属性的数组。
^^^

^^^selected
:::badges
`.sync`
:::

当前被选中的叶节点的值，是一个对应于 `datasource` 中节点数据中 `value` 属性的数组。
^^^

^^^merge-checked

选中值的合并策略。

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
| `item` | [^item] |
| `item-label` | 每个节点的文本区域。作用域参数与 `item` 插槽一致。 |
| `item-before` | 每个节点的文本之前的区域。作用域参数与 `item` 插槽一致。 |
| `item-after` | 每个节点的文本之后的区域。作用域参数与 `item` 插槽一致。 |

^^^item
每个节点的整个内容区域。

+++参数属性
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 节点的文本描述。 |
| `value` | `string` | 节点的值。 |
| `disabled` | `boolean=` | 节点是否被禁用。 |
| `children` | `Array<Object>=` | 节点的子节点数组，数组项类型同 `datasource` 数组项。 |
| `index` | `number` | 当前数据节点在共父节点层级的索引。 |
| `depth` | `number` | 当前数据节点在树种的深度。 |
+++

另外，`datasource` 内数据项中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `click` | [^click] |
| `expand` | [^expand] |
| `collapse` | [^collapse] |
| `check` | [^check] |

^^^click
点击节点触发，回调参数为 `(item, parents, index, depth)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `item` | `Object` | 节点数据。数组项类型与 `datasource` 项目相同。 |
| `parents` | `Array<Object>` | 从根节点到当前节点父节点的路径。数组项类型与 `datasource` 项目相同。 |
| `index` | `number` | 当前节点在自己所属层级的索引。 |
| `depth` | `number` | 当前节点在树形层级中的深度。 |
+++
^^^

^^^expand
节点展开时触发。回调参数为 `(item, index, depth)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `item` | `Object` | 节点数据。数组项类型与 `datasource` 项目相同。 |
| `index` | `number` | 当前节点在自己所属层级的索引。 |
| `depth` | `number` | 当前节点在树形层级中的深度。 |
+++
^^^

^^^collapse
点击收起图标或者整个节点时触发，由 `item-click` 属性决定，回调参数为 `(item, index, depth)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `item` | `Object` | 节点数据。数组项类型与 `datasource` 项目相同。 |
| `index` | `number` | 当前节点在自己所属层级的索引。 |
| `depth` | `number` | 当前节点在树形层级中的深度。 |
+++
^^^

^^^check
:::badges
`v-model`
:::

勾选状态变化后触发，回调参数为 `(value: Array)`。`value` 为当前勾选中的叶节点的 `value` 字段组成的数组（受 `keys` 属性影响）。
^^^

### 图标

| 名称 | 描述 |
| -- | -- |
| `expand` | 收起状态，点击后展开。 |
| `collapse` | 展开状态，点击后收起。 |
