# TimePicker <small>时间选择</small>

## 示例

### 三种模式

支持三种模式，分别是 `hour`、`minute` 和 `second`，可以通过 [`mode`](#props-mode) 属性来控制。

[[ demo src="/demo/time-picker/mode.vue" ]]

### 定制时间选项

支持定制时间选项，分别可以通过 [`hours`](#props-hours)、[`minutes`](#props-minutes) 和 [`seconds`](#props-seconds) 来定制对应的时间选项。

[[ demo src="/demo/time-picker/datasource.vue" ]]

### 范围限制

支持范围限制，可以通过 [`min`](#props-min) 和 [`max`](#props-max) 来分别设置最小值和最大值。

[[ demo src="/demo/time-picker/range.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``mode`` | `string` | `'second'` | 指定选择的粒度，分别精确到时（`hour`）、分（`minute`）、秒（`second`）。 |
| ``value`` | `string` |  | [^prop-value] |
| ``placeholder`` | `string` | `timepicker.placeholder` | 未选择时的占位文本。 |
| ``hours`` | `Array<number>` | - | 小时选项，默认 0-23。 |
| ``minutes`` | `Array<number>` | - | 分钟选项，默认 0-59。 |
| ``seconds`` | `Array<number>` | - | 秒钟选项，默认 0-59。 |
| ``min`` | `string` | - | 最小值限制。 |
| ``max`` | `string` | - | 最大值限制。 |
| ``autofocus`` | `boolean` | `false` | 是否自动获得焦点。 |
| ``clearable`` | `boolean` | `false` | 已选值是否可以清除。 |
| ``expanded`` | `boolean=` | `false` | [^expanded] |
| ``disabled`` | `boolean=` | `false` | 是否为禁用状态。 |
| ``readonly`` | `boolean=` | `false` | 是否为只读状态。 |

^^^ui
预设样式。为空格分隔的一组枚举值的组合。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
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

下拉浮层是否展开。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``option`` | [^slot-option] |

^^^slot-option

下拉面板中的时间选项插槽。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `label` | `string` | 用来显示的文字描述。 |
| `value` | `string` | 实际对应的值。 |
| `disabled` | `boolean=` | 是否禁用。 |
| `part` | `string` | 该选项是哪个部分，分别是 `hour` / `minute` / `second`。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| ``input`` | [^event-input] |
| ``change`` | 若当前选中的值发生变化，在时间选择下拉面板关闭时会触发该事件，参数是当前选中值。 |
| ``toggle`` | 下拉浮层展开状态切换时触发，回调参数为 `(expanded: boolean)`。`expanded` 表示操作将触发下拉浮层展开还是收起。 |
| ``clear`` | 清除当前选中的值。 |

^^^event-input
:::badges
`v-model`
:::

当手动输入或下拉面板中选值会触发该事件，参数是当前输入值。
^^^

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``timepicker.placeholder`` | `string` | `@@timepickerpicker.placeholder` | 未选择时的占位文本。 |

:::tip
`@@` 开头的值表示引用多语言配置中的相应字段。
:::

### 图标

| 名称 | 描述 |
| -- | -- |
| ``clock`` | 时钟。 |
| ``clear`` | 清除内容。 |

