<template>
<div class="one-search">
  <veui-search-box
    v-model="query"
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
import { SearchBox } from 'veui'
import { createElement } from 'preact'
import i18n from '../common/i18n'

function isSpecialClick (event) {
  return (
    event.button === 1 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  )
}
export default {
  name: 'one-search',
  components: {
    'veui-search-box': SearchBox
  },
  mixins: [i18n],
  data () {
    return {
      query: ''
    }
  },
  computed: {
    searchPlaceholder () {
      return this.locale === 'zh-Hans' ? '⌘ K | 搜索…' : '⌘ K | Search...'
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
    initialize (locale) {
      Promise.all([
        import(/* webpackChunkName: "docsearch" */ '@docsearch/js'),
        import(/* webpackChunkName: "docsearch" */ '@docsearch/css')
      ]).then(([docsearch]) => {
        docsearch = docsearch.default
        docsearch({
          apiKey: '21cdc123c620ec4bb81259c32e90c08f',
          indexName: 'veui',
          container: this.$refs.docsearch,
          searchParameters: {
            facetFilters: [`lang:${locale}`]
          },
          navigator: {
            navigate ({ suggestionUrl }) {
              const { pathname: hitPathname } = new URL(
                window.location.origin + suggestionUrl
              )
              if (this.$router.history.current.path === hitPathname) {
                window.location.assign(window.location.origin + suggestionUrl)
              } else {
                this.$router.push(suggestionUrl)
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
          hitComponent: ({ hit, children }) => {
            return createElement(
              'a',
              {
                href: hit.url,
                onClick: event => {
                  if (isSpecialClick(event)) {
                    return
                  }
                  // We rely on the native link scrolling when user is
                  // already on the right anchor because Vue Router doesn't
                  // support duplicated history entries.
                  if (this.$router.history.current.fullPath === hit.url) {
                    return
                  }
                  const { pathname: hitPathname } = new URL(
                    window.location.origin + hit.url
                  )
                  // If the hits goes to another page, we prevent the native link behavior
                  // to leverage the Vue Router loading feature.
                  if (this.$router.history.current.path !== hitPathname) {
                    event.preventDefault()
                  }
                  this.$router.push(hit.url)
                },
                children
              }
            )
          }
        })
      })
    },
    update (locale) {
      this.$refs.docsearch.innerHTML = ''
      this.initialize(locale)
    },
    handleInput (value) {
      if (!value) {
        return
      }

      this.teleportQuery(value)
    },
    teleportQuery (value) {
      this.query = ''
      const docsearchButton = this.$refs.docsearch.querySelector('.DocSearch')
      docsearchButton.click()

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
.input
  width auto

.docsearch
  display none
</style>
