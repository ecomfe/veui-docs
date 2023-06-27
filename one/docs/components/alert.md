# Alert <small>提示</small>

## 示例

### 状态

`Alert` 有四种状态，分别是 `success`、`info`、`warning` 和 `error`，可以通过 [`status`](#props-status) 属性指定不同的状态。

[[ demo src="/demo/alert/status.vue" ]]

### 多消息切换

可以将 [`message`](#props-message) 属性指定为数组，来实现展现多条可切换的消息提示。

[[ demo src="/demo/alert/multiple.vue" ]]

### 标题

设置 [`title`](#props-title) 属性来指定消息标题。

[[ demo src="/demo/alert/title.vue" ]]

### 额外内容

通过 [`extra`](#slots-extra) 插槽来指定消息之后的额外内容区域。

[[ demo src="/demo/alert/extra.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``status`` | `string` | `'success'` | [^status] |
| ``type`` | `string` | `'success'` | 已废弃。请使用 [`status`](#props-status) 属性代替。 |
| ``title`` | `string` | - | 消息标题。 |
| ``message`` | `string | Array<string>` | - | 消息内容，当类型为数组时会显示多条数据并支持切换上一条/下一条。 |
| ``closable`` | `boolean` | `false` | 是否允许关闭。 |
| ``open`` | `boolean` | `true` | [^open] |
| ``index`` | `number` | `0` | [^index] |

^^^status
警告框的上下文状态。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `info` | 信息提示状态。 |
| `success` | 成功状态。 |
| `warning` | 警告状态。 |
| `error` | 错误状态。 |
+++
^^^

^^^open
:::badges
`.sync`
:::

是否显示消息。
^^^

^^^index
:::badges
`.sync`
:::

在有多条数据时，当前显示的消息的索引。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | [^slot-default] |
| ``title`` | 消息标题的内容区域。 |
| ``extra`` | 消息之后的额外内容区域。 |
| ``content`` | 整个消息区域，包括状态图标、切换按钮、关闭按钮等。 |

^^^slot-default
消息内容区域。

默认内容：消息文本。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `message` | `string` | 消息文本。 |
| `index` | `number` | 当有多条消息时，当前消息的索引值。 |
| `close` | `function` | 用于关闭提示。 |
+++
^^^

### 图标

| 名称 | 描述 |
| -- | -- |
| ``success`` | 成功消息。 |
| ``warning`` | 警告消息。 |
| ``info`` | 信息消息。 |
| ``error`` | 错误消息。 |
| ``prev`` | 上一条。 |
| ``next`` | 下一条。 |
| ``close`` | 关闭。 |
