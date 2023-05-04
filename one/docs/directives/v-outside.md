# v-outside

`v-outside` 指令用于检测是否在某些元素之外触发了指定的事件，比如判断鼠标是否点击了元素 A 和 B 范围之外的元素。

## 示例

监测外部点击事件。

[[ demo src="/demo/directives/outside/click.vue" ]]

监测鼠标移出事件。

[[ demo src="/demo/directives/outside/hover.vue" ]]

如果鼠标在指定时间内，没有移回目标元素区域，就触发外部事件回调函数。

[[ demo src="/demo/directives/outside/hover-with-delay.vue" ]]

## API

:::tip
指令的具体用法请参考[官方文档](https://v2.cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4)。更多详细参数请参考[自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0)。
:::

### 绑定值

类型：`function | Object`。

通过 `function` 类型配置触发外部事件时的回调函数。例如：

```html
<div v-outside="handler"></div>
```

使用 `Object` 类型时绑定值可完整配置所有参数。例如：

```html
<div v-resize="{
  refs: 'box1,box2'
  handler: handleOutsideEvent,
  trigger: 'hover',
  delay: 200,
  excludeSelf: false
}"></div>
```

| 参数 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``refs`` | `Array<string | Vue | HTMLElement>` | `[]` | [^refs] |
| ``handler`` | `function(event: Event): void` | `function() {}` | 外部事件触发时的回调函数，会接收到相应的原生事件对象参数。回调函数的 `event` 参数会根据 `trigger` 参数变成相应的原生事件对象。 |
| ``trigger`` | `string` | `'click'` | 外部事件名，可取的值有：`click`，`mousedown`，`mouseup`，`hover`，`focus`。 |
| ``delay`` | `number` | `0` | 在 `trigger` 为 `hover` 的时候，鼠标移出目标元素 `delay` 毫秒之后，才触发回调函数。如果在 `delay` 毫秒之内，鼠标重新移回了目标元素集合内，就不会触发回调函数。 |
| ``excludeSelf`` | `boolean` | `false` | 在计算目标元素集合的时候，用于判断是否排除自身元素。 |

^^^refs
该参数指定了目标元素集合，在目标元素之外触发指定事件，就会调用传入的回调函数。默认情况下，会将与 `v-outside` 指令绑定的元素算在目标元素之中，不过可以通过 `excludeSelf` 排除掉自身。

+++类型详情
| 类型 | 描述 |
| -- | -- |
| `string` | 在指令所在组件上下文中，根据 `ref` 查找指定的 DOM 元素集合。 |
| `Vue` | 组件实例，直接使用 `vm.$el` 元素。 |
| `HTMLElement` | DOM 元素，直接使用。 |
+++
^^^

:::warning
`Object` 类型提供的参数会覆盖通过指令参数、修饰符指定的参数。
:::

### 修饰符

对应 `Object` 类型绑定值中的 `trigger` / `delay` / `excludeSelf`。例如：

```html
<div v-outside.hover.200.excludeSelf></div>
```

:::warning
在修饰符中的唯一正整数将被识别为 `delay`。
:::

### 参数

对应 `Object` 绑定值中的 `refs`。值是一个用 `,` 分隔的、表示一到多个 `ref` 的字符串。例如：

```html
<div v-outside:box1,box2></div>
```
