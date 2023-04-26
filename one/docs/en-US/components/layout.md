# Layout

:::tip
The `Layout` component needs to be used with the [`Header`](./header) / [`Sidebar`](./sidebar) / [`Footer`](./footer) / [`Content`](./content) components.
:::

## Examples

### Basic layout

The `Layout` component supports multiple typical layouts.

[[ demo src="/demo/layout/basic.vue" browser="/demos/layout/basic.vue" ]]

### Global Sidebar

[[ demo src="/demo/layout/global-sidebar.vue" browser="/demos/layout/global-sidebar.vue" ]]

### Global footer

[[ demo src="/demo/layout/global-footer.vue" browser="/demos/layout/global-footer.vue" ]]

### Sticky layout

The `Header` / `Sidebar` / `Footer` components all support setting sticky behavior using the `sticky` prop.

:::tip
When using a sticky layout header together with a sticky sidebar, the parent component `Layout` of the layout header needs to set `--dls-layout-header-height` to specify the height of the layout header.
:::

:::tip
When using a sticky layout footer together with a sticky sidebar, the parent component `Layout` of the layout footer needs to set `--dls-layout-footer-height` to specify the height of the layout footer.
:::

[[ demo src="/demo/layout/sticky.vue" browser="/demos/layout/sticky.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``direction`` | `'column' | 'row'` | `'column'` | The layout direction. When there is a `Sidebar`, the default is `'row'`. |

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The layout content, can be the [`Header`](./header) / [`Sidebar`](./sidebar) / [`Footer`](./footer) / [`Content`](./content) component or nested `Layout` components. |

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-layout-header-height`` | `<length>` | - | The height of the layout header. |
| ``--dls-layout-footer-height`` | `<length>` | - | The height of the layout footer. |
