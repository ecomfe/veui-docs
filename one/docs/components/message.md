# Message <small>消息</small>

## 示例

可以使用 [`status`](#props-status) 属性指定不同的上下文状态，使用 [`display`](#props-display) 属性指定不同的展示形态。

[[ demo src="/demo/message/default.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | `'m'` | [^ui] |
| ``status`` | `'success' | 'error' | 'info' | 'warning' | 'aux'` | `'info'` | [^status] |
| ``display`` | `'normal' | 'popup' | 'simple' | 'standalone'` | `'normal'` | [^display] |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++

^^^status
消息状态。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `info` | 信息提示状态。 |
| `success` | 成功状态。 |
| `warning` | 警告状态。 |
| `error` | 错误状态。 |
| `aux` | 辅助状态。 |
+++
^^^

^^^display
消息展示形态。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `normal` | 普通样式，有图标和带状态文本。 |
| `popup` | 气泡样式，默认仅展示图标，可交互调起气泡展示详细内容。 |
| `simple` | 简单样式，没有图标。 |
| `standalone` | 独立样式，展示图标和无状态文本。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 消息内容区域 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``success`` | 成功消息。 |
| ``warning`` | 警告消息。 |
| ``info`` | 信息消息。 |
| ``error`` | 错误消息。 |
| ``aux`` | 辅助消息。 |
