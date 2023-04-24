# Link

## Examples

[[ demo src="/demo/link/default.vue"]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``to`` | `string | Object` | - | Denotes the target route of the link. When used with Vue Router, the value will be passed to a [`<router-link>`](https://router.vuejs.org/api/#router-link)'s [`to`](https://router.vuejs.org/api/#to) prop. Otherwise only `string` type is supported, and the value will output to the `href` attribute of an `<a>` element. |
| ``rel`` | `string` | - | Specifies the relationship of the target object to the link object. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) for more details. |
| ``target`` | `string` | - | [^target] |
| ``native`` | `boolean` | `false` | Whether to enforce the use of native `<a>` element (instead of `<router-link>`). |
| ``fallback`` | `string` | `'span'` | Specifies the fallback element type when no [`to`](#props-to) prop is specified. |
| ``disabled`` | `boolean` | `false` | Whether the link is disabled. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `strong` | Strong style. |
| `s` | Small. |
| `m` | Medium. |
+++
^^^

^^^target
Specifies where to display the linked content. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) for more details.

:::tip
When `target` has a value of `_blank`, a `noopener` token will be automatically added into `rel` (if not already exist) to enhance safety for free.
:::
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the link. |

### Events

| Name | Description |
| -- | -- |
| ``click`` | Triggered upon clicks when the [`to`](#props-to) prop is falsy or the [`native`](#props-native) prop is `true`. The callback parameter list is `(event)`, where the type of `event` is HTML's native [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/click). |

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``link.routerLink`` | `string` | `'router-link'` | The name of the link component used in route mode so that you can replace the default one with a Vue Router-compatible implementation in environments such as Nuxt.js. |
