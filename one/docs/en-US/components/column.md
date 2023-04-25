# Column <small>Table column</small>

:::tip
The `Column` component needs to be used within the [`Table`](./table) component.
:::

## Examples

See [`Table` examples](./table#examples).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``title`` | `string` | - | The column title. |
| ``field`` | `string` | - | The key name of the column, corresponds to a field of a data item in the [`data`](./table#props-data) prop of the `Table` component. |
| ``width`` | `string=|number` | - | The width of the column in pixel value. |
| ``sortable`` | `boolean` | `false` | [^sortable] |
| ``align`` | `string` | - | The alignment of the column content, supports `left` / `center` / `right`. |
| ``span`` | `function(number): Object` | | [^span] |
| ``desc`` | `string` | - | The description of the table header. |
| ``fixed`` | `boolean | 'left' | 'right'` | `false` | Whether the column is fixed. `'left'` means fixed on the left side, `'right'` means fixed on the right side. |
| ``filter-value`` | `*` | - | [^filter-value] |
| ``filter-multiple`` | `boolean` | `false` | Whether the built-in filter is multi-select. |
| ``filter-options`` | `Array<Object>` | - | The filtering options list, the item type is `{label, value, options, disabled, ...}`, refer to the [`options`](./select#props-options) prop of the [`Select`](./select) component. |
| ``filter-title`` | `string` | - | The title of the filter drop-down. |
| ``allowed-orders`` | `Array` | `[false, 'desc', 'asc']` | [^allowed-orders] |
| ``tooltip`` | `boolean | ((item: Object) => string)` | - | Whether to automatically display a hover tooltip when the content overflows. The default is to display the `textContent` of the current cell. When a function is passed in, the `item` parameter is the entire data item, and the returned string will be displayed as the tooltip content. |

^^^sortable
Whether this column supports sorting.

:::warning
The component itself does not handle sorting logic, it only throws a [`sort`](./table#events-sort) event on the `Table` when the sorting button is clicked, and the user needs to handle the sorting logic themselves.
:::
^^^

^^^span
Cell merge configuration. The type is `function(index: number): { row: number, col: number }`. `index` is the index of the current row in the [`data`](./table#props-data) prop of the `Table` component. The `row` / `col` fields of the return value correspond to the `rowspan` / `colspan` of the cell, and the default values are both `1`.

:::tip
Refer to the [example › Selection mode and sorting](./table#selection-mode-and-sorting) in the `Table` component to learn how to use it.
:::
^^^

^^^filter-value
:::badges
`.sync`
:::

The filter condition value. The value `null` means not filtered. When `filter-multiple` is `true`, the value is an array of selected item values.
^^^

^^^allowed-orders
Specifies the sorting range of this column. When the user clicks, it will switch in the order specified.

+++Values
| Value | Description |
| --- | --- |
| `false` | No sorting. |
| `'asc'` | Ascending order. |
| `'desc'` | Descending order. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``head`` | The column header area. |
| ``foot`` | [^slot-foot] |
| ``default`` | [^slot-default] |
| ``sub-row`` | [^slot-sub-row] |
| ``desc`` | [^slot-desc] |
| ``filter`` | [^slot-filter] |

^^^slot-foot
The column footer area.

:::warning
If the associated `Table` component defines a [`foot`](./table#slots-foot) slot, the individual column footer configuration will be overridden.
:::
^^^

^^^slot-default
The content of the cell.

Default content: The value of the field corresponding to the [`field`](#props-field) prop in the table `data` item.

The slot props are all fields in the current row data in `data`.
^^^

^^^slot-sub-row
The content of the sub-row after the row is expanded. When using this slot, the content will be the cell content of the corresponding column in the expanded sub-row below the row. The row data source comes from the `children` array in `data` corresponding to the main row data, and the number of expanded sub-rows is the same as the number of data items in `children`, using the same column configuration.

Default content: The value of the field corresponding to the [`field`](#props-field) prop in the table `data[i].children[j]` item.

The slot props are all fields in the current sub-row data and the current main row corresponding index value `index`.

:::warning
If the associated `Table` component defines a [`sub-row`](./table#slots-sub-row) slot, the individual column `sub-row` slot will be overridden.
:::
^^^

^^^slot-desc
The description of the header. When using this slot, it will override the [`desc`](#props-desc) prop of the `Column`.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `close` | `function(): void` | Close the container that displays the description content. |
+++
^^^

^^^slot-filter
The content of the filter layer.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `close` | `function(): void` | Close the filter layer. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``filterchange`` | Triggered when the filter of this column is modified. The callback parameter is `(value)`. `value` is the current value of the filter. |
