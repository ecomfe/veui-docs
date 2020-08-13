<template>
<aside class="one-nav">
  <nav class="secondary">
    <h2><span>VEUI<small>beta</small></span></h2>
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
          disabled: altLocale.disabled
        }"
        :to="altLocale.disabled ? '' : altLocale.to"
      >
        {{ altLocale.label }}
      </nuxt-link>
    </section>
    <section class="filter">
      <input
        type="text"
        placeholder="Search…"
        class="search"
      >
    </section>
    <menu class="menu">
      <template v-for="(item, i) in nav">
        <li
          :key="`menu-${i}`"
          class="menu-item"
        >
          <nuxt-link
            v-if="item.link !== false"
            class="menu-link"
            :exact="item.exact"
            :to="getLocalePath(`/${item.slug}`)"
          >
            {{ item.title }}
          </nuxt-link>
          <span
            v-else
            class="menu-link"
          >{{ item.title }}</span>
          <menu
            v-if="item.children && item.children.length"
            class="menu"
          >
            <template
              v-for="(subItem, j) in item.children"
            >
              <li
                v-if="!subItem.hidden"
                :key="`sub-${j}`"
                class="menu-item"
              >
                <nuxt-link
                  :class="{
                    'menu-link': true,
                    'menu-link-disabled': subItem.disabled,
                    'menu-link-sub': subItem.sub,
                    'menu-link-active': isActive(`/${item.slug}/${subItem.slug}`)
                  }"
                  :exact="subItem.exact"
                  :to="subItem.disabled ? '/' : getLocalePath(`/${item.slug}/${subItem.slug}`)"
                  v-html="getTitleHTML(subItem.title)"
                />
              </li>
            </template>
          </menu>
        </li>
      </template>
    </menu>
  </nav>
</aside>
</template>

<script>
import { escape } from 'lodash'
import i18n from '../common/i18n'

export default {
  name: 'one-menu',
  mixins: [i18n],
  props: {
    nav: {
      type: Array,
      default () {
        return []
      }
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
    }
  },
  watch: {
    $route: 'scrollActiveIntoView'
  },
  mounted () {
    this.scrollActiveIntoView()
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  methods: {
    getTitleHTML (title) {
      let [main, sub] = title.split(' - ')
      return escape(main) + (sub ? `<small>${escape(sub)}</small>` : '')
    },
    isActive (path) {
      let { route = {} } = this.$router.resolve(path) || {}
      return route.name === this.$route.name
    },
    scrollActiveIntoView () {
      this.timer = setTimeout(() => {
        if (!this.$el) {
          return
        }
        let active =
          this.$el.querySelector('.nuxt-link-exact-active') ||
          this.$el.querySelector('.menu-link-active')
        if (!active) {
          return
        }

        let menu = active.offsetParent
        if (!menu) {
          return
        }
        if (
          active.offsetTop < menu.scrollTop ||
          active.offsetTop + active.offsetHeight > menu.scrollTop
        ) {
          active.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-nav
  position fixed
  top 60px
  bottom 0
  left 0
  z-index 1
  padding-top 30px
  border-right 1px solid #e5e5e5

.primary
  margin-left -250px

.secondary
  height 100%
  position relative
  display flex
  justify-content stretch
  flex-direction column
  float left
  width 240px

  h2
    display flex
    align-items center
    margin 0 0 0 20px
    font-size 20px
    font-weight 500

    span
      position relative

      small
        position absolute
        font-size 16px
        font-weight 400
        transform scale(0.75) translateY(-3px)
        margin-left 3px
        opacity 0.7

    a
      display block

    & + .desc
      display flex
      align-items center
      margin-top 15px
      margin-left 20px

      img
        display block

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
    margin-top 20px
    margin-left 20px

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

  & > .menu
    position relative
    width 100%
    flex 1 1 auto
    margin-top 25px
    padding-left 20px
    overflow auto

  .menu
  .menu-item
  .menu-link
    float left
    clear left

  .menu .menu
    margin 3.5px 0

  .menu-item
    margin 3.5px 0
    font-size 16px

    .menu-item
      font-size 13px

      .menu-link
        color #333
        font-weight 400

        & >>> small
          color #999
          font-size 13px
          margin-left 10px
          white-space nowrap

        &::after
          display block

  .menu-link
    float left
    clear left
    color #333
    font-weight 500
    padding 9px 0
    text-decoration none

    &-disabled
      opacity 0.3
      pointer-events none

    // &-sub
    // margin-left 10px
    &::after
      background-color #999

  .nuxt-link-exact-active::after
  .menu-link-active::after
    width 100%
    left 0
    background-color #333

.toggle
  margin-right 15px
  font-size 13px
  vertical-align middle

.disabled
  opacity 0.3
  pointer-events none
</style>
