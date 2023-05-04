# Overlay

## Examples

### Custom positioning

The overlay can be positioned in a custom way within the page.

[[ demo src="/demo/overlay/position.vue" ]]

### Anchored positioning

The overlay can be positioned relative to a DOM element within the page.

[[ demo src="/demo/overlay/relative-base.vue" ]]

### Stacking order

For overlays with the same priority and at the same level, the later ones will have a higher stacking order.

[[ demo src="/demo/overlay/stack-display-order.vue" ]]

An opened overlay will establish a new stacking context, and overlays opened from it will have a higher stacking order than the parent overlay.

[[ demo src="/demo/overlay/stack-on-overlay.vue" ]]

The stacking order of child overlays is affected by the parent overlay.

[[ demo src="/demo/overlay/stack-display-order-with-on-overlay.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | Predefined style. Not provided by `veui-theme-dls`, can be customized. |
| ``open`` | `boolean` | `false` | Whether the overlay is visible. |
| ``target`` | `string | Vue | Element` | - | Specifies the target element using [`ref`](https://v2.vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements), Vue component instance, or [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element). If the target element exists, the overlay will be positioned relative to it using the positioning parameters specified by the [`options`](#props-options) prop. |
| ``priority`` | `number` | - | The priority of the current overlay component instance in the stacking order relative to other instances. The larger the value, the higher it is. |
| ``autofocus`` | `boolean` | - | Whether to automatically move focus to the first focusable element in the overlay. |
| ``modal`` | `boolean` | `false` | Whether the overlay is a modal overlay. A modal overlay will take focus away and restrict keyboard navigation within the overlay (focus will return after the overlay is closed). |
| ``inline`` | `boolean` | `false` | Whether to render the overlay as inline content. |
| ``local`` | `boolean` | `false` | Whether to keep the overlay in its original DOM position instead of moving it to a global position and participate in [global overlay management](../advanced/overlay). |
| ``overlay-class`` | `string | Array | Object` | - | Class name for the overlay root element, in the format of any [`class` expression supported by Vue](https://v3.vuejs.org/guide/class-and-style.html#binding-html-classes). |
| ``overlay-style`` | `string | Array | Object` | - | Style for the overlay root element, in the format of any [`style` expression supported by Vue](https://v3.vuejs.org/guide/class-and-style.html#binding-inline-styles). |
| ``options`` | `Object` | - | Pass-through `modifiers` configuration options for the underlying Popper.js implementation. See [here](https://popper.js.org/docs/v1/#modifiers) for details. |
| ``position`` | `string` | 'auto' | Pass-through `placement` configuration option for the underlying Popper.js implementation. See [here](https://popper.js.org/docs/v1/#Popper.placements) for details. |
| ``match-width`` | `boolean` | `false` | Whether to automatically match the width of the target element when the overlay is narrower. |

^^^open
:::badges
`.sync`
:::

Whether the overlay is visible.
^^^

^^^target
Specifies the target element using [`ref`](https://v2.vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements), Vue component instance, or [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element). If the target element exists, the overlay will be positioned relative to it using the positioning parameters specified by the [`options`](#props-options) prop.

+++Value types
| Type | Description |
| -- | -- |
| `string` | Looks up a DOM element or the root element of a component instance by matching the key name in `$refs` in the current context of the overlay component. |
| `Vue` | If a component instance is passed in, its root element is returned directly. |
| `Element` | If it is already a DOM element, it is used directly. |
+++
^^^

^^^priority
The priority of the current overlay component instance in the stacking order relative to other instances. The larger the value, the higher it is.

:::tip
Since the root element of all overlay components is placed under the `<body>` element, the overlay module implements a global stacking context for better control of the overlay stacking order. The parent-child relationship of components determines the nesting relationship of overlays, and each overlay component instance in the same level can use `priority` to achieve different relative stacking orders between instances. For components with the same `priority` value, the order in which they were instantiated determines their stacking order, with later instantiated components on top of earlier ones.
:::
^^^

^^^overlay-class
Class name for the overlay root element, in the format of any [`class` expression supported by Vue](https://v2.vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes).

:::tip
Since the root element of the overlay is placed under the `<body>` element, this property can be used to set class names for the overlay root element to customize its appearance.
:::
^^^

^^^overlay-style
Style for the overlay root element, in the format of any [`style` expression supported by Vue](https://v2.vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles).
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Content of the overlay. |

### Events

| Name | Description |
| -- | -- |
| ``locate`` | Triggered when the position of the overlay changes. |
| ``afteropen`` | Triggered after the overlay is opened. The content of the overlay is rendered after opening, so if there is logic that depends on the content being rendered, execute it after this event is triggered. |
| ``afterclose`` | Triggered after the overlay is closed. If the theme provides an exit animation, it will be triggered after the animation is complete. |
| ``orderchange`` | Triggered when the `z-index` of the overlay changes. The parameter is `(order: number)`, where `order` is the new `z-index`. |

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``overlay.overlayClass`` | `string | Array | Object` | `[]` | Class name(s) to be added to the overlay container globally. The data format is any [class binding](https://v2.vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes) supported by Vue. |
