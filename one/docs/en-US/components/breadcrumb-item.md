# BreadcrumbItem

:::tip
`BreadcrumbItem` is required to be used within [`Breadcrumb`](./breadcrumb).
:::

## Demos

See [the demos of `Breadcrumb`](./breadcrumb#demos).

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `to` | `string|Object` | - | The target location. See [`Link`](./link#Props)'s the `to` prop. |
| `type` | `string` | `'link'` | [^link] |
| `native` | `boolean` | `false` | When set to `true` and `to` is specified, native `<a>` element will be used and `to` will be set as the `href` attribute to this `<a>` element. |

^^^link
The type of the item.

+++Enum values
| Value | Description |
| -- | -- |
| `link` | Hyperlink. |
| `text` | Pure text. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | The content of the breadcrumb item. |

### Events

| Name | Description |
| -- | -- |
| `redirect` | Triggered when clicking the item with `type` value `link`. The callback parameter list is `(event: Event)`. `event` is a [native click event object](https://developer.mozilla.org/en-US/docs/Web/Events/click). |

### Icons

| Name | Description |
| -- | -- |
| `separator` | The separator between adjacent breadcrumb items. |
