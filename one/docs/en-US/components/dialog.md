# Dialog

## Examples

### Sizes and fullscreen

Available size/dimensional variants for the [`ui`](#props-ui) prop: `s` / `m` / `narrow` / `medium` / `wide` / `auto`.

[[ demo src="/demo/dialog/size.vue" ]]

### Modal and non-modal

[[ demo src="/demo/dialog/modal.vue" ]]

### Custom content

[[ demo src="/demo/dialog/custom.vue" ]]

### Async support

[[ demo src="/demo/dialog/async.vue" ]]

### Draggable

[[ demo src="/demo/dialog/draggable.vue" ]]

### Stacking order

[[ demo src="/demo/dialog/stack.vue" ]]

### Loading and disabled states

[[ demo src="/demo/dialog/state.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``modal`` | `boolean` | `true` | Whether the dialog is modal. A modal dialog blocks the underlying content (cannot be clicked) and takes focus away (focus returns after the dialog is closed). |
| ``title`` | `string` | - | The text for the dialog title. If the [`title`](#slots-title) slot is specified, it takes precedence over this prop. |
| ``open`` | `boolean` | `false` | [^open] |
| ``closable`` | `boolean` | `true` | Whether to show the close button. |
| ``outside-closable`` | `boolean` | `false` | Whether to close the dialog when clicked outside. |
| ``draggable`` | `boolean` | `false` | Whether the dialog is draggable. |
| ``escapable`` | `boolean` | `false` | Whether pressing <kbd>esc</kbd> can close the dialog. This only takes effect when `closable` is `true`. |
| ``inline`` | `boolean` | `false` | Whether to inline the dialog and occupy content space. |
| ``footless`` | `boolean` | `false` | Whether to hide the default bottom bar. |
| ``loading`` | `boolean` | `false` | Whether the dialog is in a loading state. When in a loading state, the OK button also enters a loading state and cannot be clicked. |
| ``disabled`` | `boolean` | `false` | Whether the dialog is in a disabled state. When in a disabled state, the OK button also enters a disabled state and cannot be clicked. |
| ``ok-label`` | `string` | - | The text for the "OK" button. |
| ``cancel-label`` | `string` | - | The text for the "Cancel" button. |
| ``priority`` | `number` | - | The stacking order of the dialog layer, refer to the [`Overlay`](./overlay) component's [`priority`](./overlay#props-priority) prop. |
| ``before-close`` | `function(string): boolean=|Promise<boolean>` | - | [^before-close] |
| ``overlay-class`` | `string | Object` | - | The class name of the dialog layer root element, refer to the [`Overlay`](./overlay) component's [`overlay-class`](./overlay#props-overlay-class) prop. |
| ``overlay-style`` | `string | Array | Object` | - | Refer to the [`Overlay`](./overlay) component's [`overlay-style`](./overlay#props-overlay-style) prop. |

^^^ui
The preset style.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small content size (size of content and components, not the overall size of the dialog box). |
| `m` | Medium content size (size of content and components, not the overall size of the dialog box). |
| `narrow` | Narrow style. |
| `medium` | Medium style. |
| `wide` | Wide style. |
| `fullscreen` | Fullscreen style. |
| `auto` | Adaptive size style. |
+++
^^^

^^^open
:::badges
`.sync`
:::

Whether the dialog box is displayed.
^^^

^^^before-close
Executed after the action that triggers the closing of the dialog box occurs, with a type of `function(type: string): boolean=|Promise<boolean=>`. By default, `type` can be `'ok'|'cancel'`. The return value can be a `boolean` or a `Promise` that resolves to a `boolean`, used to handle situations where the dialog box closing state needs to be decided asynchronously. The dialog box will only be closed when the return value or resolved value is not `false`.

+++Example
```html
<veui-dialog :open.sync="dialogOpen" :before-close="submit">...</veui-dialog>
```

```js
methods: {
  submit (type) {
    if (type === 'ok') {
      return axios.post('/item/create', {/* ... */})
        .then(({ id, error }) => {
          if (error) {
            this.showError(error)
            return false // Resolving `false` will prevent dialog box from closing.
          }
        })
    }
    // When resolved but not returning `false`, dialog box will be closed.
  },
  // ...
}
```
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Content area. |
| ``title`` | Title area. If both the [`title`](#props-title) prop and the [`title`](#slots-title) slot are specified, the latter takes precedence. |
| ``foot`` | [^slot-foot] |

^^^slot-foot
Footer area. By default, the "OK" and "Cancel" buttons are displayed.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `close` | `function(type: string): void` | The callback function that triggers the closing of the dialog box. `type` is the type of closing that will be passed to the `before-close` hook as a parameter, and the event with the same name will be triggered synchronously. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``ok`` | Triggered when the "OK" button is clicked or when the scope function `close('ok')` is called. |
| ``cancel`` | Triggered when the "Cancel" button is clicked, when the close button is clicked, when the dialog box is closed by pressing <kbd>esc</kbd>, or when the scope function `close('cancel')` is called. |
| <var>&lt;value&gt;</var> | Triggered when the scope function `close(value)` is called. |
| ``afteropen`` | Triggered after the dialog box is opened. The content of the dialog box is rendered only after it is opened, so if there is logic that depends on the content being rendered, it should be executed after this event is triggered. |
| ``afterclose`` | Triggered after the dialog box is closed. If the style theme provides an exit animation, it will be triggered after the exit animation is complete. |

### Icons

| Name | Description |
| -- | -- |
| ``close`` | Close. |

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-dialog-content-width`` | `<length>` | - | [^css-width] |
| ``--dls-dialog-content-width`` | `<length>` | - | [^css-content-width] |

^^^css-width
The width of the entire dialog box. Cannot be set at the same time as [`--dls-dialog-content-width`](#css---dls-dialog-content-width).

:::tip
Needs to be set via the [`overlay-style`](#props-overlay-style) prop.
:::
^^^

^^^css-content-width
The width of the content area of the dialog box. Cannot be set at the same time as [`--dls-dialog-width`](#css---dls-dialog-content-width).

:::tip
Needs to be set via the [`overlay-style`](#props-overlay-style) prop.
:::
^^^
