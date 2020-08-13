# PromptBox <small>输入弹框</small>

## 示例

获取用户输入的值。

[[ demo src="/demo/prompt-box/base.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | [^open] |
| `title` | `string` | - | 标题。 |
| `content` | `string` | `'请输入'` | 输入框上方的说明内容。 |
| `value` | `string` | `''` | [^value] |
| `overlay-class` | `string|Array|Object=` | - | 参考 [Overlay](./overlay) 组件的 `overlay-class` 属性。 |

^^^open
:::badges
`.sync`
:::

是否显示输入弹框。
^^^

^^^value
:::badges
`v-model`
:::

输入框值。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | 内容区。 |
| `title` | 标题区。若同时指定了 `title` 属性和 `title` 插槽，以后者为准。 |
| `foot` | 底部区域，默认会展示“确定”、“取消”按钮。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| `input` | [^event-input] |
| `ok` | 点击“确定”按钮时触发。 |
| `cancel` | 点击“取消”按钮时触发。 |
| `afterclose` | 浮层关闭后触发。如果样式主题提供了退出动画，将在退出动画完毕后触发。 |

^^^event-input
:::badges
`v-model`
:::

输入框值发生变化后触发。回调参数为 `(value: string)`，`value` 为输入框当前值。
^^^
