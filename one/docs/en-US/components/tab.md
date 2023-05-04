# Tab

:::tip
The `Tab` component needs to be used with the [`Tabs`](./tabs) component.
:::

## Examples

See [`Tabs`](./tabs) component example.

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``label`` | `string` | - | The text of the tab. |
| ``name`` | `string` | - | The name of the tab. |
| ``disabled`` | `boolean` | `false` | Whether the tab is disabled. |
| ``to`` | `string | Object` | - | [^to] |
| ``matches`` | `function(Route, Route): boolean` | - | [^matches] |
| ``native`` | `boolean` | `false` | Whether to force the use of the native `<a>` element for routing mode. |
| ``removable`` | `boolean` | - | Whether the tab can be removed. |
| ``status`` | `string` | - | [^status] |

^^^to
Routing information of the tab. The type is the same as the [`to`](./link#props-to) property of the [`Link`](./link) component. If `to` is present, the [`name`](#props-name) prop will be ignored.

:::tip
If you are using Vue Router, the currently active state will automatically match the `$route` object without manually controlling the [`index`](./tabs#props-index) or [`active`](./tabs#props-active) prop in the [`Tabs`](./tabs) component.
:::
^^^

^^^matches
After using Vue Router and providing the [`to`](#props-to) property, it is used to customize the logic for determining the currently active `Tab`. The parameter list is `(current: Route, to: Route)`. Both the `current` and `to` parameters are objects of the Vue Router [`Route`](https://v3.router.vuejs.org/api/#route-object-properties) type. The default is to use the [`matches`](./tabs#props-matches) logic of the parent [`Tabs`](./tabs) component.
^^^

^^^status
Tab status.

+++Enum values
| Value | Description |
| -- | -- |
| `success` | Success status. |
| `warning` | Warning status. |
| `info` | Normal information status. |
| `error` | Error status. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The default slot. |
| ``item`` | The content of the tab item, including the corresponding button/link. |
| ``label`` | The text of the tab. |
