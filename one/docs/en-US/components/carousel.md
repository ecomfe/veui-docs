# Carousel

## Demos

### Switching items

Use the `index` to control the current item to be displayed.

[[ demo src="/demo/carousel/switch.vue" ]]

### Indicator type

Use the `indicator` prop to specify the type of step indicators.

[[ demo src="/demo/carousel/indicator.vue" ]]

### Autoplay

Use the `autoplay` prop to enable autoplay.

[[ demo src="/demo/carousel/autoplay.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `datasource` | `Array<Object>` | `[]` | [^datasource] |
| `index` | `number=` | `0` | [^index] |
| `indicator` | `string=` | `'radio'` | [^indicator] |
| `switch-trigger` | `string=` | `'click'` | [^switch-trigger] |
| `autoplay` | `boolean=` | `false` | Whether to autoplay the carousel. |
| `pause-on-hover` | `boolean=` | `false` | Whether to pause the cycling on hover when autoplaying. |
| `interval` | `number=` | `3000` | The amount of time to delay between automatically cycling an item. |
| `wrap` | `boolean=` | `false` | Whether the carousel should cycle continuously or have hard stops. |

^^^datasource
The media datasource for the carousel, with the item type being `{src, alt, label}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `src` | `string` | The source of the image. |
| `alt` | `string` | The alternate text of the image. |
| `label` | `string` | Descriptive title of the image. |
+++
^^^

^^^index
:::badges
`.sync`
:::

The index of the current image within the datasource.
^^^

^^^indicator
The way the indicator is displayed.

+++Enum values
| Value | Description |
| -- | -- |
| `radio` | As radio buttons. |
| `number` | As numeric value in the form of *current item / total items*. |
| `none` | Not displayed. |
^^^

^^^switch-trigger
The behavior triggers item switch when radio indicator is displayed.

+++Enum values
| Value | Description |
| -- | -- |
| `click` | Switched on click. |
| `hover` | Switched on hover. |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| `item` | [^scoped-slot-item] |

^^^scoped-slot-item
The content of each carousel item. Displays the corresponding image by default.

The slot scope properties are the same as each item inside `datasource` (including custom properties), with an extra `index: number`, which denotes the index within the datasource. i.e. The `slot-scope` is in the form of `{src, alt, label, index, ...}`.
^^^

### Events

| Name | Description |
| -- | -- |
| `change` | [^event-change] |

^^^event-change
Triggered the current item changed. The callback argument list is `(to: number, from: number)`. `to` and `from` denote the new index and the old index respectively.
^^^

### Icons

| Name | Description |
| -- | -- |
| `prev` | Previous item. |
| `next` | Next item. |
