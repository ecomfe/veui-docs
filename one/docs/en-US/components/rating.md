#  Rating

## Examples

### Editable

Users can set the rating interactively.

[[ demo src="/demo/rating/normal.vue" ]]

### Read-only

Set the [`readonly`](#props-readonly) prop to `true` to display an existing rating.

[[ demo src="/demo/rating/readonly.vue" ]]

### Max rating

Set the value of the [`max`](#props-max) prop to specify the maximum number of rating symbols to display.

[[ demo src="/demo/rating/max.vue" ]]

### Clearable

Set the [`clearable`](#props-clearable) prop to `true` to allow users to clear the selected rating by clicking on it.

[[ demo src="/demo/rating/clearable.vue" ]]

### Labels

Set the value of the [`labels`](#props-labels) prop to specify the description text for each rating symbol. The [`label-position`](#props-label-position) prop can be used to specify whether the description text is displayed inline or as a tooltip.

[[ demo src="/demo/rating/labels.vue" ]]

### Half-star

Set the [`allow-half`](#props-allow-half) prop to `true` to allow half-star ratings.

[[ demo src="/demo/rating/half.vue" ]]

### Custom symbols

Use the [`symbol`](#slots-symbol) slot to customize the symbol of each rating item.

[[ demo src="/demo/rating/symbol.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``max`` | `number` | `5` | The maximum number of rating items to display. Must be an integer. |
| ``value`` | `number` | - | [^value] |
| ``readonly`` | `boolean` | `false` | Whether the rating is in read-only mode. |
| ``clearable`` | `boolean` | `false` | Whether to allow clearing the selected rating. |
| ``allow-half`` | `boolean` | `false` | Whether to allow half-star ratings. |
| ``labels`` | `Record<number, string>` | - | The description text for each rating symbol. |
| ``label-position`` | `'inline' | 'popup'` | `'inline'` | The display mode of the description text. Use `'inline'` for inline display and `'popup'` for tooltip display. |

^^^value
:::badges
`v-model`
:::

The selected rating score, ranging from `1` to the value of the [`max`](#props-max) prop.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``symbol`` | [^slot-symbol] |
| ``label`` | [^slot-label] |

^^^slot-symbol
The symbol area of each rating item.

Default content: Display star symbols.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `value` | `number` | The rating corresponding to the current symbol. |
+++
^^^

^^^slot-label
The label area of each rating item.

Default content: The description text specified for each rating in [`labels`](#props-labels).

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `value` | `number` | The rating corresponding to the current symbol. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |

^^^event-change
:::badges
`v-model`
:::

Fired when the rating state changes. The callback parameter is `(value: number)`, where `value` is the current selected rating score.
^^^

### Custom Styles

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-rating-symbol-gap`` | `<length>` | - | The spacing between rating items. |
| ``--dls-rating-label-spacing`` | `<length>` | - | The spacing between the description text and the rating items. |
