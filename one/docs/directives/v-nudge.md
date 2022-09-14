# v-nudge

## 简介

`v-nudge` 指令用于使用键盘方向键对值进行调整。

:::warning
应用 `v-nudge` 的元素或组件根元素必须可以接收焦点。可以使用本身就会接收焦点的元素如 `<button>`、`<input>` 或者使用 [`tabindex` 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex)。
:::

## 示例

:::tip
按方向键时如果同时按下了 <kbd>shift</kbd> 或 <kbd>alt</kbd> 键，则变化值会被放大 10 倍或缩小 10 倍。
:::

[[ demo src="/demo/directives/nudge.vue" ]]

## API

:::tip
指令的具体用法请参考[官方文档](https://v2.cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4)。更多详细参数请参考[自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0)。
:::

### 绑定值

类型：`function | Object`。

使用 `function` 类型则绑定值表示按下方向键后触发的回调函数。例如：

```html
<div tabindex="-1" v-nudge="update"></div>
```

使用 `Object` 类型时绑定值可完整配置所有参数。例如：

```html
<div tabindex="-1" v-nudge="{
  step: 5,
  axis: 'y',
  update: increase
}"></div>
```

| 参数 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``axis`` | `string` | `y` | 限制只能使用左右或上下方向键调整。可选值类型：`'x' | 'y'`。 |
| ``step`` | `number` | `nudge.step` | 步进值。可进行[全局配置](#全局配置)。 |
| ``update`` | `function(delta: number)` | `function() {}` | 值发生变化时触发，传入变化值。参数 `delta` 为计算后的数值变化量。 |

:::warning
 `Object` 类型提供的参数会覆盖通过指令参数、修饰符指定的参数。
:::

:::warning
`v-nudge` 只生成按方向键得到的变化值，本身并不会对值进行修改，需要使用者在 `update` 回调中自行处理。
:::

### 修饰符

对应 `Object` 类型绑定值中的 `axis` / `step`。例如：

```html
<div tabindex="-1" v-nudge.x.2="{ update: delta => this.val += delta }"></div>
```

| 值 | 描述 |
| -- | -- |
| ``x`` | 限制只能使用左右方向键调整。 |
| ``y`` | 限制只能使用上下方向键调整。 |
| <var>step</var> | 步进值，注意这里 <var>step</var> 是一个变量。 |

:::warning
在修饰符中的唯一正整数将被识别为 `step`。
:::

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `nudge.step` | `number` | `1` | 步进值。 |
