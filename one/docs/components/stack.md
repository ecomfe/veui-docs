# Stack <small>堆叠容器</small> 🧪

## 示例

### 基本

`Stack` 组件可用于等间距区隔内容。

[[ demo src="/demo/stack/basic.vue" ]]

### 纵向

设置 [`direction`](#props-direction) 为 `'column'` 可让堆叠项纵向排列。

[[ demo src="/demo/stack/column.vue" ]]

### 对齐

设置 [`align`](#props-align) 可指定堆叠项在垂直于 [`direction`](#props-direction) 对应方向上的对齐方式。

[[ demo src="/demo/stack/align.vue" ]]

### 分布

设置 [`justify`](#props-justify) 可指定堆叠项在 [`direction`](#props-direction) 对应方向上的分布方式。

[[ demo src="/demo/stack/justify.vue" ]]

### 换行

设置 [`wrap`](#props-wrap) 可让堆叠项允许换行。

[[ demo src="/demo/stack/wrap.vue" ]]

## API

### 属性
| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``direction`` | `'row' | 'column'` | `'row'` | 堆叠项的排列方向。 |
| ``wrap`` | `boolean` | `false` | 是否换行。 |
| ``inline`` | `boolean` | `false` | 是否在行内渲染。 |
| ``align`` | `string` | - | [^prop-align] |
| ``justify`` | `string` | - | [^prop-justify] |
| ``gap`` | `string | number` | - | 堆叠项之间的间距。可以设置为字符串或数字，字符串时可选值为 `xxs` / `xs` / `s` / `m` / `l` / `xl` / `xxl`，数字时单位为 `px`。 |

^^^prop-align
堆叠项在垂直于 [`direction`](#props-direction) 对应方向上的对齐方式。当 [`direction`](#props-direction) 为 `row` 时，默认为 `center`；当 `direction` 为 `column` 时，默认为 `stretch`。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `start` | 顶部对齐。 |
| `end` | 底部对齐。 |
| `center` | 居中对齐。 |
| `stretch` | 拉伸对齐。 |
^^^

^^^prop-justify
堆叠项在 [`direction`](#props-direction) 对应方向上的分布方式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `start` | 靠左分布。 |
| `end` | 靠右分布。 |
| `center` | 居中分布。 |
| `space-between` | 两端分布。 |
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 堆叠项内容。 |
