<template>
<div class="one-search">
  <veui-search-box
    ref="search"
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

function normalizeURL (url) {
  if (url.endsWith('/')) {
    return url.slice(0, -1)
  }

  return url.replace(/\/([#?])/, '$1')
}

function wait (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

export default {
  name: 'one-search',
  components: {
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
          hitComponent: ({ hit, children }) => {
            const url = normalizeURL(hit.url)
            return createElement(
              'a',
              {
                href: url,
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
                  this.$router.push(url)
                },
                children
              }
            )
          }
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
