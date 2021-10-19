# Tooltip <small>浮层提示</small>

## 示例

### 风格

可选的风格 [`ui`](#props-ui) 属性值：`alt`。

[[ demo src="/demo/tooltip/style.vue" ]]

### 定位

使用 [`position`](#props-position) 属性来指定浮层显示的位置。

[[ demo src="/demo/tooltip/position.vue" ]]

### 触发时机

使用 [`trigger`](#props-trigger) 属性来指定显示/隐藏浮层的时机。

[[ demo src="/demo/tooltip/trigger.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``open`` | `boolean` | `false` | [^open] |
| ``target`` | `string | Vue | Node` | - | 参考 [`Overlay`](./overlay) 组件的 [`target`](./overlay#props-target) 属性。 |
| ``position`` | `string` | `'top'` | [^position] |
| ``aim-center`` | `boolean` | `false` | 指定浮层提示箭头是否始终指向目标元素中心。 |
| ``trigger`` | `string` | `'hover'` | [^trigger] |
| ``interactive`` | `boolean` | `true` | 浮层内容是否允许交互。如果为 `false` 则在 `target` 外满足 `trigger` 指定的条件浮层即自动关闭。 |
| ``hide-delay`` | `number` | `tooltip.hideDelays` | 触发关闭条件满足后延迟关闭等待时间的毫秒数。可以用来防止光标移出 `target` 后移入浮层进行交互前已经自动关闭。 |
| ``overlay-class`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |
| ``overlay-style`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-style`](./overlay#props-overlay-style) 属性。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `reverse` | 反色样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^open
:::badges
`.sync`
:::

是否显示浮层提示。
^^^

^^^position
指定定位参数。使用 [Popper.js](https://popper.js.org/) 风格的定位语法指定，可参考 [`Popper.placements`](https://popper.js.org/popper-documentation.html#Popper.placements)。
^^^

^^^trigger
触发浮层提示的方式。支持指定的值为 `v-outside` 指令绑定值的 `trigger` 参数，并支持使用 <code>&#0096;${open}-${close}&#0096;</code> 语法分别指定触发打开/关闭提示的时机。另外，当 `trigger` 指定为 `custom` 时，将不会使用 `v-outside` 功能自动进行处理。

例如：`click` 表示点击 `target` 后打开，在空白处点击时关闭；`hover-mousedown` 表示光标移入 `target` 后打开，在空白处按下鼠标时关闭。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 浮层提示内容。 |

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``tooltip.hideDelay`` | `number` | `300` | 见 [`hide-delay`](#props-hide-delay) 属性。 |
