# Column

:::tip
`Column` is required to be used within [`Table`](./breadcrumb).
:::

## Demos

See [the demos of `Table`](./table#demos).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `title` | `string` | - | The column title. |
| `field` | `string` | - | The field name as a key of items in the `data` prop of the parent `Table` component. |
| `width` | `string=|number=` | - | The column width in `px` value. |
| `sortable` | `boolean=` | `false` | [^sortable] |
| `align` | `string=` | - | The alignment of cell content in the column. Supports `left`/`center`/`right`. |
| `span` | `function(number): Object=` | | [^span] |
| `desc` | `string` | - | The description of the column head. |
| `filter-value` | `*` | - | [^filter-value] |
| `filter-multiple` | `boolean=` | `false` | Whether the built-in filter is multi-select or not. |
| `filter-options` | `Array<Object>` | - | The list of filter options, with items of type `{label, value, options, disabled, ...}`, see the `options` prop of the [`Select`](./select) component. |
| `filter-title` | `string=` | - | The title of the filter dropdown. |

^^^sortable
Whether current column is sortable.

:::warning
`Table` and `Column` do not handle sorting. They only emit a `sort` event when the sorter is clicked so users need handle sorting themselves.
:::
^^^

^^^span
A function that defines how cells should span across rows/columns. The type is `function(index: number): { row: number, col: number }`, where `index` being the index of current row inside the `data` prop of the parent `Table`. The `row`/`col` of the return value correspond to table cell's `rowspan`/`colspan` attribut, with a default value of `1`.

:::tip
You can learn more abut how to use this in `Table` component's [Demos › Advanced](./table#advanced).
:::
^^^

^^^filter-value
:::badges
`.sync`
:::

The value of current filter condition. `null` means not filtered. When `filter-multiple` is `true`, the value is an array of selected values.
^^^

### Slots

| Name | Description |
| -- | -- |
| `head` | The table head. |
| `foot` | [^slot-foot] |
| `default` | [^slot-default] |
| `sub-row` | [^slot-sub-row] |
| `desc` | [^slot-desc] |
| `filter` | [^slot-filter] |

^^^slot-foot
The table foot.

:::warning
`Column`'s `foot` slot will be ignored if users provide content for `Table`'s `foot` slot.
:::
^^^

^^^slot-default
The content of the table cell. Displays the property value corresponds to the `field` property in table's `data` prop.

The slot scope properties are the same as each item inside `data`, with an extra `index: number`, which denotes the index within the row data.
^^^

^^^slot-sub-row
The content of cells in a sub row. Sub row data comes from the `children` array inside the row data in `Table`s `data` prop. The number of sub rows are determined by the length of the `children` array and the sub rows share the same column configuration with the table.

Displays the value keyed by the `field` prop inside the sub row data, which is `data[i].children[j]` of the parent table.

The slot scope properties are the same as each item inside `children`, with an extra `index: number`, which denotes the index within the row data.

:::warning
The `sub-row` slot of `Column` will be ignored when content is provided for `Table`'s `sub-row` slot.
:::
^^^

^^^slot-desc
The content of the description overlay. Will override the `desc` prop when set.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `close` | `function(): void` | Used to close the description overlay. |
+++
^^^

^^^slot-filter
The content of the filter dropdown.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `close` | `function(): void` | Used to close the filter dropdown. |
+++
^^^
