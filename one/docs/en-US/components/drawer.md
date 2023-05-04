# Drawer

## Examples

### Placement

Use the [`placement`](#props-placement) prop to control the position where the drawer pops up.

[[ demo src="/demo/drawer/placement.vue" ]]

### Modal

Use the [`modal`](#props-modal) prop to control whether the drawer is modal or not.

[[ demo src="/demo/drawer/modal.vue" ]]

### Custom content

[[ demo src="/demo/drawer/custom.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ``ui`` | `string` | - | [^ui] |
| ``placement`` | `string` | `'right'` | [^placement] |
| ``modal`` | `boolean` | `true` | Whether the drawer is modal. If it's modal, it will cover the underlying content and grab the focus (the focus will return after it's closed). |
| ``title`` | `string` | - | The text of the drawer title. If both the [`title`](#props-title) prop and the [`title`](#slots-title) slot are specified, the latter will be used. |
| ``open`` | `boolean` | `false` | [^open] |
| ``closable`` | `boolean` | `true` | Whether to show the close button. |
| ``outside-closable`` | `boolean` | `false` | Whether to close the drawer when clicked outside the drawer. |
| ``escapable`` | `boolean` | `false` | Whether the drawer can be closed by pressing the <kbd>esc</kbd> key. Only effective when `closable` is `true`. |
| ``priority`` | `number` | - | The z-index of the drawer layer. Refer to the [`Overlay`](./overlay) component's [`priority`](./overlay#props-priority) prop. |
| ``footless`` | `boolean` | `false` | Whether to hide the default footer. |
| ``loading`` | `boolean` | `false` | Whether it's in the loading state. When it's in the loading state, the OK button will also enter the loading state and cannot be clicked. |
| ``disabled`` | `boolean` | `false` | Whether it's in the disabled state. When it's in the disabled state, the OK button will also enter the disabled state and cannot be clicked. |
| ``ok-label`` | `string` | - | The text content of the "OK" button. |
| ``cancel-label`` | `string` | - | The text content of the "Cancel" button. |
| ``before-close`` | `function(string): boolean=|Promise<boolean>` | - | Run after the operation that triggers the closing. Refer to the [`Dialog`](./dialog) component's [`before-close`](./dialog#props-before-close) prop. |
| ``overlay-class`` | `string | Object` | - | The class name of the drawer layer root element. Refer to the [`Overlay`](./overlay) component's [`overlay-class`](./overlay#props-overlay-class) prop. |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| --- | --- |
| `s` | Small content size (size of content and components, not the overall size of the drawer). |
| `m` | Medium content size (size of content and components, not the overall size of the drawer). |
+++
^^^

^^^placement
Drawer position.

+++Enum values
| Value | Description |
| --- | --- |
| `top` | Slide out from the top. |
| `right` | Slide out from the right. |
| `bottom` | Slide out from the bottom. |
| `left` | Slide out from the left. |
+++
^^^

^^^open
:::badges
`.sync`
:::

Whether to show the drawer or not.
^^^

### Slots

| Name | Description |
| --- | --- |
| ``default`` | Content area. |
| ``title`` | Title area. If both the [`title`](#props-title) prop and the [`title`](#slots-title) slot are specified, the latter will be used. |
| ``foot`` | [^slot-foot] |

^^^slot-foot
Footer area. The "OK" and "Cancel" buttons will be displayed by default.

+++Slot props
| Name | Type | Description |
| --- | --- | --- |
| `close` | `function(type: string): void` | A callback function that triggers the drawer to close. `type` is the type of the closing action, which will be passed as a parameter to the `before-close` hook function and will also trigger an event with the same name. |
+++
^^^

### Events

| Name | Description |
| --- | --- |
| ``ok`` | Fired when the "OK" button is clicked or when the `close('ok')` function is called in the scope. |
| ``cancel`` | Fired when the "Cancel" button is clicked, the close button is clicked, or the drawer is closed by pressing <kbd>esc</kbd> or calling the `close('cancel')` function in the scope. |
| <var>&lt;value&gt;</var> | Fired when the `close(value)` function is called in the scope. |
| ``afteropen`` | Fired after the drawer is opened. The drawer content will be rendered after it's opened, so if there are logic that depends on the content rendering, please execute them after this event is triggered. |
| ``afterclose`` | Fired after the drawer is closed. If the style theme provides an exit animation, it will be triggered after the exit animation is completed. |
