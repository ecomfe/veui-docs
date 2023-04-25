# Collapse <small>折叠面板</small>

:::tip
`Collapse` 组件可以内联在 [`Accordion`](./accordion) 组件中使用。
:::

## 示例

### 尺寸

可供选用的尺寸 [`ui`](#props-ui) 属性值：`s` / `m`。

[[ demo src="/demo/collapse/size.vue" ]]

### 样式变体

可使用 [`ui`](#props-ui) 属性来设置多种样式变体。

[[ demo src="/demo/collapse/variant.vue" ]]

### 展开图标的位置

可使用 [`toggle-position`](#props-toggle-position) 属性来设置展开图标的位置。

[[ demo src="/demo/collapse/position.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``label`` | `string` | - | 折叠面板标题。 |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``disabled`` | `boolean` | `false` | 是否为禁用状态。 |
| ``name`` | `string | number` | - | 当内联在 [`Accordion`](./accordion) 组件中使用时，用来提供已展开面板的唯一标识。 |
| ``toggle-position`` | `string` | `'start'` | [^toggle-position] |

^^^ui
预设样式。为空格分隔的一组枚举值的组合。其中 `simple` / `basic` / `strong` 只能选择一个，不设置则为默认的普通样式。`bordered` / `borderless` 只能选择一个。


+++枚举值
| 值 | 描述 |
| -- | -- |
| `simple` | 简洁样式。 |
| `basic` | 白底样式。 |
| `strong` | 灰底样式。 |
| `bordered` | 有外边框。 |
| `borderless` | 无外边框。 |
| `dull` | 标题区域是不否响应鼠标交互改变样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

折叠面板是否展开。
^^^

^^^toggle-position
设置展开图标的位置。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `start` | 展开图标位于开始位置，为默认位置。 |
| `end` | 展开图标位于结束位置。 |
| `none` | 无展开图标。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 折叠式面板内容区。 |
| ``title`` | 折叠式面板标题区。 |
| ``title-after`` | 折叠式面板标题后区域。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| ``toggle`` | 点击标题区触发展开/收起时触发。回调参数为 `(expanded: boolean)`。`expanded` 为面板是否展开。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``expand`` | 收起状态，点击后展开。 |
| ``collapse`` | 展开状态，点击后收起。 |
