# Table

:::tip
`Table` is required to be used within [`Column`](./column).
:::

## Demos

### Content density

Available density variants for the `ui` prop: `compact`/`loose`.

[[ demo src="/demo/table/basic.vue" ]]

### Advanced

Supports specifying row keys, mode of selection, and sorting by values of specific column.

[[ demo src="/demo/table/advanced.vue" ]]

### Scroll inside

Allow table content to be scrollable inside the table body, i.e. the effect of fixed head/foot.

[[ demo src="/demo/table/scrollable.vue" ]]

### Fixed columns

Use the `scroll` of `Table` and the `fixed` prop of `Column` to enable fixed columns.

[[ demo src="/demo/table/fixed.vue" ]]

### Expandable row

Rows can be expanded into sub-rows.

[[ demo src="/demo/table/expandable.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `data` | `Array<Object>` | - | Table data in rows. |
| `key-field` | `string` | - | Denotes the unique key of the table data. The value should be a key defined in the data object of each row. The corresponding field will be regarded as the [`key` attribute](https://vuejs.org/v2/guide/list.html#key) for each row element. When `selectable` is `true`, it also indicates the rows of which column should be selected from (and in this occasion the value should be defined as the `field` prop for one of the children `Column` components). |
| `selectable` | `boolean` | `false` | Whether the rows are selectable. |
| `select-mode` | `string` | `'multiple'` | The mode of row selection. Available values are `single`/`multiple`, which denote single selection and multiple selection respectively. |
| `selected` | `Array<*>|*` | `[]` | [^selected] |
| `expandable` | `boolean` | `false` | Whether the rows can be expanded into sub-rows. |
| `expanded` | `Array<*>` | `[]` | [^expanded] |
| `order` | `string|boolean` | `false` | The order for sorting the specified column. `false` denotes no specific order, while string values of `'asc'`/`'desc'` denote ascending/descending order respectively. |
| `order-by` | `string` | - | The column which is currently sorted by. The value should be defined as the `field` prop for one of the children `Column` components. |
| `scroll` | `number` | - | The maximun height of the scrollable area inside the table body. When table content exceeds the specified height, internal scroll will be enabled and the head/foot will become fixed. |
| `loading` | `boolean` | `false` | Whether table data is being loaded. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `compact` | Compact style. |
| `loose` | Loose style. |
| `s` | Small. |
| `m` | Medium. |
+++
^^^

^^^selected
:::badges
`.sync`
:::

The value(s) of selected rows. When `select-mode` is `'multiple'`, the value is an array of values keyed by the `key-field` prop from the row data . When `select-mode` is `'single'`, the value is such key value of the selected row.
^^^

^^^expanded
:::badges
`.sync`
:::

The values of expanded rows. Each item is the value keyed by the `key-field` prop from the row data.
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | The columns of the table. Can only have `Column` components as children. |
| `no-data` | The content to be displayed when there's no data to show. |
| `foot` | The content of the table foot. Will span across all columns when defined. |
| `sub-row` | [^slot-sub-row] |

^^^slot-sub-row
The content of the expanded sub-row. Will span across all columns and override the `sub-row` slot of the `Column` components inside the table.

The slot scope properties are the same as each item inside `datasource`, with an extra `index: number`, which denotes the index within the datasource.
^^^

### Events

| Name | Description |
| -- | -- |
| `select` | [^event-select] |
| `sort` | [^event-sort] |

^^^event-select
Triggered when the selected item(s) are changed. The callback parameter list is `(selected, item, selectedItems)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `selected` | `boolean` | Whether the item is selected after change. |
| `item` | `Object` | The item in the `data` prop that is being selected/unselected. When it involves row span for the `key-field` mapped column, the data of the first related row is returned. |
| `selectedItems` | `Object<string, Object|Array>` | All selected items as an object. The key is `key-field` mapped value for the selected row and the value is the row data. When it involves row span for the `key-field` mapped column, returns an array of row data of all related rows. |
+++
^^^

^^^event-sort
Triggered when users sort a specific column. The callback parameter list is `(field, order)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `field` | `string` | Which column to be sort by. The value should be defined as the `field` prop for one of the children `Column` components. |
| `order` | `string|boolean` | Same as the [`order` prop](#props). |
+++
^^^
