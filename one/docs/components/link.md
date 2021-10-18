# Link <small>链接</small>

## 示例

[[ demo src="/demo/link/default.vue"]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `to` | `string | Object` | - | 链接路径。当配合 Vue Router 使用时，会透传到 [`<router-link>`](https://router.vuejs.org/api/#router-link) 的[同名属性](https://router.vuejs.org/api/#to)；否则只支持 `string` 类型，输出到 `<a>` 元素的 `href` 属性中。 |
| `rel` | `string` | - | HTML 原生的链接类型，可参考 [MDN 的相关介绍](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types)。 |
| `target` | `string` | - | [^target] |
| `native` | `boolean` | `false` | 是否强制使用原生的 `<a>` 元素。 |
| `fallback` | `string` | `'span'` | 在 `to` 属性为空时使用的原生元素类型。 |
| `disabled` | `boolean=` | `false` | 是否为禁用状态。 |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `strong` | 加强样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^target
指定在何处显示链接的资源，可参考 [MDN 的相关介绍](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target)。

:::tip
当 `target` 为 `_blank` 时将自动增加 `noopener` 值（如果用户未指定该值）以增强默认情况下的安全性。
:::
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | 链接内容。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| `click` | 在 `to` 属性为空或指定了 `native` 为 `true` 的情况下，点击时触发。回调参数为 `(event)`，`event` 类型为原生 [`Event`](https://developer.mozilla.org/zh-CN/docs/Web/Events/click)。 |
