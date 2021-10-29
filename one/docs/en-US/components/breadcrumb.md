# Breadcrumb

:::tip
`Breadcrumb` can be used with embedded [`BreadcrumbItem`](./breadcrumb-item).
:::

## Demos

### Stylistic variants

Available style variants for the [`ui`](#props-ui) prop: `strong`.

[[ demo src="/demo/breadcrumb/style.vue" ]]

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `s` / `m`.

[[ demo src="/demo/breadcrumb/size.vue" ]]

### Inline usage

Can be used with embedded `BreadcrumbItem`s.

[[ demo src="/demo/breadcrumb/base.vue" ]]

### Using datasource

Can be used with the [`routes`](#props-routes) prop as well.

[[ demo src="/demo/breadcrumb/datasource.vue" ]]

### Customizable separators

Separators can be customized.

[[ demo src="/demo/breadcrumb/separator.vue" ]]

### Events mode

Handling [`redirect`](#events-redirect) event instead of redirect with router.

[[ demo src="/demo/breadcrumb/redirect.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ``ui`` | `string=` | - | [^ui] |
| ``routes`` | `Array<Object>` | `[]` | [^routes] |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small. |
| `m` | Medium. |
+++
^^^

^^^routes
The datasource for breadcrumb items. The type of items is `{label: string, type: string, to: string | Object=, native: boolean=}`. Properties apart from `label` can be referred to the props of [`BreadcrumbItem`](./breadcrumb-item) component.

:::warning
The last item will always be displayed as plain text by default.
:::
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The items of the breadcrumb. Can only have [`BreadcrumbItem`](./breadcrumb-item) components as direct children. The [`routes`](#props-routes) prop will be ignored when this slot is specified. |
| ``item`` | [^slot-item] |
| ``separator`` | [^slot-separator] |

^^^slot-item
The content of each breadcrumb item. Default to the `label` properties of each item within `routes`, or the default slot content of [`BreadcrumbItem`]('./breadcrumb-item) components.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `route` | `Object` | The item in `routes`. Custom properties will also be passes into the scope object. |
+++
^^^

^^^slot-separator
Separator between adjacent breadcrumb items. Displays a globally configured icon by default.

:::warning
When using Vue.js version `2.5.17` and below, it's required to bind a `slot-scope`.
:::
^^^

### Events

| Name | Description |
| -- | -- |
| ``redirect`` | [^redirect] |

^^^redirect

Triggered when clicking the item with `type` value `link`. The callback parameter list is `(event, route, index)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `event` | [Event](https://developer.mozilla.org/en-US/docs/Web/Events/click) | Native click event object. |
| `route` | `Object` | The corresponding route item in `routes`. |
| `index` | `number` | The index of the clicked item. |
+++
^^^
