<template>
<nav
  v-if="flattenItems.length"
  v-outside="collapseToc"
  class="one-toc"
  :class="{ expanded }"
>
  <veui-anchor
    ui="s"
    target-offset="120px"
    :items="items"
  />
  <div
    class="toggle"
    @click="toggleToc"
  >
    <veui-icon
      class="collapsed-icon"
      name="list-unordered"
    />
  </div>
</nav>
</template>

<script>
import { Anchor, Icon } from 'veui'
import outside from 'veui/directives/outside'
import 'veui-theme-dls-icons/list-unordered'

const flattenRe = /(?:^|\/)(?:components|directives)\//

export default {
  name: 'one-toc',
  directives: {
    outside
  },
  components: {
    'veui-anchor': Anchor,
    'veui-icon': Icon
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    flattenItems () {
      return this.items.flatMap(
        ({ children }) => (children || []).map(({ children, ...child }) => child) || []
      )
    },
    toc () {
      if (flattenRe.test(this.$route.path)) {
        return this.flattenItems
      }

      return this.items
    }
  },
  methods: {
    toggleToc () {
      this.expanded = !this.expanded
    },
    collapseToc () {
      if (this.expanded) {
        this.expanded = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.toggle
  display none

@media (max-width 480px)
  .one-toc
    position fixed
    background-color #fff
    z-index 20
    top 0
    right 0
    bottom 0
    left auto
    padding 40px 60px 40px 0
    transition transform 0.3s
    transform translateX(100%)

    &::before
      content ""
      position absolute
      top 0
      bottom 0
      left 0
      width 1px
      background-color #e2e6f0

    &.expanded
      transform translateX(0)
      box-shadow 0 0 36px rgba(0, 0, 0, 0.1)

  .toggle
    z-index -1
    display flex
    align-items center
    justify-content center
    width 36px
    height 36px
    position absolute
    top 80px
    right 100%
    border 1px solid #e2e6f0
    border-top-left-radius 4px
    border-bottom-left-radius 4px
    background-color #fff
    box-shadow 0 0 12px rgba(0, 0, 0, 0.1)
    font-size 20px
    z-index 1

    &::before
      content ""
      position absolute
      top 0
      bottom 0
      right -19px
      width 20px
      background-color #fff

  &.expanded .toggle
    transform translateX(100%)
    opacity 0
</style>
