# v-tooltip

## 简介

`v-tooltip` 指令用于通过使用 [`Tooltip` 组件](../components/tooltip)为目标元素添加提示信息。

:::tip
VEUI 对通过 `v-tooltip` 定义的全局浮层提示进行了统一的体验优化。在光标初次移入某个全局提示时，会启动“预热期”的全局计时器。在预热期内，如果光标移出目标区域，则浮层提示不会展现；如果光标在某个目标区域内直到“预热期”结束，浮层提示将在光标悬停到任何一个全局提示区域时**立刻**展现。当光标移出全局提示区域时将会启动“冷却期”计时器。在“冷却期”内，如果再次移入目标区域，则浮层提示将会立刻展现且；只有在目标区域外超过“冷却期”的时间，才会回到初始状态，再次触发浮层提示需要重新预热。
:::

## 示例

## API

:::tip
指令的具体用法请参考[官方文档](https://cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4)。更多详细参数请参考[自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0)。
:::

### 绑定值

类型：`string|Object`。

使用 `string` 类型表示提示的文本信息：

```html
<button v-tooltip="添加">+</button>
```

使用 `Object` 类型时绑定值可完整配置所有参数。例如：

```html
<button v-tooltip="{
  content: '添加',
  position: 'top',
  disabled: false
}">+</button>
```

| 参数 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `content` | `string|VNode|Array<VNode>` | - | 提示信息字符串或通过渲染函数返回的虚拟节点（数组）。 |
| `position` | `string` | - | 浮层提示的展示位置。参考 [`Tooltip`](../components/tooltip) 组件的 [`position`](../components/tooltip#props) 属性。 |
| `disabled` | `boolean` | `false` | 是否禁用浮层提示。 |

### 修饰符

对应 `Object` 类型绑定值中的 `position`。例如：

```html
<button v-tooltip.bottom-end="添加">+</button>
```

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `tooltip.warmup` | `number` | `800` | 完成“预热”所需的毫秒数。 |
| `tooltip.cooldown` | `number` | `800` | 完成“冷却”所需要的毫秒数。 |
