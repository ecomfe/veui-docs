# `:focus-visible`

通常我们会为交互元素定义 `:focus` 状态下的样式，以增强键盘可访问性。但在使用鼠标进行点击时，多数浏览器会使 `<button>` 等元素处于 `:focus` 状态。在多个按钮并列时，这容易使人产生「按钮被选中」的错觉。[CSS Selectors Level 4 草案中的 `:focus-visible` 伪类选择器](https://drafts.csswg.org/selectors-4/#the-focusvisible-pseudo)为我们提供了选择更精确的聚焦状态的能力。

Chrome 浏览器在默认状态下对 `<button>` 元素就有类似的处理。

> [`:focus-visible` 详细说明](https://github.com/WICG/focus-visible/blob/master/explainer.md)

## 使用

VEUI 的默认主题包 `veui-theme-dls` 依赖 `:focus-visible` 的 polyfill 才能提供最好的交互效果。使用时，需要自行在项目中进行引入：

```js
import 'focus-visible'
```

严格来说 focus-visible 不能算一个真正的“polyfill”，因为在样式中我们无法直接使用 `:focus-visible` 这个伪类，而需要针对 `.focus-visible` 这个类编写样式。编写自定义样式时也需要注意这一点。

### 兼容性

当需要支持 IE9 时，由于 WICG 的 polyfill 不会自行引入其它 polyfill，故还需要引入 `classList` 的兼容脚本（需自行安装）：

```shell
$ npm i --save classlist-polyfill
```

```js
import 'classlist-polyfill'
```

## 示例

[[ demo src="/demo/focus-visible.vue" ]]
