# Carousel

## Examples

### Switching items

Use the [`index`](#props-index) prop to control the currently displayed item.

[[ demo src="/demo/carousel/switch.vue" ]]

### Progress indicator

Use the [`indicator`](#props-indicator) prop to specify the type of progress indicator.

[[ demo src="/demo/carousel/indicator.vue" ]]

### Autoplay

Specify the [`autoplay`](#props-autoplay) prop to enable automatic playback.

[[ demo src="/demo/carousel/autoplay.vue" ]]

### Switching effects

Specify the [`effect`](#props-effect) prop to set the switching effect.

[[ demo src="/demo/carousel/effect.vue" ]]

### Vertical layout

Specify the [`vertical`](#props-vertical) prop to enable a vertically oriented carousel.

Use the [`controls-position`](#props-controls-position) prop to switch the position of the buttons relative to the layout direction.

[[ demo src="/demo/carousel/vertical.vue" ]]

### View and group

Use the [`slides-per-view`](#props-slides-per-view) prop to specify how many carousel items to display at the same time.

Use the [`slides-per-group`](#props-slides-per-group) prop to specify how many carousel items are included in each forward/backward switch.

[[ demo src="/demo/carousel/slides.vue" ]]

### Aspect ratio

Set the [`slide-aspect-ratio`](#props-slide-aspect-ratio) prop to specify the aspect ratio of each carousel item.

[[ demo src="/demo/carousel/ratio.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``datasource`` | `Array<Object>` | `[]` | [^datasource] |
| ``index`` | `number` | `0` | [^index] |
| ``indicator`` | `string` | `'radio'` | [^indicator] |
| ``switch-trigger`` | `string` | `'click'` | [^switch-trigger] |
| ``autoplay`` | `boolean` | `false` | Whether to auto play. |
| ``pause-on-hover`` | `boolean` | `false` | Whether to pause when hovering in auto play. |
| ``interval`` | `number` | `3000` | The interval time in milliseconds for switching in auto play. |
| ``wrap`` | `boolean` | `false` | Whether to enable infinite loop playing. |
| ``effect`` | `'fade' | 'slide'` | `'fade'` | Specify the transition effect of the carousel, where `fade` only works when the number of switching groups is the same as the number of items displayed simultaneously. |
| ``vertical`` | `boolean` | `false` | Whether the carousel is in vertical layout. |
| ``indicator-align`` | `'start' | 'end'` | `start` | Used to support the position of the indicator relative to the layout direction. |
| ``indicator-position`` | `'outside' | 'inside'` | `inside` | Used to support the position of the indicator inside/outside the carousel container. |
| ``controls`` | `boolean` | `false` | Whether to display the switching buttons. |
| ``controls-position`` | `'outside' | 'inside'` | `inside` | Used to support the position of the switching buttons relative to the layout direction. |
| ``slide-aspect-ratio`` | `number= | '${number}/${number}'` | - | Specify the default configuration for different types of carousel items. |
| ``options`` | `Object` | `{ video: { muted: true, autoplay: true, controls: true, loop: true } }` | Used to specify the aspect ratio of each carousel item. |
| ``slides-per-view`` | `number` | `1` | Specify the number of carousel items displayed simultaneously. |
| ``slides-per-group`` | `number` | `1` | Specify the number of carousel items per group to switch forward and backward each time. |
| ``lazy`` | `boolean= | { preload: number }` | `false` | [^lazy] |

^^^datasource
Carousel data source, with item type: `{src, alt, label, type}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `src` | `string` | Media source URL. |
| `alt` | `string` | Alternative description text of the media. |
| `label` | `string` | Descriptive title of the media. |
| `type` | `string` | Descriptive title of the media, specify `video` for videos. |
+++
^^^

^^^index
:::badges
`.sync`
:::

The current index of the carousel.
^^^

^^^indicator
The display mode of the progress indicator.

+++Enum values
| Value | Description |
| -- | -- |
| `bar` | Radio button type, used to replace the previous `radio` (which is also kept compatible). |
| `number` | Display "current page number/total page number" text prompt. |
| `dot` | Dot type. |
| `none` | Do not display the indicator. |
^^^

^^^switch-trigger
When displaying the radio button type indicator, the operation to trigger the switch.

+++Enum values
| Value | Description |
| -- | -- |
| `click` | Switch when clicked. |
| `hover` | Switch when hovering. |
+++
^^^

^^^lazy
Specify whether to lazy load carousel resources.

+++Details
| Name | Description |
| -- | -- | -- |
| `false` | Do not lazy load resources. |
| `true` | Preload the resources before and after the currently displayed item. |
| `{ preload: number }` | Preload the specified number of resources before and after the currently displayed item. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``item`` | [^slot-item] |

^^^slot-item
Used to customize the area of each carousel item.

Default content: Carousel item image.

The scope parameter is the content of each item in the [`datasource`](#props-datasource) prop (which can have custom fields) plus `index: number` representing the index of the carousel item. Therefore, the entire value bound by `slot-scope` is `{src, alt, label, index, ...}`.
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |

^^^event-change
Triggered after switching, with the callback parameter `(to: number, from: number)`. `to` represents the index after switching, and `from` represents the index before switching.
^^^

### Icons

| Name | Description |
| -- | -- |
| ``prev`` | Previous page. |
| ``next`` | Next page. |

### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-carousel-transition-duration`` | `<time>` | `0.2s` | The duration of the carousel item transition animation. |
| ``--dls-carousel-slide-gutter`` | `<length>` | `0` | The spacing between carousel items when multiple items are displayed at the same time. |
