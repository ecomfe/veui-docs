# Carousel <small>轮播</small>

## 示例

### 切换

使用 [`index`](#props-index) 来控制当前显示的项目。

[[ demo src="/demo/carousel/switch.vue" ]]

### 进度指示器

使用 [`indicator`](#props-indicator) 属性来指定进度指示器类型。

[[ demo src="/demo/carousel/indicator.vue" ]]

### 自动切换

指定 [`autoplay`](#props-autoplay) 属性来允许自动播放。

[[ demo src="/demo/carousel/autoplay.vue" ]]

### 切换效果

指定 [`effect`](#props-effect) 属性来设置切换效果。

[[ demo src="/demo/carousel/effect.vue" ]]

### 纵向布局

指定 [`vertical`](#props-vertical) 属性来允许纵向布局的轮播。

使用 [`controls-position`](#props-controls-position) 属性来切换按钮相对于布局方向的位置。

[[ demo src="/demo/carousel/vertical.vue" ]]

### 轮播项设置

[`slides-per-view`](#props-slides-per-view) 属性来指定同时显示多少个轮播项。

[`slides-per-group`](#props-slides-per-group) 属性来指定每次前后切换的一组包含多少个轮播项。

[[ demo src="/demo/carousel/slides.vue" ]]


### 轮播项纵横比

设置 [`slide-aspect-ratio`](#props-slide-aspect-ratio) 属性来指定每个轮播项的纵横比。

[[ demo src="/demo/carousel/ratio.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``index`` | `number=` | `0` | [^index] |
| ``indicator`` | `string=` | `'radio'` | [^indicator] |
| ``switch-trigger`` | `string=` | `'click'` | [^switch-trigger] |
| ``autoplay`` | `boolean=` | `false` | 是否自动轮播。 |
| ``pause-on-hover`` | `boolean=` | `false` | 在自动轮播时，鼠标悬浮后是否暂停。 |
| ``interval`` | `number=` | `3000` | 在自动轮播时，切换间隔的毫秒数。 |
| ``wrap`` | `boolean=` | `false` | 是否可以循环播放。 |
| ``effect`` | `'fade' | 'slide'` | `'fade'` | 指定轮播切换效果，其中 `fade` 仅在切换组个数与同时显示个数相同时生效。 |
| ``vertical`` | `boolean=` | `false` | 是否是纵向布局的轮播。 |
| ``indicator-align`` | `'start' | 'end'` | `start` | 用于支持指示器的相对于布局方向的位置。 |
| ``indicator-position`` | `'outside' | 'inside'` | `inside` | 用于支持指示器显示在轮播容器的内部/外部。 |
| ``controls`` | `boolean` | `false` | 是否显示切换按钮。 |
| ``controls-position`` | `'outside' | 'inside'` | `inside` | 用于支持切换按钮相对于布局方向的位置。 |
| ``slide-aspect-ratio`` | `number= | '${number}/${number}'` | - | 指定不同轮播项类型的默认配置。 |
| ``options`` | `Object=` | `{ video: { muted: true, autoplay: true, controls: true, loop: true } }` | 用于指定每个轮播项的纵横比。 |
| ``slides-per-view`` | `number=` | `1` | 指定同时显示多少个轮播项。 |
| ``slides-per-group`` | `number=` | `1` | 指定每次前后切换的一组包含多少个轮播项。 |
| ``lazy`` | `boolean= | { preload: number }` | `false` | [^lazy] |

^^^datasource
轮播图数据源，项目类型为：`{src, alt, label, type}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `src` | `string` | 媒体源地址。 |
| `alt` | `string` | 媒体的降级描述文本。 |
| `label` | `string` | 媒体的描述性标题。 |
| `type` | `string` | 媒体的描述性标题，视频需要指定 `video`。 |
+++
^^^

^^^index
:::badges
`.sync`
:::

当前轮播图序号。
^^^

^^^indicator
播放进度指示器的显示模式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `bar` | 单选按钮型，用于替换之前的 `radio`（`radio` 也保持兼容支持）。 |
| `number` | 显示「当前页数/全部页数」文字提示。 |
| `dot` | 圆点型。 |
| `none` | 不显示指示器。 |
^^^

^^^switch-trigger
当显示单选型指示器时，触发切换的操作。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `click` | 点击时切换。 |
| `hover` | 鼠标悬浮时切换。 |
+++
^^^

^^^lazy
指定是否懒加载轮播资源。

+++详情
| 名称 | 描述 |
| -- | -- | -- |
| `false` | 不懒加载资源。 |
| `true` | 预加载当前展示项目的前后 1 个资源。 |
| `{ preload: number }` | 预加载当前展示项目的前后指定数量个资源。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``item`` | [^slot-item] |

^^^slot-item
可用来定制每个轮播项的区域。

默认内容：轮播项图片。

作用域参数为 [`datasource`](#props-datasource) 属性每个列表项的内容（可以有自定义字段）加上 `index: number` 表示轮播项的序号。即整个 `slot-scope` 绑定的值为 `{src, alt, label, index, ...}`。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``change`` | [^event-change] |

^^^event-change

切换后触发，回调参数为 `(to: number, from: number)`。分别表示切换后的序号和切换前的序号。
^^^

### 图标

| 名称 | 描述 |
| -- | -- |
| ``prev`` | 上一页。 |
| ``next`` | 下一页。 |

### 自定义样式

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``--dls-carousel-transition-duration`` | `<time>` | `0.2s` | 轮播项切换动画的持续时长。 |
| ``--dls-carousel-slide-gutter`` | `<length>` | `0` | 同时显示多个轮播项时轮播项之间的间隔。 |
