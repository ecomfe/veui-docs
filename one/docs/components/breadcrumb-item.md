# BreadcrumbItem <small>面包屑项</small>

:::tip
`BreadcrumbItem` 组件需要在 [`Breadcrumb`](./breadcrumb) 组件内使用。
:::

## 示例

见 [`Breadcrumb` 示例](./breadcrumb#示例)。

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `to` | `string | Object` | - | 点击面包屑项之后要跳转到的地址。见 [`Link`](./link#属性) 组件的同名属性。 |
| `type` | `string` | `'link'` | [^link] |
| `native` | `boolean` | `false` | 当值为 `true` 且指定了 `to` 时，会直接使用原生 `<a>` 元素，`to` 值会被设置到 `<a>` 标签的 `href` 属性上。 |

^^^link
面包屑项的类型。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `link` | 超链接样式。 |
| `text` | 文本样式。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | 填充面包屑项的正文内容区。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| `redirect` | 点击 `type` 为 `link` 的项目时将触发该事件，回调参数为 `(event: Event)`，直接透传[原生点击事件对象](https://developer.mozilla.org/zh-CN/docs/Web/Events/click)。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| `separator` | 分隔符。 |
