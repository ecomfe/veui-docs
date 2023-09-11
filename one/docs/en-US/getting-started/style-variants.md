# Style variants

VEUI components provide preset styles through the `ui` prop. Different theme packages can provide different `ui` values for each component to extend, and users can also customize `ui` values and their styles to extend the preset styles of VEUI components.

### `ui` prop

The `ui` prop is a space-separated string, similar to the native `class` attribute in HTML. Each item represents a preset style of the component. In the example below, `primary` and `large` both define a preset style of the `<veui-button>` component:

```html
<veui-button ui="primary large">OK</veui-button>
```

:::tip
We know that many component libraries usually provide predefined styles through some enumerated props of components, such as `shape` / `size` / `type`, etc.

However, according to our design intention, VEUI should try to avoid binding to specific design languages (although it is unlikely that the generated structure of the component can be completely decoupled from the design language). If a new theme needs to be added when using the method of predefined enumerated props, but some additional styles that can be selected are not reserved as enumerated props on VEUI components in this theme, only `class` can be used to add style hooks imperceptibly.

Then there will be a series of problems such as naming and prefixing of `class`, so we simply provide a custom prop `ui` and output it to the DOM element of the component to achieve preset styles with clearer semantics and decoupling from component logic.
:::

### Using the DLS theme

By using the corresponding configuration of [`veui-loader`](./veui-loader), you can load the `veui-theme-dls` theme package in VEUI. The theme package provides optional preset styles in different dimensions for many components. You can refer to the documentation of each component for the explanation of supported preset styles of the `ui` prop.

#### Built-in Sub-Themes

The `veui-theme-dls` theme package comes with several built-in sub-themes that can be switched using the ui attribute. For example:

```html
<veui-input ui="theme:d22"/>
```

[[ demo src="/demo/style/d22.vue" ]]

:::tip
In addition to specifying it directly with `ui="theme:d22"`, you can also set `{ theme: 'd22' }` for the [ConfigProvider](../components/config-provider) component to specify the sub-theme. Components within the specified sub-theme will automatically inherit it.
:::

### Custom preset styles

Adding a custom `ui` item does not require registration through the component API, just add the corresponding styles for the `[ui~="..."]` selector in the style file.

For example, to add a `secondary` style for `Button` component, just write the styles for `.veui-button[ui~="secondary"]`.

[[ demo src="/demo/ui.vue" ]]

### Custom theme packages

For information on developing custom theme packages, please refer to [Advanced › Theming](../advanced/theming) to learn more about the conventions and more advanced methods for customizing the `ui` prop in VEUI.
