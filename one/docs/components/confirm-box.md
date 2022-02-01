# ConfirmBox <small>确认弹框</small>

## 示例

自定义标题和内容区。

[[ demo src="/demo/confirm-box/custom.vue"]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| ``open`` | `boolean` | `false` | [^open] |
| ``title`` | `string=` | - | 标题。 |
| ``loading`` | `boolean=` | `false` | 是否处于加载状态。处于加载状态时确定按钮也将进入加载状态，无法点击。 |
| ``disabled`` | `boolean=` | `false` | 是否处于禁用状态。处于禁用状态时确定按钮也将进入禁用状态，无法点击。 |
| ``ok-label`` | `string=` | - | “确定”按钮的文字内容。 |
| ``cancel-label`` | `string=` | - | “取消”按钮的文字内容。 |
| ``before-close`` | `function(string): boolean=|Promise<boolean=>` | - | 在将触发关闭的操作发生后执行，参考 [`Dialog`](./dialog) 组件的 [`before-close`](./dialog#props-before-close) 属性。 |
| ``overlay-class`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |
| ``overlay-style`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-style`](./overlay#props-overlay-style) 属性。 |

^^^open
:::badges
`.sync`
:::

是否显示确认弹框。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 内容区。 |
| ``title`` | 标题区。若同时指定了 [`title`](#props-title) 属性和 [`title`](#slots-title) 插槽，以后者为准。 |
| ``foot`` | 底部区域，默认会展示“确定”、“取消”按钮。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| ``ok`` | 点击“确定”按钮时触发。 |
| ``cancel`` | 点击“取消”按钮时触发。 |
| ``afteropen`` | 弹框打开后触发。弹框内容在打开后才会进行渲染，所以如果有依赖内容渲染的逻辑，请在此事件触发后再执行。 |
| ``afterclose`` | 弹框关闭后触发。如果样式主题提供了退出动画，将在退出动画完毕后触发。 |
