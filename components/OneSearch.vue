<template>
<div class="one-search">
  <button
    class="button"
    @click="focusDocsearch"
  >
    <veui-icon name="search"/>
  </button>
  <veui-search-box
    ref="search"
    v-model="query"
    ui="s"
    class="input"
    :placeholder="searchPlaceholder"
    @input="handleInput"
  />
  <div
    ref="docsearch"
    class="docsearch"
  />
</div>
</template>

<script>
import { Icon, SearchBox } from 'veui'
import 'veui-theme-dls-icons/search'
import i18n from '../common/i18n'
import { createComponent } from './Hit'

export default {
  name: 'one-search',
  components: {
    'veui-icon': Icon,
    'veui-search-box': SearchBox
  },
  mixins: [i18n],
  data () {
    return {
      preparing: true,
      query: ''
    }
  },
  computed: {
    searchPlaceholder () {
      return this.locale === 'zh-Hans' ? '⌘ K | 全文搜索…' : '⌘ K | Full-text search...'
    }
  },
  watch: {
    locale (val) {
      this.update(val)
    }
  },
  mounted () {
    this.initialize(this.locale)
  },
  methods: {
    getRelativePath (absoluteUrl) {
      const { pathname, hash } = new URL(absoluteUrl)
      return `${pathname}/${hash}`
    },
    triggerFocus (e) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        this.$refs.search.focus()
      }
    },
    initialize (locale) {
      document.addEventListener('keydown', this.triggerFocus)

      Promise.all([
        import(/* webpackChunkName: "docsearch" */ '@docsearch/js'),
        import(/* webpackChunkName: "docsearch" */ '@docsearch/css')
      ]).then(([docsearch]) => {
        document.removeEventListener('keydown', this.triggerFocus)

        docsearch = docsearch.default
        docsearch({
          appId: 'WW5G10K3KO',
          apiKey: '3dc7f443d11e6712da7f98b2720bb8fc',
          indexName: 'veui',
          container: this.$refs.docsearch,
          searchParameters: {
            facetFilters: [`lang:${locale}`]
          },
          navigator: {
            navigate: ({ itemUrl }) => {
              const { pathname: hitPathname } = new URL(
                window.location.origin + itemUrl
              )
              if (this.$router.history.current.path === hitPathname) {
                window.location.assign(window.location.origin + itemUrl)
              } else {
                this.$router.push(itemUrl)
              }
            }
          },
          transformItems: items => {
            return items.map(item => {
              return {
                ...item,
                url: this.getRelativePath(item.url)
              }
            })
          },
          hitComponent: createComponent({
            router: this.$router,
            route: this.$route,
            isOffline: this.$nuxt.isOffline,
            fetchPayload: this.$nuxt.fetchPayload
          })
        })

        this.preparing = false

        if (this.query) {
          this.teleportQuery(this.query)
        }
      })
    },
    update (locale) {
      this.$refs.docsearch.innerHTML = ''
      this.initialize(locale)
    },
    handleInput (value) {
      if (!value || this.preparing) {
        return
      }

      this.teleportQuery(value)
    },
    focusDocsearch () {
      this.$refs.docsearch.querySelector('.DocSearch').click()
    },
    teleportQuery (value) {
      this.query = ''
      this.focusDocsearch()

      setTimeout(() => {
        const docsearchInput = document.getElementById('docsearch-input')
        docsearchInput.value = value
        docsearchInput.dispatchEvent(new Event('input'))
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.button
  display none

.input
  width auto

.docsearch
  display none

@media (max-width 720px)
  .button
    display flex
    align-items center
    padding 0 6px
    border 1px solid #dbdbdb
    border-radius 3px
    background none
    height 28px
    font-size 14px
    text-decoration none
    transition all 0.2s

  .input
    display none
</style>
