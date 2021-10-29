# v-drag

## 简介

`v-drag` 指令用于处理根据鼠标拖拽来变换目标元素形态、位置等的场景。

## 示例

### 拖动元素

[[ demo src="/demo/directives/drag/base.vue" ]]

### 限制拖动范围

[[ demo src="/demo/directives/drag/containment.vue" ]]

### 拖动多个元素

[[ demo src="/demo/directives/drag/targets.vue" ]]

### 限制拖动方向

[[ demo src="/demo/directives/drag/axis.vue" ]]

### 水平排序

[[ demo src="/demo/directives/drag/sort-x.vue" ]]

### 垂直排序

[[ demo src="/demo/directives/drag/sort-y.vue" ]]

## API

:::tip
指令的具体用法请参考[官方文档](https://cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4)。更多详细参数请参考[自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0)。
:::

### 绑定值

类型：`Object`。

| 参数 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``type`` | `string` | - | 该参数指定拖动行为的类型，目前内置了 `translate` / `sort` 两种模式，可以进行[扩展](#扩展)。 |
| ``disabled`` | `boolean` | `false` | 该指令是否被禁用。 |
| ``containment`` | `string | Vue | HTMLElement | Object` | - | [^containment] |
| ``handle`` | `string | Vue | HTMLElement` | - | 指定拖拽操作的“把手”元素，只有拖动对应元素才会触发拖拽。类型同 [`containment`](#bindings-containment) 参数（不支持普通 `Object` 类型）。 |
| ``targets`` | `Array<string | Vue | HTMLElement>` | `[]` | [^targets] |
| ``axis`` | `string` | - | 限制所有目标元素只能在水平或者垂直方向上做变换或指定拖拽排序元素排列方向。可选值类型：`'x' | 'y'`。 |
| ``dragstart`` | `function(): Object` | `function() {}` | [^dragstart] |
| ``drag`` | `function(): Object` | `function() {}` | [^drag] |
| ``dragend`` | `function(): Object` | `function() {}` | 鼠标拖拽结束事件的回调函数。回调参数同 `drag`。 |
| ``ready`` | `function` | `function() {}` | 指令初始化完成的回调函数，会传出一个句柄对象参数，该对象上有一个 `reset()` 方法，用于将所有目标元素重置为变换之前的样子。 |
| ``name`` | `string` | - | [^name] |
| ``sort`` | `function(fromIndex: number, toIndex: number): void` | - | [^sort-callback] |

^^^targets
:::badges
`translate`
:::

该参数指定了目标元素集合，在指令所在元素上拖拽鼠标的时候，会按照指定的方式变换所有目标元素。

+++类型详情
| 类型 | 描述 |
| -- | -- |
| `string` | 在指令所在组件上下文中，根据 `ref` 查找指定的 DOM 元素集合。 |
| `Vue` | 组件实例，直接使用 `vm.$el` 元素。 |
| `HTMLElement` | DOM 元素，直接使用。 |
+++
^^^

^^^dragstart
鼠标拖拽开始事件的回调函数。回调参数为 `({ event: DragEvent })`。
^^^

^^^drag
鼠标拖拽中事件的回调函数。回调参数为 `({ event, distanceX, distanceY })`。

+++参数详情
| 参数 | 类型 | 描述 |
| -- | -- | -- |
| `event` | [`DragEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent) | 原生拖拽事件对象。 |
| `distanceX` | `number` | 水平方向自拖拽开始以后移动的总距离。 |
| `distanceY` | `number` | 垂直方向自拖拽开始以后移动的总距离。 |
+++
^^^

^^^name
:::badges
`sort`
:::

用来标记拖动排序分组名称，排序将在分组名称相同的元素间进行。
^^^

^^^sort-callback
:::badges
`sort`
:::

排序指令仅仅通过该回调告诉用户排序的情况，即：从原来位置（`fromIndex`）移动到新位置（`toIndex`），需要自行据此对数据源进行更新。
^^^

:::warning
 `Object` 类型提供的参数会覆盖通过指令参数、修饰符指定的参数。
:::

^^^^containment
目标元素在变换的时候，应当始终位于 `containment` 所指定的区域内。

如果通过 `containment` 解析出来是一个 DOM 元素，那么所有目标元素就应当在该元素内变换；如果解析出来是一个矩形区域描述（相对于视口的 top、left、width、height），那么所有目标元素就应当在该矩形区域内变换。

+++类型详情
| 类型 | 描述 |
| -- | -- |
| `string` | 在指令所在组件上下文中，根据 `ref` 查找指定的 DOM 元素。传入 `@window` 则计算视口位置。 |
| `Vue` | 根据组件实例找到 DOM 元素。 |
| `HTMLElement` | 直接接收 DOM 元素。 |
| `Object` | [^containment-object] |
+++

^^^containment-object
:::badges
`translate`
:::

接受任意包含 `{ top, left, width, height }` 字段的普通对象，表示相对于视口的矩形区域的坐标和尺寸，四个字段均为 `number` 类型。
^^^
^^^^

### 修饰符

对应 `Object` 绑定值中的 `type` / `axis` 的值。例如：

```html
<!-- 沿着垂直方向做位移变换 -->
<div v-drag.translate.y></div>
```

### 参数

对应 `Object` 绑定值中的 `targets`。值是一个用 `,` 分隔的、表示一到多个 `ref` 的字符串。例如：

```html
<div v-drag:box1,box2></div>
```


## 拖拽排序（v-drag.sort）

可以通过 `v-drag.sort` 或 `v-drag="{ type: 'sort', ... }"` 来实现拖拽排序。

## 扩展

可以通过继承 `BaseHandler` 扩展 `v-drag` 指令：

```js
import BaseHandler from 'veui/directives/drag/BaseHandler'
import { registerHandler } from 'veui/directives/drag'

class RotateHandler extends BaseHandler { }

registerHandler('rotate', RotateHandler)
```

然后通过 `type` 参数使用 `RotateHandler`：

```html
<div v-drag="{ type: 'rotate' }"></div>
<!-- 或者 -->
<div v-drag.rotate></div>
```

:::warning
`type` 的名称不能与已有的[修饰符](#修饰符)冲突。
:::

### `BaseHandler`

`BaseHandler` 中各成员的说明如下：

| 成员名 | 类型 | 描述 |
| -- | -- | -- |
| `options` | `Object` | 解析出来的参数组成的对象。 |
| `context` | `Vue` | 指令所在的组件。 |
| `isDragging` | `boolean` | 是否处于拖拽过程中。 |
| `start` | `function(Object)` | 同[绑定值](#绑定值)中的 `dragstart` 字段。 |
| `drag` | `function(Object)`| 同[绑定值](#绑定值)中的 `drag` 字段。 |
| `end` | `function(Object)`| 同[绑定值](#绑定值)中的 `dragend` 字段。 |
| `destroy` | `function()` | 指令与 DOM 元素解绑的时候调用。 |
| `setOptions` | `function(options)` | 设置参数。 |
| `reset` | `function()` | 重置变换。 |
