# Alert <small>提示</small>

## 示例

### 类型

`Alert` 有四种类型，分别是 `success`、`info`、`warning` 和 `error`，可以通过 `type` 属性指定不同的类型。

[[ demo src="/demo/alert/type.vue" ]]

### 多消息切换

可以将 `message` 属性指定为数组，来实现展现多条可切换的消息提示。

[[ demo src="/demo/alert/multiple.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `type` | `string=` | `'success'` | [^type] |
| `title` | `string` | - | 消息标题。 |
| `message` | `string|Array<string>` | - | 消息内容，当类型为数组时会显示多条数据并支持切换上一条/下一条。 |
| `closable` | `boolean=` | `false` | 是否允许关闭。 |
| `open` | `boolean=` | `true` | [^open] |
| `index` | `number=` | `0` | [^index] |

^^^type
警告框类型。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `info` | 信息提示样式。 |
| `success` | 成功样式。 |
| `warning` | 警告样式。 |
| `error` | 错误样式。 |
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
| `default` | [^scoped-slot-default] |
| `title` | 消息标题的内容区域。 |
| `extra` | 消息之后的额外内容区域。 |
| `content` | 整个消息区域，包括状态图标、切换按钮、关闭按钮等。 |

^^^scoped-slot-default
消息内容区域。

默认内容：消息文本。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `message` | `string` | 消息文本。 |
| `index` | `number=` | 当有多条消息时，当前消息的索引值。 |
| `close` | `function` | 用于关闭提示。 |
+++
^^^

### 图标

| 名称 | 描述 |
| -- | -- |
| `success` | 成功消息。 |
| `warning` | 警告消息。 |
| `info` | 信息消息。 |
| `error` | 错误消息。 |
| `prev` | 上一条。 |
| `next` | 下一条。 |
| `close` | 关闭。 |
