# BreadcrumbItem

:::tip
The `BreadcrumbItem` component needs to be used within the [`Breadcrumb`](./breadcrumb) component.
:::

## Examples

See [`Breadcrumb` examples](./breadcrumb#examples).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``to`` | `string | Object` | - | The address to go to after clicking on the breadcrumb item. See the [`to`](./link#props-to) prop of the [`Link`](./link) component. |
| ``type`` | `string` | `'link'` | [^type] |
| ``native`` | `boolean` | `false` | When `true` and `to` is specified, the native `<a>` element will be used directly, and the `to` value will be set to the `href` attribute of the `<a>` tag. |

^^^type
The type of breadcrumb item.

+++Enum values
| Value | Description |
| -- | -- |
| `link` | Link style. |
| `text` | Text style. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content area of the breadcrumb item. |

### Events

| Name | Description |
| -- | -- |
| ``redirect`` | The event triggered when an item with `type` of `link` is clicked. The callback parameter is `(event: Event)`, which directly passes through the [native click event object](https://developer.mozilla.org/en-US/docs/Web/Events/click). |

### Separator

| Name | Description |
| -- | -- |
| ``separator`` | The separator between adjacent breadcrumb items. |
