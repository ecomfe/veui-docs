# Accordion

:::tip
The `Accordion` component needs to be used by the inline [`Collapse`](./collapse) component.
:::

## Demos

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `s` / `m`.

[[ demo src="/demo/accordion/size.vue" ]]

### Style

Use the [`ui`](#props-ui) property to apply style variants.

[[ demo src="/demo/accordion/variant.vue" ]]

### Multiple

Use the [`multiple`](#props-multiple) property to allow multiple panels to be expanded at the same time.

[[ demo src="/demo/accordion/multiple.vue" ]]

### Icon position

Use the [`toggle-position`](#props-toggle-position) property to set the position of the toggle icon.

[[ demo src="/demo/accordion/position.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``multiple`` | `boolean=` | `false` | Whether to allow multiple panels to be expanded at the same time. |
| ``disabled`` | `boolean=` | `false` | Whether accordion is disabled. |
| ``expanded`` | `string | Array<string>` | - | [^expanded] |
| ``toggle-position`` | `string` | `'start'` | [^toggle-position] |

^^^ui
Style variants. A space-separated enum list. Only one of `simple` / `basic` / `strong` can be used. The default style will be used if not set. Only one of `bordered` / `borderless` can be used.

+++Enum
| Value | Description |
| -- | -- |
| `simple` | Simple style. |
| `basic` | Basic style. |
| `strong` | Strong style. |
| `bordered` | Bordered style. |
| `borderless` | Borderless style. |
| `dull` | The title area does not change style in response to mouse interaction. |
| `s` | Small size style. |
| `m` | Medium size style. |
+++
^^^

^^^expanded
:::badges
`.sync`
:::

The identifier of the expanded accordion panels, corresponding to the [`name`](./collapse#props-name) properties of the inline `Collapse` components. When `multiple` is `true`, it is an array of accordion panel identifiers.
^^^

^^^toggle-position
The position of the toggle icon.

+++Enum
| Value | Description |
| -- | -- |
| `start` | The toggle icon is at the start position. Default value. |
| `end` | The toggle icon is at the end position. |
| `none` | Do not show the toggle icon. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content area, which is used to place inline `Collapse` components. |

### Events

| Name | Description |
| -- | -- |
| ``toggle`` | [^toggle] |

^^^toggle
Triggered when clicking on the internal panel title to trigger expand/collapse. The callback parameters are `(expand: boolean, name: string, expanded)`.

+++Props
| Name | Type | Description |
| -- | -- | -- |
| `expand` | `boolean` | Whether to expand the collapsible panel. |
| `name` | `string` | The name of the collapsible panel. |
| `expanded` | `string | Array<string>` | Identifiers of all currently expanded accordion panel. |
+++
^^^
