<template>
<aside
  v-outside="collapseMenu"
  class="one-nav"
  :class="{ expanded }"
>
  <veui-menu
    class="one-menu"
    :items="menuItems"
    :expanded.sync="menuExpanded"
  >
    <template #before>
      <header>
        <h2>VEUI</h2>
        <section class="desc">
          <a href="https://github.com/ecomfe/veui">
            <img
              alt="VEUI on GitHub"
              src="https://img.shields.io/github/stars/ecomfe/veui?label=stars&logo=github"
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
        <section class="search">
          <one-search/>
        </section>
        <div
          class="toggle"
          @click="toggleMenu"
        >
          <veui-icon
            class="expanded-icon"
            name="chevron-left"
          />
          <veui-icon
            class="collapsed-icon"
            name="hamburger"
          />
        </div>
      </header>
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
import { Menu, Icon } from 'veui'
import outside from 'veui/directives/outside'
import 'veui-theme-dls-icons/hamburger'
import 'veui-theme-dls-icons/chevron-left'

export default {
  name: 'one-menu',
  directives: {
    outside
  },
  components: {
    'one-search': OneSearch,
    'veui-menu': Menu,
    'veui-icon': Icon
  },
  mixins: [i18n],
  props: {
    expanded: Boolean,
    nav: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      menuExpanded: []
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
    this.menuExpanded = this.menuItems.map(({ name }) => name)
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
      const to = (link !== false && fullSlug && !disabled) ? localePath : null
      const [main, sub] = this.getTitleDetail(title)

      return {
        label: main,
        sub,
        to,
        name: fullSlug,
        disabled,
        children: children ? children.map(child => this.normalizeItem(child, fullSlug)) : []
      }
    },
    toggleMenu () {
      this.$emit('toggle', !this.expanded)
    },
    collapseMenu () {
      this.$emit('toggle', false)
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
  background-color #fff

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

  header
    padding 32px 20px 20px

  h2
    display flex
    align-items center
    margin 0 0 16px
    font-size 20px
    font-weight 500

    a
      display block

    & + .desc
      display flex
      align-items center
      margin-bottom 20px

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

  .search
    margin-top 16px
    margin-right 12px
    flex-shrink 0

.toggle
  display none

.disabled
  opacity 0.3
  pointer-events none

@media (max-width 480px)
  .one-nav
    z-index 20
    transition transform 0.3s, box-shadow 0.3s
    transform translateX(-100%)

    &.expanded
      transform translateX(0)
      box-shadow 0 0 48px rgba(0, 0, 0, 0.2)

  header
    position relative

  .toggle
    display flex
    align-items center
    justify-content center
    width 36px
    height 36px
    position absolute
    top 80px
    left 100%
    border 1px solid #e2e6f0
    border-top-right-radius 4px
    border-bottom-right-radius 4px
    background-color #fff
    box-shadow 0 0 12px rgba(0, 0, 0, 0.1)
    font-size 20px

    &::before
      content ""
      position absolute
      top 0
      bottom 0
      left -19px
      width 20px
      background-color #fff

.expanded-icon
.collapsed-icon
  position absolute
  transition transform 0.3s, opacity 0.3s

.expanded-icon
  margin-left -4px
  opacity 0
  transform translateX(-10px)

  .expanded &
    opacity 1
    transform none

.collapsed-icon
  .expanded &
    opacity 0
    transform translateX(10px)
</style>
