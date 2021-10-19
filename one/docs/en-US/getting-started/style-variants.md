# Style variants

VEUI provide style variants via the `ui` prop. Theme packages can provide different `ui` value for each component and users can also use custom `ui` values to create extended style variants.

### The `ui` prop

The `ui` prop takes a string consists of a list of whitespace-separated tokens, similar to HTML's native `class` attribute. Each token stands for a style variant of a component. In the following example, `primary` and `large` are both style variants of component `<veui-button>`:

```html
<veui-button ui="primary large">OK</veui-button>
```

:::tip
As we know, most component libraries provide style variants via enum props like `shape` / `size` / `type`/... .

While our design goal is that VEUI should not be bound to a specific design language tightly (though it's hard to completely decouple component structure/behavior and design languages). If we use enum props, once we need to create a completely new theme package but some of the new style variants cannot be described with the preserved enum props, we'll have to use something like `class` to attach style hooks to implement these style variants.

Using `class` will lead to problems of naming conventions, prefixes, etc. So we decided to directly output a custom attribute `ui` to component's DOM nodes for more semantic style variants and minimize the coupling with component logic.
:::

### Use the DLS theme

You can enable `veui-theme-dls` by setting the corresponding options for [`veui-loader`](./veui-loader). The theme package provides style variants for most components. You can refer to documentation for the `ui` prop in each component to learn about the supported style variants.

### Custom style variants

You don't need to register via component API to define custom `ui` tokens. Just adding style declarations for the corresponding `[ui~="..."]` selector would be sufficient.

eg. If you want a new `secondary` variant for `Button` component, just add styles to `.veui-button[ui~"secondary"]`:

[[ demo src="/demo/ui.vue" ]]

### Custom theme package

If you want to create a custom theme package, please read more about VEUI's theming API more the advanced ways of customizing `ui` prop at [Advanced › Theming](../advanced/theming).
