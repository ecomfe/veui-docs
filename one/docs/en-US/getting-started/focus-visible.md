# `:focus-visible`

Usually we provide `:focus` styles for interactive elements to enhance (keyboard) accessibility. But when we click around with mouses, most browsers will activate `:focus` state of elements like `<button>`. This will easily cause misunderstanding that the button is “selected” especially when different types of buttons are placed together. [The draft of CSS Selector Level 4 provided a `:focus-visible` pseudo class selector](https://drafts.csswg.org/selectors-4/#the-focusvisible-pseudo) to help us targeting focused elements more accurately.

Actually Chrome is handling native `<button>`s in a similar way by default.

> [Details on `:focus-visible`](https://github.com/WICG/focus-visible/blob/master/explainer.md)

## Usage

VEUI's default style package `veui-theme-dls` uses a polyfill library for `:focus-visible` to provide optimized interactive experience. You need to import it yourself in your application code:

```js
import 'focus-visible'
```

Technically focus-visible isn't really a “polyfill” because we have to use the `.focus-visible` selector instead of directly using `:focus-visible`. This should also be noted when customizing styles.

### Browser compatibility

As the polyfill provided by WICG won't automatically import other polyfills, you need to import polyfill for `classList` when you need to support IE9 (requires to be installed by yourself as well).

```shell
$ npm i --save classlist-polyfill
```

```js
import 'classlist-polyfill'
```

## Demo

[[ demo src="/demo/focus-visible.vue" ]]
