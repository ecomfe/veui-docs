<template>
<section class="intro">
  <h1 class="veui">
    VEUI
  </h1>
  <p class="badges">
    <a href="https://github.com/ecomfe/veui/actions/workflows/test.yml">
      <img
        alt="VEUI build status"
        src="https://img.shields.io/github/actions/workflow/status/ecomfe/veui/test.yml"
        height="20"
      >
    </a>
    <a href="https://www.npmjs.com/package/veui">
      <img
        alt="VEUI on npm"
        src="https://img.shields.io/npm/v/veui"
        height="20"
      >
    </a>
    <a href="https://github.com/ecomfe/veui/blob/d20/LICENSE">
      <img
        alt="MIT License"
        src="https://img.shields.io/github/license/ecomfe/veui"
      >
    </a>
  </p>
  <p class="desc">
    An enterprise-level application component library based on
    <a href="https://v2.vuejs.org">Vue.js</a>.
  </p>
  <ul class="features">
    <li>🤘 Powerful features</li>
    <li>💅 Flexible themes</li>
    <li>🌲 Fully treeshakable</li>
    <li>🌐 I18N with optimization</li>
    <li>⌨️ Accessibility support</li>
    <li>☁️ SSR support</li>
  </ul>
  <section class="quick-nav">
    <one-quick-nav
      class="qnav"
      autofocus
    />
    <p class="help">
      Can be invoked on any page by pressing <kbd>G</kbd>
    </p>
  </section>
</section>
</template>

<script>
import OneQuickNav from '@/components/OneQuickNav'

export default {
  name: 'one-intro',
  components: {
    OneQuickNav
  }
}
</script>

<style lang="styl" scoped>
.intro
  max-width 1066px
  min-width 560px
  padding 30px 60px 60px

.veui,
.badges
  display flex
  align-items center
  justify-content center
  gap 16px

.veui
  margin 30px 0 40px
  font-size 32px
  font-family 'Alata', sans-serif

.desc
  margin 32px
  text-align center
  font-size 16px
  color #545b66

.features
  display flex
  width 750px
  flex-wrap wrap
  margin auto
  padding 0
  justify-content center
  align-items center
  gap 24px

  li
    border 1px solid #e2e6f0
    background #f6f7fa
    list-style none
    padding 12px
    border-radius 4px
    white-space nowrap
    width 30%

.quick-nav
  margin-top 90px

  .qnav
    margin 0 auto 30px

.help
  color #a8b0bf
  margin-bottom 60px
  text-align center

kbd
  padding 2px 6px
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif
  line-height 1
  vertical-align middle
  background-color #f6f7fa
  border solid 1px #e2e6f0
  border-radius 6px
  box-shadow inset 0 -1px 0 #e2e6f0

@media (max-width 480px)
  .intro
    min-width 0

  .features
    display block
    padding-left 32px
    width auto

    li
      background none
      border none
      padding 4px 8px
      list-style disc
      width 100%

  .help
    display none
</style>
