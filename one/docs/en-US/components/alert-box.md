# AlertBox

## Demos

### Types

`AlertBox` component has 3 contextual types, which are `success`, `info`, ` and `error`. Types are specified with the `type` prop.

[[ demo src="/demo/alert-box/type.vue" ]]

### With title

You can customize the title of alert box with the `title` prop.

[[ demo src="/demo/alert-box/title.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `open` | `boolean` | `false` | [^open] |
| `type` | `string=` | `'success'` | [^type] |
| `title` | `string=` | - | The title of the alert box. |
| `overlay-class` | `string|Array|Object=` | - | See the `overlay-class` prop of [`Overlay`](./overlay). |

^^^open
:::badges
`.sync`
:::

Whether the alert box is displayed.
^^^

^^^type
The contextual type of the alert box.

+++Enum values
| Value | Description |
| -- | -- |
| `info` | Information alert box. |
| `success` | Success alert box. |
| `error` | Error alert box. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | The content of the alert box. |
| `title` | The title of the alert box. Will ignore the `title` prop when specified. |
| `foot` | The foot area of the alert box. Displays an “OK” button by default. |

### Events

| Name | Description |
| -- | -- |
| `ok` | Triggered when the “OK” button is clicked. |
| `afterclose` | Triggered after the box overlay is closed. If leaving transition is provided by the theme, the event will be triggered after the transition completes. |

### Icons

| Name | Description |
| -- | -- |
| `info` | Information alert. |
| `success` | Success alert. |
| `error` | Error alert. |
