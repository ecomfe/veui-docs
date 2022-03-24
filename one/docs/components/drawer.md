# Drawer <small>抽屉</small>

## 示例

### 位置

使用 [`placement`](#props-placement) 属性控制抽屉弹出的位置。

[[ demo src="/demo/drawer/placement.vue" ]]

### 模态与非模态

使用 [`modal`](#props-modal) 属性控制抽屉是否为模态类型。

[[ demo src="/demo/drawer/modal.vue" ]]

### 自定义内容

[[ demo src="/demo/drawer/custom.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``placement`` | `string` | `'right'` | [^placement] |
| ``modal`` | `boolean` | `true` | 是否是模态抽屉。模态抽屉默认遮挡底层（无法点击）且抢占焦点（关闭后焦点会回归）。 |
| ``title`` | `string` | - | 抽屉标题文本。如果指定了 [`title`](#slots-title) 插槽，则优先使用 [`title`](#slots-title) 插槽。 |
| ``open`` | `boolean` | `false` | [^open] |
| ``closable`` | `boolean` | `true` | 是否显示关闭按钮。 |
| ``outside-closable`` | `boolean` | `false` | 点击抽屉外部时是否关闭抽屉。 |
| ``escapable`` | `boolean` | `false` | 按下 <kbd>esc</kbd> 键是否可以关闭抽屉。仅在 `closable` 为 `true` 时生效。 |
| ``priority`` | `number=` | - | 抽屉浮层层叠权重，参考 [`Overlay`](./overlay) 组件的 [`priority`](./overlay#props-priority) 属性。 |
| ``footless`` | `boolean` | `false` | 是否不显示默认的底部操作栏。 |
| ``loading`` | `boolean=` | `false` | 是否处于加载状态。处于加载状态时确定按钮也将进入加载状态，无法点击。 |
| ``disabled`` | `boolean=` | `false` | 是否处于禁用状态。处于禁用状态时确定按钮也将进入禁用状态，无法点击。 |
| ``ok-label`` | `string=` | - | “确定”按钮的文字内容。 |
| ``cancel-label`` | `string=` | - | “取消”按钮的文字内容。 |
| ``before-close`` | `function(string): boolean=|Promise<boolean=>` | - | 在将触发关闭的操作发生后执行，参考 [`Dialog`](./dialog) 组件的 [`before-close`](./dialog#props-before-close) 属性。 |
| ``overlay-class`` | `string | Object` | - | 抽屉浮层根元素类名，参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小内容尺寸（内容及部件尺寸，非抽屉整体空间大小）。 |
| `m` | 中内容尺寸（内容及部件尺寸，非抽屉整体空间大小）。 |
+++
^^^

^^^placement
抽屉位置。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `top` | 从上面滑出。 |
| `right` | 从右面滑出。 |
| `bottom` | 从下面滑出。 |
| `left` | 从左面滑出。 |
+++
^^^


^^^open
:::badges
`.sync`
:::

是否显示抽屉。
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
| `close` | `function(type: string): void` | 触发抽屉关闭的回调函数。`type` 为关闭的类型，将作为参数传入 `before-close` 钩子函数作为参数，同时将同步触发同名的事件。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``ok`` | 点击“确定”按钮时或通过调用作用域函数 `close('ok')` 时触发。 |
| ``cancel`` | 点击“取消”按钮、关闭按钮、通过 <kbd>esc</kbd> 关闭抽屉时，或者通过调用作用域函数 `close('cancel')` 时触发。 |
| <var>&lt;value&gt;</var> | 通过调用作用域函数 `close(value)` 时触发。 |
| ``afteropen`` | 抽屉打开后触发。抽屉内容在打开后才会进行渲染，所以如果有依赖内容渲染的逻辑，请在此事件触发后再执行。 |
| ``afterclose`` | 抽屉关闭后触发。如果样式主题提供了退出动画，将在退出动画完毕后触发。 |
