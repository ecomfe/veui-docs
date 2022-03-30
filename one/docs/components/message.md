# Message <small>消息</small>

## 示例

`Message` 有五种状态，分别是 `success`、`info`、`warning` 、`error` 和 `aux`，可以通过 [`status`](#props-status) 属性指定不同的类型。

`Message` 有四种变体，分别是 `normal`、`popup`、`simple` 和 `standalone`，可以通过 [`display`](#props-display) 属性指定不同的变体。

[[ demo src="/demo/message/default.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | `'m'` | [^ui] |
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
| `info` | 消息提示样式。 |
| `success` | 成功样式。 |
| `warning` | 警告样式。 |
| `error` | 错误样式。 |
| `aux` | 辅助样式。 |
+++
^^^

^^^display
消息展示形态。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `normal` | 普通样式，有图标和带状态文本。 |
| `popup` | 气泡样式。 |
| `simple` | 简单样式，没有图标。 |
| `standalone` | 独立样式，有图标和无状态文本。 |
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
