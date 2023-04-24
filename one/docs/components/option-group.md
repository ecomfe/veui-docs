# OptionGroup <small>选择组</small>

:::tip
`OptionGroup` 组件需要在 [`Select`](./select)、[`Dropdown`](./dropdown) 或其它 `OptionGroup` 组件内使用，可以配合 [`Option`](./option) 组件使用。
:::

## 示例

见 [`Select` 示例](./select#示例)或 [`Dropdown` 示例](./dropdown#示例)。

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``label`` | `string` | - | 选项组的标题。 |
| ``expanded`` | `boolean` | `false` | 选项列表是否展开。 |
| ``trigger`` | `'click' | 'hover'` | `'click'` | 选项列表展开的时机。 |
| ``options`` | `Array<Object>` | `[]` | [^options] |
| ``position`` | `string` | `inline` | [^position] |
| ``overlay-class`` | `string | Array | Object` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |
| ``overlay-style`` | `string | Array | Object` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-style`](./overlay#props-overlay-style) 属性。 |

^^^options
选项列表，项目的类型为 `{label, value, disabled, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项的文字说明。 |
| `value` | `*` | 选项对应的值。 |
| `disabled` | `boolean` | 选项是否为禁用。 |
+++
^^^

^^^position
内部选项显示的方式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `inline` | 内联方式直接显示。 |
| `popup` | 在浮层中显示。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 选项列表的内容。在没有指定 [`options`](#props-options) 属性时，可以用来直接内联 `Option` 或其它 `OptionGroup` 组件。 |
| ``label`` | [^slot-label] |
| ``group-label`` | [^slot-group-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``before`` | 选项列表的前置区域。 |
| ``after`` | 选项列表的后置区域。 |

^^^slot-label
选项组标题文本区域。

默认内容：[`label`](#props-label) 属性对应的文本。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项组标题文本。 |
| `disabled` | `boolean` | 选项组是否禁用。 |
+++
^^^

^^^slot-group-label
子选项组的标题文本区域。

默认内容：带 `options` 的选项对应的 `label` 属性值。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项组文本。 |
| `disabled` | `boolean` | 选项组是否禁用。 |
+++

另外，当前选项组数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到插槽参数上。
^^^

^^^slot-option-label
选项的文本区域。

默认内容：不带 `options` 的选项对应的 `label` 属性值。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `string` | 选项值。 |
| `selected` | `boolean` | 是否已选择。 |
| `disabled` | `boolean` | 选项是否禁用。 |
+++

另外，当前选项数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到插槽参数上。
^^^

^^^slot-option
可供选择的选项的整个区域。

默认内容：`Option` 内的组件默认结构。

+++插槽参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `string` | 选项值。 |
| `selected` | `boolean` | 是否已选择。 |
| `disabled` | `boolean` | 选项是否禁用。 |
+++

另外，当前选项数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到插槽参数上。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``toggle`` | 选项列表展开状态切换时触发，回调参数为 `(expanded: boolean)`。`expanded` 表示操作将触发选项列表展开还是收起。 |
| ``afteropen`` | 选项列表打开完成之后触发。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``expandable`` | 可展开的项目。 |

### 自定义样式

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``--dls-dropdown-max-display-items`` | `<integer>` | `8` | [^css-max-display-items] |

^^^css-max-display-items
当 [`position`](#props-position) 属性设置为 `popup` 时，下拉选项同时显示的最大项目数，下拉框的最大高度将由此计算得出。

:::tip
需要通过 [`overlay-style`](#props-overlay-style) 属性来设置。
:::
^^^
