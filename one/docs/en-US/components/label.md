# Label

## Examples

### Activation

You can use the [`for`](#props-for) prop to specify the `ref` of the component to be activated. Clicking on the label area can trigger it.

[[ demo src="/demo/label/default.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``for`` | `string` | - | [^for] |

^^^for
Allows specifying the target component or element through [`ref`](https://v2.vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements), [Vue component instance](https://v2.vuejs.org/v2/guide/instance.html), or [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). If a component is specified, clicking on the label will call the `activate` method of the corresponding component (if it exists); if an element is specified, clicking on the label will call the [`click` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) of the corresponding element.

+++Value types
| Type | Description |
| -- | -- |
| `string` | Looks up the HTML element or the root element of the corresponding component instance by matching the key name in `$refs` within the current floating layer component context. |
| `Vue` | If a component instance is passed in, the root element of the component is returned directly. |
| `HTMLElement` | If it is already an HTML element, it is used directly. |
+++
^^^


### Slots

| Name | Description |
| -- | -- |
| `default` | Default slot. No default content. Used to fill inline content, **not allowed** to put block-level content. |
