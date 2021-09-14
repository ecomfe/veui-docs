# ConfigProvider <small>配置器</small>

## 示例

### 配置 `Select` 的 placeholder

可选的尺寸 `ui` 属性值：`s`/`m`。

[[ demo src="/demo/config-provider/select.vue" ]]


## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `value` | `Object` | - | 向其后代组件提供的配置值。 |

### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | 直接渲染出来，其中 `VEUI` 的组件会响应对应的配置值。 |
