# Tag

## Examples

### Size variants

Available `ui` prop values for size: `s` / `m`.

[[ demo src="/demo/tag/size.vue" ]]

### Selectable

Use the `selectable` prop to toggle the selected state of the tag.

[[ demo src="/demo/tag/selectable.vue" ]]

### Removable

Use the `removable` prop to make the tag removable.

[[ demo src="/demo/tag/removable.vue" ]]

### Predefined colors

Use the `color` prop to set the name of the predefined color to be used.

[[ demo src="/demo/tag/colors.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | Predefined styles. |
| ``status`` | `string` | `'default'` | Status of the tag. |
| ``type`` | `string` | `'default'` | Deprecated. Use [`status`](#props-status) instead. |
| ``color`` | `string` | - | The name of the predefined color for the tag. Currently supported colors are `'turquoise' | 'violet' | 'green'`. |
| ``selectable`` | `boolean` | `false` | Whether the tag can be selected. |
| ``selected`` | `boolean` | `false` | Whether the tag is selected. |
| ``removable`` | `boolean` | `false` | Whether the tag is removable. |
| ``removed`` | `boolean` | `false` | Whether the tag is removed. |
| ``disabled`` | `boolean` | `false` | Whether the tag is disabled. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size for tag content. |
| `m` | Medium size for tag content. |
| `reverse` | Reverse style. |
| `bordered` | Bordered style. |
+++
^^^

^^^status
Status of the tag.

+++Enum values
| Value | Description |
| -- | -- |
| `default` | Default tag. |
| `info` | Informational tag. |
| `success` | Success tag. |
| `warning` | Warning tag. |
| `error` | Error tag. |
+++
^^^

^^^selected
:::badges
`.sync`
:::

Whether the tag is selected.
^^^

^^^removed
:::badges
`.sync`
:::

Whether the tag is removed.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Content area. |

### Events

| Name | Description |
| -- | -- |
| ``remove`` | Triggered when the remove button is clicked. |

### Icons

| Name | Description |
| -- | -- |
| ``remove`` | Remove icon. |
