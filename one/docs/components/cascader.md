# Cascader <small>级联器</small>


## 示例

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`xs` / `s` / `m` / `l`。

[[ demo src="/demo/cascader/size.vue" ]]

### 内联模式

使用 [`inline`](#props-inline) 属性来开启内联模式。

[[ demo src="/demo/cascader/inline.vue" ]]

### 搜索选项

使用 [`searchable`](#props-searchable) 属性来开启选项搜索。

[[ demo src="/demo/cascader/searchable.vue" ]]

### 多选

使用 [`multiple`](#props-multiple) 属性来开启多选模式。

[[ demo src="/demo/cascader/multiple.vue" ]]

### 选择模式

使用 [`select-mode`](#props-select-mode) 属性来控制在单选模式下哪些项目可以被选中。

[[ demo src="/demo/cascader/select-mode.vue" ]]

### 子项展开时机

使用 [`column-trigger`](#props-column-trigger) 属性来控制下拉面板中下级的展开时机。

[[ demo src="/demo/cascader/column-trigger.vue" ]]

### 渲染选中值

使用 [`value-display`](#props-value-display) 属性来控制选中值如何展示。

[[ demo src="/demo/cascader/value-display.vue" ]]

### 数据项懒加载

配合使用 [`load`](#props-load) 属性和数据项中 `lazy` 属性来实现数据懒加载。

[[ demo src="/demo/cascader/lazy.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``options`` | `Array<Object>` | - | [^options] |
| ``value`` | `Array<*>|*` | - | [^value] |
| ``multiple`` | `boolean` | `false` | 是否允许多选。 |
| ``inline`` | `boolean` | `false` | 下拉面板是否以内联模式展示（展开选项将拆分面板而非向外扩展）。 |
| ``max`` | `number` | - | 多选时允许选择的项目上限。 |
| ``placeholder`` | `string` | `cascader.placeholder` | 未选择时的占位文本。 |
| ``clearable`` | `boolean` | `false` | 是否可以清除已选内容。 |
| ``searchable`` | `boolean` | `false` | 是否允许搜索选项。 |
| ``expanded`` | `boolean=` | `false` | [^expanded] |
| ``column-trigger`` | `'hover' | 'click'` | `'click'` | [^column-trigger] |
| ``select-mode`` | `'leaf-only' | 'any'` | `'any'` | [^select-mode] |
| ``column-width`` | `number | string` | - | [^column-width] |
| ``show-select-all`` | `boolean` | `false` | 在多选模式下是否有全选按钮。 |
| ``value-display`` | `'complete' | 'simple'` | `'simple'` | [^value-display] |
| ``merge-checked`` | `string=` | `keep-all` | [^merge-checked] |
| ``include-indeterminate`` | `boolean` | `false` | 是否将半选状态的节点加入已选项。[`datasource`](#props-datasource) 节点中的非叶子节点若有部分子孙节点被选中，则为半选状态。 |
| ``disabled`` | `boolean=` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean=` | `false` | 是否为只读状态。 |
| ``overlay-class`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-class`](./overlay#props-overlay-class) 属性。 |
| ``overlay-style`` | `string | Array | Object=` | - | 参考 [`Overlay`](./overlay) 组件的 [`overlay-style`](./overlay#props-overlay-style) 属性。 |
| ``match`` | `(item, keyword, { ancestors }) => boolean | Array<[number, number]>` | - | 支持自定义高亮逻辑， 默认大小写不敏感，参考 [`Autocomplete`](./Autocomplete#自定义搜索逻辑)。 |
| ``filter`` | `(item, keyword, { ancestors, offsets }) => boolean` | - | 支持自定义搜索命中逻辑，参考 [`Autocomplete`](./Autocomplete#自定义搜索逻辑)。 |
| ``load`` | `Function` | - | [^load] |

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
选项列表，项目的类型为 `{label, value, options, disabled, position, ...}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项的文字说明。 |
| `value` | `*` | 选项对应的值。 |
| `position` | `string` | 下级节点如何展示，默认弹出，可以设置 `inline` 来内联显示。 |
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

^^^column-trigger
下拉面板中下级的展开时机。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `hover` | 光标悬浮展开下一级。 |
| `click` | 点击展开下一级。 |
+++
^^^

^^^select-mode
在单选模式下控制哪些项目可以选中。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `leaf-only` | 只有叶子节点可以选中。 |
| `any` | 每一级都可以选中。 |
+++
^^^

^^^column-width
当下拉面板中有多列时，统一控制除了最后一列之外的列宽度。

当该值是数值或者能转换成数值时，会当成像素值。
^^^

^^^value-display
控制选中值如何展示。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `complete` | 完整展示选中值的路径，如“中国 > 上海”。 |
| `simple` | 仅仅展示选中值文本。 |
+++
^^^

^^^merge-checked

选中值的合并策略。当某个节点下的所有子节点都被选中时，可以选择只保留父节点、只保留子节点或都保留。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `keep-all` | 父子节点都会在选中值中。 |
| `upwards` | 尽可能往祖先方向合并选中值。 |
| `downwards` | 尽可能往后代方向合并选中值。 |
+++
^^^

^^^load

数据项懒加载，配合数据项上 `lazy` 属性使用。

```ts
type Item {
  label: string,
  value: unknown,
  options?: Array<Item>,
  disabled?: boolean
  lazy?: boolean
}

function load({
  parent?: Item,
  scope: 'descendants' | 'children'
}): Item[] | void | Promise<Item[] | void>
```
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``trigger`` | [^slot-trigger] |
| ``pane`` | 下拉面板中的内容插槽。作用域参数同 [`trigger`](#slots-trigger) 插槽。 |
| ``before`` | 选项列表前的内容。无默认内容。作用域参数同 [`trigger`](#slots-trigger) 插槽。 |
| ``after`` | 选项列表后的内容。无默认内容。作用域参数同 [`trigger`](#slots-trigger) 插槽。 |
| ``column-before`` | [^slot-column-before] |
| ``column-after`` | 下拉面板中每列后的区域。无默认内容。作用域参数同 [`column-before`](#slots-column-before) 插槽。 |
| ``label`` | [^slot-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``selected`` | [^slot-selected] |

^^^slot-trigger
整个下拉触发区域。

默认内容：下拉按钮。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `value` | `*` | 已选项值。 |
| `selected` | `Object` | 已选项对象。 |
| `expanded` | `boolean` | 下拉菜单是否展开。 |
| `keyword` | `string` | 搜索值。 |
| `select` | `function(option: Object): void` | 用于设置已选项。 |
| `toggle` | `function(force: boolean): void` | 用于切换下拉菜单展开状态。 |
| `clear` | `function(): void` | 用于清除已选项。 |
| `remove` | `function(option: Object): void` | 用于删除某个已选项，参数 `option` 是该已选项。 |
| `updateKeyword` | `function(keyword: string): void` | 用于修改搜索值。 |
+++
^^^

^^^slot-column-before
下拉面板中每列前的区域。无默认内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `option` | `Object` | 该列的父选项，其中 `options` 属性可以拿到当前列的数据。 |
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
| `checked` | `boolean` | 是否已选择某个值。 |
| `disabled` | `boolean=` | 选项是否禁用。 |
+++

另外，当前选项数据中除了上面描述的字段之外的其它字段也会自动通过 `v-bind` 进行绑定到作用域参数上。
^^^


^^^slot-option-label
下拉选项（不带 `options` 的选项）的文本区域。

默认内容：选项的 `label` 属性值。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `option` | `Object` | 当前选项。 |
| `select` | `function(option: Object): void` | 选中当前选项。 |
| `expand` | `function(option: Object): void` | 展开当前选项。 |
| `click` | `function(option: Object): void` | 点击当前选项内容区，会按情况选中和(或)展开当前选项。 |
+++
^^^

^^^slot-option
可供选择的下拉选项的整个区域。

默认内容：`Option` 内的组件默认结构。

作用域参数同 [`option-label`](#slots-option-label) 插槽。
^^^

^^^slot-selected
选中值渲染区域。

默认内容：单选时渲染选中项目的文本；多选时将每个选中项目的标签渲染成`Tag`。

+++单选时的作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 选项文本。 |
| `value` | `*` | 选项值。 |
| `checked` | `boolean` | 是否已选择。 |
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
| ``select`` | [^event-select] |
| ``afteropen`` | 下拉打开后触发。 |
| ``afterclose`` | 下拉关闭后触发。 |

^^^event-select
:::badges
`v-model`
:::

选中状态变化后触发，回调参数为 `(value: *)`。`value` 为当前已选项 `value` 字段的值。
^^^

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``cascader.placeholder`` | `string` | `@@cascader.placeholder` | 未选择时的占位内容。 |

:::tip
`@@` 开头的值表示引用多语言配置中的相应字段。
:::

### 图标

| 名称 | 描述 |
| -- | -- |
| ``expand`` | 展开下拉。 |
| ``collapse`` | 收起下拉。 |
| ``clear`` | 清除。 |
| ``separator`` | 分隔符。 |
