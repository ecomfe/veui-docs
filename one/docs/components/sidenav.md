# Sidenav <small>边栏菜单</small>

## 示例

### 普通

结合 Vue Router 使用边栏菜单。

[[ demo src="/demo/sidenav/normal.vue" ]]

### 可折叠

配合 `Sidebar` 的 [`collapsible`](./sidebar#props-collapsible) 属性可以控制菜单的展开/收起。

[[ demo src="/demo/sidenav/collaspible.vue" browser="/demo/sidenav/collaspible.vue" ]]

### 自定义插槽

[[ demo src="/demo/sidenav/slot.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``active`` | `string` | - | [^active] |
| ``matches`` | `function(Object, string): boolean` | - | [^matches] |
| ``collapsed`` | `boolean` | `false` | [^collapsed] |
| ``expanded`` | `Array<string>` | `[]` | [^expanded] |


^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^active
当前激活节点，若该节点定义了 `name` 则就是该 `name` 值，否则该值是由 `to` 生成的路由路径（[route.path](https://v3.router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)）。

^^^

^^^items
数据源数组，每个节点类型为 `{label, to, name, icon, disabled, children, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 节点的文字描述。 |
| `to` | `string | Object` | 节点的导航目的地。参考 [`Link`](./link) 组件的 [`to`](./link#props-to) 属性。 |
| `name` | `string` | 节点的唯一标识，`name` 和 `to` 二者至少有一个存在。 |
| `disabled` | `boolean` | 节点是否被禁用。 |
| `icon` | `string|{render: function}` | 首层节点使用的图标。 |
| `children` | `Array<Object>` | 节点的子节点数组，数组项类型同 `items` 数组项。 |
+++
^^^

^^^matches
当路由发生切换时，用来从 `items` 中找到激活的项目。

默认实现：项目路由路径和当前路由的路径相等 (===) 则认为该项目是激活的。
^^^

^^^collapsed
:::badges
`.sync`
:::
当前折叠状态。
^^^

^^^expanded
:::badges
`.sync`
:::
指定当前展开的节点，是一个对应于 `items` 中节点数据中 `name` 属性或路由路径的数组。
^^^


### 插槽

| 名称 | 描述 |
| -- | -- |
| ``before`` | 前置插槽。 |
| ``item`` | [^item] |
| ``icon`` | [^icon] |
| ``item-label`` | [^item-label] |
| ``after`` | 后置插槽。 |


^^^item
每个节点的渲染插槽。

默认内容：渲染了 [`icon`](#slots-icon) 插槽和 [`item-label`](#slots-item-label) 插槽。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 图标名称。 |
| `to` | `string | Object` | 节点的导航目的地。参考 [`Link`](./link) 组件的 [`to`](./link#props-to) 属性。 |
| `name` | `string` | 节点的唯一标识，`name` 和 `to` 二者至少有一个存在。 |
| `disabled` | `boolean` | 节点是否被禁用。 |
| `icon` | `string` | 首层节点使用的图标。 |
| `children` | `Array<Object>` | 节点的子节点数组，数组项类型同 `items` 数组项。 |
+++
^^^

^^^icon
节点前的图标插槽。

默认内容：渲染 `item.icon` 指定的图标。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `icon` | `string|{render: function}` | 图标名称。 |
+++
^^^

^^^item-label
节点的文字标签插槽。

默认内容：渲染节点对应的 `Link`。

插槽参数参考 [`item`](#slots-item) 插槽。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``activate`` | 用户点击有 `to` 的节点触发，参数是激活节点的整个 `item` 数据。 |
| ``click`` | 用户点击节点时触发，参数是激活节点整个 `item` 数据。 |
