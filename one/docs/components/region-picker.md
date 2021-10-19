# RegionPicker <small>地域选择</small>

## 示例

[[ demo src="/demo/region-picker/default.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``selected`` | `Array<string>` | - | [^selected] |
| ``include-indeterminate`` | `boolean` | `false` | 是否将半选状态的节点加入已选项。`datasource` 节点中的非叶子节点若有部分子孙节点被选中，则为半选状态。 |
| ``disabled`` | `boolean=` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean=` | `false` | 是否为只读状态。 |

^^^datasource
数据源，项目类型为 `{label, value, disabled, children, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 节点的文字说明。 |
| `value` | `string=` | 节点对应的值。 |
| `disabled` | `boolean=` | 节点是否为禁用。 |
| `children` | `Array<Object>=` | 子节点列表，列表项类型与本节点相同。 |
+++
^^^

^^^selected
:::badges
`v-model`
:::

已选项 `value` 的数组。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``label`` | [^slot-label] |

^^^slot-label
每个节点文本描述的内容。

默认内容：每个节点 `label` 字段对应的文本内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 节点的文字说明。 |
| `value` | `string` | 节点对应的值。 |
| `disabled` | `boolean=` | 节点是否为禁用。 |
| `children` | `Array<Object>=` | 子节点列表，列表项类型与本节点相同。 |
| `level` | `number` | 节点所在的层级。顶层节点层级为 `0`。 |
| `overlay` | `boolean=` | 是否在浮层中。 |
+++

另外，`datasource` 内节点中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。

:::tip
`level` 为 `2` 且 `overlay` 为 `true` 时为在浮层中展现的三级标题，默认内容会附带被选中的子节点个数及子节点总数信息。
:::
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``select`` | [^event-select] |

^^^event-select
:::badges
`v-model`
:::

选中状态变化后触发，回调参数为 `(value: Array)`。`value` 类型与 [`selected`](#props-selected) 属性相同。
^^^
