# FilterPanel

## Examples

[[ demo src="/demo/filter-panel/default.vue"]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``datasource`` | `Array<Object>` | `[]` | Data source, with item type `{label: string, ...}`. |
| ``searchable`` | `boolean` | `true` | Whether to allow searching. |
| ``filter`` | `function` | See description | [^filter] |
| ``search-on-input`` | `boolean` | `true` | Whether to trigger search on input. |
| ``placeholder`` | `string` | - | Placeholder for search box. |
| ``title`` | `string` | - | Title of the filter panel. |

^^^filter
Search filter function with signature `function(keyword, item, index, datasource): boolean`. Items with a return value of `false` will be filtered from the result.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `keyword` | `string` | Search keyword. |
| `item` | `Object` | Current data node in the loop. |
| `index` | `number` | Index of the current data node in the sibling nodes. |
| `datasource` | `Array<{label: string, ...}>` | Same as the [`datasource`](#props-datasource) prop. |
+++

+++Default value
```js
import { includes } from 'lodash'

function (keyword, { label }) {
  return includes(label, keyword)
}
```
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``head`` | Title area. Displays the [`title`](#props-title) prop value by default. |
| ``no-data`` | Content displayed when there is no data in the `datasource`. |
| ``default`` | [^default] |

^^^default
Main content area.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `items` | `Array<Object>` | Filtered data from `datasource`, with the same type as `datasource`. |
+++
^^^
