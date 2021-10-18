# Collapse <small>折叠面板</small>

:::tip
`Collapse` 组件可以内联在 [`Accordion`](./accordion) 组件中使用。
:::

## 示例

### 尺寸

可选的尺寸 `ui` 属性值：`s`/`m`。

[[ demo src="/demo/collapse/size.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `label` | `string` | - | 折叠面板标题。 |
| `expanded` | `boolean=` | `false` | [^expanded] |
| `disabled` | `boolean=` | `false` | 是否为禁用状态。 |
| `name` | `string | number=` | - | 当内联在 [`Accordion`](./accordion) 组件中使用时，用来提供已展开面板的唯一标识。 |

^^^expanded
:::badges
`.sync`
:::

折叠面板是否展开。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | 折叠式面板内容区。 |
| `title` | 折叠式面板标题区。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| `toggle` | 点击标题区触发展开/收起时触发。回调参数为 `(expanded: boolean)`。`expanded` 为面板是否展开。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| `expand` | 收起状态，点击后展开。 |
| `collapse` | 展开状态，点击后收起。 |
