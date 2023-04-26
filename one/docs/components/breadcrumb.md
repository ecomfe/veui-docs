# Breadcrumb <small>面包屑</small>

:::tip
`Breadcrumb` 组件可以内联 [`BreadcrumbItem`](./breadcrumb-item) 组件使用。
:::

## 示例

### 风格

可供选用的风格 [`ui`](#props-ui) 属性值：`strong`。

[[ demo src="/demo/breadcrumb/style.vue" ]]

### 尺寸

可供选用的尺寸 [`ui`](#props-ui) 属性值：`s` / `m`。

[[ demo src="/demo/breadcrumb/size.vue" ]]

### 内联模式

直接内联 `BreadcrumbItem` 使用。

[[ demo src="/demo/breadcrumb/base.vue" ]]

### 使用数据源

也可以传入数据源。

[[ demo src="/demo/breadcrumb/datasource.vue" ]]

### 自定义分隔符

可以使用插槽自定义分隔符。

[[ demo src="/demo/breadcrumb/separator.vue" ]]

### 事件监听

监听 [`redirect`](#events-redirect) 事件后处理而非直接路由跳转。

[[ demo src="/demo/breadcrumb/redirect.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``routes`` | `Array<Object>` | `[]` | [^routes] |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
^^^

^^^routes
面包屑配置，项目类型为 `{label: string, type: string, to: string | Object=, native: boolean=}`，除 `label` 外字段详情可参考 [`BreadcrumbItem`](./breadcrumb-item) 组件的属性。

:::warning
默认情况下，最后一项始终会显示成普通文本样式。
:::
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 支持内联模式，直接传入 [`BreadcrumbItem`](./breadcrumb-item) 组件列表。填充后 [`routes`](#props-routes) 属性将被忽略。 |
| ``item`` | [^slot-item] |
| ``separator`` | 面包屑条目之间的分隔符。默认显示全局配置的分隔图标。 |

^^^slot-item
用于为每个项目自定义内容。默认内容为 `routes` 项目的 `label` 或 [`BreadcrumbItem`]('./breadcrumb-item) 组件的默认插槽。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `route` | `Object` | `routes` 中的项目。自定义字段亦会绑定到作用域对象中。 |
+++
^^^
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``redirect`` | [^redirect] |

^^^redirect
点击 `type` 为 `link` 的项目时将触发该事件，回调参数为 `(event, route, index)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| ``event`` | [Event](https://developer.mozilla.org/zh-CN/docs/Web/Events/click) | 事件对象。 |
| ``route`` | `Object` | 面包屑条目对象。 |
| ``index`` | `number` | 当前点击条目的索引。 |
+++
^^^
