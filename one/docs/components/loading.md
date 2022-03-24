# Loading <small>加载</small>

## 示例

### 风格

可选的风格 [`ui`](#props-ui) 属性值：`normal` / `strong` / `reverse`。

[[demo src="/demo/loading/style.vue"]]

### 尺寸

可选的尺寸 [`ui`](#props-ui) 属性值：`s` / `m` / `l`。

[[demo src="/demo/loading/size.vue"]]

### 排列方式

可选的排列方式 [`ui`](#props-ui) 属性值：`vertical`。

[[demo src="/demo/loading/layout.vue"]]

### 自定义加载图标

通过 [`spinner`](#slots-spinner) 插槽设置自定义加载图标。

[[demo src="/demo/loading/slot.vue"]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``loading`` | `boolean` | `false` | 是否处于加载状态。 |

^^^ui
预设样式。为空格分隔的一组枚举值的组合。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `strong` | 加强样式。 |
| `reverse` | 反白样式，用于深色背景。 |
| `vertical` | 垂直排列样式。|
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
| `l` | 大尺寸样式。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``spinner`` | 加载图标。 |
| ``default`` | 加载中提示文字。 |
