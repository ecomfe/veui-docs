# v-resize

The `v-resize` directive is used to detect whether an element has been resized.

## Examples

[[ demo src="/demo/directives/resize.vue" ]]

## API

:::tip
Please refer to the [official document](https://v2.vuejs.org/v2/guide/syntax.html#Directives) for the specific usage of the directive. For more detailed parameters, please refer to [Custom Directive](https://v2.vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments).
:::

### Options

Type: `function | Object`.

If using the `function` type, the options represents the callback function triggered on resize. For example:

```html
<div v-resize="handler"></div>
```

When using the `Object` type, the options can fully configure all parameters. For example:

```html
<div v-resize="{
  wait: 100,
  mode: 'debounce',
  handler: cb,
  leading: true
}"></div>
```

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``wait`` | `number` | `150` | The number of milliseconds passed to the `mode` function. |
| ``mode`` | `string` | - | [^mode] |
| ``handler`` | `function` | - | The callback function triggered on resize. |
| ``leading`` | `boolean` | `false` | Whether the debounce or throttle mode will be executed once at the beginning of the resize. |

^^^mode
Execution mode, defaults to the finest granularity.

+++Enum values
| Value | Description |
| -- | -- |
| `debounce` | Debounce mode. |
| `throttle` | Throttle mode. |
+++
^^^

:::warning
The parameters provided by the `Object` type will override the parameters specified by the directive arguments and modifiers.
:::

### Modifiers

Corresponding to `mode` / `leading` / `wait` in the `Object` type options. `leading` can be used with one of `debounce` or `throttle`. For example:

```html
<div v-resize.throttle.leading.500="handler"></div>
```

| Name | Description |
| -- | -- |
| ``debounce`` | Use debounce mode, cannot be used with `throttle`. |
| ``throttle`` | Use throttle mode, cannot be used with `debounce`. |
| ``leading`` | When used, the debounce or throttle mode will be executed once at the first resize. |
| <var>wait</var> | The number of milliseconds passed to the `mode` function, where <var>wait</var> is a variable. |

:::warning
The only positive integer in the modifier will be recognized as `wait`.
:::
