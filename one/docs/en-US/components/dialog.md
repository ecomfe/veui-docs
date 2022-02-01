# Dialog

## Demos

### Sizes and fullscreen

Available size/dimension variants for the [`ui`](#props-ui) prop: `s` / `m` / `narrow` / `medium` / `wide` / `auto`.

[[ demo src="/demo/dialog/size.vue" ]]

### Modal and non-modal

[[ demo src="/demo/dialog/modal.vue" ]]

### Customized content

[[ demo src="/demo/dialog/custom.vue" ]]

### Async support

[[ demo src="/demo/dialog/async.vue" ]]

### Draggable

[[ demo src="/demo/dialog/draggable.vue" ]]

### Stacking order

[[ demo src="/demo/dialog/stack.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string=` | - | [^ui] |
| ``modal`` | `boolean=` | `true` | Whether to display a backdrop to block interactions with the content underneath. Modal dialogs preempt focus by default (will return focus when closed). |
| ``title`` | `string=` | - | The title of the dialog. Will be ignored if [`title`](#slots-title) slot is specified. |
| ``open`` | `boolean=` | `false` | [^open] |
| ``closable`` | `boolean=` | `true` | Whether to display a close button at the top right corner. |
| ``outside-closable`` | `boolean=` | `false` | Wether to close the dialog when user click outside. |
| ``draggable`` | `boolean=` | `false` | Whether the dialog is draggable. |
| ``escapable`` | `boolean=` | `false` | Whether to allow closing the dialog after pressing <kbd>esc</kbd>. Only works when `closable` is set to `true`. |
| ``inline`` | `boolean=` | `false` | Whether the dialog is displayed inline thus takes up space. |
| ``footless`` | `boolean=` | `false` | Whether to hide the default footer. |
| ``loading`` | `boolean=` | `false` | Wehter the dialog is in loading state. When loading, the OK button will enter loading state as well and become unclickable. |
| ``disabled`` | `boolean=` | `false` | Wehter the dialog is disabled. When disabled, the OK button will be disabled as well and become unclickable. |
| ``ok-label`` | `string=` | - | The text content of the “OK” button. |
| ``cancel-label`` | `string=` | - | The text content of the “Cancel” button. |
| ``priority`` | `number=` | - | The stacking priority of the dialog overlay. See the [`priority`](./overlay#props-priority) prop of [`Overlay`](./overlay) component. |
| ``before-close`` | `function(string): boolean=|Promise<boolean=>` | - | [^before-close] |
| ``overlay-class`` | `string | Object=` | - | The class expression applied to the root element of the dialog overlay. See the [`overlay-class`](./overlay#props-overlay-class) prop of [`Overlay`](./overlay) component. |
| ``overlay-style`` | `string | Array | Object=` | - | See the [`overlay-style`](./overlay#props-overlay-style) prop of the [`Overlay`](./overlay) component. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small sized content (not the dimension of the dialog itself). |
| `m` | Medium sized content (not the dimension of the dialog itself). |
| `narrow` | Narrow width. |
| `medium` | Medium width. |
| `wide` | Wide width. |
| `fullscreen` | Fullscreen dialogs. |
| `auto` | Auto-fit dialogs. |
+++
^^^

^^^open
:::badges
`.sync`
:::

Whether the dialog is open.
^^^

^^^before-close
Executed when user interaction is about to trigger closing the dialog. The type is `function(type: string): boolean=|Promise<boolean=>`, where `type` being the action type of the closing behavior. Available values by default are `'ok'/'cancel'`. The return value can be a `boolean` or a `Promise` that resolves a `boolean` value, to handle the situation that an async process is responsible for deciding whether to close the dialog. Will keep the dialog open when returning `false` or the `Promise` resolves with `false`.

+++Code example
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
            return false // resolving `false` will keep the dialog open
          }
        })
    }
    // resolving non-`false` value will close the dialog
  },
  // ...
}
```
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the dialog. |
| ``title`` | The title of the dialog. Will ignore the [`title`](#props-title) prop if this slot is specified. |
| ``foot`` | [^slot-foot] |

^^^slot-foot
The foot of the dialog. Displays “OK” and “Cancel” buttons by default.


+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `close` | `function(type: string): void` | The callback to trigger closing the dialog. `type` is the action type and will be passed into `before-close` hook as the first argument. And an event named after `type` will be triggered synchronously. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``ok`` | Triggered after the “OK” button is clicked or the dialog is closed with the slot scope function call `close('ok')`. |
| ``cancel`` | Triggered after the “Cancel” button or the close button is clicked, or <kbd>esc</kbd> is pressed, or the dialog is closed with the slot scope function call `close('cancel')`. |
| <var>&lt;value&gt;</var> | Triggered when the dialog is closed with the slot scope function call `close(value)`. |
| ``afteropen`` | Triggered after the dialog is opened. The dialog content won't be rendered until after the dialog is opened, so if there is logic that depends on content rendering, please execute it after this event is triggered. |
| ``afterclose`` | Triggered after the dialog is closed. If leave transition is provided by theme, then `afterclose` will be triggered when the transition finishes. |

### Icons

| Name | Description |
| -- | -- |
| `close` | Close. |
