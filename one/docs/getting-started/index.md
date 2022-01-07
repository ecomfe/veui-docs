# 起步

:::tip
为了使 VEUI 在你的项目中运行，请按下述步骤完成**所有**安装及配置。
:::

## 安装

使用 Vue CLI 创建项目以后，在项目根目录下运行：

```sh
npm i --save veui veui-theme-dls
npm i --save-dev less less-loader veui-loader babel-plugin-veui babel-plugin-lodash
```

## 配置

### Babel 插件

将项目根目录中生成的 `babel.config.js` 修改为：

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

关于 `babel-plugin-veui` 的更详细信息请移步[这里](/getting-started/babel-plugin-veui)。

### Vue CLI 配置

对于需要引入默认主题包 `veui-theme-dls` 的项目，我们需要在项目根目录下的 `vue.config.js` 中进行如下配置：

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

想了解配置 `veui-loader` 的更多细节，请移步[这里](/getting-started/veui-loader)。

+++为什么要配置这些选项？
VEUI 采取了样式主题与组件代码分离的开发、发布方式。组件代码对样式代码没有显式的依赖，所以需要使用 `veui-loader` 配置关联的主题包。

同时由于 Less 3+ 不再默认开启内联 JavaScript 解析，而 `veui-theme-dls` 依赖了这一功能，所以我们需要手动开启配置项。

另外，由于我们采用将 VEUI 及其依赖与项目一起打包的策略，需要手动指定相关的依赖包进行转译。
+++


### 全局样式

在使用 `veui-theme-dls` 时，需要先全局引入基础样式以及，包括样式的 normalize 及一些基本元素的样式。

从 JavaScript 引入：

```js
import 'veui-theme-dls/common.less'
```
