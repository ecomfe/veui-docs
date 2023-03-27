# veui-loader

This webpack loader is used to inject theme/locale modules for used components only at build time.

You can specify style/script module you want to inject into each VEUI component in loader options:

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

Options above result in importing two extra modules for each component. eg. For `Button.vue`, `veui-theme-dls/components/button.less` and `veui-theme-dls/components/Button.js` will be injected.

## Why not use a Babel plugin?

As we know, in popular component libraries like Ant Design and Element, theme packages are injected with Babel plugins ([babel-plugin-import](https://github.com/ant-design/babel-plugin-import)/[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)). VEUI is using webpack loader for the following reasons:

1. webpack's resolving logic is transparent to Babel so we cannot accurately guarantee the module exists at the path resolved by webpack, so it's hard to specify arbitrary location of the theme package. veui-loader, on the other hand, can accurately check the existence of each generated path after resolved by webpack.

2. Vue Loader cannot handle styles imported from script blocks while extracting component-level critical CSS, while `veui-loader` solved the issue by preprocessing `.vue` files and inject style blocks instead of injecting import statements into script block.

## Options

* `modules`

  Type: `Array<{package, path, fileName, transform}>`

  The configuration of all extra modules to be injected into each component.

  Properties of each module:

  | Property | Type | Default | Description |
  | -- | -- | -- | -- |
  | `package` | `string` | - | The name of the injected package. It's generally the name of the theme package, like `'veui-theme-dls'`. |
  | `path` | `string` | `'components'` | The path of the directory containing the injected module. |
  | `fileName` | `string` | `'{module}.css'` | The file name template corresponds to the component name. Must include the placeholder `{module}`. |
  | `transform` | `string | boolean` | `'kebab-case'` | Transformation applied for component names. The `{module}` part within `fileName` will be replaced with the transformed name. Provide `false` to prevent transformation. All possible values are `'kebab-case'`, `'camleCase'` and `'PascalCase'`. |

* `locale`

  Type: `boolean | string=|Array<string>`

  The ID of the locale modules to be injected. Array values indicate to inject multiple locale packages. Defaults to `zh-Hans`. Current available values are `zh-Hans` and `en-US`.

  Provide `false` to explicitly prevent automatically injecting locale package. You need to import locale packages manually.

* `global`

  Type: `Array<string>`

  The array of module paths to be injected int every component.

  :::warning
  Do not inject style modules via the `global` option. This will repeatedly output the same style code for every component.
  :::
