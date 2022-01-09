# Accordion

:::tip
The `Accordion` component needs to be used by the inline [`Collapse`](./collapse) component.
:::

## Demos

### Size

Optional size [`ui`](#props-ui) property value: `s` / `m`.

[[ demo src="/demo/accordion/size.vue" ]]

### Style

You can use the [`ui`](#props-ui) property to set multiple styles.

[[ demo src="/demo/accordion/variant.vue" ]]

### Multiple

You can use the [`multiple`](#props-multiple) properties to multiple panels to expand at the same time.

[[ demo src="/demo/accordion/multiple.vue" ]]

### Icon position

You can use the [`toggle-position`](#props-toggle-position) property to set the position of the expand icon.

[[ demo src="/demo/accordion/position.vue" ]]

## API

### Accordion Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``multiple`` | `boolean=` | `false` | Allow multiple sub-panels to expand at the same time. |
| ``disabled`` | `boolean=` | `false` | Disabled the accordion. |
| ``expanded`` | `string | Array<string>` | - | [^expanded] |
| ``toggle-position`` | `string` | `'start'` | [^toggle-position] |

^^^ui
Preset styles. A combination of a set of enumeration values separated by spaces. Among them, you can only choose one of `simple` / `basic` / `strong`. If you don't set it, it will be the default normal style. Only one of `bordered` / `borderless` can be selected.


+++Enum
| Value | Description |
| -- | -- |
| `simple` | Simple style. |
| `basic` | White background style. |
| `strong` | White background style. |
| `bordered` | There is an outer border. |
| `borderless` | No outer border. |
| `dull` | The title area does not change its style in response to mouse interaction. |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

Expanded accordion panel,Corresponds to the [`name`](./collapse#props-name) property of the inline `Collapse` component. When `multiple` is `true`, it is an array of accordion panel identification.
^^^

^^^toggle-position
Position of the expansion icon.

+++Enum
| Value | Description |
| -- | -- |
| `start` | Expand icon is at the start position, is the default position. |
| `end` | expand icon is at the end position. |
| `none` | No expansion icon. |
+++
^^^

### Accordion Slots

| Name | Description |
| -- | -- |
| ``default`` | The content area is used to inline the `Collapse` component. |

### Accordion Events

| Name | Description |
| -- | -- |
| ``toggle`` | [^toggle] |

^^^toggle
Triggered when the title area of the inner collapsible panel is clicked to trigger the expand/collapse. The callback parameter is `(expand: boolean, name: string, expanded)`.

+++Props
| Name | Type | Description |
| -- | -- | -- |
| `expand` | `boolean` | Expand the accordion. |
| `name` | `string` | Switch expanded accordion panel. |
| `expanded` | `string | Array<string>` | All currently expanded accordion panel. |
+++
^^^
