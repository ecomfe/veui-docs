# Tab <small>标签</small>

:::tip
`Tab` 组件需要配合 [`Tabs`](./tabs) 组件使用。
:::

## 示例

见 [`Tabs` 示例](./tabs#示例)。

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``label`` | `string` | - | 选项卡文本。 |
| ``name`` | `string` | - | 选项卡名称。 |
| ``disabled`` | `boolean` | `false` | 选项卡是否禁用。 |
| ``to`` | `string | Object` | - | [^to] |
| ``matches`` | `function(Route, Route): boolean` | - | [^matches] |
| ``native`` | `boolean` | `false` | 路由模式是否强制使用原生的 `<a>` 元素。 |
| ``removable`` | `boolean` | | 是否可删除。 |
| ``status`` | `string` | - | [^status] |

^^^to
选项卡路由信息。类型见 [`Link`](./link) 组件的 [`to`](./link#props-to) 属性。如果 `to` 存在，则 [`name`](#props-name) 属性将被忽略。

:::tip
如果使用了 Vue Router，当前被激活的状态将与 `$route` 对象自动匹配，无需在 [`Tabs`](./tabs) 组件中手动控制 [`index`](./tabs#props-index) 或 [`active`](./tabs#props-active)。
:::
^^^

^^^matches
在使用了 Vue Router 且提供了 [`to`](#props-to) 属性后，用于自定义判断路由当前激活 `Tab` 的逻辑。参数列表为 `(current: Route, to: Route)`。`current` 与 `to` 参数均为 Vue Router 的 [`Route`](https://v3.router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7) 类型对象。默认使用上层 [`Tabs`](./tabs) 组件的 [`matches`](./tabs#props-matches) 逻辑。
^^^

^^^status
选项卡状态。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `success` | 成功状态。 |
| `warning` | 警示状态。 |
| `info` | 普通信息状态。 |
| `error` | 错误状态。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 默认插槽。 |
| ``item`` | 标签选项卡内容，包括对应的按钮/链接。 |
| ``label`` | 标签选项卡文本。 |
