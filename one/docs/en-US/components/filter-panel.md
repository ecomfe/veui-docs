# FilterPanel

## Demos

[[ demo src="/demo/filter-panel/default.vue"]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `datasource` | `Array<Object>` | `[]` | Datasource of the filter with the type being `{label: string, ...}`. |
| `searchable` | `boolean=` | `true` | Whether to allow search. |
| `filter` | `function=` | See description. | [^filter] |
| `search-on-input` | `boolean=` | `true` | Whether to trigger search while typing. |
| `placeholder` | `string=` | - | The placeholder text of the search input. |

^^^filter
The filter function. The function signature is `function(keyword, item, index, datasource): boolean`. Items that make filter function returns `false` will be hidden.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `keyword` | `string` | The search keyword. |
| `item` | `Object` | Each item in `datasource`. |
| `index` | `number` | The index of each item among its siblings. |
| `datasource` | `Array<{label: string, ...}>` | Same as the `datasource` prop. |
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
| `head` | The head area of the filter panel. Displays the `title` prop by default. |
| `no-data` | Content to be displayed when `datasource` is empty. |
| `default` | [^default] |

^^^default
The content of the filter panel.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `items` | `Array<Object>` | The filtered items from the `datasource` prop and shares the same type with `datasource`. |
+++
^^^
