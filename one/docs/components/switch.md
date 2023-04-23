# Switch <small>开关</small>

## 示例

### 尺寸

可供选用的 [`ui`](#props-ui) 属性值：`xs` / `s` / `m`。

[[ demo src="/demo/switch/size.vue" ]]

### 值设定

可以通过设置 [`true-value`](#props-true-value) 和 [`false-value`](#props-false-value)  来修改打开、关闭状态下 `v-model` 的值。

[[ demo src="/demo/switch/value.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``checked`` | `boolean` | `false` | [^checked] |
| ``true-value`` | `*` | `true` | 打开状态对应的值。 |
| ``false-value`` | `*` | `false` | 关闭状态对应的值。 |
| ``disabled`` | `boolean` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean` | `false` | 是否为只读状态。 |
| ``loading`` | `boolean` | `false` | 是否为加载中状态。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `xs` | 超小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^checked
:::badges
`.sync`
:::

是否处于打开状态。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 开关的描述文本，点击时会切换选择状态。无默认内容。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| ``change`` | 用户切换打开状态时触发，回调参数为 `(checked: boolean)`。`checked` 表示当前是否打开。 |
| ``input`` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

打开状态变化后触发，回调参数为 `(val: *)`。`val` 为当前 `v-model` 的值。与 [`change`](#events-change) 事件不同，`input` 事件在数据操作导致状态变化时也会触发。
^^^

此外，`Switch` 支持如下的原生事件：

`auxclick`、`click`、`contextmenu`、`dblclick`、`mousedown`、`mouseenter`、`mouseleave`、`mousemove`、`mouseover`、`mouseout`、`mouseup`、`select`、`wheel`、`keydown`、`keypress`、`keyup`、`focus`、`blur`、`focusin`、`focusout`。

回调参数均为相应的原生事件对象。
