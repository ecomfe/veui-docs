# Loading

## Examples

### Style Variants

Available style variants for the [`ui`](#props-ui) prop: `normal` / `strong` / `reverse`.

[[demo src="/demo/loading/style.vue"]]

### Size Variants

Available size variants for the [`ui`](#props-ui) prop: `s` / `m` / `l`.

[[demo src="/demo/loading/size.vue"]]

### Layout

Available layout variant for the [`ui`](#props-ui) prop: `vertical`.

[[demo src="/demo/loading/layout.vue"]]

### Custom Spinner

Customize the loading spinner by using the [`spinner`](#slots-spinner) slot.

[[demo src="/demo/loading/slot.vue"]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``loading`` | `boolean` | `false` | Whether the component is in the loading state. |

^^^ui
Preset style variants. A combination of space-separated enum values.

+++Enum values
| Value | Description |
| -- | -- |
| `strong` | Stronger visual style. |
| `reverse` | Reverse visual style, for use on dark backgrounds. |
| `vertical` | Vertical layout style. |
| `s` | Small size variant. |
| `m` | Medium size variant. |
| `l` | Large size variant. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``spinner`` | Custom loading spinner. |
| ``default`` | Text to display while loading. |
