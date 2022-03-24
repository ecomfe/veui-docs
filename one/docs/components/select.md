# Select <small>下拉选择</small>

:::tip
`Select` 组件可以内联 [`Option`](./option) 或 [`OptionGroup`](./option-group) 组件使用。
:::

## 示例

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`xs` / `s` / `m` / `l`。

[[ demo src="/demo/select/size.vue" ]]

### 内联选项

`Select` 组件内支持内联使用 `OptionGroup` 及 `Option` 组件来代替 [`options`](#props-options) 属性。

[[ demo src="/demo/select/inline.vue" ]]

### 搜索选项

使用 [`searchable`](#props-searchable) 属性来开启选项搜索。

[[ demo src="/demo/select/searchable.vue" ]]

### 多选

使用 [`multiple`](#props-multiple) 属性来开启多选模式。

[[ demo src="/demo/select/multiple.vue" ]]


### 自定义已选项展示

使用 [`label`](#slots-label) 插槽来自定义**下拉关闭时**已选项如何展示。

使用 [`selected`](#slots-selected) 插槽来自定义已选项如何展示，和下拉是否关闭无关。

[[ demo src="/demo/select/selected.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``options`` | `Array<Object>` | - | [^options] |
| ``value`` | `Array<*>|*` | - | [^value] |
| ``multiple`` | `boolean` | `false` | 是否允许多选。 |
| ``max`` | `number` | - | 多选时允许选择的项目上限。 |
| ``placeholder`` | `string` | `select.placeholder` | 未选择时的占位文本。 |
| ``clearable`` | `boolean` | `false` | 是否可以清除已选内容。 |
| ``searchable`` | `boolean` | `false` | 是否允许搜索选项。 |
| ``show-select-all`` | `boolean` | `false` | 多选模式下是否显示“全选”选项。 |
| ``expanded`` | `boolean=` | `false` | [^expanded] |
| ``disabled`` | `boolean=` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean=` | `false` | 是否为只读状态。 |
| ``composition`` | `boolean=` | `false` | 是否感知搜索框输入法输入过程的值。 |
| ``overlay-class`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |
| ``overlay-style`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-style`](./overlay#props-overlay-style) 属性。 |
| ``match`` | `(item, keyword, { ancestors }) => boolean | [number, number] | Array<[number, number]>` | - | 支持自定义高亮逻辑， 默认大小写不敏感，参考 [`Autocomplete`](./Autocomplete#自定义搜索逻辑)。 |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | 支持自定义搜索命中逻辑，参考 [`Autocomplete`](./Autocomplete#自定义搜索逻辑)。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `xs` | 超小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
| `l` | 大尺寸样式。 |
+++
^^^

^^^options
选项列表，项目的类型为 `{label, value, options, disabled, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项的文字说明。 |
| `value` | `*` | 选项对应的值。 |
| `options` | `Array<Object>=` | 选项的子选项数组，数组项类型同 [`options`](#props-options) 属性数组项。 |
| `disabled` | `boolean=` | 选项是否为禁用。 |
+++
^^^

^^^value
:::badges
`v-model`
:::

已选值。
^^^

^^^expanded
:::badges
`.sync`
:::

下拉菜单是否展开。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 选项列表的内容。在没有指定 [`options`](#props-options) 属性时，可以用来直接内联 `Option` 或 `OptionGroup`。 |
| ``before`` | [^slot-before] |
| ``after`` | 选项列表后的内容。无默认内容。作用域参数同 [`before`](#slots-before) 插槽。 |
| ``label`` | [^slot-label] |
| ``group-label`` | [^slot-group-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``trigger`` | [^slot-trigger] |
| ``selected`` | [^slot-selected] |
| ``no-data`` | 用于定义当搜索无数据时要展现的内容。 |

^^^slot-before
选项列表前的内容。无默认内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `value` | `*` | 已选项值。 |
| `select` | `function(value: *): void` | 用于切换已选项。 |
| `expanded` | `boolean` | 下拉菜单是否展开。 |
| `toggle` | `function(force?: boolean): void` | 用于切换下拉菜单展开状态。 |
+++
^^^

^^^slot-label
下拉按钮文本区域。

默认内容：已选项对应的 `label` 属性值或内联模式下已选项的文本内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 已选项文本。 |
| `value` | `*` | 已选项值。 |
| `selected` | `boolean` | 是否已选择某个值。 |
| `disabled` | `boolean=` | 选项是否禁用。 |
+++

另外，当前选项数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

^^^slot-group-label
下拉选项组（带 `options` 的选项）的标题文本区域。

默认内容：选项的 `label` 属性值。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项组标题文本。 |
| `disabled` | `boolean=` | 选项组是否禁用。 |
+++

另外，当前选项数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

^^^slot-option-label
下拉选项（不带 `options` 的选项）的文本区域。

默认内容：选项的 `label` 属性值。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `*` | 选项值。 |
| `selected` | `boolean` | 是否已选择。 |
| `disabled` | `boolean=` | 选项是否禁用。 |
+++

另外，当前选项数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

^^^slot-option
可供选择的下拉选项的整个区域。

默认内容：`Option` 内的组件默认结构。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `*` | 选项值。 |
| `selected` | `boolean` | 是否已选择。 |
| `disabled` | `boolean=` | 选项是否禁用。 |
+++

另外，当前选项数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

^^^^slot-trigger
整个下拉触发区域。

默认内容：下拉按钮。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `attrs` | `Object` | 需要输出到触发元素上的属性，包括 `aria-*` / `disabled` 等，可以使用 `v-bind="attrs"` 统一进行输出。 |
| `handlers` | `Object` | [^handlers-desc] |
| `value` | `*` | 已选项值。 |
| `select` | `function(value: *): void` | 用于切换已选项。 |
| `expanded` | `boolean` | 下拉菜单是否展开。 |
| `toggle` | `function(force?: boolean): void` | 用于切换下拉菜单展开状态。 |
+++

^^^handlers-desc
需要绑定到触发元素上的事件监听器，可以使用 `v-on="handlers"` 统一进行输出。

:::tip
用于绑定 `handlers` 的元素需要支持获取焦点，以使各种键盘交互依然可以正常触发。
:::
^^^
^^^^

^^^slot-selected
选中值渲染区域。

默认内容：单选时渲染选中项目的标签；多选时将每个选中项目的标签渲染为 `Tag` 组件。

+++单选时的作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `*` | 选项值。 |
| `selected` | `boolean` | 是否已选择。 |
| `disabled` | `boolean=` | 选项是否禁用。 |
+++

+++多选时的作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `selected` | `Array<Object>` | 选中项数据的数组。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``input`` | 输入搜索关键词时触发。回调参数为 `(value: string)`，`value` 为输入框的 `value` 值。 |
| ``change`` | [^event-change] |
| ``toggle`` | 下拉菜单展开状态切换时触发，回调参数为 `(expanded: boolean)`。`expanded` 表示操作将触发下拉菜单展开还是收起。 |
| ``clear`` | 点击清除按钮时触发。 |
| ``afteropen`` | 下拉打开完成之后触发。 |

^^^event-change
:::badges
`v-model`
:::

选中状态变化后触发，回调参数为 `(value: *)`。`value` 为当前已选项 `value` 字段的值。
^^^

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``select.placeholder`` | `string` | `@@select.placeholder` | 未选择时的占位内容。 |

:::tip
`@@` 开头的值表示引用多语言配置中的相应字段。
:::

### 图标

| 名称 | 描述 |
| -- | -- |
| ``expand`` | 展开浮层。 |
| ``collapse`` | 收起浮层。 |
