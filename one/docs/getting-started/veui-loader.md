# veui-loader

这个 webpack loader 帮助我们自动在构建时按组件自动自动注入主题、语言包等依赖的模块。

你可以在 loader 选项中，给每个 VEUI 组件配置对应需要加载的样式、JS 模块。

```js
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
```

上面的配置表明我们为每个组件额外引入两个模块。比如对于 `Button.vue`，会额外引入 `veui-theme-dls/components/button.less` 和 `veui-theme-dls/components/Button.js` 这两个模块的代码。

## 为何不用 Babel 插件？

我们知道，在 Ant Design 和 Element 等组件库中，都是用 Babel 插件（[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)/[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)）来完成主题样式的依赖注入，但是 VEUI 使用 webpack loader 的原因有两点：

1. 由于 Babel 对 webpack 的 resolve 逻辑并不感知，所以无法准确判断某个路径经过 webpack 解析后对应的模块是否真实存在，需要对主题包的路径有强约束。而 `veui-loader` 会自动检查每个路径在 webpack 解析完毕后对应的模块是否存在，不会发生引入不存在的模块产生错误的情况。
2. Vue 在 SSR 自动抽取 critical CSS 时，无法将 JS 代码中引入的样式注入组件，而 `veui-loader` 通过预处理 `.vue` 单文件组件的方式进行依赖注入，可以解决这个问题。

## 选项

* `modules`

  类型：`Array<{package, path, fileName, transform}>`

  包含每个组件需要额外加载的对应模块信息，是一个数组，每个数组项都表示对于每个组件文件要额外引入的模块。

  每个模块项字段如下：

  | 字段 | 类型 | 默认值 | 描述 |
  | -- | -- | -- | -- |
  | `package` | `string` | - | 需要额外加载模块所属包的名字。一般来说会是主题包的包名，如 `'veui-theme-dls'`。 |
  | `path` | `string` | `'components'` | 需要加载的模块在对应包内的目录名。 |
  | `fileName` | `string` | `'{module}.css'` | 组件对应模块的文件名模板，必须包含占位符 `{module}`。 |
  | `transform` | `string | boolean` | `'kebab-case'` | 组件名的转换规则。转换完毕后将替换 `fileName` 中的 `{module}` 占位符。如果值为 `false` 则不进行转换。可供选用的转换规则有 `'kebab-case'`、`'camleCase'` 与 `'PascalCase'` 三种。 |

* `locale`

  类型：`boolean | string=|Array<string>`

  需要注入的语言包标识。当传入 `Array` 类型值时，将自动引入多个语言包。默认值为 `zh-Hans`。目前支持的值有 `zh-Hans` 与 `en-US`。

  如果不需要自动加载语言包，可以传入 `false` 以显式禁止，此时用户需要手动注册语言包。


* `global`

  类型：`Array<string>`

  需要在所有组件中引入的模块。数组项为需要引入的模块的完整路径。

  :::warning
  请注意，请不要通过 `global` 选项注入样式代码，这将会使样式代码在每个组件中重复输出。
  :::
