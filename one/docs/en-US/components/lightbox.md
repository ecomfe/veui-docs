# Lightbox

## Examples

[[ demo src="/demo/lightbox/default.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | Predefined style. Customizable when `veui-theme-dls` is not provided. |
| ``open`` | `boolean` | `false` | Whether to show the dialog. [^open] |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``index`` | `number` | `0` | [^index] |
| ``wrap`` | `boolean` | `false` | Whether to play in a loop. |
| ``closable`` | `boolean` | `true` | Whether to show the close button. |
| ``escapable`` | `boolean` | `true` | Whether to close the dialog by pressing <kbd>esc</kbd>. Only works when `closable` is `true`. |
| ``outside-closable`` | `boolean` | `true` | Whether to close the dialog when clicking outside the content area. |
| ``priority`` | `number` | - | The z-index of the dialog. Refer to the [`Overlay`](./overlay) component's [`priority`](./overlay#props-priority) prop. |
| ``before-close`` | `function(string): boolean=|Promise<boolean>` | - | [^before-close] |
| ``overlay-class`` | `string | Array | Object` | - | The class name of the root element of the dialog. Refer to the [`Overlay`](./overlay) component's [`overlay-class`](./overlay#props-overlay-class) prop. |
| ``indicator`` | `string` | `'number'` | [^indicator] |
| ``options`` | `Object` | `{ video: { muted: true, autoplay: true, controls: true } }` | Additional configuration. |
| ``lazy`` | `boolean= | { preload: number }` | `false` | [^lazy] |

^^^open
:::badges
`.sync`
:::

Whether to show the dialog.
^^^

^^^datasource
The data source of the lightbox, with the following properties: `{ src, alt, type, desc }`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `src` | `string` | The media source URL. |
| `type` | `string` | The default type of the image. `video` indicates a video. |
| `alt` | `string` | The fallback text of the image. |
| `desc` | `string` | The description text of the item. |
+++
^^^

^^^index
:::badges
`.sync`
:::

The current playing index.
^^^

^^^indicator
The display mode of the playback progress indicator.

+++Enum values
| Value | Description |
| -- | -- |
| `number` | Display the text prompt of "current page number/total page numbers". |
| `none` | Do not show the indicator. |
^^^

^^^before-close
Called before the dialog is closed, with a type of `function(): boolean=|Promise<boolean>`. The return value can be a `boolean`, or a `Promise` that resolves to a `boolean`, used to handle situations where the dialog closing state may need to be decided asynchronously. The dialog will only be closed when the return value or resolve value is not `false`.

+++Example
```html
<veui-lightbox :open.sync="dialogOpen" :before-close="submit">...</veui-lightbox>
^^^

^^^lazy
Specifies whether to lazy load the carousel resources.

+++Value types
| Name | Description |
| -- | -- | -- |
| false | Do not lazy load resources. |
| true | Preload the resources before and after the currently displayed item by 1. |
| { preload: number } | Preload the specified number of resources before and after the currently displayed item. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^slot-item] |
| ``desc`` | [^slot-desc] |

^^^slot-item
Used to customize the media display area for each lightbox item.

Default content: each image or video.

The slot props is the content of each list item of the [`datasource`](#props-datasource) prop (custom properties can be included) plus `index: number` to indicate the order of the carousel item. The entire `slot-scope` binding value is `{src, alt, type, desc, index, ...}`.
^^^

^^^slot-desc
Used to customize the description area for each lightbox item.

Default content: each item's description text.

The slot props is the content of each list item of the [`datasource`](#props-datasource) prop (custom properties can be included) plus `index: number` to indicate the order of the carousel item. The entire `slot-scope` binding value is `{src, alt, type, desc, index, ...}`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``close`` | Triggered when the action to close the lightbox is performed. |

### Icons

| Name | Description |
| -- | -- |
| ``close`` | Close. |
| ``prev`` | Previous page. |
| ``next`` | Next page. |
