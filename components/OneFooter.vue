<template>
<footer class="one-footer">
  <nav
    class="links"
    :class="{ empty: single }"
  >
    <nuxt-link
      v-if="prev && level > 0"
      key="prev"
      class="prev"
      :to="prev.to"
    >
      {{ prev.title }}
    </nuxt-link>
    <nuxt-link
      v-if="next && level > 0"
      key="next"
      class="next"
      :to="next.to"
    >
      {{ next.title }}
    </nuxt-link>
  </nav>
  <p class="copyright">
    © Baidu, Inc. {{ year }}
  </p>
</footer>
</template>

<script>
import { compact, find, findIndex } from 'lodash'
import i18n from '../common/i18n'

export default {
  name: 'one-footer',
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
      year: new Date().getFullYear()
    }
  },
  computed: {
    links () {
      let segments = compact(this.canonicalPath.split('/'))
      return getLinks(this.nav, segments)
    },
    level () {
      return this.links ? this.links.level : 0
    },
    base () {
      return this.links ? this.links.base : null
    },
    prev () {
      return this.resolve(this.links ? this.links.prev : null)
    },
    next () {
      return this.resolve(this.links ? this.links.next : null)
    },
    single () {
      return (!this.prev && !this.next) || this.level < 1
    }
  },
  watch: {
    single: {
      handler (val) {
        this.$emit('update', {
          hasLinks: !val
        })
      },
      immediate: true
    }
  },
  methods: {
    resolve (link) {
      let { slug, title, link: lk } = link || {}
      if (typeof slug !== 'string' || lk === false) {
        return null
      }
      let base = this.base
      return {
        title,
        to: this.getLocalePath(slug ? `${base}/${slug}` : base)
      }
    }
  }
}

function findSibling (items, start, forward) {
  if ((start === 0 && !forward) || (start === items.length - 1 && forward)) {
    return null
  }

  let candidates = forward
    ? items.slice(start + 1)
    : items.slice(0, start).reverse()
  return find(candidates, ({ disabled }) => !disabled)
}

function getLinks (nav, remaining, level = 0, base = '') {
  let [segment = '', ...segments] = [...remaining]

  let i = findIndex(nav, ({ slug }) => slug === segment)
  if (i === -1) {
    return null
  }

  let links = {
    prev: findSibling(nav, i, false),
    next: findSibling(nav, i, true),
    level,
    base
  }

  let sub = nav[i].children
  if (!sub) {
    if (segments.length) {
      return null
    }

    return links
  }
  return (
    getLinks(sub, segments, level + 1, segment ? `${base}/${segment}` : base) ||
    links
  )
}
</script>

<style lang="stylus" scoped>
arrow()
  content ""
  display block
  width 23px
  height 33px
  background #333 url("/icons/angle.svg") no-repeat 50% 50% / auto 21.5px
  transition background-color 0.3s

.one-footer
  position relative
  clear both
  padding 0 60px

.links
  border-top 1px solid #eee
  padding 20px 0 80px
  overflow hidden

.empty
  display none
  overflow hidden

.prev
.next
  display block
  line-height 33px
  color #333
  text-decoration none

  &:hover
  &.focus-visible
    &::before
    &::after
      background-color #5b5b5b

  &:active
    &::before
    &::after
      background-color #818181

.prev::before
.next::after
  arrow()

.prev
  float left

  &::before
    float left
    margin-right 15px
    transform rotate(180deg)

.next
  float right

  &::after
    float right
    margin-left 15px

.copyright
  margin 0
  padding 25px 0 20px
  border-top 1px solid #eee
  line-height 1
  font-size 12px
  text-align center
</style>
