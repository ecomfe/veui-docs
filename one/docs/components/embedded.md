# Embedded <small>嵌入式面板</small>

## 示例

### 尺寸

可供选用的尺寸 [`ui`](#props-ui) 属性值：`xs` / `s` / `m` / `l` / `xl`。

[[ demo src="/demo/embedded/size.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``title`` | `string` | - | 折叠式面板标题文本。如果指定了 [`title`](#slots-title) 插槽，则优先使用 [`title`](#slots-title) 插槽。 |
| ``open`` | `boolean` | `false` | [^open] |
| ``closable`` | `boolean` | `true` | 是否显示关闭按钮。 |
| ``footless`` | `boolean` | `false` | 是否不显示默认的底部操作栏。 |
| ``loading`` | `boolean` | `false` | 是否处于加载状态。处于加载状态时确定按钮也将进入加载状态，无法点击。 |
| ``priority`` | `number` | - | 折叠式面板浮层层叠权重，参考 [`Overlay`](./overlay) 组件的 [`priority`](./overlay#props-priority) 属性。 |
| ``before-close`` | `function(string): boolean=|Promise<boolean=>` | - | 在将触发折叠式面板关闭的操作发生后执行，参考 [`Dialog`](./dialog) 组件的 [`before-close`](./dialog#props-before-close) 属性。 |
| ``overlay-class`` | `string | Object` | - | 折叠式面板浮层根元素类名，参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小内容尺寸。 |
| `m` | 中内容尺寸。 |
+++
^^^

^^^open
:::badges
`.sync`
:::

是否显示折叠式面板。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 内容区。 |
| ``title`` | 标题区。若同时指定了 [`title`](#props-title) 属性和 [`title`](#slots-title) 插槽，以后者为准。 |
| ``foot`` | [^slot-foot] |

^^^slot-foot
底部区域，默认会展示“确定”、“取消”按钮。


+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `close` | `function(type: string): void` | 触发折叠式面板关闭的回调函数。`type` 为关闭的类型，将作为参数传入 `before-close` 钩子函数作为参数，同时将同步触发同名的事件。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``ok`` | 点击“确定”按钮时或通过调用作用域函数 `close('ok')` 时触发。 |
| ``cancel`` | 点击“取消”按钮、关闭按钮、通过 <kbd>esc</kbd> 关闭折叠式面板时，或者通过调用作用域函数 `close('cancel')` 时触发。 |
| <var>&lt;value&gt;</var> | 通过调用作用域函数 `close(value)` 时触发。 |
| ``afterclose`` | 浮层关闭后触发。如果样式主题提供了退出动画，将在退出动画完毕后触发。 |
