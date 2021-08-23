# Input

## Demos

### Size variants

Available size variants for the `ui` prop: `xs`/`s`/`m`/`l`.

[[ demo src="/demo/input/size.vue" ]]

### Read-only state

Use the `readonly` prop to set an input to read-only state.

[[ demo src="/demo/input/readonly.vue" ]]

### Disabled state

Use the `disabled` prop to set an input to disabled state.

[[ demo src="/demo/input/disabled.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `value` | `string` | '' | [^value] |
| `disabled` | `boolean=` | `false` | Whether the input is disabled. |
| `readonly` | `boolean=` | `false` | Whether the input is read-only. |
| `type` | `string=` | `'text'` | [^type] |
| `placeholder` | `string=` | - | The placeholder text of the input. |
| `clearable` | `boolean=` | `false` | Whether to show a clear button. |
| `composition` | `boolean=` | `false` | Whether the input process should be aware of composition. |
| `select-on-focus` | `boolean=` | `false` | Whether to select text content when focused. |
| `get-length` | `function(string): number=` | Used to customize length calculation of the input. |
| `trim` | `boolean|string=` | `false` | [^trim] |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `xs` | Extra small. |
| `s` | Small. |
| `m` | Medium. |
| `l` | Large. |
+++
^^^

^^^value
:::badges
`v-model`
:::

The value of the input.
^^^

^^^type
The type of the input. See the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) attribute of HTML's native `<input>` element.

+++Enum
| Value | Description |
| -- | -- |
| `text` | Plain text input. |
| `password` | Password input. |
| `hidden` | Hidden input but holds a value to submit. |
+++
^^^

^^^trim
Wether to trim the input value. If set to `true`, the input value will be trimmed from both ends. If set to `false`, the input value will not be trimmed. If set to a string, the input value will be trimmed from the specified side.

+++Enum
| Value | Description |
| -- | -- |
| `both` | Trim from both ends. Equivalent to `true`. |
| `start` | Trim from the start. |
| `end` | Trim from the end. |
+++

### Slots

| Name | Description |
| -- | -- |
| `before` | The content before the input area inside the component. |
| `after` | The content after the input area inside the component. |

:::warning
Slots will squeeze the width of the input area.
:::

### Events

| Name | Description |
| -- | -- |
| `change` | [^event-change] |
| `input` | [^event-input] |

^^^event-change
Triggered when the input value is changed like the native `change` event. The callback parameter list is `(value, event)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `string` | The value of the input. |
| `event` | [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/change) | Native change event object. |
+++
^^^

^^^event-input
:::badges
`v-model`
:::

Triggered when inputting into the input. Affected by the `composition` prop.  The callback parameter list is `(value: string)`, where `value` is the current value of the input.
^^^

Additionally, `Input` exposes the following native events:

`auxclick`, `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`, `select`, `wheel`, `keydown`, `keypress`, `keyup`, `focus`, `blur`, `focusin`, `focusout`.

The callback parameter is the corresponding native event object for all events above.

### Icons

| Name | Description |
| -- | -- |
| `remove` | Remove button. |
