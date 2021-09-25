<template>
<main
  :class="{
    'post-layout': true,
    'no-links': !hasFooterLinks
  }"
>
  <one-menu :nav="nav"/>
  <nuxt/>
  <one-footer
    class="footer"
    :nav="nav"
    @update="updateLayout"
  />
  <one-back-to-top/>
</main>
</template>

<script>
import 'focus-visible'
import OneMenu from '../components/OneMenu'
import OneFooter from '../components/OneFooter'
import OneBackToTop from '../components/OneBackToTop'
import nav from '../common/nav'
import i18n from '../common/i18n'
import i18nMgr from 'veui/managers/i18n'

export default {
  name: 'main-doc',
  components: {
    OneMenu,
    OneFooter,
    OneBackToTop
  },
  mixins: [i18n],
  data () {
    return {
      hasFooterLinks: true
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
  max-width 1180px - $sidebar-width
  min-width 560px
  transition margin-left 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86)
</style>

<style lang="stylus" src="@/assets/styles/post.styl"></style>
