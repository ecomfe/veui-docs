# v-nudge

The `v-nudge` directive is used to adjust values using directional keys on the keyboard.

:::warning
The element or root element of the component to which `v-nudge` is applied must be able to receive focus. Elements that already receive focus such as `<button>` and `<input>`, or the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute can be used.
:::

## Examples

:::tip
When the directional keys are pressed while the <kbd>shift</kbd> or <kbd>alt</kbd> key is also pressed, the change value will be increased or decreased by a factor of 10.
:::

[[ demo src="/demo/directives/nudge.vue" ]]

## API

:::tip
Please refer to the [official document](https://v2.vuejs.org/v2/guide/syntax.html#Directives) for the specific usage of the directive. For more detailed parameters, please refer to [Custom Directive](https://v2.vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments).
:::

### Options

Type: `function | Object`.

When using the `function` type, the options represent the callback function triggered after the directional keys are pressed. For example:

```html
<div tabindex="-1" v-nudge="update"></div>
```

When using the `Object` type, the options can fully configure all parameters. For example:

```html
<div tabindex="-1" v-nudge="{
  step: 5,
  axis: 'y',
  update: increase
}"></div>
```

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``axis`` | `string` | `y` | Restricts adjustment with only left and right or up and down directional keys. Optional value types: `'x' | 'y'` |
| ``step`` | `number` | `nudge.step` | Step value. Can be globally configured. |
| ``update`` | `function(delta: number)` | `function() {}` | Triggered when the value changes, passing in the changed value. The parameter `delta` is the calculated numeric change. |

:::warning
The parameters provided by the `Object` type will overwrite the parameters specified by the directive argument and modifier.
:::

:::warning
`v-nudge` only generates the change value obtained from the directional keys, and does not modify the value itself. The user needs to handle it in the `update` callback.
:::

### Modifiers

Corresponding to the `axis` / `step` in the `Object` type binding value. For example:

```html
<div tabindex="-1" v-nudge.x.2="{ update: delta => this.val += delta }"></div>
```

| Name | Description |
| -- | -- |
| ``x`` | Restricts adjustment with only left and right directional keys. |
| ``y`` | Restricts adjustment with only up and down directional keys. |
| <var>step</var> | The step value, note that <var>step</var> is a variable here. |

:::warning
The only positive integer in the modifier will be recognized as `step`.
:::

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``nudge.step`` | `number` | `1` | Step value. |
