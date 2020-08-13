# babel-plugin-veui

:::tip
VEUI 目前在 npm 上直接以源码方式进行发布，在使用时必须提前转译（其中的优缺点和取舍可以参考 [Henry Zhu](https://www.patreon.com/henryzhu) 在 Babel 的官方博客上发布的[这篇文章](https://babeljs.io/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages)）。VEUI 的源代码依赖 Lodash 和 Vue JSX 相关的 Babel 插件才能正确转译。此外，VEUI 还提供了自己的 Babel 插件，以帮助应用书写更简单的 `import` 语句的同时最小化代码的体积。
:::

## 按需引入组件

这个 Babel 插件可以让我们直接书写更简单的 `import` 语句而无需担心会将 VEUI 整体引入到项目中。

该插件的主要功能就是将如下语句：

```js
import { Button, Input } from 'veui'
```

自动转成：

```js
import Button from 'veui/components/Button'
import Input from 'veui/components/Input'
```

这样最终我们打包的代码就只会包含真正用到的组件了。功能类似 Lodash 的 [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) 插件。

## 自动添加前缀

为了避免与原生元素名冲突，我们在注册组件时需要以如下的方式为其添加前缀：

```js
export default {
  components: {
    'veui-button': Button,
    'veui-input': Input
  }
  // ...
}
```

由于这种方式显得有些冗长，所以 `babel-plugin-veui` 支持了如下写法：

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

当引入的组件名带 `Veui` 前缀时可以自动对应到相应的模块。这样就可以直接在模板中按如下方式引用了：

```html
<veui-button>提交</veui-button>
```

除了 `veui-` 前缀外，babel-plugin-veui 还支持直接使用 `v-` 前缀：

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

然后这样使用：

```html
<v-button>提交</v-button>
```
