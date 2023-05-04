# Collapse

:::tip
The `Collapse` component can be used inline with the [`Accordion`](./accordion) component.
:::

## Examples

### Size variants

Available [`ui`](#props-ui) prop values: `s` / `m`.

[[ demo src="/demo/collapse/size.vue" ]]

### Style variants

Various style variants can be set using the [`ui`](#props-ui) prop.

[[ demo src="/demo/collapse/variant.vue" ]]

### Toggle position

The position of the toggle icon can be set using the [`toggle-position`](#props-toggle-position) prop.

[[ demo src="/demo/collapse/position.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``label`` | `string` | - | The title of the collapse panel. |
| ``expanded`` | `boolean` | `false` | [^expanded] |
| ``disabled`` | `boolean` | `false` | Whether the panel is disabled. |
| ``name`` | `string | number` | - | When used inline with the [`Accordion`](./accordion) component, provides a unique identifier for the expanded panel. |
| ``toggle-position`` | `string` | `'start'` | [^toggle-position] |

^^^ui
Predefined styles. A combination of enumerated values separated by spaces. Only one of `simple`, `basic`, and `strong` can be selected, and if none is set, the default normal style is used. Only one of `bordered` and `borderless` can be selected.

+++Enum values
| Value | Description |
| -- | -- |
| `simple` | Simple style. |
| `basic` | White background style. |
| `strong` | Gray background style. |
| `bordered` | With outer border. |
| `borderless` | Without outer border. |
| `dull` | The title area does not respond to mouse interaction to change the style. |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

Whether the collapse panel is expanded.
^^^

^^^toggle-position
Set the position of the toggle icon.

+++Enum values
| Value | Description |
| -- | -- |
| `start` | The toggle icon is at the start position, which is the default position. |
| `end` | The toggle icon is at the end position. |
| `none` | No toggle icon. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content area of the collapse panel. |
| ``title`` | The title area of the collapse panel. |
| ``title-after`` | The area after the title area of the collapse panel. |

### Events

| Name | Description |
| -- | -- |
| ``toggle`` | Triggered when the title area is clicked to expand/collapse. The callback parameter is `(expanded: boolean)`. `expanded` indicates whether the panel is expanded. |

### Icons

| Name | Description |
| -- | -- |
| ``expand`` | In the collapsed state, clicking expands the panel. |
| ``collapse`` | In the expanded state, clicking collapses the panel. |
