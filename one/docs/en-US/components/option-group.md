# OptionGroup

:::tip
The `OptionGroup` component should be used inside [`Select`](./select), [`Dropdown`](./dropdown), or other `OptionGroup` components, and can be used with the [`Option`](./option) component.
:::

## Examples

See [`Select` examples](./select#examples) or [`Dropdown` examples](./dropdown#examples).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``label`` | `string` | - | The title of the option group. |
| ``expanded`` | `boolean` | `false` | Whether the option list is expanded. |
| ``trigger`` | `'click' | 'hover'` | `'click'` | When to expand the option list. |
| ``options`` | `Array<Object>` | `[]` | [^options] |
| ``position`` | `string` | `inline` | [^position] |
| ``overlay-class`` | `string | Array | Object` | - | Refers to the [`overlay-class`](./overlay#props-overlay-class) prop of the [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object` | - | Refers to the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

^^^options
The option list, with each item having the structure `{label, value, disabled, ...}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text description of the option. |
| `value` | `*` | The value corresponding to the option. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++
^^^

^^^position
The way the internal options are displayed.

+++Enum values
| Value | Description |
| -- | -- |
| `inline` | Display directly in-line. |
| `popup` | Display in a popup layer. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the option list. When the [`options`](#props-options) prop is not specified, it can be used to directly inline `Option` or other `OptionGroup` components. |
| ``label`` | [^slot-label] |
| ``group-label`` | [^slot-group-label] |
| ``option-label`` | [^slot-option-label] |
| ``option`` | [^slot-option] |
| ``before`` | The pre-area of the option list. |
| ``after`` | The post-area of the option list. |

^^^slot-label
The text area of the option group title.

Default content: The text corresponding to the [`label`](#props-label) prop.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the option group title. |
| `disabled` | `boolean` | Whether the option group is disabled. |
+++
^^^

^^^slot-group-label
The text area of the title of the sub-option group.

Default content: The value of the `label` property of the option corresponding to `options`.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the option group. |
| `disabled` | `boolean` | Whether the option group is disabled. |
+++

In addition, other properties in the current option group data will also be automatically bound to slot props through `v-bind` except for the properties described above.
^^^

^^^slot-option-label
The text area of the option.

Default content: The `label` property value of the option without `options`.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the option. |
| `value` | `string` | The value of the option. |
| `selected` | `boolean` | Whether it is already selected. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

In addition, other properties in the current option data will also be automatically bound to slot props through `v-bind` except for the properties described above.
^^^

^^^slot-option
The entire area of the selectable option.

Default content: The default structure of the component inside `Option`.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the option. |
| `value` | `string` | The value of the option. |
| `selected` | `boolean` | Whether it is already selected. |
| `disabled` | `boolean` | Whether the option is disabled. |
+++

In addition, other properties in the current option data will also be automatically bound to slot props through `v-bind` except for the properties described above.
^^^
```

### Events

| Name | Description |
| -- | -- |
| ``toggle`` | Triggered when the option list is expanded or collapsed, with the callback parameter `(expanded: boolean)`. `expanded` indicates whether the operation will expand or collapse the option list. |
| ``afteropen`` | Triggered after the option list is opened. |

### Icons

| Name | Description |
| -- | -- |
| `expandable` | Expandable item. |

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-dropdown-max-display-items`` | `<integer>` | `8` | [^css-max-display-items] |

^^^css-max-display-items
When the [`position`](#props-position) prop is set to `popup`, it specifies the maximum number of items that can be displayed at the same time in the dropdown list, and the maximum height of the dropdown box will be calculated based on this.

:::tip
It needs to be set through the [`overlay-style`](#props-overlay-style) prop.
:::
^^^
