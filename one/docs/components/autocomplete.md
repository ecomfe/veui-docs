# Autocomplete <small>自动完成</small>

## 示例

[[ demo src="/demo/autocomplete/normal.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``datasource`` | `Array<string | Object>=` | `[]` | [^datasource] |
| ``value`` | `*` | - | [^prop-value] |
| ``match`` | `function(string | Object, string): boolean=` | - | 自定义搜索逻辑。 |
| ``strict`` | `boolean=` | `false` | 建议下拉面板关闭时，若输入值没有完全匹配建议值，那么会清空输入值。 |
| ``suggest-trigger`` | `string | Array<string>=` | `'input'` | 触发建议下拉面板的时机，可用值有：`'input'`、`'focus'`。 |
| ``placeholder`` | `string=` |  | 输入占位符。 |
| ``select-on-focus`` | `boolean=` | `false` | 聚焦时是否自动选中输入框文本。 |
| ``composition`` | `boolean=` | `false` | 是否感知输入法输入过程的值。 |
| ``expanded`` | `boolean=` | `false` | [^expanded] |
| ``clearable`` | `boolean=` | `false` | 是否显示清除按钮。 |
| ``disabled`` | `boolean=` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean=` | `false` | 是否为只读状态。 |

^^^datasource
数据源数组，项目为 `Object` 时字段为 `{label, value, children, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 节点的文字描述。 |
| `value` | `string` | 节点对应的值，一般是页内 hash， 如 `#button` 。 |
| `children` | `Array<Object>=` | 节点的子节点数组，数组项类型同 [`items`](#props-items) 数组项。 |
+++
^^^

^^^prop-value
:::badges
`v-model`
:::

当前选中的值。
^^^

^^^expanded
:::badges
`.sync`
:::

建议面板是否展开（如果 `suggestions` 中没有待选项，则即使为 `true` 时面板也会关闭）。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``suggestions`` | [^slot-suggestions] |
| ``option-label`` | [^slot-option-label] |

^^^slot-suggestions

下拉建议面板插槽。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `datasource` | `Array<string | Object>` | 数据源，类型同 [`datasource`](#props-datasource) 属性。 |
| `keyword` | `string` | 搜索关键词。 |
+++
^^^

^^^slot-option-label

下拉面板中选项插槽。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 用来显示的节点文案，不存在则取 `value`。 |
| `value` | `string` | 用来实际选中的值。 |
| `matches` | `Array<{text: string, matched: boolean}>` | 匹配情况，一个节点可能被切分成多断文本，`text` 表示该段文本， `matched` 表示该段文本是否匹配。 |
+++
^^^

### 事件

| 名称  | 描述 |
| -- | -- |
| ``input`` | [^event-input] |
| ``suggest`` | 采纳建议时触发，参数是当前值。 |
| ``toggle`` | 提示面板展开状态切换时触发，回调参数为 `(expanded: boolean)`。`expanded` 表示操作将触发提示面板展开还是收起。 |
| ``clear`` | 清除当前值时触发。 |

^^^event-input
:::badges
`v-model`
:::

当在 `input` 中输入或下拉面板中选值会触发该事件，参数是当前输入值或选中时的选中项目的 `value`。
^^^
