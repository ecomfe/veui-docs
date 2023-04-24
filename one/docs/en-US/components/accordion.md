# Accordion

:::tip
The `Accordion` component needs to be used inline with the [`Collapse`](./collapse) component.
:::

## Examples

### Size variants

Available size [`ui`](#props-ui) prop values: `s` / `m`.

[[ demo src="/demo/accordion/size.vue" ]]

### Style variants

Multiple style variants can be set using the [`ui`](#props-ui) prop.

[[ demo src="/demo/accordion/variant.vue" ]]

### Allow multiple panels to expand

The [`multiple`](#props-multiple) prop can be used to allow multiple panels to expand simultaneously.

[[ demo src="/demo/accordion/multiple.vue" ]]

### Toggle position

The position of the toggle icon can be set using the [`toggle-position`](#props-toggle-position) prop.

[[ demo src="/demo/accordion/position.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``multiple`` | `boolean` | `false` | Whether to allow multiple child panels to expand. |
| ``disabled`` | `boolean` | `false` | Whether the component is disabled. |
| ``expanded`` | `string | Array<string>` | - | [^expanded] |
| ``toggle-position`` | `string` | `'start'` | [^toggle-position] |

^^^ui
A set of enumerated values separated by spaces. Only one of `simple`, `basic`, and `strong` can be selected, and if none is set, it defaults to the normal style. Only one of `bordered` and `borderless` can be selected.

+++Enum values
| Value | Description |
| -- | -- |
| `simple` | Simple style. |
| `basic` | White background style. |
| `strong` | Gray background style. |
| `bordered` | Style with an outer border. |
| `borderless` | Style with no outer border. |
| `dull` | The title area does not respond to mouse interaction to change the style. |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

The identifier for the expanded collapsible panel, corresponds to the [`name`](./collapse#props-name) prop of the inline [`Collapse`](./collapse) component. When `multiple` is `true`, it is an array of collapsible panel identifiers.
^^^

^^^toggle-position
Set the position of the toggle icon.

+++Enum values
| Value | Description |
| -- | -- |
| `start` | The toggle icon is at the start, which is the default. |
| `end` | The toggle icon is at the end. |
| `none` | No toggle icon. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content area, used to inline the `Collapse` component. |

### Events

| Name | Description |
| -- | -- |
| ``toggle`` | [^toggle] |

^^^toggle
Triggered when the internal collapsible panel title area is clicked to expand or collapse. The callback parameters are `(expand: boolean, name: string, expanded)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `expand` | `boolean` | Whether it is expanded. |
| `name` | `string` | The identifier of the collapsible panel being toggled. |
| `expanded` | `string | Array<string>` | The identifiers of all collapsible panels that are currently expanded. |
+++
^^^

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-accordion-gutter`` | `<length>` | - | The spacing between different panels. |
