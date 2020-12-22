# Slider <small>滑块</small>

## 示例

### 尺寸

可选的尺寸 `ui` 属性值：`s`/`m`。

[[ demo src="/demo/slider/size.vue" ]]

### 只读/禁用

设置 `readonly` 属性来使设置滑块只读，设置 `disabled` 属性来使设置滑块禁用。

[[ demo src="/demo/slider/editable.vue" ]]

### 步进

使用 `step` 属性来指定步进值，使点击调节按钮或按下 <kbd>▴</kbd>、<kbd>▾</kbd> 键时根据指定步进值来调整输入值。

[[ demo src="/demo/slider/steps.vue" ]]

### 范围

使用 `max`/`min` 属性来指定拖动范围两端的值。

[[ demo src="/demo/slider/range.vue" ]]

### 次级条

使用 `secondary-progress` 属性来指定一个次级进度条。

[[ demo src="/demo/slider/buffer.vue" ]]

### 定制内容

使用 `thumb`/`tip` 插槽来自定义滑块按钮、悬浮提示等内容。

[[ demo src="/demo/slider/variant.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `value` | `*|Array<*>` | - | [^value] |
| `secondary-progress` | `number|Array<number>` | `0` | 次要条。 |
| `min` | `number` | `0` | `value` 经过 `parse` 函数处理后允许的最小值。 |
| `max` | `number` | `1` | `value` 经过 `parse` 函数处理后允许的最大值。 |
| `step` | `number` | `0` | `value` 经过 `parse` 函数处理后的步进值。 |
| `mark` | `boolean` | `false` | 是否显示步进标记。 |
| `parse` | `function` | `val => val` | 传入值处理函数。 |
| `format` | `function` | `val => val` | 输出值处理函数。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^value
值。

默认值类型为 `number`，经过 `parse` 函数处理后值大小范围应在 `min` 和 `max` 之间。
当值为 `Array<number>` 形式时，组件则渲染多个滑块与值一一对应。

:::tip
当提供 `parse` 和 `format` 时，值可以为任意类型，但 `parse` 需要把传入值解析为 `number` 类型并返回；`format` 需要把传出值格式化成原始形式。`parse` 和 `format` 的实现只需要处理单值，组件内部会给多值的每一项分别依次调用这两个函数。
:::
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `track` | 滑轨。默认内容：横线。 |
| `tip-label` | 浮动提示文本。默认内容：当前 `value` 值。 |
| `thumb` | [^slot-thumb] |
| `tip` | [^slot-tip] |

^^^slot-thumb
滑块。

默认内容：圆形按钮。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `index` | `number` | 滑块索引。 |
| `focus` | `boolean` | 滑块是否聚焦。 |
| `hover` | `boolean` | 鼠标是否悬浮。 |
| `dragging` | `boolean` | 滑块是否正在被拖动。 |
+++
^^^

^^^slot-tip
浮动提示。

默认内容：内容为 `value` 的 Tooltip 组件。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `target` | `HTMLElement` | 滑块元素。 |
| `open` | `boolean` | 是否存在激活的滑块。 |
| `active-index` | `boolean` | 激活的滑块索引。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `input` | [^event-input] |

^^^event-input
:::badges
`v-model`
:::

修改后触发，回调参数为 `(value: *)`。`value` 为改变后经 `format` 函数处理过的新值。
^^^
