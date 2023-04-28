# Button

## Examples

### Style variants

Available style variants of the [`ui`](#props-ui) prop: `primary` / `strong` / `translucent` / `text` / `icon`.

[[ demo src="/demo/button/style.vue" ]]

### Size variants

Available size variants of the [`ui`](#props-ui) prop: `xs` / `s` / `m` / `l` / `xl`.

[[ demo src="/demo/button/size.vue" ]]

### Disabled

Set the [`disabled`](#props-disabled) prop to disable the button.

[[ demo src="/demo/button/disabled.vue" ]]

### Loading

Set the [`loading`](#props-loading) prop to make the button enter the loading state and disable user interaction.

[[ demo src="/demo/button/loading.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``disabled`` | `boolean` | `false` | Whether the button is disabled. |
| ``type`` | `string` | `'button'` | [^type] |
| ``loading`` | `boolean` | `false` | Whether the button is in the loading state. The button does not respond to user interaction in the loading state. |

^^^ui
A combination of enumeration values separated by spaces for preset styles.

+++Enum values
| Value | Description |
| -- | -- |
| `normal` | Default style. |
| `primary` | Primary button style with a background color of the theme. |
| `basic` | Basic button style. |
| `strong` | Strong style, can be used alone or in combination with `text` / `icon` styles. |
| `translucent` | Semi-transparent style for use on dark backgrounds. |
| `text` | Pure text style without background color and border. |
| `icon` | Pure icon style without background color and border. |
| `aux` | Auxiliary button for use with `text` / `icon` styles. |
| `subtle` | Subtle button for use with `text` / `icon` styles. |
| `square` | Square button that can be used together with other styles. |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
| `l` | Large size style. |
| `xl` | Extra large size style. |
+++
^^^

^^^type
Button type. See the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute of the original `<button>` element.

+++Enum values
| Value | Description |
| -- | -- |
| `button` | Normal button. |
| `submit` | Submit button that triggers an external form submission when clicked. |
| `reset` | Reset button that resets an external form to its initial values when clicked. |
+++

:::warning
Note that the default value is different from that of the original `<button>` element. If you need to trigger a form submission, please set it explicitly to `submit`.
:::
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Content displayed on the button. |

### Events

The `Button` component supports all native events supported by the original `<button>` element, and the callback functions receive the corresponding native event objects.

### Icons

| Name | Description |
| -- | -- |
| ``loading`` | The loading state indicator, which displays a loading icon animation by default. |
