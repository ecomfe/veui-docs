# Tag <small>标签</small>

## 示例

### 尺寸

可选的尺寸 `ui` 属性值：`s`/`m`。

[[ demo src="/demo/tag/size.vue" ]]

### 可选择

使用 `selectable` 属性使标签可以切换选中状态。

[[ demo src="/demo/tag/selectable.vue" ]]

### 可移除

使用 `removable` 属性使标签可以被移除。

[[ demo src="/demo/tag/removable.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `type` | `string=` | `'default'` | [^type] |
| `selectable` | `boolean=` | `false` | 是否允许选择。 |
| `selected` | `boolean=` | `false` | [^selected] |
| `removable` | `boolean=` | `false` | 是否允许删除。 |
| `removed` | `boolean=` | `false` | [^removed] |
| `disabled` | `boolean=` | `false` | 是否禁用。 |

:::warning
`selectable` 和 `removable` 属性不允许同时为 `true`。
:::

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小内容尺寸。 |
| `m` | 中内容尺寸。 |
| `reverse` | 反色样式。 |
| `bordered` | 带边框样式。 |
+++
^^^

^^^type
标签类型。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `default` | 默认标签。 |
| `info` | 信息提示标签。 |
| `success` | 成功标签。 |
| `warning` | 警告标签。 |
| `error` | 错误标签。 |
+++
^^^

^^^selected
:::badges
`.sync`
:::

是否已被选中。
^^^

^^^removed
:::badges
`.sync`
:::

是否已被删除。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | 内容区。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| `remove` | 点击删除按钮时触发。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| `remove` | 删除。 |
