# 主题

VEUI 的组件和主题包是完全解耦的。组件库中不含有任何样式代码，每个组件的样式都需要主题包中对应的样式文件来提供。

为了方便在按需引入的同时不需要手动引入每个组件的样式代码，我们提供了 `veui-loader` 来完成通过配置自动将依赖的样式文件注入组件，详情请参考 `veui-loader` 的[相关介绍](../getting-started/veui-loader)。

## 创建自定义主题包

veui-loader 为 VEUI 注入依赖时，同时支持注入 script 类型及 style 类型的模块。所以主题包中可以为每个组件提供这两种类型的主题配置。

### 自定义样式

:::warning
注意，主题包样式对 VEUI 组件的 DOM 结构会有依赖。
:::

为每个组件提供完整的样式，可以使用任何预处理语言。每个组件具体提供的类名及选择器可以参考 `veui-theme-dls` 中的实现。

```less
.veui-button {
  /* ... */
}
```

### 自定义图标

VEUI 的 `Icon` 组件封装了 [Vue-Awesome](https://justineo.github.io/vue-awesome/demo/) 来输出内联 SVG 图标，无法直接在样式代码中指定，需要通过 script 模块进行注册。每个组件都定义了语义明确的图标接口，我们需要做的只是在全局配置中为组件注入相应的图标名称映射并引入对应的图标模块：

```js
import config from 'veui/managers/config'
import '../icons/angle-up-small'
import '../icons/angle-down-small'

config.defaults({
  icons: {
    expand: 'angle-down-small',
    collapse: 'angle-up-small'
  }
}, 'select')
```

除了 `veui-theme-dls` 自带的图标外，目前可以使用的图标包还有：

* [`vue-awesome/icons`](https://justineo.github.io/vue-awesome/demo/)：Vue-Awesome 自带 [FontAwesome](https://fontawesome.com/) 图标包
* [`vue-awesome-material-icons/icons`](https://justineo.github.io/vue-awesome-material-icons/demo/)：同样基于 Vue-Awesome 的 [Material Icons](https://material.io/tools/icons) 图标包

### 预设样式及自定义配置

VEUI 中各个组件的可切换的预设样式是通过为主题包提供可扩展的 `ui` 配置实现的。

新增一个预设样式 `foo` 只需要在样式文件中添加 `[ui~="foo"]` 对应的样式并在使用组件时添加对应的 `ui="foo"` 声明即可完成：

```less
.veui-select {
  /* ... */

  &[ui~="foo"] {
    color: #f00;
  }
}
```

```html
<veui-select ui="foo">...</veui-select>
```

一个组件也可以同时应用多个预设样式：

```html
<veui-select ui="foo bar">...</veui-select>
```

但如果我们想将预设样式定义得更完善一些，比如 `foo` 与 `bar` 是组件的两种不可同时使用的预设样式怎么办呢？比如 `small` 和 `large` 样式都会自定义组件的尺寸，是互斥的，我们就需要通过在全局配置中为组件注入更详细的 `ui` 配置来实现。

`ui` 字段下每个属性名都是需要声明的预设样式名称，其值的类型为：`{ values, boolean, inherit }`。

字段详情：

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `values` | `Array<string>` | - | 预设 `ui` 属性的可选值。 |
| `boolean` | `boolean` | `false` | 预设 `ui` 属性是否为布尔型。 |
| `inherit` | `boolean` | `false` | 预设 `ui` 属性值是否会被子组件继承。 |

以 `Select` 组件为例：

```js
import config from 'veui/managers/config'

config.defaults({
  ui: {
    size: {
      values: ['large', 'small', 'tiny', 'micro'],
      inherit: true
    },
    style: {
      values: ['alt']
    }
  }
}, 'select')
```

在上面这个例子中，我们定义了两个 `ui` 属性：`size` 和 `style`。它们都是枚举类型，其中 `size` 值可被子组件继承。最终调用 `Select` 组件时，可以这样启用预设样式：

```html
<veui-select ui="alt small">...</veui-select>
```

当然，我们也可以完全不定义 `ui` 属性的详情，这时 VEUI 会将用户书写的 `ui` 属性原样输出，不会进行去重、同属性的属性值冲突检测、继承等特殊处理。

:::warning
由于 `ui` 属性最后会将值打平输出到 DOM 元素上，所以各个属性的值不能冲突。
:::

### 指定组件内部组件的预设样式

有一些组件由多个其它组件组合而成，此时我们可能会需要全局指定内部特定部件的预设样式。比如在 `veui-theme-dls` 中，`Dialog` 中的取消按钮默认采用默认样式，而如果在其它主题中我们可能会想重置为 `link` 样式。此时可以使用全局配置修改组件的 `parts` 映射。

```js
import config from 'veui/managers/config'

config.defaults({
  parts: {
    ok: 'primary',
    cancel: 'link'
  }
}, 'select')
```

## 主题包列表

* [veui-theme-dls](https://github.com/ecomfe/veui/tree/dev/packages/veui-theme-dls)：基于 DLS 的 VEUI 2.x 主题
* [veui-theme-blue](https://github.com/ecomfe/veui-theme-blue)：基于 Theme Blue 的 VEUI 1.x 主题
* [veui-theme-spectre](https://justineo.github.io/veui-theme-spectre/demo/)：基于 Spectre.css 的 VEUI 1.x 主题
