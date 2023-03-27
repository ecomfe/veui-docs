# Transfer

## Demos

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `s` / `m`.

[[ demo src="/demo/transfer/size.vue" ]]

### Without search input

[[ demo src="/demo/transfer/no-search.vue" ]]

### Custom search

[[ demo src="/demo/transfer/custom-search.vue" ]]

### Selected values as list

[[ demo src="/demo/transfer/flat.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``searchable`` | `boolean` | `true` | Whether to allow search. |
| ``filter`` | `function` | See description | [^filter] |
| ``selected`` | `Array` | `[]` | [^selected] |
| ``candidate-placeholder`` | `string` | - | The placeholder text in the search input of the candidate panel. |
| ``selected-placeholder`` | `string` | - | The placeholder text in the search input of the selected panel. |
| ``candidate-label`` | `string` | - | The title of the candidates panel. |
| ``selected-label`` | `string` | - | The title of the selected panel. |
| ``selected-show-mode`` | `string` | `'tree'` | [^selected-show-mode] |
| ``keys`` | `string | function` | `'value'` | The customized unique key for `datasource` items. String values can be used to specify which field value is used. Also a function can bu used to specify a customized key value. |
| ``merge-checked`` | `string` | `keep-all` | [^merge-checked] |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small transfer. |
| `m` | Medium transfer. |
+++
^^^

^^^datasource
The datasource of the transfer. The type of node item is `{label, value, children, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of each item. |
| `value` | `string` | The value of each item. |
| `children` | `Array<Object>` | The child items of each item. The item type is the same as `datasource` items. |
+++
^^^

^^^filter
The filter function. The function signature is `function(from, keyword, item, index, datasource): boolean`. Items that make filter function returns `false` will be hidden.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `from` | `string` | The source of search. Available values are `'candidate'` / `'selected'`. `'candidate'` means search is triggered from the candidate panel, `'selected'` means from the selected panel. |
| `keyword` | `string` | The search keyword. |
| `item` | `Object` | Each item in `datasource`. |
| `index` | `number` | The index of each item among its siblings. |
| `datasource` | `Array<{label: string, ...}>` | same as the [`datasource`](#props-datasource) prop. |
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

The selected values which is the `value` array of `datasource` items (affected by the [`keys`](#props-keys) prop).
^^^

^^^selected-show-mode
To specify how should items inside selected panel be displayed.

+++Enum values
| Value | Description |
| -- | -- |
| `tree` | Displayed as a tree structure. |
| `flat` | Displayed as a flattened array. |
+++
^^^

^^^merge-checked

Merge strategy for selected values. When all child nodes under a node are selected, you can choose to keep only the parent node, only the child nodes, or both.

+++Enumerated values
| Value | Description |
| --- | --- |
| `keep-all` | The parent and child nodes will both be in the selected value. |
| `upwards` | Merge selected values as far as possible in the ancestor direction. |
| `downwards` | Merge selected values in the direction of descendants if possible. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``candidate`` | The candidate panel. |
| ``candidate-head`` | [^candidate-head] |
| ``selected-head`` | [^selected-head] |
| ``candidate-title`` | The title text of the candidate panel. Shares the same slot props with slot `candidate-head`. |
| ``selected-title`` | The title text of the selected panel. Shares the same slot props with slot `selected-head`. |
| ``candidate-no-data`` | The content displayed when there's no data inside the candidate panel. |
| ``selected-no-data`` | The content displayed when there's no data inside the selected panel. |
| ``candidate-item`` | [^candidate-item] |
| ``selected-item`` | [^selected-item] |
| ``candidate-item-label`` | Label text of each item inside the candidate panel. Shares the same slot props with slot `candidate-item`. |
| ``selected-item-label`` | Label text of each item inside the selected panel. Shares the same slot props with slot `selected-item` when `selected-show-mode` is `'tree'`. Otherwise this slot specifies custom content for any item along the path for all selected leaf item and shares the same slot props with slot `candidate-item`. |

^^^candidate-head
The head area of the candidate panel.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `count` | `number` | The number of candidate items. |
^^^

^^^selected-head
The head area of the selected panel.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `count` | `number` | The number of selected items. |
^^^

^^^candidate-item
The content of each item inside the candidate panel.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The descriptive label of current item. |
| `value` | `string` | The value of current item. |
| `children` | `Array<Object>` | The array of the child items of each item. Shares the same type with `datasource` items. |
| `index` | `number` | The index of current item among its siblings. |
| `depth` | `number` | The depth of current item in the tree structure. |
+++
^^^

^^^selected-item
The content of each item inside the selected panel.

+++Slot props
The slot props will be the same as slot `candidate-item` when `selected-show-mode` is `'tree'`. They'll be as follows when `selected-show-mode` is `'flat'`.

| Name | Type | Description |
| -- | -- | -- |
| `items` | `Array<Object>` | All ancestor items from the top level down to current item. Shares the same item type with `datasource` items. |
| `index` | `number` | The index of current item among its siblings. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``select`` | Triggered when user changes selection. The callback parameter list is `(selected: Array<string>)` and `selected` is the array of `value` properties of selected items.

### Icons

| Name | Description |
| -- | -- |
| ``checked`` | The checked state. |
| ``select`` | Select items. |
| ``remove`` | Remove items. |
| ``expand`` | Click to expand (currently being collapsed). |
| ``collapse`` | Click to collapse (currently being expanded). |
| ``separator`` | The separator between level labels when `selected-show-mode` is `'flat'`. |
