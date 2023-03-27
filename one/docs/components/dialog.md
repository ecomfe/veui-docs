# Dialog <small>对话框</small>

## 示例

### 尺寸与全屏

可选的 [`ui`](#props-ui) 属性值：`s` / `m` / `narrow` / `medium` / `wide` / `auto`。

[[ demo src="/demo/dialog/size.vue" ]]

### 模态与非模态

[[ demo src="/demo/dialog/modal.vue" ]]

### 自定义内容

[[ demo src="/demo/dialog/custom.vue" ]]

### 异步支持

[[ demo src="/demo/dialog/async.vue" ]]

### 可拖拽

[[ demo src="/demo/dialog/draggable.vue" ]]

### 层叠顺序

[[ demo src="/demo/dialog/stack.vue" ]]

### 加载与禁用态

[[ demo src="/demo/dialog/status.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``modal`` | `boolean` | `true` | 是否是模态对话框。模态对话框默认遮挡底层（无法点击）且抢占焦点（关闭后焦点会回归）。 |
| ``title`` | `string` | - | 对话框标题文本。如果指定了 [`title`](#slots-title) 插槽，则优先使用 [`title`](#slots-title) 插槽。 |
| ``open`` | `boolean` | `false` | [^open] |
| ``closable`` | `boolean` | `true` | 是否显示关闭按钮。 |
| ``outside-closable`` | `boolean` | `false` | 点击对话框外部时是否关闭对话框。 |
| ``draggable`` | `boolean` | `false` | 是否可拖拽。 |
| ``escapable`` | `boolean` | `false` | 按下 <kbd>esc</kbd> 键是否可以关闭对话框。仅在 `closable` 为 `true` 时生效。 |
| ``inline`` | `boolean` | `false` | 是否内联在内容中显示并占用内容空间。 |
| ``footless`` | `boolean` | `false` | 是否不显示默认的底部操作栏。 |
| ``loading`` | `boolean` | `false` | 是否处于加载状态。处于加载状态时确定按钮也将进入加载状态，无法点击。 |
| ``disabled`` | `boolean` | `false` | 是否处于禁用状态。处于禁用状态时确定按钮也将进入禁用状态，无法点击。 |
| ``ok-label`` | `string` | - | “确定”按钮的文字内容。 |
| ``cancel-label`` | `string` | - | “取消”按钮的文字内容。 |
| ``priority`` | `number` | - | 对话框浮层层叠权重，参考 [`Overlay`](./overlay) 组件的 [`priority`](./overlay#props-priority) 属性。 |
| ``before-close`` | `function(string): boolean=|Promise<boolean=>` | - | [^before-close] |
| ``overlay-class`` | `string | Object` | - | 对话框浮层根元素类名，参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |
| ``overlay-style`` | `string | Array | Object` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-style`](./overlay#props-overlay-style) 属性。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小内容尺寸（内容及部件尺寸，非对话框整体空间大小）。 |
| `m` | 中内容尺寸（内容及部件尺寸，非对话框整体空间大小）。 |
| `narrow` | 窄尺寸样式。 |
| `medium` | 中尺寸样式。 |
| `wide` | 宽尺寸样式。 |
| `fullscreen` | 全屏尺寸样式。 |
| `auto` | 自适应尺寸样式。 |
+++
^^^

^^^open
:::badges
`.sync`
:::

是否显示对话框。
^^^

^^^before-close
在将触发对话框关闭的操作发生后执行，类型为 `function(type: string): boolean=|Promise<boolean=>`。`type` 为触发关闭的类型，默认情况下可选值为 `'ok'|'cancel'`。返回值可以是一个 `boolean`，也可以是一个 resolve `boolean` 的 `Promise`，用来处理可能需要异步决定对话框关闭状态的情况。返回值或 resolve 值非 `false` 时才会关闭对话框。

+++调用示例
```html
<veui-dialog :open.sync="dialogOpen" :before-close="submit">...</veui-dialog>
```

```js
methods: {
  submit (type) {
    if (type === 'ok') {
      return axios.post('/item/create', {/* ... */})
        .then(({ id, error }) => {
          if (error) {
            this.showError(error)
            return false // resolve `false` 将阻止对话框关闭
          }
        })
    }
    // resolve 但不返回 `false` 时会关闭对话框
  },
  // ...
}
```
+++
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
| `close` | `function(type: string): void` | 触发对话框关闭的回调函数。`type` 为关闭的类型，将作为参数传入 `before-close` 钩子函数作为参数，同时将同步触发同名的事件。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``ok`` | 点击“确定”按钮时或通过调用作用域函数 `close('ok')` 时触发。 |
| ``cancel`` | 点击“取消”按钮、关闭按钮、通过 <kbd>esc</kbd> 关闭对话框时，或者通过调用作用域函数 `close('cancel')` 时触发。 |
| <var>&lt;value&gt;</var> | 通过调用作用域函数 `close(value)` 时触发。 |
| ``afteropen`` | 对话框打开后触发。对话框内容在打开后才会进行渲染，所以如果有依赖内容渲染的逻辑，请在此事件触发后再执行。 |
| ``afterclose`` | 对话框关闭后触发。如果样式主题提供了退出动画，将在退出动画完毕后触发。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``close`` | 关闭。 |

### 自定义样式

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``--dls-dialog-content-width`` | `<length>` | - | [^css-width] |
| ``--dls-dialog-content-width`` | `<length>` | - | [^css-content-width] |


^^^css-width
整个对话框的宽度。不能与 [`--dls-dialog-content-width`](#css---dls-dialog-content-width) 同时设置。

:::tip
需要通过 [`overlay-style`](#props-overlay-style) 属性来设置。
:::
^^^

^^^css-content-width
对话框内容区域的宽度。不能与 [`--dls-dialog-width`](#css---dls-dialog-content-width) 同时设置。

:::tip
需要通过 [`overlay-style`](#props-overlay-style) 属性来设置。
:::
^^^
