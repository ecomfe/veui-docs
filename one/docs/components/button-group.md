# ButtonGroup <small>按钮组</small>

## 示例

### 风格

可供选用的 [`ui`](#props-ui) 属性值：`primary` / `strong` / `basic`。

[[ demo src="/demo/button-group/style.vue" ]]

### 尺寸

可供选用的 [`ui`](#props-ui) 属性值：`xs` / `s` / `m` / `l` / `xl`。

[[ demo src="/demo/button-group/size.vue" ]]

### 使用数据源

可以使用 [`items`](#props-items) 属性通过数据源指定按钮内容。

[[ demo src="/demo/button-group/items.vue" ]]

### 禁用状态

设置 [`disabled`](#props-disabled)  来使按钮处于禁用状态。

[[ demo src="/demo/button-group/disabled.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | - | [^items] |
| ``disabled`` | `boolean` | `false` | 按钮是否为禁用状态。 |

^^^ui
预设样式。为空格分隔的一组枚举值的组合。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `primary` | 主要按钮，背景显示为主题色。 |
| `strong` | 加强样式。 |
| `basic` | 基础样式。 |
| `xs` | 超小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
| `l` | 大尺寸样式。 |
| `xl` | 超大尺寸样式。 |
+++
^^^

^^^items
按钮数据项的数组，项目类型为 `{label, value}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 按钮文本。 |
| `value` | `*` | 如传入 `string` 类型的值，则会在点击按钮时触发同名的事件。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 按钮组内容区。 |
| ``item`` | [^slot-item] |

^^^slot-item
用来定制每个按钮的内容。

默认内容：[`label`](#props-label) 属性值。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 按钮文本。 |
| `value` | `*` | 按钮项的 `value` 值。 |
| `index` | `number` | 按钮在 `items` 中的序号。 |
| `disabled` | `boolean` | 按钮是否禁用。 |
+++

另外，`items` 内数据项中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到插槽参数上。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``click`` | [^click-event] |
| <var>&lt;value&gt;</var> | 如果对应数据项有字符串类型的 `value` 字段，则在点击后触发名为 `value` 值的事件，参数与 [`click`](#events-click) 事件相同。 |

^^^click-event
点击后触发，回调参数为 `(item, index)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `item` | `{label: string, value: *=, ...}` | 数据项。 |
| `index` | `number` | 按钮在 `items` 中的序号。 |
+++
^^^
