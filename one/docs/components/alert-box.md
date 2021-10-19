# AlertBox <small>警告弹框</small>

## 示例

### 类型

`AlertBox` 有三种类型，分别是 `info`、`success` 和 `error`，可以通过 [`type`](#props-type) 属性指定不同的类型。

[[ demo src="/demo/alert-box/type.vue" ]]

### 标题

可以通过 [`title`](#props-title) 属性或 [`title`](#slots-title) 插槽自定义警告弹框的标题。

[[ demo src="/demo/alert-box/title.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``open`` | `boolean` | `false` | [^open] |
| ``type`` | `string=` | `'success'` | [^type] |
| ``title`` | `string=` | - | 标题。 |
| ``loading`` | `boolean=` | `false` | 是否处于加载状态。处于加载状态时确定按钮也将进入加载状态，无法点击。 |
| ``disabled`` | `boolean=` | `false` | 是否处于禁用状态。处于禁用状态时确定按钮也将进入禁用状态，无法点击。 |
| ``ok-label`` | `string=` | - | “确定”按钮的文字内容。 |
| ``before-close`` | `function(string): boolean=|Promise<boolean=>` | - | 在将触发关闭的操作发生后执行，参考 [`Dialog`](./dialog) 组件的 [`before-close`](./dialog#props-before-close) 属性。 |
| ``overlay-class`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |
| ``overlay-style`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-style`](./overlay#props-overlay-style) 属性。 |

^^^open
:::badges
`.sync`
:::

是否显示警告弹框。
^^^

^^^type
警告框类型。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `info` | 信息提示样式。 |
| `success` | 成功样式。 |
| `error` | 错误样式。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 内容区。 |
| ``title`` | 标题区。若同时指定了 [`title`](#props-title) 属性和 [`title`](#slots-title) 插槽，以后者为准。 |
| ``foot`` | 底部区域，默认会展示一个“知道了”按钮。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| ``ok`` | 点击“知道了”按钮触发。 |
| ``afterclose`` | 浮层关闭后触发。如果样式主题提供了退出动画，将在退出动画完毕后触发。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``info`` | 普通信息。 |
| ``success`` | 成功状态。 |
| ``error`` | 错误状态。 |
