# Option <small>选项</small>

:::tip
`Option` 组件需要配合 [`Select`](./select) 或 [`Dropdown`](./dropdown) 或 [`OptionGroup`](./option) 组件使用。
:::

## 示例

见 [`Select` 示例](./select#示例)或 [`Dropdown` 示例](./dropdown#示例)。

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``label`` | `string` | - | 选项的文本。 |
| ``value`` | `*` | - | 选项对应的值。 |
| ``disabled`` | `boolean` | `false` | 是否为禁用状态。 |
| ``hidden`` | `boolean` | `false` | 是否为隐藏状态。 |

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 选项的整个区域。默认显示文本及勾选图标等。 |
| ``label`` | 选项的文本区域。默认显示 [`label`](#props-label) 属性内容。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| ``click`` | 在选项被点击时触发 `click` 事件，没有参数。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``checked`` | 已选状态。 |
