# Accordion <small>手风琴面板</small>

:::tip
`Accordion` 组件需要内联 [`Collapse`](./collapse) 组件使用。
:::

## 示例

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`s` / `m`。

[[ demo src="/demo/accordion/size.vue" ]]

### 允许多个展开

可使用 [`multiple`](#props-multiple) 属性来允许多个面板同时展开。

[[ demo src="/demo/accordion/multiple.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``multiple`` | `boolean=` | `false` | 是否允许多个子面板同时展开。 |
| ``disabled`` | `boolean=` | `false` | 是否为禁用状态。 |
| ``expanded`` | `string | Array<string>` | - | [^expanded] |

^^^expanded
:::badges
`.sync`
:::

已展开的折叠面板标识，对应于内联 `Collapse` 组件的 [`name`](./collapse#props-name) 属性。当 `multiple` 为 `true` 时，为折叠面板标识的数组。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 内容区，用来内联 `Collapse` 组件。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| ``toggle`` | [^toggle] |

^^^toggle
点击内部折叠面板标题区触发展开/收起时触发。回调参数为 `(expand: boolean, name: string, expanded)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| ``expand`` | `boolean` | 是否展开。 |
| ``name`` | `string` | 被切换的折叠面板标识。 |
| ``expanded`` | `string | Array<string>` | 当前所有被展开的折叠面板标识。 |
+++
^^^
