# Loading

## Demos

### Stylistic variants

Available style variants for the `ui` prop: `normal`/`strong`/`reverse`.

[[demo src="/demo/loading/style.vue"]]

### Size variants

Available size variants for the `ui` prop: `s`/`m`/`l`.

[[demo src="/demo/loading/size.vue"]]

### Layout variants

Available layout variants for the `ui` prop: `vertical`.

[[demo src="/demo/loading/layout.vue"]]

### Custom loading icons

Using `spinner` slot to replace default loading icon.

[[demo src="/demo/loading/slot.vue"]]

## API

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `loading` | `boolean` | `false` | Whether the component is in loading state. |

^^^ui
Style variants. A space-separated list of enum values.

+++Enum
| Value | Description |
| -- | -- |
| `strong` | Strong style. |
| `reverse` | Reverse style, typically used on dark background. |
| `vertical` | Vertical style.|
| `s` | Small style. |
| `m` | Medium. |
| `l` | Large style. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| `spinner` | Loading icon. |
| `default` | Loading description. |
