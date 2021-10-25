# Steps <small>步骤</small>

## 示例

### 尺寸及方向

可选的 [`ui`](#props-ui) 属性值：`s` / `m` / `vertical` / `label-vertical`。

[[ demo src="/demo/steps/default.vue" ]]

### 步骤状态

可以通过设置 [`steps`](#props-steps) 的 `status` 属性值定义步骤状态，若步骤出错，可设置为 `error`。

[[ demo src="/demo/steps/status.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``steps`` | `Array` | - | [^steps] |
| ``current`` | `number` | - | 当前步骤的索引值。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
| `vertical` | 纵向样式。 |
| `label-vertical` | 文案纵向样式。 |
+++
^^^

^^^steps
步骤数据源。类型为 `{ label, desc, to, status }`。

+++字段详情
| 名称 | 类型 | | 描述 |
| -- | -- | -- |
| `label` | `string` | 步骤标题。 |
| `desc` | `string` | 步骤描述。 |
| `to` | `string | Object` | 步骤链接。类型见 [`Link`](./link) 组件的 [`to`](./link#propss-to) 属性。 |
| `status` | `string` | 步骤状态。可选值为默认和 `error`。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | [^slot-default] |
| ``index`` | 序号部分内容，默认显示从 `1` 开始的序号，已完成的步骤显示完成图标，出错的步骤显示出错图标。位于 [`default`](#slots-default) 插槽内部，作用域参数同 [`default`](#slots-default) 插槽。 |
| ``label`` | 步骤标题部分内容，默认显示 `steps` 中项目的 `label` 字段。位于 [`default`](#slots-default) 插槽内部，作用域参数同 [`default`](#slots-default) 插槽。 |
| ``desc`` | 步骤描述部分内容，默认显示 `steps` 中项目的 `desc` 字段。位于 [`default`](#slots-default) 插槽内部，作用域参数同 [`default`](#slots-default) 插槽。 |

^^^slot-default
整个步骤项内容。

默认内容：序号/完成图标、步骤标题、描述等内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 步骤标题。同 [`steps`](#props-steps) 属性中项目的 `label` 字段。 |
| `desc` | `string` | 步骤描述。同 [`steps`](#props-steps) 属性中项目的 `desc` 字段。 |
| `to` | `string | Object` | 步骤链接。同 [`steps`](#props-steps) 属性中项目的 `to` 字段。 |
| `status` | `string` | 步骤状态。同 [`steps`](#props-steps) 属性中项目的 `status` 字段。 |
| `index` | `number` | 步骤索引值。 |

另外，`steps` 内数据项中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``click`` | 任意步骤被点击后触发，回调参数为 `(index: number, event: Event)`。其中 `index` 为被点击步骤的索引值，`event` 为相应的原生事件对象。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``success`` | 已成功完成的步骤。 |
| ``error`` | 出错的步骤。 |
