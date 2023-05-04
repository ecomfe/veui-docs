# babel-plugin-veui

:::tip
VEUI is currently published on npm directly in source code form. It must be transpiled in advance when used (the advantages and disadvantages of this approach can be found in [this article](https://babeljs.io/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages) published by [Henry Zhu](https://www.patreon.com/henryzhu) on Babel's official blog). VEUI's source code depends on Lodash and Vue JSX-related Babel plugins to be correctly transpiled. In addition, VEUI also provides its own Babel plugin to help applications write simpler `import` statements while minimizing the size of the code.
:::

## Cherry-picking components

This Babel plugin allows us to write simpler `import` statements directly without worrying about importing VEUI as a whole into the project.

The main function of this plugin is to automatically convert statements like this:

```js
import { Button, Input } from 'veui'
```

to:

```js
import Button from 'veui/components/Button'
import Input from 'veui/components/Input'
```

This way, the code we bundle will only contain the components we actually use. Similar to the [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) plugin for Lodash.

## Automatic prefixing

To avoid conflicts with native element names, we need to add prefixes to registered components in the following way:

```js
export default {
  components: {
    'veui-button': Button,
    'veui-input': Input
  }
  // ...
}
```

As this way looks a bit verbose, `babel-plugin-veui` supports the following syntax:

```js
import { VeuiButton, VeuiInput } from 'veui'

export default {
  components: {
    VeuiButton,
    VeuiInput
  }
  // ...
}
```

When the imported component name is prefixed with `Veui`, it can be automatically mapped to the corresponding module. This way, it can be directly referenced in the template as follows:

```html
<veui-button>Submit</veui-button>
```

In addition to the `veui-` prefix, babel-plugin-veui also supports using the `v-` prefix directly:

```js
import { VButton, VInput } from 'veui'

export default {
  components: {
    VButton,
    VInput
  }
  // ...
}
```

Then it can be used as follows:

```html
<v-button>Submit</v-button>
```
