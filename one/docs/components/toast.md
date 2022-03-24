# Toast <small>消息提示</small>

## 示例

### 类型

`Toast` 有四种类型，分别是 `info`、`success`、`warning` 和 `error`，可以通过 [`type`](#props-type) 属性指定不同的类型。

[[ demo src="/demo/toast/default.vue" ]]

### 命令式调用

可使用 `veui/plugins/toast` 模块加载 [`toast` 插件](../plugins/toast)进行命令式调用。

[[ demo src="/demo/toast/plugin.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``open`` | `boolean` | `false` | [^open] |
| ``type`` | `string` | `'success'` | [^type] |
| ``title`` | `string` | - | 消息标题。 |
| ``message`` | `string` | - | 消息内容。 |
| ``duration`` | `number` | `toast.duration` | 消息展示时间毫秒数，超过此事件则消息提示自动关闭。 |
| ``closable`` | `boolean` | - | 是否有关闭按钮。 |

^^^open
:::badges
`.sync`
:::

是否显示消息提示。
^^^

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

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 内容区。默认显示 [`message`](#props-message) 属性的内容。 |
| ``title`` | 标题区。默认显示 [`title`](#props-title) 属性的内容。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| ``close`` | 消息自动关闭后触发。 |
| ``ready`` | 组件挂载之后会触发该事件。 |

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``toast.duration`` | `number` | `3000` | 消息默认展示时间毫秒数。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``info`` | 普通信息。 |
| ``success`` | 成功状态。 |
| ``warning`` | 警告状态。 |
| ``error`` | 错误状态。 |
