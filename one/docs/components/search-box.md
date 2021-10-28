# SearchBox <small>搜索框</small>

## 示例

### 风格

可选的 [`ui`](#props-ui) 属性值：`strong`。

[[ demo src="/demo/search-box/style.vue" ]]

### 尺寸

可选的 [`ui`](#props-ui) 属性值：`xs` / `s` / `m` / `l`。

[[ demo src="/demo/search-box/size.vue" ]]

### 只读与禁用

[[ demo src="/demo/search-box/disabled.vue" ]]

### 推荐列表

[[ demo src="/demo/search-box/suggestion.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``placeholder`` | `string` | - | 搜索框占位符。 |
| ``value`` | `string` | - | [^value] |
| ``autofocus`` | `boolean` | `false` | 是否自动聚焦。 |
| ``clearable`` | `boolean` | `false` | 是否显示清除按钮。 |
| ``select-on-focus`` | `boolean` | `false` | 聚焦时是否自动选择文本。 |
| ``composition`` | `boolean` | `false` | 是否感知输入法状态。 |
| ``suggestions`` | `Array<string>|Array<Object>` | - | [^suggestions] |
| ``replace-on-select`` | `boolean` | `true` | 选择推荐项时是否自动使用其内容填充文本框。 |
| ``suggest-trigger`` | `Array<string>|string` | `input` | [^suggest-trigger] |
| ``expanded`` | `boolean=` | `false` | [^expanded] |
| ``disabled`` | `boolean=` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean=` | `false` | 是否为只读状态。 |
| ``match`` | `(item, keyword, { ancestors }) => boolean | [number, number] | Array<[number, number]>` | - | 支持自定义高亮逻辑， 默认大小写不敏感，参考 [`Autocomplete`](./Autocomplete#自定义搜索逻辑)。 |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | 支持自定义搜索命中逻辑，参考 [`Autocomplete`](./Autocomplete#自定义搜索逻辑)。 |

^^^ui
按钮预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `strong` | 加强样式，搜索图标变成搜索按钮，背景为主题色。 |
| `xs` | 特小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中等尺寸样式。 |
| `l` | 大尺寸样式。 |
+++
^^^

^^^value
:::badges
`v-model`
:::

输入框的值。
^^^

^^^suggestions
推荐列表。列表项为 `Object` 时格式为 `{label, value}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 推荐项文本。 |
| `value` | `string` | 推荐项值。 |
+++
^^^

^^^suggest-trigger
展示推荐列表的触发时机。可以是枚举值，也可以枚举值的组合。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `focus` | 输入框聚焦时。 |
| `input` | 输入框触发 [`input`](#events-input) 事件时。 |
| `submit` | 点击搜索按钮时。 |
+++
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
| ``suggestions-before`` | 插入推荐列表前的内容。 |
| ``suggestions-after`` | 插入推荐列表后的内容。 |
| ``suggestion`` | [^slot-suggestion] |

^^^slot-suggestions
推荐列表内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `suggestions` | `Array<{value: string, label: string}>` | 从 [`suggestions`](#props-suggestions) 属性归一化类型后的推荐列表。 |
| `select` | `function(suggestion: {value: string, label: string}): void` | 选择指定的推荐项。 |

^^^slot-suggestion
推荐列表的单项插槽，用来定制选项内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `string` | 选项值。 |

`suggestions` 中的每一项，除了 `label` 和 `value` 外的字段也会自动通过 `v-bind` 进行绑定。

当 `suggestions` 为 `Array<string>` 类型时，`label` 和 `value` 均为单项 `string` 值。
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``input`` | [^event-input] |
| ``suggest`` | [^event-suggest] |
| ``select`` | [^event-select] |
| ``search`` | [^event-search] |
| ``toggle`` | 提示面板展开状态切换时触发，回调参数为 `(expanded: boolean)`。`expanded` 表示操作将触发提示面板展开还是收起。 |

^^^event-input
输入框中文本发生变化时触发该事件，回调参数为 `(value: string)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `value` | `string` | 输入框的值。 |
+++
^^^

^^^event-suggest
需要展示推荐列表时触发，回调参数为 `(value: string)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `value` | `string` | 输入框的值。 |
+++
^^^

^^^event-select
选择推荐列表某个选项时触发，回调参数为 `(item: Object)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `item` | `{label: string, value: string=, ...}` | 单个选项。 |
+++
^^^

^^^event-search
输入内容被提交时触发，回调参数为 `(value: string, event: Event)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `value` | `string` | 输入框的值。 |
| `event` | [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/click) | 原生点击事件。 |
+++
^^^

### 图标

| 名称 | 描述 |
| -- | -- |
| ``search`` | 搜索。 |
