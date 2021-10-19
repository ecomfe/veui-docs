# Lightbox <small>灯箱</small>

## 示例

[[ demo src="/demo/lightbox/default.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | 预设样式。`veui-theme-dls` 未提供，可自定义。 |
| ``open`` | `boolean` | `false` | [^open] |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``index`` | `number=` | `0` | [^index] |
| ``wrap`` | `boolean=` | `false` | 是否可以循环播放。 |
| ``closable`` | `boolean=` | `true` | 是否显示关闭按钮。 |
| ``escapable`` | `boolean=` | `true` | 按下 <kbd>esc</kbd> 键是否可以关闭浮层。仅在 `closable` 为 `true` 时生效。 |
| ``priority`` | `number=` | - | 浮层层叠权重，参考 [`Overlay`](./overlay) 组件的 [`priority`](./overlay#props-priority) 属性。 |
| ``before-close`` | `function(string): boolean=|Promise<boolean=>` | - | [^before-close] |
| ``overlay-class`` | `string | Array | Object=` | - | 浮层根元素类名，参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |
| ``indicator`` | `string=` | `'number'` | [^indicator] |
| ``options`` | `Object=` | `{ video: { muted: true, autoplay: true, controls: true } }` | 额外配置。 |

^^^open
:::badges
`.sync`
:::

是否显示浮层。
^^^

^^^datasource
灯箱数据源，项目类型为：`{ src, alt, type, desc }`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `src` | `string` | 媒体源地址。 |
| `type` | `string=` | 默认图片类型，`video` 表示视频。 |
| `alt` | `string=` | 图片的降级描述文本。 |
| `desc` | `string=` | 该项目的描述文本。 |
+++
^^^

^^^index
:::badges
`.sync`
:::

当前播放序号。
^^^

^^^indicator
播放进度指示器的显示模式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `number` | 显示「当前页数/全部页数」文字提示。 |
| `none` | 不显示指示器。 |
^^^

^^^before-close
在将触发浮层关闭的操作发生后执行，类型为 `function(type: string): boolean=|Promise<boolean=>`。`type` 为触发关闭的类型，默认情况下可选值为 `'ok'|'cancel'`。返回值可以是一个 `boolean`，也可以是一个 resolve `boolean` 的 `Promise`，用来处理可能需要异步决定浮层关闭状态的情况。返回值或 resolve 值非 `false` 时才会关闭浮层。

+++调用示例
```html
<veui-lightbox :open.sync="dialogOpen" :before-close="submit">...</veui-lightbox>
```
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``item`` | [^slot-item] |
| ``desc`` | [^slot-desc] |

^^^slot-item
可用来定制每个灯箱项的媒体展示区域。

默认内容：每项图片或视频。

作用域参数为 [`datasource`](#props-datasource) 属性每个列表项的内容（可以有自定义字段）加上 `index: number` 表示轮播项的序号。即整个 `slot-scope` 绑定的值为 `{src, alt, type, desc, index, ...}`。
^^^

^^^slot-desc
可用来定制每个灯箱项的描述区域。

默认内容：每项描述文字。

作用域参数为 [`datasource`](#props-datasource) 属性每个列表项的内容（可以有自定义字段）加上 `index: number` 表示轮播项的序号。即整个 `slot-scope` 绑定的值为 `{src, alt, type, desc, index, ...}`。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``cancel`` | 灯箱关闭后触发。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``close`` | 关闭。 |
| ``prev`` | 上一页。 |
| ``next`` | 下一页。 |
