<template>
<aside class="one-nav">
  <veui-menu
    class="one-menu"
    :items="menuItems"
    :expanded.sync="expanded"
  >
    <template #before>
      <h2>VEUI</h2>
      <section class="desc">
        <a href="https://github.com/ecomfe/veui">
          <img
            alt="VEUI on GitHub"
            src="https://badgen.net/badge/-/GitHub?icon=github&label"
            width="69.2"
            height="20"
          >
        </a>
        <nuxt-link
          :class="{
            'locale-swith': true,
            disabled: altLocale.disabled,
          }"
          :to="altLocale.disabled ? '' : altLocale.to"
        >
          {{ altLocale.label }}
        </nuxt-link>
      </section>
      <section class="filter">
        <one-search/>
      </section>
    </template>
    <template #item-label="{ label, sub }">
      {{ label }}<small>{{ sub }}</small>
    </template>
  </veui-menu>
</aside>
</template>

<script>
import i18n from '../common/i18n'
import OneSearch from './OneSearch'
import { Menu } from 'veui'

export default {
  name: 'one-menu',
  components: {
    'one-search': OneSearch,
    'veui-menu': Menu
  },
  mixins: [i18n],
  props: {
    nav: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      expanded: []
    }
  },
  computed: {
    altLocale () {
      let { canonicalPath, locale, getLocalePath, isPathDisabled } = this
      let altLocale = locale === 'zh-Hans' ? 'en-US' : 'zh-Hans'
      let label = locale === 'zh-Hans' ? 'English' : '中文'
      let disabled = isPathDisabled(canonicalPath, altLocale)
      return {
        to: disabled ? '' : getLocalePath(canonicalPath, altLocale),
        disabled,
        label
      }
    },
    menuItems () {
      return this.nav.map(item => this.normalizeItem(item))
    }
  },
  created () {
    this.expanded = this.menuItems.map(({ name }) => name)
  },
  methods: {
    getTitleDetail (title) {
      let [main, sub] = title.split(' - ')
      return [main, sub]
    },
    isActive (path) {
      let { route = {} } = this.$router.resolve(path) || {}
      return route.name === this.$route.name
    },
    normalizeItem ({ title, children, slug, link, disabled }, base = '') {
      const fullSlug = `${base}/${slug}`
      const localePath = this.getLocalePath(fullSlug)
      const to = (link !== false && fullSlug) ? localePath : null
      const [main, sub] = this.getTitleDetail(title)

      return {
        label: main,
        sub,
        to,
        name: fullSlug,
        disabled,
        children: children ? children.map(child => this.normalizeItem(child, fullSlug)) : []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-nav
  position fixed
  top 0
  bottom 0
  left 0
  width 280px
  z-index 1

.one-menu
  width 100%
  height 100%

  & >>> .veui-menu-tree-wrapper
    display flex
    flex-direction column
    flex-grow 1
    height 100%
    overflow visible

    .veui-menu-tree
      overflow auto

  & >>> .DocSearch
    margin 0
    border-radius 6px
    font inherit

  h2
    display flex
    align-items center
    margin 30px 0 0 20px
    font-size 20px
    font-weight 500

    a
      display block

    & + .desc
      display flex
      align-items center
      margin-top 15px
      margin-left 20px

      img
        display block

  small
    margin-left 8px
    opacity 0.7

  .locale-swith
    display block
    margin-left 12px
    padding 0 6px
    border 1px solid #dbdbdb
    border-radius 3px
    line-height 18px
    font-size 12px
    text-align center
    text-decoration none
    transition all 0.2s

    &:hover
      border-color #999

  .filter
    margin 20px 0 20px 20px
    height 36px

  .search
    display block
    width 180px
    height 32px
    padding 0 7px
    border 1px solid #dbdbdb
    border-radius 4px
    outline none
    font-size 13px
    transition all 0.2s

    &.focus-visible
      border-color #999
      box-shadow 0 0 0 2px rgba(0, 0, 0, 0.15)

.toggle
  margin-right 15px
  font-size 13px
  vertical-align middle

.disabled
  opacity 0.3
  pointer-events none
</style>
