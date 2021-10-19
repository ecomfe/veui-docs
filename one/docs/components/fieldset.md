# Fieldset <small>表单项集合</small>

:::tip
`Fieldset` 组件需要配合 [`Form`](./form) 及 [`Field`](./field) 组件使用。一个 `Fieldset` 可以包含多个 `Field`。
:::

## 示例

见 [`Form` 示例](./form#示例)。

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``readonly`` | `boolean=` | `false` | 内部输入组件是否为只读状态。 |
| ``disabled`` | `boolean=` | `false` | 内部输入组件是否为禁用状态。 |
| ``label`` | `string` | - | 表单项集合描述。 |
| ``tip`` | `string` | - | 表单项集合提示。 |
| ``name`` | `string` | - | 表单项集合名称，用于展示错误消息的定位。 |
| ``required`` | `boolean` | - | 是否显示必要性星号提示。 |

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 用于内联 `Field` 组件。无默认内容。 |
| ``label`` | 填充表单项集合描述的内容。默认为 [`label`](#props-label) 属性的文本值。 |
| ``tip`` | 填充表单项集合提示的内容。默认为 [`tip`](#props-tip) 属性的文本值。 |
