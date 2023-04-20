# Button

## Demos

### Stylistic variants

Available style variants for the [`ui`](#props-ui) prop: `primary` / `strong` / `translucent` / `text` / `icon`.

[[ demo src="/demo/button/style.vue" ]]

### Size variants

Available size variants for the [`ui`](#props-ui) prop: `xs` / `s` / `m` / `l` / `xl`.

[[ demo src="/demo/button/size.vue" ]]

### Disabled state

Use the [`disabled`](#props-disabled) prop to set a button to disabled state.

[[ demo src="/demo/button/disabled.vue" ]]

### Loading state

Use the [`loading`](#props-loading) prop to set a button to loading state (which will not respond upon clicks).

[[ demo src="/demo/button/loading.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``disabled`` | `boolean` | `false` | Whether the button is disabled. |
| ``type`` | `string` | `'button'` | [^type] |
| ``loading`` | `boolean` | `false` | Whether the button is in loading state. Loading buttons won't respond to user interactions. |

^^^ui
Style variants. A space-separated list of enum values.

+++Enum values
| Value | Description |
| -- | -- |
| `normal` | Normal button. Default style. |
| `primary` | Primary button. |
| `basic` | Basic button. |
| `strong` | Strong button. Can be used alone or together with `text` / `icon`. |
| `translucent` | Translucent button, typically used on dark background. |
| `text` | Text button. |
| `icon` | Icon button. |
| `aux` | Auxilary button. Need to be used with `text` / `icon` styles. |
| `subtle` | Subtle button. Need to be used with `text` / `icon` styles. |
| `square` | Square button. Can be used with other styles. |
| `xs` | Extra small. |
| `s` | Small. |
| `m` | Medium. |
| `l` | Large. |
| `xl` | Extra large. |
+++
^^^

^^^type
The type of the button. See the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute of HTML's native `<button>` element.

+++Enum
| Value | Description |
| -- | -- |
| `button` | Normal button. |
| `submit` | Submit button. Will cause an ancestor form to be submitted upon clicks. |
| `reset` | Reset button. Will reset all fields to initial value upon clicks. |
+++

:::warning
Note that the default value is different from the native `<button>` element. You need to explicitly set `type` to `submit` if you want to trigger a form submit.
:::
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Content of the button. |

### Events

Additionally, `Button` exposes all native events available for native `<button>` element. The callback parameter is the corresponding native event object for all events.

### Icons

| Name | Description |
| -- | -- |
| ``loading`` | The loading spinner. |
