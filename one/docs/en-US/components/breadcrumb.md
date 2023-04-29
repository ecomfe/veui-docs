# Breadcrumb

:::tip
The `Breadcrumb` component can be used inline with the [`BreadcrumbItem`](./breadcrumb-item) component.
:::

## Examples

### Style variants

Available `ui` prop values: `strong`.

[[ demo src="/demo/breadcrumb/style.vue" ]]

### Size variants

Available `ui` prop values: `s` / `m`.

[[ demo src="/demo/breadcrumb/size.vue" ]]

### Inline mode

Use `BreadcrumbItem` directly inline.

[[ demo src="/demo/breadcrumb/base.vue" ]]

### Using datasource

You can also pass in a data source.

[[ demo src="/demo/breadcrumb/datasource.vue" ]]

### Custom separator

You can use a slot to customize the separator.

[[ demo src="/demo/breadcrumb/separator.vue" ]]

### Event listener

Listen for the [`redirect`](#events-redirect) event and handle it instead of directly routing.

[[ demo src="/demo/breadcrumb/redirect.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``routes`` | `Array<Object>` | `[]` | [^routes] |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small style. |
| `m` | Medium style. |
^^^

^^^routes
Breadcrumb configuration, project type is `{label: string, type: string, to: string | Object=, native: boolean=}`, except for the `label` field, other field details can refer to the properties of the [`BreadcrumbItem`](./breadcrumb-item) component.

:::warning
By default, the last item will always be displayed in plain text style.
:::
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Supports inline mode, directly passing in a list of [`BreadcrumbItem`](./breadcrumb-item) components. The [`routes`](#props-routes) prop will be ignored after filling. |
| ``item`` | [^slot-item] |
| ``separator`` | The separator between breadcrumb entries. The default is to display the globally configured separator icon. |

^^^slot-item
Used to customize content for each item. The default content is the `label` of the `routes` item or the default slot of the [`BreadcrumbItem`](./breadcrumb-item) component.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `route` | `Object` | A project in `routes`. Custom properties will also be bound to the scope object. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``redirect`` | [^redirect] |

^^^redirect
When a project with a `type` of `link` is clicked, this event will be triggered, and the callback parameters are `(event, route, index)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| ``event`` | [Event](https://developer.mozilla.org/en-US/docs/Web/Events/click) | The event object. |
| ``route`` | `Object` | Breadcrumb entry object. |
| ``index`` | `number` | The index of the clicked entry. |
+++
^^^
