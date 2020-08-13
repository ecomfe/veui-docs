# CheckButtonGroup <small>复选按钮组</small>

## 示例

### 尺寸

可选的 `ui` 属性值：`s`/`m`。

[[ demo src="/demo/check-button-group/default.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `items` | `Array<Object>` | `[]` | [^items] |
| `value` | `Array` | `[]` | [^value] |
| `disabled` | `boolean=` | `false` | 是否为禁用状态。 |
| `readonly` | `boolean=` | `false` | 是否为只读状态。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
^^^

^^^items
复选按钮组数据源，项目类型为 `{label, value, disabled, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项的文字说明。 |
| `value` | `*` | 选项对应的值。 |
| `disabled` | `boolean=` | 选项是否为禁用。 |
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
| `item` | [^scoped-slot-item] |

^^^scoped-slot-item
按钮内文本区域。

默认内容：`label` 属性值。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `*` | 选项值。 |
| `index` | `number` | 选项在 `items` 中的序号。 |
| `disabled` | `boolean=` | 选项是否禁用。 |
+++

另外，`items` 内数据项中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `change` | [^event-change] |

^^^event-change
:::badges
`v-model`
:::

选中状态变化后触发，回调参数为 `(value: Array)`。`value` 为当前按钮组已选项内 `value` 字段组成的数组。
^^^
