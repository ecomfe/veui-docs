# Badge <small>徽标</small>

## 示例

### 文字徽标

徽标内容可以是纯文本。

[[ demo src="/demo/badge/text.vue" ]]

### 数字徽标

徽标内容也可以是数字，超过最大值时可以显示为*最大值+*。

[[ demo src="/demo/badge/number.vue" ]]

### 右上角圆点徽标

不提供徽标内容时，徽标将以圆点样式显示在右上角。

[[ demo src="/demo/badge/corner-dot.vue" ]]

### 圆点徽标

不提供插槽内容时，徽标将以圆点样式显示。

[[ demo src="/demo/badge/dot.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``type`` | `string=` | `'error'` | [^type] |
| ``value`` | `string | number` | - | 徽标内容值。为 `number` 类型值时，会受 [`max`](#props-max) 属性限制。为 `string` 类型时，`max` 会被忽略。 |
| ``max`` | `number=` | `badge.max` | 徽标数值的最大值，当 `value` 超过此值时，徽标内容会显示为 `{max}+`。当 `value` 为 `string` 时会被忽略。 |
| ``hidden`` | `boolean=` | `false` | 是否处于隐藏状态。 |

^^^type
徽标状态类型。自带样式的可选值如下。使用其它值时需要自行定义 `.veui-badge-{type}` 的样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `info` | 信息提示样式。 |
| `success` | 成功样式。 |
| `warning` | 警告样式。 |
| `error` | 错误样式。 |
| `aux` | 辅助样式。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 需要显示徽标的目标内容。 |
