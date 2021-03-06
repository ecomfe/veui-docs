# Anchor <small>锚点</small>

## 示例

### 容器与吸附

使用 `container` 属性设置 `Anchor` 的容器，使用 `sticky` 属性来控制是否在滚动出容器时进行吸附。

[[ demo src="/demo/anchor/sticky.vue" ]]

### 指定偏移

`target-offset` 用来控制锚点滚动到容器何处开始处于激活状态。

`sticky-offset` 用来控制 `Anchor` 处于容器何处时开始吸附。

[[ demo src="/demo/anchor/offset.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `items` | `Array<{value, label, children}>` | `[]` | [^items] |
| `sticky` | `boolean=` | `false` | 是否有吸附效果。 |
| `container` | `string|HTMLElement|Window=` | - | `Anchor` 吸附与判断锚点激活所参考的容器。 |
| `target-offset` | `string|number=` | `0` | 当某个锚点处于到容器的 `target-offset` 位置，那么对应的锚点链接处于激活状态。 |
| `sticky-offset` | `string|number=` | `0` | 对于 sticky `Anchor` 而言，当容器滚动到 `sticky-offset` 位置，那么该 `Anchor` 开始吸附。 |

^^^items
数据源数组，每个项目类型为 `{label, value, children, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 节点的文字描述。 |
| `value` | `string` | 节点对应的值，一般是页内 hash， 如 `#button` 。 |
| `children` | `Array<Object>=` | 节点的子节点数组，数组项类型同 `items` 数组项。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `item` | [^slot-item] |
| `item-label` | [^slot-item-label] |

^^^slot-item
渲染每个锚点链接。

默认内容：锚点链接。

作用域参数参见 `items` 属性详情。
^^^

^^^slot-item-label
渲染每个锚点链接的文本。

默认内容：锚点链接的描述文本 `label`。

作用域参数参见 `item` 插槽。
^^^
