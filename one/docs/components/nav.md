# Nav <small>导航菜单</small>

## 示例

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`m`。

[[ demo src="/demo/nav/size.vue" ]]

### 大卡样式

设置首层数据项属性 `position` 为 `card` 可使该数据项下拉展示成大卡样式。

[[ demo src="/demo/nav/card.vue" ]]

### 自定义插槽

[[ demo src="/demo/nav/slot.vue" ]]


### 自适应宽度

自动根据实际渲染宽度来决定是否将多余的导航项目折叠起来。

[[ demo src="/demo/nav/more.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``active`` | `string` | - | [^active] |
| ``matches`` | `function(Object, string): boolean` | - | [^matches] |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `m` | 中尺寸样式。 |
+++
^^^

^^^active
当前激活节点，若该节点定义了 `name` 则就是该 `name` 值，否则该值是由 `to` 生成的路由路径（[route.path](https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)）。
^^^

^^^items
数据源数组，每个节点类型为 `{label, to, name, icon, disabled, children, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 节点的文字描述。 |
| `to` | `string | Object` | 节点的导航目的地。参考 [`Link`](./link) 组件的 [`to`](./link#props) 属性。 |
| `name` | `string` | 节点的唯一标识，`name` 和 `to` 二者至少有一个存在。 |
| `disabled` | `boolean` | 节点是否被禁用。 |
| `position` | `string` | 首层节点的下拉面板样式，设置成 `card` 则展示成大卡样式。 |
| `children` | `Array<Object>` | 节点的子节点数组，数组项类型同 `items` 数组项。 |
+++
^^^

^^^matches
当路由发生切换时，用来从 `items` 中找到激活的项目。

默认实现：项目路由路径和当前路由的路径相等 (===) 则认为该项目是激活的。
^^^


### 插槽

| 名称 | 描述 |
| -- | -- |
| ``item`` | [^item] |
| ``item-label`` | [^item-label] |


^^^item
每个节点的渲染插槽。

默认内容：渲染了节点的图标和文字描述。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 节点的文字描述。 |
| `to` | `string | Object` | 节点的导航目的地。参考 [`Link`](./link) 组件的 [`to`](./link#props) 属性。 |
| `name` | `string` | 节点的唯一标识，`name` 和 `to` 二者至少有一个存在。 |
| `disabled` | `boolean` | 节点是否被禁用。 |
| `children` | `Array<Object>` | 节点的子节点数组，数组项类型同 [`items`](#props-items) 属性数组项。 |
+++
^^^

^^^item-label
节点的 `label` 插槽。

默认内容：渲染节点对应的 `Link`。

作用域参数参考 [`item`](#slots-item) 插槽。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``activate`` | 用户点击有 `to` 的节点触发，参数是激活节点在 [`items`](#props-items) 属性中对应的数据项。 |
| ``click`` | 用户点击节点时触发，参数是激活节点在 [`items`](#props-items) 属性中对应的数据项。 |

### 图标
| 名称 | 描述 |
| -- | -- |
| ``expand`` | 展开。 |
| ``more`` | 更多。 |
