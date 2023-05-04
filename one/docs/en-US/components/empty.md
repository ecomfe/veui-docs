# Empty

## Examples

### Default

[[ demo src="/demo/empty/default.vue" ]]

### Hero

[[ demo src="/demo/empty/hero.vue" ]]

### Spot

[[ demo src="/demo/empty/spot.vue" ]]

### Custom

[[ demo src="/demo/empty/custom.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``image`` | `Object | false` | - | Configuration for the illustration content. If not passed, the default illustration will be displayed. If passed as an `Object`, the fields will be output as attributes of the `<img>` element. If passed as `false`, the illustration will be hidden. If the default slot has content, this prop will be ignored. |
| ``title`` | `string` | - | Title of the empty state. |
| ``desc`` | `string | false` | - | Description of the empty state. If passed as `false`, the description will be hidden. |

[^ui]
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size empty state. The global illustration is not suitable for small size styles. |
| `m` | Medium size empty state. |
+++

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Illustration content. By default, the illustration corresponding to "No Data" will be displayed. |
| ``title`` | Title area. |
| ``desc`` | Description area. |
| ``actions`` | Action area. |
