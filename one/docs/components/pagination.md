# Pagination <small>翻页</small>

## 示例

### 尺寸

[[ demo src="/demo/pagination/size.vue" ]]

### 跳转到指定页

使用 `goto` 属性开启跳转到指定页的功能。

[[ demo src="/demo/pagination/goto.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `page` | `number` | `1` | 当前页码（从 `1` 开始）。 |
| `total` | `number` | - | 总页数。 |
| `to` | `string|Object` | `''` | [^to] |
| `native` | `boolean` | `false` | 原生链接跳转。 |
| `page-size` | `number` | `pagination.pageSize` | [^page-size] |
| `page-sizes` | `Array` | `pagination.pageSizes` | 每页个数候选项。 |
| `goto` | `boolean` | `false` | 是否显示直接跳转到页码。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `xs` | 超小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^to
目标链接模板。类型见 [`Link`](./link#属性) 组件的同名属性。其中，类型为 `string` 路径时其中的 `:page` 关键词会被替换为实际页码。类型为 `Object` 时，会将起转换为 `string` 后替换掉 `:page` 部分。
^^^

^^^page-size
:::badges
`.sync`
:::

每页个数。
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `pagesizechange` | `page-size` 改变时触发，回调参数为 `(size: number)`。`size` 为新的 `page-size` 值。 |
| `redirect` | 链接跳转时触发，回调参数为 `(page: number, event: Object)`。`page` 为要跳转的目标页码。`event` 为原生的事件对象，在 `native` 为 `true` 时，调用 `event.preventDefault` 可阻止跳转。 |

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `pagination.pageSize` | `number` | `30` | 每页个数。 |
| `pagination.pageSizes` | `Array<number>` | `[30, 50, 100]` | 每页个数候选项。 |

