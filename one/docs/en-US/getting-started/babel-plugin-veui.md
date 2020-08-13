# babel-plugin-veui

:::tip
Currently VEUI is published on npm in the form of source code and has to be transpiled before use. (Read more about the trade-off of publishing source code in [this post](https://babeljs.io/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages) published by [Henry Zhu](https://www.patreon.com/henryzhu) on Babel's blog.) Babel plugins for Lodash and Vue JSX are required to transpile VEUI and VEUI provides its own Babel plugin to offer minimized code size while simply `import`ing components.
:::

## Cherrypicking components

This Babel plugin allows you to write simple `import` statements without importing VEUI as a whole.

With this plugin, the following statement:

```js
import { Button, Input } from 'veui'
```

will be automatically transformed into:

```js
import Button from 'veui/components/Button'
import Input from 'veui/components/Input'
```

So only the components that are actually imported will appear in the final bundle. It works similarly with Lodash's [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash).

## Automatic prefixing

To avoid conflict with native HTML elements, it's recommended to prefix components when they are registered as follows:

```js
export default {
  components: {
    'veui-button': Button,
    'veui-input': Input
  }
  // ...
}
```

It's kind of verbose so `babel-plugin-veui` helps to support the following usage:

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

When the imported component is prefixed with `Veui` the plugin will find the corresponding component without the prefix. Now it's possible to use components inside templates as follows:

```html
<veui-button>Submit</veui-button>
```

Apart from the prefix `veui-`, `babel-plugin-veui` also supports using `v-` as a prefix:

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

And use as follows:

```html
<v-button>Submit</v-button>
```
