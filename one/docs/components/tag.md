# Tag <small>标签</small>

## 示例

### 尺寸

可供选用的尺寸 [`ui`](#props-ui) 属性值：`s` / `m`。

[[ demo src="/demo/tag/size.vue" ]]

### 可选择

使用 [`selectable`](#props-selectable) 属性使标签可以切换选中状态。

[[ demo src="/demo/tag/selectable.vue" ]]

### 可移除

使用 [`removable`](#props-removable) 属性使标签可以被移除。

[[ demo src="/demo/tag/removable.vue" ]]

### 预设颜色

使用 [`color`](#props-color) 属性来设置需要使用的预设颜色的名称。

[[ demo src="/demo/tag/colors.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``status`` | `string` | `'default'` | [^status] |
| ``type`` | `string` | `'default'` | 已废弃。请使用 [`status`](#props-status) 属性代替。 |
| ``color`` | `string` | - | 预设的彩色标签颜色名。目前支持的有 `'turquoise' | 'violet' | 'green'`。 |
| ``selectable`` | `boolean` | `false` | 是否允许选择。 |
| ``selected`` | `boolean` | `false` | [^selected] |
| ``removable`` | `boolean` | `false` | 是否允许删除。 |
| ``removed`` | `boolean` | `false` | [^removed] |
| ``disabled`` | `boolean` | `false` | 是否禁用。 |

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

^^^status
标签状态。

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
| ``default`` | 内容区。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| ``remove`` | 点击删除按钮时触发。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``remove`` | 删除。 |
