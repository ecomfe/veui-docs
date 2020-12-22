# Carousel <small>轮播</small>

## 示例

### 切换

使用 `index` 来控制当前显示的项目。

[[ demo src="/demo/carousel/switch.vue" ]]

### 进度指示器类型

使用 `indicator` 属性来指定进度指示器类型。

[[ demo src="/demo/carousel/indicator.vue" ]]

### 自动切换

指定 `autoplay` 属性来允许自动播放。

[[ demo src="/demo/carousel/autoplay.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `datasource` | `Array<Object>` | `[]` | [^datasource] |
| `index` | `number=` | `0` | [^index] |
| `indicator` | `string=` | `'radio'` | [^indicator] |
| `switch-trigger` | `string=` | `'click'` | [^switch-trigger] |
| `autoplay` | `boolean=` | `false` | 是否自动轮播。 |
| `pause-on-hover` | `boolean=` | `false` | 在自动轮播时，鼠标悬浮后是否暂停。 |
| `interval` | `number=` | `3000` | 在自动轮播时，切换间隔的毫秒数。 |
| `wrap` | `boolean=` | `false` | 是否可以循环播放。 |

^^^datasource
轮播图数据源，项目类型为：`{src, alt, label}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `src` | `string` | 图片源地址。 |
| `alt` | `string` | 图片的降级描述文本。 |
| `label` | `string` | 图片的描述性标题。 |
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
| `radio` | 单选按钮型。 |
| `number` | 显示「当前页数/全部页数」文字提示。 |
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

### 插槽

| 名称 | 描述 |
| -- | -- |
| `item` | [^slot-item] |

^^^slot-item
可用来定制每个轮播项的区域。

默认内容：轮播项图片。

作用域参数为 `datasource` 属性每个列表项的内容（可以有自定义字段）加上 `index: number` 表示轮播项的序号。即整个 `slot-scope` 绑定的值为 `{src, alt, label, index, ...}`。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `change` | [^event-change] |

^^^event-change

切换后触发，回调参数为 `(to: number, from: number)`。分别表示切换后的序号和切换前的序号。
^^^

### 图标

| 名称 | 描述 |
| -- | -- |
| `prev` | 上一页。 |
| `next` | 下一页。 |
