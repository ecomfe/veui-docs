# Dropdown <small>下拉菜单</small>

:::tip
`Dropdown` 组件可以内联 [`Option`](./option) 或 [`OptionGroup`](./option-group) 组件使用。
:::

## 示例

### 样式

可选的样式 `ui` 属性值： `primary`/`text`。

[[ demo src="/demo/dropdown/style.vue" ]]

### 尺寸

可选的尺寸 `ui` 属性值：`xs`/`s`/`m`/`l`。

[[ demo src="/demo/dropdown/size.vue" ]]

### 内联模式

`Dropdown` 组件内支持内联使用 `OptionGroup` 及 `Option` 组件来代替 `options` 属性。

[[ demo src="/demo/dropdown/inline.vue" ]]

### 含搜索的下拉框菜单

使用 `searchable` 属性使组件支持搜索并高亮显示符合条件的选项。

[[ demo src="/demo/dropdown/searchable.vue" ]]

### 禁用状态的下拉框菜单

使用数据源中的 `disabled` 属性来禁用下拉项。

[[ demo src="/demo/dropdown/disable.vue" ]]

### 下拉触发时机与分离按钮

使用 `trigger` 属性指定展开下拉菜单的时机，使用 `split` 属性来使命令按钮与下拉按钮分离。

[[ demo src="/demo/dropdown/other.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `options` | `Array<Object>=` | `[]` | [^options] |
| `label` | `string` | - | 下拉按钮的描述文本。 |
| `trigger` | `string=` | `'click'` | 触发下拉框展开的时机，可选值为 `'click'`/`'hover'`。 |
| `split` | `boolean=` | `false` | 是否将下拉按钮分离为指令按钮和切换下拉按钮两部分。 |
| `expanded` | `boolean=` | `false` | [^expanded] |
| `disabled` | `boolean=` | `false` | 是否为禁用状态。 |
| `overlay-class` | `string|Array|Object=` | - | 参考 [Overlay](./overlay) 组件的 [`overlay-class` 属性](./overlay#属性)。 |

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
| `options` | `Array<Object>=` | 选项的子选项数组，数组项类型同 `options` 属性数组项。 |
| `disabled` | `boolean=` | 选项是否为禁用。 |
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
| `default` | 选项列表的内容。在没有指定 `options` 属性时，可以用来直接内联 `Option` 或 `OptionGroup`。 |
| `before` | 选项列表前的内容。无默认内容。 |
| `after` | 选项列表后的内容。无默认内容。 |
| `label` | [^slot-label] |
| `group-label` | [^slot-group-label] |
| `option-label` | [^slot-option-label] |
| `option` | [^slot-option] |

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
| `disabled` | `boolean=` | 选项是否禁用。 |
+++

另外，当前选项数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `click` | 点击选项后触发，回调参数为 `(value: *=)`。`value` 为当前已选项 `value` 字段的值。当 `split` 属性为 `true` 时，直接点击指令按钮部分也会触发，但不会携带 `value` 参数。 |
| `toggle` | 下拉菜单展开状态切换时触发，回调参数为 `(expanded: boolean)`。`expanded` 表示操作将触发下拉菜单展开还是收起。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| `expand` | 展开浮层。 |
| `collapse` | 收起浮层。 |
