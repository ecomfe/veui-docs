# Table

:::tip
The `Table` component needs to be used with the [`Column`](./column) component.
:::

## Examples

### Density variants

Available [`ui`](#props-ui) size props: `compact` / `loose`.

[[ demo src="/demo/table/basic.vue" ]]

### Selecting and sorting

Allows customization of unique keys, selection modes, and sorting.

[[ demo src="/demo/table/advanced.vue" ]]

### Filtering

Use the [`filter`](./column#slots-filter) slot of the `Column` component to enable custom filtering.

[[ demo src="/demo/table/filter.vue" ]]

### Internal scrolling

Allows enabling of internal scrolling mode to achieve a fixed table header and footer effect.

[[ demo src="/demo/table/scrollable.vue" ]]

### Fixed columns

Use the [`scroll`](#props-scroll) prop of the `Table` component and the [`fixed`](./column#props-fixed) prop of the `Column` component to control the position of fixed columns.

[[ demo src="/demo/table/fixed.vue" ]]

### Expandable rows

Supports expanding rows with child data.

[[ demo src="/demo/table/expandable.vue" ]]

### Header description

Use the [`desc`](./column#props-desc) prop or [`desc`](./column#slots-desc) slot of the `Column` component to add description information to the table header.

[[ demo src="/demo/table/desc.vue" ]]

### Sorting

Use the [`order`](#props-order) prop and [`order-by`](#props-order-by) prop to specify the sorting state on the table header.

Listen for the [`sort`](#events-sort) event to handle changes in sorting state.

Set the [`allowed-orders`](#props-allowed-orders) prop to customize the allowed sorting states.

[[ demo src="/demo/table/order.vue" ]]

### Loading

Use the [`loading`](#props-loading) prop to specify that the table is in a loading state. Use [`loading-options`](#props-loading-options) to specify the style of the loading state.

[[ demo src="/demo/table/loading.vue" ]]

### Truncation tooltip

Use the [`tooltip`](./column#props-tooltip) prop of the `Column` component to specify a hover tooltip when content is truncated.

[[ demo src="/demo/table/tooltip.vue" ]]

# Table

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``data`` | `Array<Object>` | - | Table data. |
| ``key-field`` | `string` | - | Specifies the column identifier that serves as the table data. The value corresponds to the name of a field in the [`data`](#props-data) property of a data item. The value of the corresponding field will be output as the row element's [`key`](https://v2.vuejs.org/v2/guide/list.html#Maintaining-State) property. When the [`selectable`](#props-selectable) property is `true`, it can also be used to specify which column's different rows to select in the presence of vertically merged cells. In this case, the value must come from the [`field`](./column#props-field) property of an internal `Column` component. |
| ``selectable`` | `boolean` | `false` | Whether to enable row selection. |
| ``select-mode`` | `string` | `'multiple'` | The selection mode, with supported values of `single` / `multiple`, corresponding to single/multiple selection modes. |
| ``selected`` | `Array<*>|*` | `[]` | [^selected] |
| ``expandable`` | `boolean` | `false` | Whether to allow row expansion. |
| ``expanded`` | `Array<*>` | `[]` | [^expanded] |
| ``order`` | `string | boolean` | `false` | The order of sorting. When `false`, it indicates unordered, and when a string value of `'asc'` / `'desc'`, it indicates ascending / descending order respectively. |
| ``order-by`` | `string` | - | Specifies the column that the current sorting is based on, and the value must come from the [`field`](./column#props-field) property of an internal `Column` component. |
| ``scroll`` | `number` | - | Specifies the maximum height of the scroll area. When exceeded, the table will enter a mode where only the data area is allowed to scroll with fixed headers and footers. |
| ``loading`` | `boolean` | `false` | Specifies whether the table is in the loading state. |
| ``loading-options`` | `Object` | `table.loadingOptions` | [^loading-options] |
| ``allowed-orders`` | `Array` | `[false, 'desc', 'asc']` | [^allowed-orders] |
| ``bordered`` | `boolean` | `false` | Specifies whether the table has a border. |
| ``column-filter`` | `Array<string> | (field: string) => boolean` | - | Used for filtering the columns of the table. When passed an array, the values of the elements are the field values corresponding to that column. When passed a function, the parameter is the field value corresponding to that column, and the return value indicates whether that column should be displayed. By default, all columns are displayed. |


^^^ui
Preset style.

+++Enum values
| Value | Description |
| -- | -- |
| `compact` | Compact style. |
| `loose` | Loose style. |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^selected
:::badges
`.sync`
:::

Selected rows. When the [`select-mode`](#props-select-mode) property is `'multiple'`, it is an array of values corresponding to the [`key-field`](#props-key-field) of the selected rows. When the [`select-mode`](#props-select-mode) property is `'single'`, it is the value of the [`key-field`](#props-key-field) of the selected row.
^^^

^^^expanded
:::badges
`.sync`
:::

Expanded rows. It is an array of values corresponding to the [`key-field`](#props-key-field) of the expanded rows.
^^^

^^^loading-options
The configuration of the loading state, with a type of `{type, modal}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `type` | `'bar' \| 'spinner` | The loading type, with a default value of `'bar'`, which indicates the loading bar style. |
| `modal` | `boolean` | The loading mask, which can only be configured as `false` when `type` is `bar`. |
^^^

^^^allowed-orders
Specifies the sorting range of columns at the table level.

+++Values
| Value | Description |
| -- | -- |
| `false` | No sorting. |
| `'asc'` | Ascending order. |
| `'desc'` | Descending order. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Used to define table columns and can only contain `Column` components. |
| ``no-data`` | Used to define the content to display when there is no data. |
| ``foot`` | The content in the table footer, and the entire area will be opened as a container without maintaining column separation. |
| ``sub-row`` | [^slot-sub-row] |

^^^slot-sub-row
The content of the child row that appears after a row is expanded. When using this slot, the content will be displayed as the child row content that spans the entire bottom of the expanded row. When using this slot, it will override the [`sub-row`](./column#slots-sub-row) slot content of the `Column`.

The slot parameters are all fields in the current row data of [`data`](#props-data) and the corresponding index value `index`.
^^^
