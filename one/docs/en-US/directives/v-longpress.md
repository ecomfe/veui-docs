# v-longpress

The `v-longpress` directive is used to handle mouse long press events.

## Examples

[[ demo src="/demo/directives/longpress.vue" ]]

## API

:::tip
Please refer to the [official document](https://v2.vuejs.org/v2/guide/syntax.html#Directives) for the specific usage of the directive. For more detailed parameters, please refer to [Custom Directive](https://v2.vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments).
:::

### Options

Type: `function | Object`.

When using the `function` type, the options represents the callback function that triggers long press or subsequent repeated triggering. For example:

```html
<button v-longpress="handleLongPress">+</button>
```

When using the `Object` type, the options can fully configure all parameters. For example:

```html
<button v-longpress="{
  timeout: 500,
  handler: handleLongPress,
  repeat: true,
  repeatInterval: 100
}">+</button>
```

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``timeout`` | `number` | `longpress.timeout` | The number of milliseconds to wait for long press. Can be configured [globally](#configs-longpress-timeout). |
| ``handler`` | `function` | `function() {}` | The callback function triggered by long press and subsequent repeated triggering. |
| ``repeat`` | `boolean` | `false` | Whether to repeatedly trigger the callback function when holding down, similar to the effect of continuous automatic input after pressing a keyboard key. |
| ``repeatInterval`` | `number` | `longpress.repeatInterval` | The number of milliseconds between repeated triggering of the callback function. Can be configured [globally](#configs-longpress-repeatInterval). |

:::warning
The parameters provided by the `Object` type will overwrite the parameters specified by the directive arguments and modifiers.
:::

### Modifiers

Corresponding to `repeat` in the `Object` type options. For example:

```html
<button v-longpress.repeat="increase">+</button>
```

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``longpress.timeout`` | `number` | `500` | The number of milliseconds to wait for long press. |
| ``longpress.repeatInterval`` | `number` | `100` | The number of milliseconds between repeated triggering of the callback function. |
