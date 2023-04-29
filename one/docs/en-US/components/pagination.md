# Pagination

## Examples

### Size variants

[[ demo src="/demo/pagination/size.vue" ]]

### Page size

Use the [`page-size`](#props-page-size) prop to specify the number of items per page.

Use the [`page-sizes`](#props-page-sizes) prop to specify the candidate options for the number of items per page.

[[ demo src="/demo/pagination/pages.vue" ]]

### Optional parts

Use the [`show-total`](#props-show-total) / [`show-page-size`](#props-show-page-size) / [`show-goto`](#props-show-goto) props to control whether to display the item total / item count selector / jump to the specified page.

[[ demo src="/demo/pagination/parts.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``page`` | `number` | `1` | The current page number (starting from `1`). |
| ``total`` | `number` | - | The total number of items. |
| ``to`` | `string | Object` | `''` | [^to] |
| ``native`` | `boolean` | `false` | Whether to use native link redirection. |
| ``page-size`` | `number` | `pagination.pageSize` | [^page-size] |
| ``page-sizes`` | `Array<number>` | `pagination.pageSizes` | The candidate options for the number of items per page. |
| ``show-goto`` | `boolean` | `false` | Whether to display the direct jump to page. |
| ``show-total`` | `boolean` | `false` | Whether to display the item total. |
| ``show-page-size`` | `boolean` | `false` | Whether to display the item count selector. |

^^^ui
The preset style.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^to
The target link template. The type is the same as the [`to`](./link#props-to) prop of the [`Link`](./link) component. When the type is a string path, the `:page` keyword will be replaced with the actual page number. When the type is an object, it will be converted to a string and the `:page` part will be replaced.
^^^

^^^page-size
:::badges
`.sync`
:::

The number of items per page.
^^^

### Events

| Name | Description |
| -- | -- |
| ``pagesizechange`` | Triggered when the number of items displayed per page is changed. The callback parameter is `(size: number)`. `size` is the new number of items displayed per page. |
| ``redirect`` | Triggered when a link is clicked. The callback parameter is `(page: number, event: Object)`. `page` is the target page number. `event` is the native event object. When `native` is `true`, calling `event.preventDefault` can prevent the redirection. |

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``pagination.pageSize`` | `number` | `30` | The number of items per page. |
| ``pagination.pageSizes`` | `Array<number>` | `[30, 50, 100]` | The candidate options for the number of items per page. |
