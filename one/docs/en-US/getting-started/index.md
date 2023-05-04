# Getting started

:::tip
To use VEUI in your project, please follow the steps below for **all** installation and configuration.
:::

## Installation

After creating a project using Vue CLI, run the following command in the project root directory:

```sh
npm i --save veui veui-theme-dls
npm i --save-dev less less-loader veui-loader babel-plugin-veui babel-plugin-lodash
```

## Configuration

### Babel plugin

Modify the `babel.config.js` generated in the project root directory as follows:

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    'veui',
    'lodash'
  ]
}
```

For more detailed information about `babel-plugin-veui`, please visit [here](/getting-started/babel-plugin-veui).

### Vue CLI configs

For projects that need to import the default theme package `veui-theme-dls`, we need to configure the `vue.config.js` in the project root directory as follows:

```js
const veuiLoaderOptions = require('veui-theme-dls/veui-loader-options')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  transpileDependencies: ['veui'],
  chainWebpack (config) {
    config.module
      .rule('veui')
      .test(/\.vue$/)
      .pre()
      .use('veui-loader')
      .loader('veui-loader')
      .tap(() => veuiLoaderOptions)
  }
}
```

For more details on configuring `veui-loader`, please visit [here](/getting-started/veui-loader).

+++Why do we need to configure these options?
VEUI adopts the development and publishing method of separating the style theme from the component code. The component code does not have an explicit dependency on the style code, so we need to use `veui-loader` to configure the associated theme package.

At the same time, because Less 3+ no longer enables inline JavaScript parsing by default, and `veui-theme-dls` relies on this feature, we need to manually enable the configuration item.

In addition, since we adopt the strategy of packaging VEUI and its dependencies with the project, we need to manually specify the relevant dependency packages for translation.
+++

### Global stylesheet

When using the default theme `veui-theme-dls`, you need to first globally import the basic styles, including the normalize style and some basic element styles.

Import from JavaScript:

```js
import 'veui-theme-dls/common.less'
```

#### Numeric font

[[ demo src="/demo/style/number.vue" ]]

The default theme `veui-theme-dls` comes with a display-type numeric font "Baidu Number". However, since it automatically loads web fonts when enabled, it is not included in the global styles by default. If you need to use it, please manually import it into your project:

```js
import 'veui-theme-dls/typography.less'
```

After importing, you can use the font named "Baidu Number" in CSS. At the same time, in dynamic numeric scenarios, it is often necessary to ensure the relative stability of the layout by making the digits monospaced. You can set `font-variant-numeric: tabular-nums` to enable the corresponding Open Type feature in the font.

```css
.heading-numbers {
  font-family: "Baidu Number", sans-serif;
  font-variant-numeric: tabular-nums; /* Monospaced scenario */
}
```

:::warning
Please ensure that `veui-theme-dls/common.less` and `veui-theme-dls/typography.less` are only imported once. Repeatedly importing them in multiple components will cause the content to be output repeatedly.
:::
