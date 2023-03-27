# Tabs <small>标签页</small>

:::tip
`Tabs` 组件需要配合 [`Tab`](./tab) 组件使用。
:::

## 示例

### 尺寸

可选的 [`ui`](#props-ui) 尺寸属性值：`s` / `m` / `l`。

[[ demo src="/demo/tabs/size.vue" ]]

### 样式

设置 `ui` 为 `borderless` / `simple` / `strong` 来分别启用默认样式的无分隔线样式、简单样式、加强样式。

[[ demo src="/demo/tabs/style.vue" ]]

### 路由模式

设置 [`Tab`](./tab) 组件 [`to`](./tab#props-to) 属性来使用路由模式。

[[ demo src="/demo/tabs/route.vue" ]]

### 数据源

除了使用 [`Tab`](./tab) 组件，还可以设置 [`items`](#props-items) 属性来设置标签页的数据源。

[[ demo src="/demo/tabs/items.vue" ]]

### 可增删

使用 [`addable`](#props-addable) 属性来显示添加按钮。

为 [`Tab`](./tab) 组件添加 [`removable`](./tab#props-removable) 或为 `Tabs` 的 [`items`](#props-items) 项目添加 `removable` 字段来将单个标签页设置为可以被删除。

[[ demo src="/demo/tabs/addable.vue" ]]

### 标签状态

设置 [`Tab`](./tab) 组件 [`status`](./tab#props-status) 属性来给页签添加状态。

[[ demo src="/demo/tabs/status.vue" ]]

### 可排序

设置 [`sortable`](#props-sortable) 属性来启用页签排序功能，推荐和 [`items`](#props-items) 属性一起使用。

[[ demo src="/demo/tabs/sortable.vue" ]]

### 禁用状态

设置 [`Tab`](./tab) 组件 [`disabled`](./tab#props-disabled) 属性来使标签页处于禁用状态。

[[ demo src="/demo/tabs/disabled.vue" ]]

### 自定义页签

设置 [`tab-item`](#slots-tab-item) 与 [`tab-label`](#slots-tab-label) 插槽内容，或 [`Tab`](./tab) 组件的 [`item`](./tab#slots-item) 与 [`label`](./tab#slots-label) 插槽，来自定义页签内容。

[[ demo src="/demo/tabs/tab-item.vue" ]]

### 扩展内容

设置 [`extra`](#slots-extra) 插槽内容来为标签行提供额外内容。

[[ demo src="/demo/tabs/extra.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``active`` | `string` | - | [^active] |
| ``matches`` | `function(Route, Route): boolean` | `tabs.matches` | [^matches] |
| ``addable`` | `boolean` | `false` | 是否可以增加标签。 |
| ``max`` | `number` | - | 可增加标签的上限值。 |
| ``tip`` | `string` | - | 提示文本。 |
| ``add-label`` | `string` | - | “添加”按钮的文字内容。 |
| ``eager`` | `boolean` | `false` | 是否立即渲染所有非当前激活项的标签面板内容（并隐藏）。 |
| ``sortable`` | `boolean` | `false` | 是否可以拖拽标签项目来排序，推荐和 [`items`](#props-items) 属性一起使用。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
| `l` | 大尺寸样式。 |
| `borderless` | 无底部分隔线样式。 |
| `simple` | 简单样式。 |
| `strong` | 加强样式。 |
+++
^^^

^^^items
标签页数据源，项目类型为 `{ label, name, disabled, status, removable, to, native ... }`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 标签页页签的标题。 |
| `name` | `string` | 标签页的名称。 |
| `status` | `'success' | 'warning' | 'info' | 'error'` | 标签页的状态。 |
| `disabled` | `boolean` | 标签页是否为禁用。 |
| `removable` | `boolean` | 标签页是否可删除。 |
| ``to`` | `string | Object` | - | 参考 [`Tab`](./tab) 组件 [`to`](./tab#props-to) 属性 |
| ``native`` | `boolean` | `false` | 路由模式是否强制使用原生的 `<a>` 元素。 |
+++
^^^

^^^active
:::badges
`.sync`
:::

表示当前哪个标签页处于激活状态。具体映射的值受[标签](./tab)的属性影响，优先级 `to` > `name`。
^^^

^^^matches
用于给内部的 [`Tab`](./tab) 组件设置统一的路由匹配逻辑。具体参见 [`Tab`](./tab) 组件的 [`to`](./tab#props-to) 属性。

:::warning
当内部的 `Tab` 组件设置了 [`matches`](./tab#props-matches) 属性，将会覆盖在 `Tabs` 组件上的 [`matches`](#props-matches) 属性。
:::
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 允许直接内联 `Tab` 组件。无默认内容。 |
| ``panel`` | 页签下方面板区域。 |
| ``extra`` | 位于页签右侧的扩展区域。 |
| ``tab-item`` | [^tab-item] |
| ``tab-label`` | 页签文本区域，默认内容为页签文本。作用域参数同 [`tab-item`](#slots-tab-item) 插槽，`attrs` / `activate` 除外。 |

^^^tab-item
页签区域，默认内容为页签对应的按钮/链接。作用域参数为标签属性描述对象。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 标签页页签文本。 |
| `name` | `string` | 标签页名称。 |
| `disabled` | `boolean` | 标签页是否禁用。 |
| `to` | `string` | 标签页路由信息。 |
| `active` | `boolean` | 标签页是否是激活项。 |
| `index` | `number` | 标签页位于列表中的索引值。 |
| `native` | `boolean` | 路由模式是否强制使用原生的 `<a>` 元素。 |
| `removable` | `boolean` | 是否可删除。 |
| `status` | `string` | 标签页状态。 |
| `attrs` | `Object<string, string>` | 其它需要输出到页签元素上的 HTML 属性，例如 `role` / `aria-selected` / `aria-controls` 等。 |
| `activate` | `function(): void` | 激活当前标签页的方法。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``change`` | 切换时触发。回调参数为 `(tab: Object)`，`tab` 与 [`tab-label`](#slots-tab-label) 插槽中的作用域参数一致。 |
| ``add`` | 点击添加按钮触发的事件，无回调参数。 |
| ``remove`` | 删除标签时触发的事件。回调参数为 `(tab: Object)`，`tab` 与 [`tab-label`](#slots-tab-label) 插槽中的作用域参数一致。 |
| ``sort`` | 排序时触发的事件。回调参数为 `(fromIndex: number, toIndex: number)`，表示从原来位置（`fromIndex`）移动到新位置（`toIndex`）。 |

### 方法

| 名称 | 描述 |
| -- | -- |
| ``scrollTabIntoView`` | [^method-scrolltabintoview] |

^^^method-scrolltabintoview
在页签容器产生横向滚动时，将指定的页签滚动到视图内。

```ts
function scrollTabIntoView(tabName: string): void
```
^^^

### 全局配置

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``tabs.matches`` | `function` | 见描述。 | [^config-matches] |

^^^config-matches
函数签名与 [`Tab`](./tab) 组件的 [`to`](./tab#props-to) 属性相同。默认值为：

```js
function (current, to) {
  return current.fullPath === to.fullPath
}
```
^^^

### 图标

| 名称 | 描述 |
| -- | -- |
| ``add`` | 添加按钮。 |
| ``remove`` | 清除按钮。 |
| ``prev`` | 往左翻页按钮。 |
| ``next`` | 往右翻页按钮。 |
| ``success`` | 成功状态。 |
| ``warning`` | 警示状态。 |
| ``info`` | 普通信息状态。 |
| ``error`` | 错误状态。 |
