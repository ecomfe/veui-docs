<template>
<article>
  <button>:focus</button> <button class="special">
    .focus-visible
  </button>
</article>
</template>

<style lang="stylus" scoped docs>
p
  margin-bottom 1em

button
  width 120px
  height 36px
  margin-right 1em
  background #fff
  border solid 1px #999
  padding 3px 6px
  text-align center
  transition background-color 0.3s

  &:hover
    background-color #f8f8f8

  &:active
    background-color #eee
</style>

<style lang="less" scoped>
button {
  &:focus {
    outline: 2px solid #eee;
  }
}

.special {
  &:focus {
    outline: none;
  }

  &.focus-visible {
    outline: 2px solid #eee;
  }
}
</style>

<docs>
使用了 polyfill 以后 `:focus` 样式在鼠标、键盘激活时均会展现，而使用了 `.focus-visible` 样式仅在通过键盘激活时展现。

:::warning
本例非 DLS 样式，仅作为示例。需注意对 `:focus-visible` 的处理在 Firefox 和 Safari 下无效，目前在这两个浏览器下点击不会使按钮处于 `:focus` 状态。
:::
</docs>

<docs locale="en-US">
After including the polyfill, `:focus` styles are applied both with mouse clicks and keyboard activation, while `.focus-visible` styles are only applied with keyboard activation.

:::warning
This example is only for demonstration purpose and doesn't reflect DLS's styles. Please note that our polyfill for `:focus-visible` works differently in Firefox and Safari. Clicking a button in these browsers won't set the `:focus` state on the button.
:::
</docs>
