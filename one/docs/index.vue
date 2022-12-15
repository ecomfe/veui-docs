<template>
<section class="intro">
  <h1>VEUI</h1>
  <p class="badges">
    <a href="https://github.com/ecomfe/veui/actions/workflows/test.yml">
      <img
        alt="VEUI build status"
        src="https://img.shields.io/github/workflow/status/ecomfe/veui/test/d20"
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
    一套基于 <a href="https://v2.vuejs.org">Vue.js</a> 的企业级应用组件库。
  </p>
  <ul class="features">
    <li>🤘 强大且灵活的组件和指令</li>
    <li>💅 可切换/自定义的主题</li>
    <li>🌲 组件完全按需加载</li>
    <li>🌐 含编译时优化的多语言支持</li>
    <li>⌨️ 可访问性支持</li>
    <li>☁️ 服务端渲染支持</li>
  </ul>
  <section class="quick-nav">
    <one-quick-nav
      class="quick-nav"
      autofocus
    />
    <p class="help">
      可在任意页面通过 <kbd>G</kbd> 键唤起
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

h1,
.badges
  display flex
  align-items center
  justify-content center
  gap 16px

h1
  margin 30px 0 40px
  font-size 32px

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
  margin 90px auto 30px

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
</style>
