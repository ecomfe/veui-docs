# Theming

The VEUI component library and theme package are completely decoupled. There are no style codes in the component library, and each component's style needs to be provided by the corresponding style file in the theme package.

To easily inject the required style files into components while selectively importing them, we provide `veui-loader`, which automatically injects dependent style files into components through configuration. For details, please refer to the [relevant introduction](../getting-started/veui-loader) of `veui-loader`.

## Creating custom theme package

When injecting dependencies into VEUI with `veui-loader`, script and style module types are supported at the same time. Therefore, the theme package can provide these two types of theme configurations for each component.

### Custom theme

:::warning
Note that the theme package style has dependencies on the DOM structure of VEUI components.
:::

To provide complete styles for each component, any preprocessor language can be used. The specific class names and selectors provided by each component can be found in the implementation of `veui-theme-dls`.

```less
.veui-button {
  /* ... */
}
```

### Custom icon

VEUI's `Icon` component encapsulates [Vue-Awesome](https://justineo.github.io/vue-awesome/demo/) to output inline SVG icons, which cannot be specified directly in style code and need to be registered through script modules. Each component defines a semantically clear icon interface, and all we need to do is inject the corresponding icon name mapping into the component in the global configuration and import the corresponding icon module:

```js
import config from 'veui/managers/config'
import '../icons/angle-up-small'
import '../icons/angle-down-small'

config.defaults({
  icons: {
    expand: 'angle-down-small',
    collapse: 'angle-up-small'
  }
}, 'select')
```

In addition to the icons included in `veui-theme-dls`, the following icon packages can also be used:

* [`vue-awesome/icons`](https://justineo.github.io/vue-awesome/demo/): FontAwesome icon package included in Vue-Awesome
* [`vue-awesome-material-icons/icons`](https://justineo.github.io/vue-awesome-material-icons/demo/): Material Icons icon package based on Vue-Awesome

### Preset styles and custom configuration

The switchable preset styles of each component in VEUI are implemented by providing an extendable `ui` configuration for the theme package.

To add a new preset style `foo`, you only need to add the corresponding style for `[ui~="foo"]` in the style file and add the corresponding `ui="foo"` declaration when using the component:

```less
.veui-select {
  /* ... */

  &[ui~="foo"] {
    color: #f00;
  }
}
```

```html
<veui-select ui="foo">...</veui-select>
```

A component can also apply multiple preset styles at the same time:

```html
<veui-select ui="foo bar">...</veui-select>
```

However, if we want to define preset styles more elaborately, for example, `foo` and `bar` are two preset styles of the component that cannot be used simultaneously, what should we do? For example, the `small` and `large` styles both customize the size of the component and are mutually exclusive. In this case, we need to inject more detailed `ui` configurations into the component in the global configuration.

Each property name under the `ui` field needs to declare the name of the preset style to be declared, and its value type is: `{ values, boolean, inherit }`.

Field details:

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `values` | `Array<string>` | - | Optional values for the preset `ui` attribute. |
| `boolean` | `boolean` | `false` | Whether the preset `ui` attribute is boolean. |
| `inherit` | `boolean` | `false` | Whether the preset `ui` attribute value will be inherited by child components. |

Taking `NumberInput` component as an example:

```js
import config from 'veui/managers/config'

config.defaults({
  ui: {
    size: {
      values: ['xs', 's', 'm'],
      default: 'm',
      inherit: true
    },
    style: {
      values: ['normal', 'strong'],
      default: 'normal'
    }
  }
}, 'select')
```

In the example above, we defined two `ui` props: `size` and `style`. They are both enum types, and the `size` value can be inherited by child components. When calling the `Select` component, you can enable the preset styles as follows:

```html
<veui-select ui="strong s">...</veui-select>
```

Of course, we can also completely not define the details of the `ui` prop. At this time, VEUI will output the `ui` prop written by the user as it is, without special processing such as deduplication, conflict detection of property values for the same property, and inheritance.

:::warning
Because the `ui` prop will eventually serialize the values into a string separated by spaces and output it to the DOM element, the values of each prop cannot conflict.
:::

### Preset `ui` for internal parts

Some components are composed of multiple other components. At this time, we may need to globally specify the preset styles of specific parts inside. For example, in `veui-theme-dls`, the cancel button in `Dialog` uses the default style by default, but in other themes, we may want to reset it to the `link` style. At this time, you can use global configuration to modify the component's `parts` mapping.

```js
import config from 'veui/managers/config'

config.defaults({
  parts: {
    ok: 'primary',
    cancel: 'link'
  }
}, 'select')
```

If you want the `ui` prop value of the part to be dynamically calculated based on the declared/inherited values, you can also directly use the computing function:

```js
import config from 'veui/managers/config'

const SIZE_MAPPING = {
  xs: 's',
  s: 's',
  m: 's',
  l: 'm'
}

config.defaults({
  parts: {
    item: ({ size }) => SIZE_MAPPING[size]
  }
}, 'select')
```

In the example above, the `ui` prop of the `item` internal component of the component will be mapped based on the `size` prop.

## List of theme packages

* [veui-theme-dls](https://github.com/ecomfe/veui/tree/dev/packages/veui-theme-dls): VEUI 2.x theme based on Light DLS.
* [veui-theme-blue](https://github.com/ecomfe/veui-theme-blue): VEUI 2.x theme based on Theme Blue.
* [veui-theme-spectre](https://justineo.github.io/veui-theme-spectre/demo/): VEUI 1.x theme based on Spectre.css.
