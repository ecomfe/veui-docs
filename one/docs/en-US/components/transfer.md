# Transfer

## Examples

### Size variants

Available `ui` prop values: `s` / `m`.

[[ demo src="/demo/transfer/size.vue" ]]

### No search

[[ demo src="/demo/transfer/no-search.vue" ]]

### Custom search

[[ demo src="/demo/transfer/custom-search.vue" ]]

### Flat output

[[ demo src="/demo/transfer/flat.vue" ]]

### Merge modes

Set the `merge-checked` prop to specify the merge mode for selected values.

[[ demo src="/demo/transfer/merge-checked.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``searchable`` | `boolean` | `true` | Whether to enable search. |
| ``filter`` | `function` | See description | [^filter] |
| ``selected`` | `Array` | `[]` | [^selected] |
| ``candidate-placeholder`` | `string` | - | Placeholder text for the search box in the candidate area. |
| ``selected-placeholder`` | `string` | - | Placeholder text for the search box in the selected area. |
| ``candidate-title`` | `string` | - | The text content of the "candidate options" title. |
| ``selected-title`` | `string` | - | The text content of the "selected options" title. |
| ``selected-show-mode`` | `string` | `'tree'` | [^selected-show-mode] |
| ``keys`` | `string | function` | `'value'` | [^keys] |
| ``merge-checked`` | `string` | `keep-all` | [^merge-checked] |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^datasource
Data source array, each item type is `{label, value, disabled, children, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the item. |
| `value` | `string` | The value corresponding to the item. |
| `disabled` | `boolean` | Whether the item is disabled. |
| `children` | `Array<Object>` | The child item array of the item, with the same item type as the `datasource` item. |
+++
^^^

^^^filter
Search filter function, with signature `function(from, keyword, item, index, datasource): boolean`. Items with a return value of `false` will be filtered out of the results.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `from` | `string` | Search source, optional enumerated values: `'candidate'`, `'selected'`. `'candidate'` indicates a search triggered by the candidate list, `'selected'` indicates a search triggered by the selected list. |
| `keyword` | `string` | Search keyword. |
| `item` | `Object` | The data item currently being traversed. |
| `index` | `number` | The index of the current data item in the sibling items. |
| `datasource` | `Array<Object>` | Consistent with the [`datasource`](#props-datasource) property. |
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

^^^selected
:::badges
`v-model`
:::

The currently selected values, which are the `value` collection of the selected items in `datasource` (affected by the [`keys`](#props-keys) prop).
^^^

^^^selected-show-mode
The display mode for selected items in the select box.

+++Enum values
| Value | Description |
| -- | -- |
| `tree` | Display as a tree structure. |
| `flat` | Display as a flat structure, with data expanded into a one-dimensional array. |
+++
^^^

^^^keys
Customize how to obtain the `value` value of each item in `datasource` (with uniqueness). You can directly specify which property in `datasource` to use as `value` in the form of a string, or pass a function for more flexible generation of `value` values.

If the type is `function`, the parameter is `(item: Object)`, where `item` is an attribute of a node in `datasource`, and the return value is the value added to `selected`.
^^^

^^^merge-checked
The merge strategy for selected values. When all child nodes under a node are selected, you can choose to keep only the parent node, only the child nodes, or both.

+++Enum values
| Value | Description |
| -- | -- |
| `keep-all` | Both parent and child nodes will be in the selected values. |
| `upwards` | Merge selected values as much as possible towards the ancestor direction. |
| `downwards` | Merge selected values as much as possible towards the descendant direction. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``candidate`` | The entire candidate area. |
| ``candidate-head`` | [^candidate-head] |
| ``selected-head`` | [^selected-head] |
| ``candidate-title`` | The text area of the title at the top of the candidate area. Slot props are the same as `candidate-head`. |
| ``selected-title`` | The text area of the title at the top of the selected area. Slot props are the same as `selected-head`. |
| ``candidate-no-data`` | The content displayed when there is no data in the data source. |
| ``selected-no-data`` | The content displayed when there are no selected items. |
| ``candidate-item`` | [^candidate-item] |
| ``selected-item`` | [^selected-item] |
| ``candidate-item-label`` | The text area of each item in the candidate area. Slot props are the same as `candidate-item`. |
| ``selected-item-label`` | The text area of each item in the selected area. When `selected-show-mode` is `'tree'`, slot parameters are the same as `selected-item`. Otherwise, this slot corresponds to the content of each node on the entire path of each selected leaf item, and the slot parameters are the same as `candidate-item`. |

^^^candidate-head
The title area at the top of the candidate area.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `count` | `number` | The number of candidate items. |
+++
^^^

^^^selected-head
The title area at the top of the selected area.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `count` | `number` | The number of selected items. |
+++
^^^

^^^candidate-item
The content of each item in the candidate area.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the item. |
| `value` | `string` | The value of the item. |
| `disabled` | `boolean` | Whether the item is disabled. |
| `children` | `Array<Object>` | The child item array of the item, with the same item type as the `datasource` item. |
| `index` | `number` | The index of the current item among its siblings at the same level. |
| `depth` | `number` | The depth of the current item in the tree structure. |
+++
^^^

^^^selected-item
The content of each item in the selected area.

+++Slot props
If the `selected-show-mode` of the `Transfer` component is `'tree'`, the slot parameters are the same as `candidate-item`. If `selected-show-mode` is `'flat'`, the slot parameters are:

| Name | Type | Description |
| -- | -- | -- |
| `items` | `Array<Object>` | The path from the root item of the tree structure to the leaf item. The item type in the array is the same as `datasource`. |
| `index` | `number` | The index of the current item in the expanded array. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``select`` | Triggered when the selection is toggled. The callback parameter is `(selected: Array<string>)`. `selected` is the collection of the `value` field of the selected items. |

### Icons

| Name | Description |
| -- | -- |
| ``checked`` | Selected state. |
| ``select`` | To be selected. |
| ``remove`` | Remove. |
| ``expand`` | Collapsed state, click to expand. |
| ``collapse`` | Expanded state, click to collapse. |
| ``separator`` | The separator between levels when `selected-show-mode` is `'flat'`. |
