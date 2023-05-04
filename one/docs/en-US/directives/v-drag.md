# v-drag

The `v-drag` directive is used to handle scenarios where the shape and position of the target element are transformed based on mouse drag.

## Examples

### Basic

[[ demo src="/demo/directives/drag/base.vue" ]]

### Containment

[[ demo src="/demo/directives/drag/containment.vue" ]]

### Multiple

[[ demo src="/demo/directives/drag/targets.vue" ]]

### Directions

[[ demo src="/demo/directives/drag/axis.vue" ]]

### Horizontal sorting

[[ demo src="/demo/directives/drag/sort-x.vue" ]]

### Vertical sorting

[[ demo src="/demo/directives/drag/sort-y.vue" ]]

## API

:::tip
Please refer to the [official document](https://v2.vuejs.org/v2/guide/syntax.html#Directives) for the specific usage of the directive. For more detailed parameters, please refer to [Custom Directive](https://v2.vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments).
:::

### Options

Type: `Object`.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``type`` | `string` | - | Specifies the type of drag behavior. Currently, there are two built-in modes: `translate` and `sort`, which can be [extended](#extension). |
| ``disabled`` | `boolean` | `false` | Whether the directive is disabled. |
| ``containment`` | `string | Vue | HTMLElement | Object` | - | [^containment] |
| ``handle`` | `string | Vue | HTMLElement` | - | Specifies the "handle" element for the drag operation. Only dragging the corresponding element will trigger the drag. The type is the same as the [`containment`](#options-containment) parameter (the plain `Object` type is not supported), and if the string type does not find the `ref`, it will try to use it as a CSS selector. |
| ``exclude`` | `string` | - | Used to specify elements that are not used as "handles". Generally used to remove some elements from the "handle" to avoid triggering drag. The string type is used as a CSS selector. |
| ``targets`` | `Array<string | Vue | HTMLElement>` | `[]` | [^targets] |
| ``axis`` | `string` | - | Limits all target elements to transform or specifies the drag sorting element sorting direction in the horizontal or vertical direction. Optional value type: `'x' | 'y'`. |
| ``dragstart`` | `function(): Object` | `function() {}` | [^dragstart] |
| ``drag`` | `function(): Object` | `function() {}` | [^drag] |
| ``dragend`` | `function(): Object` | `function() {}` | The callback function for the drag end event. The callback parameters are the same as `drag`. |
| ``ready`` | `function` | `function() {}` | Callback function when the directive is initialized. A handle object parameter is passed out, and this object has a `reset()` method to reset all target elements to the state before the transformation. |
| ``name`` | `string` | - | [^name] |
| ``sort`` | `function(fromIndex: number, toIndex: number): void` | - | [^sort-callback] |

^^^targets
:::badges
`translate`
:::

This parameter specifies the target element set. When you drag the mouse on the element where the directive is located, all target elements will be transformed according to the specified method.

+++Value types
| Type | Description |
| -- | -- |
| `string` | Find the specified DOM element collection based on `ref` in the component context where the directive is located. |
| `Vue` | Component instance, use `vm.$el` element directly. |
| `HTMLElement` | DOM element, use directly. |
+++
^^^

^^^dragstart
The callback function for the drag start event. The callback parameters are `({ event: DragEvent })`.
^^^

^^^drag
The callback function for the drag event. The callback parameters are `({ event, distanceX, distanceY })`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `event` | [`DragEvent`](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent) | The original drag event object. |
| `distanceX` | `number` | The total distance moved horizontally since the drag began. |
| `distanceY` | `number` | The total distance moved vertically since the drag began. |
+++
^^^

^^^name
:::badges
`sort`
:::

Used to mark the drag sorting group name, and sorting will be performed between elements with the same group name.
^^^

^^^sort-callback
:::badges
`sort`
:::

The sorting directive only informs the user of the sorting situation through the callback, that is: moving from the original position (`fromIndex`) to the new position (`toIndex`), and the data source needs to be updated based on this information.
^^^

^^^^containment
During the transformation, the target element should always be located within the area specified by `containment`.

If the `containment` resolves to a DOM element, then all target elements should be transformed within that element. If it resolves to a rectangular area description (relative to the viewport's top, left, width, height), then all target elements should be transformed within that rectangular area.

+++Value types
| Type | Description |
| -- | -- |
| `string` | Find the specified DOM element based on the `ref` in the context of the directive's component. Passing `@window` calculates the viewport position. |
| `Vue` | Find the DOM element based on the component instance. |
| `HTMLElement` | Directly accept a DOM element. |
| `Object` | [^containment-object] |
+++

^^^containment-object
:::badges
`translate`
:::

Accepts any plain object containing the fields `{ top, left, width, height }`, representing the coordinates and size of the rectangular area relative to the viewport, all four fields are of type `number`.
^^^
^^^^

:::warning
The options value will override the parameters specified by the directive's arguments and modifiers.
:::

### Modifiers

Corresponding to the values of `type` / `axis` in the `Object` options. For example:

```html
<!-- Apply displacement transformation along the vertical direction -->
<div v-drag.translate.y></div>
```

### Arguments

Corresponding to the `targets` field in the `Object` options. The value is a string of one or more `ref` separated by commas. For example:

```html
<div v-drag:box1,box2></div>
```

## Extension

You can extend the `v-drag` directive by inheriting from `BaseHandler`:

```js
import BaseHandler from 'veui/directives/drag/BaseHandler'
import { registerHandler } from 'veui/directives/drag'

class RotateHandler extends BaseHandler { }

registerHandler('rotate', RotateHandler)
```

Then use `RotateHandler` with the `type` parameter:

```html
<div v-drag="{ type: 'rotate' }"></div>
<!-- or -->
<div v-drag.rotate></div>
```

:::warning
The name of `type` cannot conflict with existing [modifiers](#modifiers).
:::

### `BaseHandler`

The members of `BaseHandler` are explained as follows:

| Member | Type | Description |
| -- | -- | -- |
| `options` | `Object` | An object composed of parsed parameters. |
| `context` | `Vue` | The component where the directive is used. |
| `isDragging` | `boolean` | Whether it is in the process of dragging. |
| `start` | `function(Object)` | Same as the `dragstart` field in the [options](#options). |
| `drag` | `function(Object)`| Same as the `drag` field in the [options](#options). |
| `end` | `function(Object)`| Same as the `dragend` field in the [options](#options). |
| `destroy` | `function()` | Called when the directive is unbound from the DOM element. |
| `setOptions` | `function(options)` | Set the parameters. |
| `reset` | `function()` | Reset the transformation. |
