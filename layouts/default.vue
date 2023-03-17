<template>
<veui-config-provider :value="config">
  <main>
    <one-header
      ref="header"
      class="header"
    />
    <div class="body">
      <one-menu
        class="nav"
        :nav="nav"
        :expanded="expanded"
        @toggle="handleToggle"
      />
      <div class="main">
        <nuxt/>
        <one-footer class="footer"/>
      </div>
    </div>
    <one-back-to-top/>
    <div
      v-if="$route.path !== '/'"
      v-outside="closeQuickNav"
      class="quick-nav"
      :class="{ open: quickNavOpen }"
      @keydown.esc="closeQuickNav"
    >
      <one-quick-nav ref="quickNav"/>
    </div>
  </main>
</veui-config-provider>
</template>

<script>
import 'focus-visible'
import { ConfigProvider } from 'veui'
import outside from 'veui/directives/outside'
import i18nMgr from 'veui/managers/i18n'
import OneMenu from '../components/OneMenu'
import OneHeader from '../components/OneHeader'
import OneFooter from '../components/OneFooter'
import OneBackToTop from '../components/OneBackToTop'
import OneQuickNav from '../components/OneQuickNav'
import nav from '../common/nav'
import i18n from '../common/i18n'

function isEditingContent (event) {
  const element = event.target
  const tagName = element.tagName

  return (
    element.isContentEditable ||
    tagName === 'INPUT' ||
    tagName === 'SELECT' ||
    tagName === 'TEXTAREA'
  )
}

export default {
  name: 'main-doc',
  directives: {
    outside
  },
  components: {
    OneMenu,
    OneHeader,
    OneFooter,
    OneBackToTop,
    OneQuickNav,
    'veui-config-provider': ConfigProvider
  },
  mixins: [i18n],
  data () {
    return {
      config: {
        'link.routerLink': 'nuxt-link'
      },
      expanded: false,
      quickNavOpen: false
    }
  },
  computed: {
    nav () {
      return nav[this.locale]
    }
  },
  watch: {
    locale: {
      handler (val) {
        if (i18nMgr.locale !== val) {
          i18nMgr.locale = val
        }
        if (this.$i18n.locale !== val) {
          this.$i18n.locale = val
        }
        if (process.env.VUE_ENV !== 'server') {
          document.documentElement.setAttribute('lang', val)

          const { docsearchInstance } = window
          if (docsearchInstance) {
            docsearchInstance.autocomplete
              .eq(0)
              .data('aaAutocomplete')
              .dropdown.datasets[0].clearCachedSuggestions()
            docsearchInstance.client.clearCache()
            docsearchInstance.algoliaOptions.facetFilters = [`lang:${val}`]
          }
        }
      },
      immediate: true
    },
    $route () {
      this.expanded = false
      this.quickNavOpen = false
    },
    quickNavOpen () {
      if (this.quickNavOpen) {
        this.$refs.quickNav.focus()
      } else {
        this.$refs.quickNav.blur()
      }
    }
  },
  mounted () {
    window.addEventListener('keydown', this.handleGlobalKeydown)
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.handleGlobalKeydown)
  },
  methods: {
    handleToggle (expanded) {
      this.expanded = expanded
    },
    closeQuickNav () {
      this.quickNavOpen = false
    },
    handleGlobalKeydown (e) {
      if (e.key === 'g' && !isEditingContent(e)) {
        if (this.$route.path !== '/') {
          this.quickNavOpen = true
          e.preventDefault()
        } else {
          const internal = document.querySelector('.one-quick-nav input')
          if (internal) {
            internal.focus()
            e.preventDefault()
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
$header-height = 60px
$sidebar-width = 280px

main
  min-height 100vh
  max-width 100vw

.header
  position relative
  z-index 1
  height $header-height
  box-shadow rgba(0, 0, 0, 0.03) 0px 4px 10px, rgba(0, 0, 0, 0.02) 0px 3px 9px, rgba(0, 0, 0, 0.01) 0px 2px 8px

.body
  display flex
  align-items stretch

.nav
  position sticky
  top 0
  width $sidebar-width
  height 100vh

.main
  flex 1

.content
.footer
  max-width 1346px - $sidebar-width
  min-width 560px

.quick-nav
  position fixed
  left 50%
  bottom 0
  z-index 10
  display flex
  align-items center
  height 72px
  padding 6px 12px
  border-top-left-radius 6px
  border-top-right-radius 6px
  background-color rgba(255, 255, 255, 0.8)
  backdrop-filter blur(2px)
  box-shadow rgba(0, 0, 0, 0.06) 0px 8px 10px 1px, rgba(0, 0, 0, 0.05) 0px 3px 14px 2px, rgba(0, 0, 0, 0.01) 0px 5px 5px -3px
  transform translate(-50%, 100%)
  transition transform 0.2s ease-in-out

  &.open
    transform translate(-50%, 0)

@media (max-width 480px)
  main
    overflow auto
    padding-left 0

  .main
    max-width 100vw

  .content
  .footer
    min-width 0

  .one-nav
    position absolute
</style>

<style lang="stylus">
.one-toc
  position fixed
  left calc(max(840px, min(1346px, 100vw)) - 20px)
  top 120px
</style>

<style lang="stylus" src="@/assets/styles/post.styl"></style>
