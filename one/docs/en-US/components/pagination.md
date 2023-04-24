# Pagination

## Examples

### Size variants

[[ demo src="/demo/pagination/size.vue" ]]

### Page size

Use the [`page-size`](#props-page-size) prop to specify the current page size.

Use the [`page-sizes`](#props-page-sizes) prop to specify the page size options.

[[ demo src="/demo/pagination/pages.vue" ]]

### Optional parts

Use the [`show-total`](#props-show-total) / [`show-page-size`](#props-show-page-size) / [`show-goto`](#props-show-goto) props to control the visibility of the total items / page size selector / goto page parts.

[[ demo src="/demo/pagination/parts.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``page`` | `number` | `1` | Current page index (starts from `1`). |
| ``total`` | `number` | - | Total items count. |
| ``to`` | `string | Object` | `''` | [^to] |
| ``native`` | `boolean` | `false` | Use native links for navigation. |
| ``page-size`` | `number` | `pagination.pageSize` | [^page-size] |
| ``page-sizes`` | `Array` | `pagination.pageSizes` | The predefined available page sizes for users to select. |
| ``show-goto`` | `boolean` | `false` | Whether to show the go to page section. |
| ``show-total`` | `boolean` | `false` | Whether to show the total page count. |
| ``show-page-size`` | `boolean` | `false` | Whether to show the page size selection section. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small. |
| `s` | Small. |
| `m` | Medium. |
+++
^^^

^^^to
The page path template. The type is the same as the [`to`](./link#props-to) prop of [`Link`](./link) component. When being `string`, the `:page` placeholder will be replaced with the actual page number. When being `Object`, the value will be resolved to string first and be go through the same placeholder replacement process.
^^^

^^^page-size
:::badges
`.sync`
:::

The count of item in each page.
^^^

### Events

| Name | Description |
| -- | -- |
| ``pagesizechange`` | Triggered when page size is changed. The callback parameter list is `(size: number)`, with `size` being the new page size value. |
| ``redirect`` | Triggered when page links are activated. The callback parameter list is `(page: number, event: Object)`. `page` is the number of the targe page. `event` is the native event object, calling `event.preventDefault` will stop navigation when `native` is `true`. |

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``pagination.pageSize`` | `number` | `30` | The count of item in each page. |
| ``pagination.pageSizes`` | `Array<number>` | `[30, 50, 100]` | The predefined available page sizes for users to select. |

