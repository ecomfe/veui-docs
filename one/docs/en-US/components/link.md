# Link

## Examples

[[ demo src="/demo/link/default.vue"]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``to`` | `string | Object` | - | The link path. When used with Vue Router, it will be passed to the same-named prop of [`<router-link>`](https://router.vuejs.org/en/api/#router-link); otherwise, only `string` type is supported, and it will be output to the `href` attribute of the `<a>` element. |
| ``rel`` | `string` | - | HTML native link types, see [MDN for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). |
| ``target`` | `string` | - | [^target] |
| ``native`` | `boolean` | `false` | Whether to force the use of native `<a>` element. |
| ``fallback`` | `string` | `'span'` | The native element type to use when the [`to`](#props-to) prop is empty. |
| ``disabled`` | `boolean` | `false` | Whether the link is disabled. |

[^ui]
The predefined style.

+++Enum values
| Value | Description |
| -- | -- |
| `strong` | The strong style. |
| `s` | The small size style. |
| `m` | The medium size style. |
+++

[^target]
Specifies where to display the linked resource, see [MDN for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target).

:::tip
When `target` is `_blank`, the `noopener` value will be automatically added (if the user has not specified it) to enhance security by default.
:::

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The link content. |

### Events

| Name | Description |
| -- | -- |
| ``click`` | Triggered when the link is clicked and the [`to`](#props-to) prop is empty or the `native` prop is set to `true`. The callback parameter is `(event)`, and the `event` type is the native [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/click). |

### Configs

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``link.routerLink`` | `string` | `'router-link'` | The name of the link component used in router mode, used to replace it with a Vue Router-compatible implementation in environments such as Nuxt.js. |
