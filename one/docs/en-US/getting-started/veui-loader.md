# veui-loader

This webpack loader helps us to automatically inject dependencies such as themes and language packs into components during the build process.

In the loader options, you can configure the corresponding styles and JS modules that need to be loaded for each VEUI component.

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

The above configuration indicates that we need to additionally import two modules for each component. For example, for `Button.vue`, the code for the two modules `veui-theme-dls/components/button.less` and `veui-theme-dls/components/Button.js` will be imported.

## Why not use a Babel plugin?

As we know, in component libraries such as Ant Design and Element, Babel plugins ([babel-plugin-import](https://github.com/ant-design/babel-plugin-import)/[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)) are used to inject theme styles, but there are two reasons why VEUI uses webpack loaders:

1. Because Babel is not aware of webpack's resolve logic, it cannot accurately determine whether a path corresponds to a real module after webpack resolution, and strict constraints are needed for the theme package path. `veui-loader` will automatically check whether the module corresponding to each path after webpack resolution exists, so there will be no errors caused by importing non-existent modules.
2. When Vue automatically extracts critical CSS in SSR, it cannot inject the styles introduced in JS code into the component. `veui-loader` injects dependencies through preprocessing of `.vue` single-file components, which can solve this problem.

## Options

* `modules`

  Type: `Array<{package, path, fileName, transform}>`

  Contains information about each additional module that each component needs to load, and is an array where each array item represents the module that needs to be additionally imported for each component file.

  The fields for each module item are as follows:

  | Field | Type | Default | Description |
  | -- | -- | -- | -- |
  | `package` | `string` | - | The name of the package to which the additional module belongs. Generally, it will be the package name of the theme package, such as `'veui-theme-dls'`. |
  | `path` | `string` | `'components'` | The directory name of the module to be loaded within the corresponding package. |
  | `fileName` | `string` | `'{module}.css'` | The file name template of the module corresponding to the component, which must contain the placeholder `{module}`. |
  | `transform` | `string | boolean` | `'kebab-case'` | The conversion rule for the component name. After conversion, it will replace the `{module}` placeholder in `fileName`. If the value is `false`, no conversion will be performed. The available conversion rules are `'kebab-case'`, `'camleCase'`, and `'PascalCase'`. |

* `locale`

  Type: `boolean | string=|Array<string>`

  The language pack identifier to be injected. When an `Array` type value is passed in, multiple language packs will be automatically imported. The default value is `zh-Hans`. The supported values are `zh-Hans` and `en-US`.

  If automatic loading of language packs is not required, you can pass in `false` to explicitly disable it, and the user needs to register the language pack manually.

* `global`

  Type: `Array<string>`

  The modules that need to be imported in all components. The array items are the complete paths of the modules that need to be imported.

  :::warning
  Please note that you should not inject style code through the `global` option, as this will cause the style code to be repeatedly output in each component.
  :::
