# Icon

:::tip
VEUI's `Icon` component is compatible with [Vue-Awesome](https://github.com/Justineo/vue-awesome), including icon registration and specifying icon with a string-typed `name` prop. The `name` prop also accept a component definition directly.
:::

## Demos

[[ demo src="/demo/icon/default.vue"]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `name` | `string|Object` | - | The name of the icon or its component definition. |
| `label` | `string` | - | The descriptive label for the icon, which is accessible to assistive devices. The icon is hidden for assistive devices if `label` doesn't exist. |
| `scale` | `number` | - | The size scale of the icon. Doesn't scale by default. |
| `spin` | `boolean` | `false` | Whether the icon should be spinning. |
| `pulse` | `boolean` | `false` | Whether the icon should be pulsing. |
| `inverse` | `boolean` | `false` | Whether to inverse the color. (Having a white foreground to be used against dark backgrounds.) |
| `flip` | `string` | - | How to flip an icon. Can be either `'horizontal'` or `'vertical'`. |

:::warning
When specifying a component definition for the `name` prop, only `spin` prop is supported.
:::

### Slots

| Name | Description |
| -- | -- |
| `default` | Can be used to implement a stacked icon. The embedded `Icon` components will be stacked together, being centered. The wrapper `Icon` doesn't require the `name` prop. |
