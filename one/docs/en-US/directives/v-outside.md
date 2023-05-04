# v-outside

The `v-outside` directive is used to detect whether a specified event is triggered outside of certain elements, such as determining whether the mouse has clicked outside of the range of elements A and B.

## Examples

Detecting external click events.

[[ demo src="/demo/directives/outside/click.vue" ]]

Detecting mouse out events.

[[ demo src="/demo/directives/outside/hover.vue" ]]

If the mouse does not return to the target element area within the specified time, the external event callback function is triggered.

[[ demo src="/demo/directives/outside/hover-with-delay.vue" ]]

## API

:::tip
Please refer to the [official document](https://v2.vuejs.org/v2/guide/syntax.html#Directives) for the specific usage of the directive. For more detailed parameters, please refer to [Custom Directive](https://v2.vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments).
:::

### Options

Type: `function | object`.

Configure the callback function when triggering an external event with the `function` type. For example:

```html
<div v-outside="handler"></div>
```

When using the `object` type, the binding value can fully configure all parameters. For example:

```html
<div v-resize="{
  refs: 'box1,box2'
  handler: handleOutsideEvent,
  trigger: 'hover',
  delay: 200,
  excludeSelf: false
}"></div>
```

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``refs`` | `Array<string | Vue | HTMLElement>` | `[]` | [^refs] |
| ``handler`` | `function(event: Event): void` | `function() {}` | The callback function triggered when an external event occurs will receive the corresponding native event object parameter. The `event` parameter of the callback function will become the corresponding native event object according to the `trigger` parameter. |
| ``trigger`` | `string` | `'click'` | External event name, can be `click`, `mousedown`, `mouseup`, `hover`, `focus`. |
| ``delay`` | `number` | `0` | When `trigger` is `hover`, the callback function is triggered `delay` milliseconds after the mouse moves out of the target element. If the mouse moves back into the target element collection within `delay` milliseconds, the callback function will not be triggered. |
| ``excludeSelf`` | `boolean` | `false` | Used to determine whether to exclude the self-element when calculating the target element collection. |

^^^refs
This parameter specifies the target element collection. When the specified event is triggered outside the target element, the passed-in callback function will be called. By default, the element bound with the `v-outside` directive is included in the target element, but it can be excluded by `excludeSelf`.

+++Value types
| Type | Description |
| -- | -- |
| `string` | Find the specified DOM element collection based on `ref` in the context of the directive component. |
| `Vue` | Component instance, use `vm.$el` element directly. |
| `HTMLElement` | DOM element, use directly. |
+++
^^^

:::warning
The parameters provided by the `object` type will override the parameters specified by the directive arguments and modifiers.
:::

### Modifiers

Corresponding to `trigger` / `delay` / `excludeSelf` in the `object` type binding value. For example:

```html
<div v-outside.hover.200.excludeSelf></div>
```

:::warning
The only positive integer in the modifier will be recognized as `delay`.
:::

### Arguments

Corresponding to `refs` in the `object` type binding value. The value is a string separated by `,` and represents one or more `ref`. For example:

```html
<div v-outside:box1,box2></div>
```
