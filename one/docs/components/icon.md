# Icon <small>图标</small>

:::tip
VEUI 的 `Icon` 组件目前兼容 [Vue-Awesome](https://github.com/Justineo/vue-awesome) 的方式注册并通过字符串类型的 `name` 属性指定图标；也支持直接传入组件定义进行渲染。
:::

## 示例

[[ demo src="/demo/icon/default.vue"]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `name` | `string` | - | 图标名称或其组件定义。 |
| `label` | `string` | - | 图标的文字说明，对辅助设备可见。当不设置时，图标对辅助设备隐藏。 |
| `scale` | `number` | - | 图标尺寸倍数。不设置时相当于 `1`。 |
| `spin` | `boolean` | `false` | 是否保持旋转状态。 |
| `pulse` | `boolean` | `false` | 是否保持步进旋转状态。 |
| `inverse` | `boolean` | `false` | 是否翻转颜色（用白色绘制，用于深色背景）。 |
| `flip` | `string` | - | 是否翻转，可选值为 `'horizontal'`/`'vertical'`，分别表示水平翻转与垂直翻转。 |

:::warning
当 `name` 属性使用组件定义时，仅支持 `spin` 属性。
:::

### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | 用来实现图标堆叠，当内部有 `Icon` 子组件时会层叠在一起居中显示，且外部 `Icon` 组件不需要设置 `name` 属性。 |
