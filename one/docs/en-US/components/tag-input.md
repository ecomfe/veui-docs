# TagInput

## Examples

### Size variants

Available `ui` prop values for size: `xs` / `s` / `m` / `l`.

[[ demo src="/demo/tag-input/size.vue" ]]

### Read-only

Use the `readonly` prop to set the input to readonly state.

[[ demo src="/demo/tag-input/readonly.vue" ]]

### Disabled

Use the `disabled` prop to disable the input.

[[ demo src="/demo/tag-input/disabled.vue" ]]

### Allow duplicate

Use the `allow-duplicate` prop to allow duplicate tags.

[[ demo src="/demo/tag-input/allow-duplicate.vue" ]]

### Maximum tags

Use the `max` prop to limit the maximum number of tags.

[[ demo src="/demo/tag-input/max.vue" ]]

### Maximum characters

Use the `maxlength` prop to limit the maximum number of characters.

[[ demo src="/demo/tag-input/maxlength.vue" ]]

### Custom tags

Use the [`tag`](#slots-tag) slot to customize the display of tags.

[[ demo src="/demo/tag-input/custom-tag.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``value`` | `string` | - | [^value] |
| ``input-value`` | `string` | `''` | [^input-value] |
| ``disabled`` | `boolean` | `false` | Whether the tag input is disabled. |
| ``readonly`` | `boolean` | `false` | Whether the tag input is read-only. |
| ``placeholder`` | `string` | - | Input placeholder. |
| ``clearable`` | `boolean` | `false` | Whether to show the clear button. |
| ``maxlength`` | `number` | - | The maximum number of characters that can be entered. |
| ``max`` | `number` | - | The maximum number of tags that can be added. |
| ``strict`` | `boolean | Object` | `false` | [^strict] |
| ``get-length`` | `function(string): number` | - | A custom function to calculate the length of characters. |
| ``allow-duplicate`` | `boolean` | `false` | Whether to allow duplicate tags. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
| `l` | Large size style. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The value of the input tags list.
^^^

^^^input-value
:::badges
`.sync`
:::

The value of the text input box.
^^^

^^^strict
When `boolean`, it configures both [`maxlength`](#props-maxlength) and [`max`](#props-max) restrictions in strict mode. When `Object`, it can be configured separately.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `maxlength` | `boolean` | Whether to strictly input the length and prohibit input beyond the limit. |
| `max` | `boolean` | Whether to strictly limit the number of tags entered, and new tags added beyond the limit will not take effect. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``tag`` | [^slot-tag] |

^^^slot-tag
The added tag items.

Default content: The tag items rendered by the [`Tag`](./tag) component.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `attrs` | `Object` | Properties that need to be output to the standard [`Tag`](./tag) component. You can use `v-bind="attrs"` for unified output. |
| `listeners` | `Object` | Event listeners that need to be output to the standard [`Tag`](./tag) component. You can use `v-on="listeners"` for unified output. |
| `tag` | `string` | The text value of the tag item. |
| `index` | `function(value: *): void` | Used to switch selected items. |
| `key` | `string` | The `key` of the tag item, which must be bound to a single item. |
| `invalid` | `boolean` | Whether it is in an invalid state of validation. |
| `readonly` | `boolean` | Whether it is in read-only state. |
| `disabled` | `boolean` | Whether it is in a disabled state. |
| `edit` | `function(): void` | Edit the current tag item. |
| `remove` | `function(): void` | Remove the current tag item. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |
| ``input`` | [^event-input] |
| ``clear`` | Triggered when the clear button is clicked. |

^^^event-change
:::badges
`v-model`
:::

Triggered when the content of the tag list changes. The callback function takes `(value: Array<string>)` as its parameter, where `value` is the list of tags that have been entered.
^^^

^^^event-input
:::badges
`.sync`
:::

Triggered when the input content in the text box changes. The callback function takes `(inputValue: string)` as its parameter, where `inputValue` is the text content of the input box.
^^^

In addition, `TagInput` supports the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, and `focusout`.

The parameters of the callback function are all native event objects.

### Icons

| Name | Description |
| -- | -- |
| ``remove`` | The clear button. |
