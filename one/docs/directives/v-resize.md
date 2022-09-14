# v-resize

## 简介

`v-resize` 指令用于检测元素是否发生了尺寸变化。

## 示例

[[ demo src="/demo/directives/resize.vue" ]]

## API

:::tip
指令的具体用法请参考[官方文档](https://v2.cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4)。更多详细参数请参考[自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0)。
:::

### 绑定值

类型：`function | Object`。

使用 `function` 类型则绑定值表示 resize 时触发的回调函数。例如：

```html
<div v-resize="handler"></div>
```

使用 `Object` 类型时绑定值可完整配置所有参数。例如：

```html
<div v-resize="{
  wait: 100,
  mode: 'debounce',
  handler: cb,
  leading: true
}"></div>
```

| 参数 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``wait`` | `number` | `150` | 传递给 `mode` 函数的毫秒数。 |
| ``mode`` | `string` | - | [^mode] |
| ``handler`` | `function` | - | resize 时触发的回调函数。 |
| ``leading`` | `boolean` | `false` | 防抖、节流模式是否在 resize 最初就将执行一次。 |

:::warning
 `Object` 类型提供的参数会覆盖通过指令参数、修饰符指定的参数。
:::

^^^mode
执行模式，默认为最细粒度。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `debounce` | 防抖模式。 |
| `throttle` | 节流模式。 |
+++
^^^

### 修饰符

对应 `Object` 类型绑定值中的 `mode` / `leading` / `wait`。`leading` 可以与 `debounce` / `throttle` 其中之一同时使用。例如：

```html
<div v-resize.throttle.leading.500="handler"></div>
```

| 值 | 描述 |
| -- | -- |
| ``debounce`` | 使用防抖模式，不能与 `throttle` 一同使用。 |
| ``throttle`` | 使用节流模式，不能与 `debounce` 一同使用。 |
| ``leading`` | 使用后，防抖、节流模式在第一次触发 resize 时就将执行一次。 |
| <var>wait</var> | 传递给 `mode` 函数的毫秒数，注意这里 <var>wait</var> 是一个变量。 |

:::warning
在修饰符中的唯一正整数将被识别为 `wait`。
:::
