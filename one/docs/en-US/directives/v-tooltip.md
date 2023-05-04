# v-tooltip

The `v-tooltip` directive is used to add tooltip information to the target element by using the [`Tooltip` component](../components/tooltip).

:::tip
VEUI provides a unified experience optimization for globally defined tooltip prompts through `v-tooltip`. When the cursor first enters a global tooltip, a global timer for the "warm-up period" is activated. During the warm-up period, if the cursor moves out of the target area, the tooltip will not be displayed; if the cursor stays in a target area until the end of the warm-up period, the tooltip will be displayed **immediately** when the cursor hovers over any global tooltip area. When the cursor moves out of the global tooltip area, the "cooldown period" timer will be activated. During the "cooldown period", if the cursor enters the target area again, the tooltip will be displayed immediately; only if the cursor is outside the target area for more than the "cooldown period" time, it will return to the initial state, and the tooltip prompt needs to be reheated to trigger again.
:::

## Examples

### Basic

[[ demo src="/demo/directives/tooltip/default.vue" ]]

### Display on overflow

[[ demo src="/demo/directives/tooltip/overflow.vue" ]]

## API

:::tip
Please refer to the [official document](https://v2.vuejs.org/v2/guide/syntax.html#Directives) for the specific usage of the directive. For more detailed parameters, please refer to [Custom Directive](https://v2.vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments).
:::

### Options

Type: `string | Object`.

Using `string` type represents the text information of the tooltip:

```html
<button v-tooltip="Add">+</button>
```

When using `Object` type, the options can fully configure all parameters. For example:

```html
<button v-tooltip="{
  content: 'Add',
  position: 'top',
  disabled: false
}">+</button>
```

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``content`` | `string | VNode | Array<VNode>` | - | The string of the tooltip information, or the virtual node (array) returned by the rendering function. If not passed, the `textContent` of the corresponding element will be used by default. |
| ``position`` | `string` | - | The display position of the tooltip. Refer to the [`position`](../components/tooltip#props-position) property of the [`Tooltip`](../components/tooltip) component. |
| ``overflow`` | `boolean` | `false` | Whether to display the tooltip only when the content of the target element overflows the container. |
| ``disabled`` | `boolean` | `false` | Whether to disable the tooltip. |

:::warning
The parameters provided by the `Object` type will override the parameters specified by the directive arguments and modifiers.
:::

### Modifiers

Corresponding to the `position` / `overflow` in the `Object` type options. For example:

```html
<span v-tooltip.bottom-end.overflow="Add">A paragraph of very long text...</span>
```

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``tooltip.warmup`` | `number` | `800` | The number of milliseconds required to complete the "warm-up" period. |
| ``tooltip.cooldown`` | `number` | `800` | The number of milliseconds required to complete the "cooldown" period. |
