# Stack 🧪

## Examples

### Basic

The `Stack` component can be used to evenly space content.

[[ demo src="/demo/stack/basic.vue" ]]

### Vertical

Setting the [`direction`](#props-direction) to `'column'` can make the stacked items vertically aligned.

[[ demo src="/demo/stack/column.vue" ]]

### Alignment

Setting the [`align`](#props-align) property can specify the vertical alignment of stacked items in the direction corresponding to [`direction`](#props-direction).

[[ demo src="/demo/stack/align.vue" ]]

### Distribution

Setting the [`justify`](#props-justify) property can specify the distribution of stacked items in the direction corresponding to [`direction`](#props-direction).

[[ demo src="/demo/stack/justify.vue" ]]

### Wrapping

Setting the [`wrap`](#props-wrap) property allows stacked items to wrap.

[[ demo src="/demo/stack/wrap.vue" ]]

## API

### Props
| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``direction`` | `'row' | 'column'` | `'row'` | The arrangement direction of stacked items. |
| ``wrap`` | `boolean` | `false` | Whether to wrap. |
| ``inline`` | `boolean` | `false` | Whether to render inline. |
| ``align`` | `string` | - | [^prop-align] |
| ``justify`` | `string` | - | [^prop-justify] |
| ``gap`` | `string | number` | - | The spacing between stacked items. It can be set as a string or a number. When set as a string, the optional values are `xxs`/`xs`/`s`/`m`/`l`/`xl`/`xxl`, and when set as a number, the unit is `px`. |

^^^prop-align
The vertical alignment of stacked items in the direction corresponding to [`direction`](#props-direction). When [`direction`](#props-direction) is `row`, the default is `center`. When `direction` is `column`, the default is `stretch`.

+++Enum values
| Value | Description |
| -- | -- |
| `start` | Align to the top. |
| `end` | Align to the bottom. |
| `center` | Center alignment. |
| `stretch` | Stretch alignment. |
^^^

^^^prop-justify
The distribution of stacked items in the direction corresponding to [`direction`](#props-direction).

+++Enum values
| Value | Description |
| -- | -- |
| `start` | Distribute to the left. |
| `end` | Distribute to the right. |
| `center` | Center distribution. |
| `space-between` | Distribute along both ends. |
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Stacked item content. |
