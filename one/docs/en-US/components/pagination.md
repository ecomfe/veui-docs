# Pagination

## Demos

### Size variants

[[ demo src="/demo/pagination/size.vue" ]]

### Go to a specific page

Use the `goto` prop to enable the go to page section.

[[ demo src="/demo/pagination/goto.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `page` | `number` | `1` | Current page index (starts from `1`). |
| `total` | `number` | - | Total page count. |
| `to` | `string|Object` | `''` | [^to] |
| `native` | `boolean` | `false` | Use native links for navigation. |
| `page-size` | `number` | `pagination.pageSize` | [^page-size] |
| `page-sizes` | `Array` | `pagination.pageSizes` | The predefined available page sizes for users to select. |
| `goto` | `boolean` | `false` | Whether to show “goto page number” section. |

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
The page path template. The type is the same as the `to` prop of [`Link`](./link#props) component. When being `string`, the `:page` placeholder will be replaced with the actual page number. When being `Object`, the value will be resolved to string first and be go through the same placeholder replacement process.
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
| `pagesizechange` | Triggered when `page-size` is changed. The callback parameter list is `(size: number)`, with `size` being the new `page-size` value. |
| `redirect` | Triggered when page links are activated. The callback parameter list is `(page: number, event: Object)`. `page` is the number of the targe page. `event` is the native event object, calling `event.preventDefault` will stop navigation when `native` is `true`. |

### Global config

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| `pagination.pageSize` | `number` | `30` | The count of item in each page. |
| `pagination.pageSizes` | `Array<number>` | `[30, 50, 100]` | The predefined available page sizes for users to select. |

