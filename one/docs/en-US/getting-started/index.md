# Getting started

:::tip
To make VEUI works in your project, please install and configure according to **all** of the following steps.
:::

## Installation

After scaffolding the project with Vue CLI, run the following under the its root directory:

```sh
npm i --save veui veui-theme-dls
npm i --save-dev less less-loader veui-loader babel-plugin-veui babel-plugin-lodash
```

## Configuration

### Babel plugin

You need to configure the auto-generated `babel.config.js` as follows:

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

Read more about `babel-plugin-veui` [here](/getting-started/babel-plugin-veui).

### Vue CLI configs

For projects that need to import the default theme package `veui-theme-dls`, we need to configure the `vue.config.js` as follows:

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

To learn more details of configuring `veui-loader`, read its documentation [here](/getting-started/veui-loader).

+++Why all these configs?
VEUI takes an approach to develop and ship component logic and themes separatedly. The component code has no explicit depency on style code so you need to use `veui-loader` to configure the theme package you want to use.

As Less 3+ does not enable inline JavaScript evaluation by default - which `veui-theme-dls` relies on, we need to enable it manually.

We intend to transpile and build VEUI and its dependencies along with the application code itself so you need to add the related packages into the transpilation process.
+++

### Global stylesheet

When using `veui-theme-dls`, you need to import the base stylesheet, which includes style normalization.

Import from JavaScript:

```js
import 'veui-theme-dls/common.less'
```


#### The number font

[[ demo src="/demo/style/number.vue" ]]

The default theme `veui-theme-dls` comes with a display type number font “Baidu Number”, but it is not included in the global style by default because the web font will be loaded automatically. If you need to use it, please import it manually in your project:

```js
import 'veui-theme-dls/typography.less'
```

Once imported, you can use a font named `"Baidu Number"` in your CSS. For scenarios envolving dynamic numbers, we may want fixed width numbers to ensure layout stability. You can set `font-variant-numeric: tabular-nums` to enable the corresponding Open Type feature which comes with this font.

```css
.heading-numbers {
  font-family: "Baidu Number", sans-serif;
  font-variant-numeric: tabular-nums; /* Fixed-width numbers */
}
```

:::warning
Please make sure that `veui-theme-dls/common.less` and `veui-theme-dls/typography.less` are only introduced once, importing them in multiple components' `<style>` blocks will result in duplicate content output.
:::
