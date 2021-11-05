<template>
<config-provider :value="config">
  <main
    :class="{
      'post-layout': true,
      'no-links': !hasFooterLinks
    }"
  >
    <one-menu
      :nav="nav"
      :expanded="expanded"
      @toggle="handleToggle"
    />
    <nuxt/>
    <one-footer
      class="footer"
      :nav="nav"
      @update="updateLayout"
    />
    <one-back-to-top/>
  </main>
</config-provider>
</template>

<script>
import 'focus-visible'
import { ConfigProvider } from 'veui'
import i18nMgr from 'veui/managers/i18n'
import OneMenu from '../components/OneMenu'
import OneFooter from '../components/OneFooter'
import OneBackToTop from '../components/OneBackToTop'
import nav from '../common/nav'
import i18n from '../common/i18n'

export default {
  name: 'main-doc',
  components: {
    ConfigProvider,
    OneMenu,
    OneFooter,
    OneBackToTop
  },
  mixins: [i18n],
  data () {
    return {
      hasFooterLinks: true,
      config: {
        'link.routerLink': 'nuxt-link'
      },
      expanded: false
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
    }
  },
  methods: {
    updateLayout ({ hasLinks }) {
      this.hasFooterLinks = hasLinks
    },
    handleToggle (expanded) {
      this.expanded = expanded
    }
  }
}
</script>

<style lang="stylus" scoped>
$sidebar-width = 280px

main
  height 100%

.content
.footer
  max-width 1346px - $sidebar-width
  min-width 560px
  transition margin-left 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86)

@media (max-width 480px)
  .content
  .footer
    min-width 0
</style>

<style lang="stylus">
.one-toc
  position fixed
  left calc(max(840px, min(1346px, 100vw)) - 20px)
  top 120px
</style>

<style lang="stylus" src="@/assets/styles/post.styl"></style>
