# Icon

:::tip
The `Icon` component of VEUI is currently compatible with the way [Vue-Awesome](https://github.com/Justineo/vue-awesome) is registered and specifies the icon through the `name` prop of string type. It also supports rendering by directly passing in component definitions.
:::

## Examples

### Built-in icons

[[ demo src="/demo/icon/default.vue"]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``name`` | `string | Object` | - | The name of the icon or its component definition. |
| ``label`` | `string` | - | The textual description of the icon, visible to assistive devices. When not set, the icon is hidden to assistive devices. |
| ``spin`` | `boolean` | `false` | Whether to maintain the rotation state. |
