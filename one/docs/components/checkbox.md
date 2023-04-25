# Checkbox <small>复选框</small>

## 示例

### 尺寸

可供选用的 [`ui`](#props-ui) 属性值：`s` / `m`。

[[ demo src="/demo/checkbox/size.vue" ]]

### 值设定

可以通过设置 [`true-value`](#props-true-value) 和 [`false-value`](#props-false-value) 属性 `v-model` 的值。

[[ demo src="/demo/checkbox/value.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``checked`` | `boolean` | `false` | [^checked] |
| ``value`` | `*` | - | 当 `v-model` 绑定到数组时，代表当前复选框的值。 |
| ``true-value`` | `*` | `true` | 选中状态对应的值。 |
| ``false-value`` | `*` | `false` | 未选状态对应的值。 |
| ``indeterminate`` | `boolean` | `false` | 是否处于半选状态。 |
| ``disabled`` | `boolean` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean` | `false` | 是否为只读状态。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^checked
:::badges
`.sync`
:::

是否处于选中状态。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 复选框的描述文本，点击时会切换选择状态。无默认内容。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| ``change`` | 用户切换选中状态时触发，回调参数为 `(checked: boolean)`。`checked` 表示当前是否选中。 |
| ``input`` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

选中状态变化后触发，回调参数为 `(val: *)`。`val` 为当前 `v-model` 的值。与 [`change`](#events-change) 事件不同，`input` 事件在数据操作导致状态变化时也会触发。
^^^

此外，`Checkbox` 支持如下的原生事件：

`auxclick`、`click`、`contextmenu`、`dblclick`、`mousedown`、`mouseenter`、`mouseleave`、`mousemove`、`mouseover`、`mouseout`、`mouseup`、`select`、`wheel`、`keydown`、`keypress`、`keyup`、`focus`、`blur`、`focusin`、`focusout`。

回调参数均为相应的原生事件对象。
^^^

### 图标

| 名称 | 描述 |
| -- | -- |
| ``checked`` | 已选状态。 |
| ``indeterminate`` | 半选状态。 |
