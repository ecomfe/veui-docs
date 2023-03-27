# Empty <small>空状态</small>

## 示例

### 默认

[[ demo src="/demo/empty/default.vue" ]]

### 页面级

[[ demo src="/demo/empty/hero.vue" ]]

### 局部状态

[[ demo src="/demo/empty/spot.vue" ]]

### 自定义

[[ demo src="/demo/empty/custom.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``image`` | `Object | false` | - | 插图内容配置。不传时将输出默认插图；传入 `Object` 时，字段将作为 `<img>` 元素的属性输出；传入 `false` 时将隐藏插图。如果为默认插槽传入了内容，此属性会被忽略。 |
| ``title`` | `string` | - |  空状态标题。 |
| ``desc`` | `string | false` | - | 空状态描述。传入 `false` 时将隐藏描述。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸空状态。全局插图不适合小尺寸样式。 |
| `m` | 中尺寸空状态。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 插图内容。默认情况下会展示“没有数据”对应的插图。 |
| ``title`` | 标题区。 |
| ``desc`` | 描述区。 |
| ``actions`` | 操作区。 |
