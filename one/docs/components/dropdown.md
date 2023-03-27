# Dropdown <small>下拉菜单</small>

:::tip
`Dropdown` 组件可以内联 [`Option`](./option) 或 [`OptionGroup`](./option-group) 组件使用。
:::

## 示例

### 样式

可选的样式 [`ui`](#props-ui) 属性值： `primary` / `text`。

[[ demo src="/demo/dropdown/style.vue" ]]

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`xs` / `s` / `m` / `l`。

[[ demo src="/demo/dropdown/size.vue" ]]

### 内联选项

`Dropdown` 组件内支持内联使用 `OptionGroup` 及 `Option` 组件来代替 [`options`](#props-options) 属性。

[[ demo src="/demo/dropdown/inline.vue" ]]

### 含搜索的下拉框菜单

使用 [`searchable`](#props-searchable) 属性使组件支持搜索并高亮显示符合条件的选项。

[[ demo src="/demo/dropdown/searchable.vue" ]]

### 禁用状态的下拉框菜单

使用数据源中的 [`disabled`](#props-disabled) 属性来禁用下拉项。

[[ demo src="/demo/dropdown/disable.vue" ]]

### 下拉触发时机与分离按钮

使用 [`trigger`](#props-trigger) 属性指定展开下拉菜单的时机，使用 [`split`](#props-split) 属性来使命令按钮与下拉按钮分离。

[[ demo src="/demo/dropdown/other.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``options`` | `Array<Object>` | `[]` | [^options] |
| ``label`` | `string` | - | 下拉按钮的描述文本。 |
| ``trigger`` | `string` | `'click'` | 触发下拉框展开的时机，可选值为 `'click'` / `'hover'`。 |
| ``split`` | `boolean` | `false` | 是否将下拉按钮分离为指令按钮和切换下拉按钮两部分。 |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``disabled`` | `boolean` | `false` | 是否为禁用状态。 |
| ``searchable`` | `boolean` | `false` | 是否可搜索。 |
| ``placeholder`` | `string` | - | 搜索框的输入占位符。 |
| ``overlay-class`` | `string | Array | Object` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |
| ``overlay-style`` | `string | Array | Object` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-style`](./overlay#props-overlay-style) 属性。 |
| ``match`` | `(item, keyword, { ancestors }) => boolean | Array<[number, number]>` | - | 支持自定义高亮逻辑， 默认大小写不敏感，参考 [`Autocomplete`](./Autocomplete#自定义搜索逻辑)。 |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | 支持自定义搜索命中逻辑，参考 [`Autocomplete`](./Autocomplete#自定义搜索逻辑)。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `primary` | 主题色样式。 |
| `text` | 文字样式。 |
| `xs` | 特小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中等尺寸样式。 |
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
| `options` | `Array<Object>` | 选项的子选项数组，数组项类型同 [`options`](#props-options) 属性数组项。 |
| `disabled` | `boolean` | 选项是否为禁用。 |
+++
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
| ``label`` | [^slot-label] |
| ``group-label`` | [^slot-group-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``trigger`` | [^slot-trigger] |
| ``no-data`` | 用于定义当搜索无数据时要展现的内容。 |

^^^slot-label
下拉按钮文本区域。

默认内容：`label` 属性值。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | `label` 属性对应文本。 |
+++
^^^

^^^slot-group-label
下拉选项组（带 `options` 的选项）的标题文本区域。

默认内容：选项的 `label` 属性值。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项组标题文本。 |
| `disabled` | `boolean` | 选项组是否禁用。 |
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
| `disabled` | `boolean` | 选项是否禁用。 |
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
| `disabled` | `boolean` | 选项是否禁用。 |
+++

另外，当前选项数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

^^^slot-trigger
整个下拉触发区域。

默认内容：下拉按钮。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `attrs` | `Object` | 需要输出到触发元素上的属性，包括 `aria-*` / `disabled` 等，可以使用 `v-bind="attrs"` 统一进行输出。 |
| `handlers` | `Object` | [^handlers-desc] |
| `expanded` | `boolean` | 下拉菜单是否展开。 |
| `toggle` | `function(force?: boolean): void` | 用于切换下拉菜单展开状态。 |
+++
^^^

^^^handlers-desc
需要绑定到触发元素上的事件监听器，可以使用 `v-on="handlers"` 统一进行输出。

:::tip
用于绑定 `handlers` 的元素需要支持获取焦点，以使各种键盘交互依然可以正常触发。
:::
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``click`` | 点击选项后触发，回调参数为 `(value: *=)`。`value` 为当前已选项 `value` 字段的值。当 [`split`](#props-split) 属性为 `true` 时，直接点击指令按钮部分也会触发，但不会携带 `value` 参数。 |
| ``toggle`` | 下拉菜单展开状态切换时触发，回调参数为 `(expanded: boolean)`。`expanded` 表示操作将触发下拉菜单展开还是收起。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``expand`` | 展开浮层。 |
| ``collapse`` | 收起浮层。 |

### 自定义样式

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``--dls-dropdown-max-display-items`` | `<integer>` | `8` | [^css-max-display-items] |

^^^css-max-display-items
下拉选项同时显示的最大项目数，下拉框的最大高度将由此计算得出。

:::tip
需要通过 [`overlay-style`](#props-overlay-style) 属性来设置。
:::
^^^
