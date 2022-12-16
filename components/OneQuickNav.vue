<template>
<nav class="one-quick-nav">
  <input
    ref="input"
    :value="value"
    class="input"
    :autofocus="autofocus"
    :placeholder="t('placeholder')"
    @input="value = $event.target.value"
    @keydown.up.prevent="handleSpin(true)"
    @keydown.down.prevent="handleSpin(false)"
    @keydown.tab="handleTab"
    @keydown.enter="handleEnter"
    @compositionstart="composing = true"
    @compositionend="composing = false"
  >
  <div class="ghost">
    <span class="value">
      {{ matched }}<span class="remaining">{{ remaining }}</span>
      <span
        v-if="candidate"
        class="help"
      >
        <kbd>⏎</kbd>
      </span>
      <span
        v-else-if="value"
        class="help"
      >
        <kbd>⌫</kbd>
      </span>
    </span>
    <span class="indicator">
      <template v-if="candidates.length > 1">
        <span class="help"><kbd>↑</kbd> / <kbd>↓</kbd></span><span class="progress">{{ index + 1 }} / {{ candidates.length }}</span>
      </template>
      <span
        v-else-if="candidates.length === 0 && value"
        class="empty"
      >∅</span>
    </span>
  </div>
  <nuxt-link
    v-if="matchedLink"
    :key="matchedLink"
    class="preloader"
    :to="matchedLink"
  />
</nav>
</template>

<script>
import nav from '../common/nav'
import i18n from '../common/i18n'
import t from 'veui/mixins/i18n'

function findComponents (routes) {
  for (let i = 0; i < routes.length; i++) {
    let route = routes[i]
    if (route.slug === 'components') {
      return route.children
    }
    if (route.children) {
      let found = findComponents(route.children)
      if (found) {
        return found
      }
    }
  }
}

export default {
  name: 'one-quick-nav',
  mixins: [i18n, t],
  props: {
    autofocus: Boolean
  },
  data () {
    return {
      value: '',
      index: 0,
      composing: false
    }
  },
  computed: {
    link () {
      return this.components[this.value] || null
    },
    nav () {
      return nav[this.locale]
    },
    components () {
      const componentRoutes = findComponents(this.nav)
      return componentRoutes.reduce((components, { title, slug }) => {
        const enTitle = title.split(' - ')[0]
        components[enTitle] = this.getLocalePath(`/components/${slug}`)
        return components
      }, {})
    },
    candidates () {
      if (!this.value) {
        return []
      }

      return Object.keys(this.components)
        .filter(name => {
          return name.toLowerCase().startsWith(this.value.toLowerCase())
        })
        .sort((a, b) => {
          return a.length - b.length
        })
    },
    candidate () {
      return this.candidates[this.index]
    },
    matched () {
      if (this.candidate) {
        return this.candidate.slice(0, this.value.length)
      }

      return this.value
    },
    remaining () {
      if (this.candidate) {
        return this.candidate.slice(this.value.length)
      }

      return ''
    },
    matchedLink () {
      return this.components[this.candidate] || null
    }
  },
  watch: {
    value () {
      this.index = 0
    },
    matched (val) {
      if (!this.composing) {
        this.value = val
      }
    }
  },
  mounted () {
    if (this.autofocus) {
      this.focus()
    }
  },
  methods: {
    handleSpin (reverse) {
      if (!this.candidates.length) {
        return
      }
      this.index =
        (this.index + (reverse ? -1 : 1) + this.candidates.length) %
        this.candidates.length
    },
    handleTab (e) {
      if (this.remaining) {
        this.value = this.candidate
        e.preventDefault()
      }
    },
    handleEnter () {
      const link = this.matchedLink
      if (link) {
        this.$router.push(link)
        this.value = ''
      }
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    }
  }
}
</script>

<style lang="styl" scoped>
.one-quick-nav
  position relative
  width 480px
  font-size 18px
  color #545b66
  box-shadow 0 1px 0 0 #d3d9e6
  transition box-shadow 0.2s

  &:focus-within
    box-shadow 0 2px 0 0 #06f

.ghost,
.input
  display flex
  align-items center
  width 100%
  height 100%
  padding 12px 24px
  border none
  outline none
  background transparent
  font inherit
  line-height inherit

.input
  color transparent
  caret-color #545b66

.ghost
  display flex
  position absolute
  top 0
  left 0
  z-index -1
  color #545b66

.value
  display flex
  align-items center
  flex-grow 1

  .help
    margin-left 12px

.remaining,
.help
  color #a8b0bf

.help
  font-size 14px

.indicator
  font-size 14px
  font-variant-numeric tabular-nums

  .help
    margin-right 8px

.empty
  font-size 20px

.preloader
  position fixed
  top 0
  left 0
  visibility hidden

kbd
  padding 3px 5px
  font-size 12px
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif
  line-height 10px
  vertical-align middle
  background-color #f6f7fa
  border solid 1px #e2e6f0
  border-radius 6px
  box-shadow inset 0 -1px 0 #e2e6f0
</style>
