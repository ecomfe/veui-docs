# Overlay

## Demos

### Custom positioning

Overlays can be positioned with custom styles.

[[ demo src="/demo/overlay/position.vue" ]]

### Position relative to an element

Overlays can also be positioned relative to an existing DOM element in the page.

[[ demo src="/demo/overlay/relative-base.vue" ]]

### Stacking order

For sibling overlays with same priority, the ones opened later have a higher stacking order.

[[ demo src="/demo/overlay/stack-display-order.vue" ]]

Opened overlays will establish new stacking contexts and overlays opened inside those overlays will have higher stacking order than their parents.

[[ demo src="/demo/overlay/stack-on-overlay.vue" ]]

The stacking order of child overlays a affected by their parent overlays.

[[ demo src="/demo/overlay/stack-display-order-with-on-overlay.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | Style variants. Not defined by `veui-theme-dls` but can be customized. |
| `open` | `boolean` | `false` | [^open] |
| `target` | `string|Vue|HTMLElement` | - | [^target] |
| `priority` | `number` | - | [^priority] |
| `autofocus` | `boolean` | - | Whether to automatically focus the first focusable element in the overlay. |
| `modal` | `boolean` | `false` | Whether the overlay will preempt focus and trap focus upon keyboard navigation (will return focus when closed). |
| `inline` | `boolean` | `false` | Whether to render the overlay as inline content. |
| `local` | `boolean` | `false` | Whether to keep the overlay in it's original DOM location, instead of moving it to the global scope and participates in the [global overlay management](../advanced/overlay). |
| `overlay-class` | `string|Array|Object=` | - | [^overlay-class] |
| `options` | `Object` | Configuration object passed to the `modifiers` option of the underlying Popper.js implementation. See [here](https://popper.js.org/docs/v1/#modifiers) for more details. |

^^^open
:::badges
`.sync`
:::

Whether the overlay is displayed.
^^^

^^^target
Either of a valid [`ref`](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements), a [Vue component instance](https://vuejs.org/v2/guide/instance.html) or an HTML [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) can be used to specify the target element to be relatively positioned against. The positioning logic is specified by `position` and `options`.

+++Value types
| Type | Description |
| -- | -- |
| `string` | A ref inside current component context's `$refs` object. Uses the root element when matches a component. |
| `Vue` | When specified as a Vue component instance, use its root element. |
| `HTMLElement` | Specify the HTML element directly. |
+++
^^^

^^^priority
The stacking order priority of current overlay. For all overlays under same parent overlay in the stacking context tree, the overlay with higher priority will be displayed over those with lower priority.

:::tip
As the root elements of all overlays will be placed as direct children of the `<body>` element, a custom global stacking context mechanism is implemented in VEUI's overlay manager to better control the stacking order of all overlays. The parent-child relationship between overlay components creates tree hierarchy of the stacking context. Sibling overlays are stacked according to their `priority`. Those share the same `priority` value are stacked according to the time when they are instantiated, the ones are instantiated later displays on top of earlier ones.
:::
^^^

^^^overlay-class
The class expression applied to the root element of the overlay. Supports all values defined by [Vue's `class` expressions](https://vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes).

:::tip
As the root element of all overlays are placed as direct children of the `<body>` element, this prop can be used to specify custom classes for the root element to customize styles.
:::
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | The content of the overlay. |

### Events

| Name | Description |
| -- | -- |
| `locate` | Triggered when the overlay updated its location. |
| `afteropen` | Triggered after the overlay is opened. If leave transition is provided by theme, then `afteropen` will be triggered when the transition finishes. |
| `afterclose` | Triggered after the overlay is closed. If leave transition is provided by theme, then `afterclose` will be triggered when the transition finishes. |

### Global config

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| `overlay.overlayClass` | `string|Array|Object=` | `[]` | The class name to be applied to every overlay. Supports all values defined by [Vue's `class` expressions](https://vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes). |
