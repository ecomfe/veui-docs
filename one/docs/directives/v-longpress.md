# v-longpress

`v-longpress` 指令用于处理鼠标长按事件。

## 示例

[[ demo src="/demo/directives/longpress.vue" ]]

## API

:::tip
指令的具体用法请参考[官方文档](https://v2.cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4)。更多详细参数请参考[自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0)。
:::

### 绑定值

类型：`function | Object`。

使用 `function` 类型则绑定值表示触发长按或后续重复触发的回调函数。例如：

```html
<button v-longpress="handleLongPress">+</button>
```

使用 `Object` 类型时绑定值可完整配置所有参数。例如：

```html
<button v-longpress="{
  timeout: 500,
  handler: handleLongPress,
  repeat: true,
  repeatInterval: 100
}">+</button>
```

| 参数 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``timeout`` | `number` | `longpress.timeout` | 触发长按等待的毫秒数。可进行[全局配置](#configs-longpress-timeout)。 |
| ``handler`` | `function` | `function() {}` | 触发长按及后续重复触发时的回调函数。 |
| ``repeat`` | `boolean` | `false` | 保持长按时是否重复触发回调，类似按下键盘按键后连续自动输入的效果。 |
| ``repeatInterval`` | `number` | `longpress.repeatInterval` | 重复触发回调间隔的毫秒数。可进行[全局配置](#configs-longpress-repeatInterval)。 |

:::warning
`Object` 类型提供的参数会覆盖通过指令参数、修饰符指定的参数。
:::

### 修饰符

对应 `Object` 类型绑定值中的 `repeat`。例如：

```html
<button v-longpress.repeat="increase">+</button>
```

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``longpress.timeout`` | `number` | `500` | 触发长按等待的毫秒数。 |
| ``longpress.repeatInterval`` | `number` | `100` | 重复触发回调间隔的毫秒数。 |
