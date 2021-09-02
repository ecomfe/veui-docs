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

### webpack Loader

In general, you need to configure `vue.config.js` in the root directory as follows:

```js
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
      .tap(() => {
        return {
          modules: [
            {
              package: 'veui-theme-dls',
              fileName: '{module}.less'
            },
            {
              package: 'veui-theme-dls',
              fileName: '{module}.js',
              transform: false
            }
          ]
        }
      })
  }
}
```

To learn more details of configuring `veui-loader`, read its documentation [here](/getting-started/veui-loader).

+++Why all these configs?
VEUI's style code is separate from its components. The component code doesn't explicitly depend on style code so `veui-loader` is needed to specify and inject style package into the components.

If you want to use `veui-theme-dls`, the default style package, you need import and configure `veui-loader` for webpack. As Less 3+ no longer enable JavaScript evaluation by default, which `veui-theme-dls` relies on, you need to manually enable this option.

We intend to transpile and build VEUI and its dependencies along with the application code itself so you need to add the related packages into the transpilation process.
+++

### Global stylesheet

When using `veui-theme-dls`, you need to import the base stylesheet, which includes style normalization.

Import from JavaScript:

```js
import 'veui-theme-dls/common.less'
import 'focus-visible'
```
