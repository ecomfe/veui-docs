# 浮层管理

在 VEUI 中，有大量组件使用到了浮层功能：

* 各种类型的弹框：[对话框](../components/dialog)、[警告弹框](../components/alert-box)等；
* [下拉选择](../components/select)；
* ……

针对这些组件，我们抽离了具备如下功能的浮层模块：

* 能够浮于页面上所有普通元素之上；
* 能够进行层叠顺序管理；
* 能够基于指定元素定位。

## 层叠覆盖

为了避免浮层被上层 `overflow: hidden` 的元素意外遮盖，我们将浮层根元素直接置于 `<body>` 下统一管理。

在[浮层组件](../components/overlay)中，`.veui-overlay-box` 对应了浮层根元素，该元素在组件初始化的时候，会被放置到 `<body>` 之下，组件销毁的时候，会被移除掉。

## 层叠顺序管理

在将浮层根元素置于 `<body>` 下后，原有的层级嵌套关系会丢失，同时也无法通过原生的层叠上下文机制来控制浮层的层叠顺序。比如：

* 某个对话框组件 A 上有一个下拉选择组件 B，那么 B 组件浮层应该位于 A 组件浮层之上。
* 警告框浮层应该位于普通对话框浮层之上。

基于上述限制，浮层模块实现了自己的层叠顺序管理机制。整个浮层层级嵌套关系，是通过一棵树来表达的：

<img class="preview hero" src="/images/development/advanced/overlay-tree.png">

树中每一个蓝色节点都对应关联到具体的[浮层组件](../componets/overlay)实例。针对上图，树的构造顺序可以是：

1. 弹出“对话框 1”，创建一个“对话框 1”节点，根据节点权重信息创建一个分组，然后将分组挂在 root 节点之下。
2. 弹出“对话框 2”，创建一个“对话框 2”节点，发现已经存在相同权重的分组，就直接将“对话框 2”节点放置在该分组的末尾位置。
3. 在“对话框 2”中实例化一个“下拉选择 1”组件实例，由于“对话框 2”组件实例是“下拉选择 1”组件实例的父级，因此对应的浮层节点也应当具备父子关系，因此按照类似于“步骤 1”的顺序在“对话框 2”节点下生成分组及“下拉选择 1”节点。
4. 此时由于程序运行出现了故障，弹出了“警告弹框 1”，由于“警告弹框”类型的组件相对于“对话框”组件具备更高的层级权重，因此在 root 之下新建了一个靠右的分组，并将生成的“警告弹框 1”节点置于分组末尾。

有了树之后，就会按照深度优先的遍历顺序生成每个节点的 `z-index` 值。

其中，基准 `z-index` 值可以通过全局配置对象进行配置：

```js
import config from 'veui/managers/config'

config.set('overlay.baseZIndex', 200)
```

:::warning
必须在[浮层组件](../components/overlay)引入之前设置基准 `z-index`，不然不会生效。
:::

可以针对组件类型，甚至组件实例粒度设置层叠优先级，层叠优先级值越大，最终生成的 `z-index` 值就越大。具有相同层叠优先级的同级组件实例，越靠后实例化的组件，生成的 `z-index` 值越大。

浮层组件、对话框组件、弹框组件等提供了 `priority` 属性，用于自定义组件实例的层叠优先级：

```html
<veui-dialog :priority="300"/>
```

一些比较特殊的组件，会提供基于组件类型粒度的层叠优先级配置：

| 组件 | 配置字段 | 默认值 | 修改配置示例 |
| -- | -- | -- | -- |
| 警告弹框 | `alertbox.priority` | `100` | [^alert-box] |
| 确认弹框 | `confirmbox.priority` | `100` | [^confirm-box] |
| 输入弹框 | `promptbox.priority` | `100` | [^prompt-box] |

^^^alert-box
```js
import config from 'veui/managers/config'

config.set('alertbox.priority', 100)
```
^^^

^^^confirm-box
```js
import config from 'veui/managers/config'

config.set('confirmbox.priority', 100)
```
^^^

^^^prompt-box
```js
import config from 'veui/managers/config'

config.set('promptbox.priority', 100)
```
^^^

总结起来，确定某个浮层系组件实例的层叠优先级的逻辑流程为：

* 如果能够设置组件实例级别的层叠优先级，并且设置了，那么就使用这个层叠优先级值，否则进入下一步；
* 如果能够设置组件类型级别的层叠优先级，并且设置了，那么就使用这个层叠优先级值，否则进入下一步；
* 使用默认的层叠优先级值：`1`。

## 定位

VEUI 中，浮层支持两种定位方式：

* 在页面范围内，以坐标值的形式进行定位；
* 相对于某个元素，指定偏移和变换规则进行定位。

以坐标方式定位时，需要自己写 CSS 进行控制（浮层模块内部只会生成浮层根元素的 `z-index` 值）。

相对元素定位时，可以通过[浮层组件](../components/overlay)的 `options` 属性描述偏移和变换规则。由于目前内部采用 [Tether](http://tether.io/) 实现，因此完整的配置项可以参考 [Tether 官网](http://tether.io/#options)。同时，也支持一些常见场景的简化配置：<code>{ position: &#0096;${side}-${align}&#0096; }</code>，`side` 表示浮层根元素位于目标元素哪一边（`top`/`right`/`bottom`/`left`），`align` 表示对齐方式（`start`/`end`）。其中 `side` 是必须的，`align` 不传表示居中。推荐尽量使用简化的配置。

## 样式

由于浮层根元素被手动放置到 `<body>` 元素之下了，要设置浮层内容的样式，就需要给浮层根元素指定 `class`。所有浮层系组件都支持 `overlay-class` 属性，通过该属性为浮层根元素设置 `class`：

```vue
<template>
  <veui-dialog overlay-class="my-dialog-overlay"/>
<template>

<style>
.my-dialg-overlay {
  /* 自定义浮层样式 */
}
</style>
```
