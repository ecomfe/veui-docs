# CheckboxGroup <small>复选框组</small>

## 示例

### 尺寸

可选的 [`ui`](#props-ui) 属性值：`s` / `m`。

[[ demo src="/demo/checkbox-group/default.vue" ]]

### 单复选共存

可以使用 [`exclusive`](#props-exclusive) 选项与 [`empty-value`](#props-empty-value) 实现一些单复选共存的场景。

[[ demo src="/demo/checkbox-group/exclusive.vue" ]]

### 额外描述

在数据源的项目中设置 `desc` 字段或者通过 [`desc`](#slots-desc) 插槽来指定额外描述。额外描述会在悬浮时显示。

[[ demo src="/demo/checkbox-group/desc.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``value`` | `Array` | `[]` | [^value] |
| ``disabled`` | `boolean` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean` | `false` | 是否为只读状态。 |
| ``empty-value`` | `*` | - | 当取消所有选择时组件需要默认选中的值，通常用于存在 `exclusive` 选项的场景。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
^^^

^^^items
复选框组数据源，项目类型为 `{ label, value, disabled, exclusive, desc, ... }`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项的文字说明。 |
| `value` | `*` | 选项对应的值。 |
| `disabled` | `boolean` | 选项是否为禁用。 |
| `exclusive` | `boolean` | 选项是否为排它项。 |
| `desc` | `string` | 选项的额外描述信息。 |
+++
^^^

^^^value
:::badges
`v-model`
:::

`items` 中已选项的 `value` 列表。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``item`` | [^slot-item] |
| ``desc`` | 按钮的额外描述信息，作用域参数同 [`item`](#slots-item) 插槽。 |

^^^slot-item
选项描述文本区域。

默认内容：`label` 属性值。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `*` | 选项值。 |
| `index` | `number` | 选项在 `items` 中的序号。 |
| `disabled` | `boolean` | 选项是否禁用。 |
+++

另外，`items` 内数据项中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``change`` | [^event-change] |

^^^event-change
:::badges
`v-model`
:::

选中状态变化后触发，回调参数为 `(value: Array)`。`value` 为当前复选框组已选项内 `value` 字段组成的数组。
^^^
