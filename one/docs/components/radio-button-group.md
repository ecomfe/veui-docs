# RadioButtonGroup <small>单选按钮组</small>

## 示例

### 尺寸

可选的 [`ui`](#props-ui) 属性值：`s` / `m`。

[[ demo src="/demo/radio-button-group/default.vue" ]]

### 简单样式

设置 [`ui`](#props-ui) 属性值：`simple` 来指定简单样式。

[[ demo src="/demo/radio-button-group/simple.vue" ]]

### 额外描述

在数据源的项目中设置 `desc` 字段或者通过 [`desc`](#slots-desc) 插槽来指定额外描述。额外描述会在悬浮时显示。

[[ demo src="/demo/radio-button-group/desc.vue" ]]

### 最小宽度

设置 [`ui`](#props-ui) 属性值：`stable` 来为选项启用最小宽度，使多行场景下布局更为稳定。

[[ demo src="/demo/radio-button-group/stable.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``value`` | `*` | - | [^value] |
| ``disabled`` | `boolean=` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean=` | `false` | 是否为只读状态。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
| `simple` | 简单样式。 |
| `stable` | 稳定样式。会给所有按钮添加一个最小宽度以使布局更加稳定，多行之间更容易对齐。 |
^^^

^^^items
单选按钮组数据源，项目类型为 `{ label, value, disabled, desc, ... }`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项的文字说明。 |
| `value` | `*` | 选项对应的值。 |
| `disabled` | `boolean=` | 选项是否为禁用。 |
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
按钮内文本区域。

默认内容：`label` 属性值。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `string` | 选项值。 |
| `index` | `number` | 选项在 `items` 中的序号。 |
| `disabled` | `boolean=` | 选项是否禁用。 |
| `desc` | `string` | 选项的额外描述信息。 |
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

选中状态变化后触发，回调参数为 `(value: *)`。`value` 为当前按钮组已选项内 `value` 字段的值。
^^^

### 自定义样式

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``--dls-checkbox-button-min-width`` | `<length>` | - | 在 [`ui`](#props-ui) 设置了 `stable` 时的选项最小宽度。 |
