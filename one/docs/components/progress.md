# Progress <small>进度条</small>

## 示例

[[ demo src="/demo/progress/default.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `type` | `string` | `'bar'` | 进度条类型。可选值为 `bar`/`circular`，分别是柱状和环形。 |
| `desc` | `boolean` | `false` | 是否显示文字提示。 |
| `value` | `number` | `0` | 进度值。 |
| `min` | `number` | `0` | 最小值。 |
| `max` | `number` | `1` | 最大值。 |
| `decimal-place` | `number` | `0` | 保留的小数位数。 |
| `status` | `string` | - | [^status] |
| `autosucceed` | `boolean|number` | - | 是否在进度值到达最大时自动进入 `success` 状态。`true` 表示直接进入成功状态，如果是 `number` 类型则表示在到达最大值后切换为成功状态前等待的毫秒数。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `fluid` | 柱状进度条自适应宽度样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
^^^

^^^status
:::badges
`.sync`
:::

进度状态。可选值为 `success`/`alert`，分别表示成功及危险警告状态。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | [^slot-default] |

^^^slot-default
可用来定制文字提示区域的内容。

默认内容：完成率百分比。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `percent` | `number` | 进度完成百分比。 |
| `value` | `number` | 进度值，同 `value` 属性。 |
| `status` | `string` | 进度状态，同 `status` 属性。 |
+++
^^^
