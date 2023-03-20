<template>
<nav
  v-outside="collapseMenu"
  class="one-nav"
  :class="{ expanded }"
>
  <div
    class="toggle"
    @click="toggleMenu"
  >
    <veui-icon
      class="expanded-icon"
      name="chevron-left"
    />
    <veui-icon
      class="collapsed-icon"
      name="hamburger"
    />
  </div>
  <veui-menu
    class="one-menu"
    :items="menuItems"
    :expanded.sync="menuExpanded"
  >
    <template #item-label="{ label, sub }">
      {{ label }}<small v-if="sub">{{ sub }}</small>
    </template>
  </veui-menu>
</nav>
</template>

<script>
import i18n from '../common/i18n'
import { Menu, Icon } from 'veui'
import outside from 'veui/directives/outside'
import 'veui-theme-dls-icons/hamburger'
import 'veui-theme-dls-icons/chevron-left'

export default {
  name: 'one-menu',
  directives: {
    outside
  },
  components: {
    'veui-menu': Menu,
    'veui-icon': Icon
  },
  mixins: [i18n],
  props: {
    expanded: Boolean,
    nav: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      menuExpanded: []
    }
  },
  computed: {
    menuItems () {
      return this.nav.map(item => this.normalizeItem(item))
    }
  },
  created () {
    this.menuExpanded = this.menuItems.map(({ name }) => name)
  },
  methods: {
    getTitleDetail (title) {
      let [main, sub] = title.split(' - ')
      return [main, sub]
    },
    isActive (path) {
      let { route = {} } = this.$router.resolve(path) || {}
      return route.name === this.$route.name
    },
    normalizeItem ({ title, children, slug, link, disabled }, base = '') {
      const fullSlug = `${base}/${slug}`
      const localePath = this.getLocalePath(fullSlug)
      const to = (link !== false && fullSlug && !disabled) ? localePath : null
      const [main, sub] = this.getTitleDetail(title)

      return {
        label: main,
        sub,
        to,
        name: fullSlug,
        disabled,
        children: children ? children.map(child => this.normalizeItem(child, fullSlug)) : []
      }
    },
    toggleMenu () {
      this.$emit('toggle', !this.expanded)
    },
    collapseMenu () {
      this.$emit('toggle', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-nav
  display flex
  flex-direction column
  background-color #fff
  padding-top 24px

.one-menu
  flex 1 1 auto
  width 100%
  overflow auto

  & >>> .DocSearch
    margin 0
    border-radius 6px
    font inherit

  small
    margin-left 8px
    opacity 0.7

.toggle
  display none

.disabled
  opacity 0.3
  pointer-events none

@media (max-width 480px)
  .one-nav
    position fixed
    z-index 20
    transition transform 0.3s, box-shadow 0.3s
    transform translateX(-100%)

    &.expanded
      transform translateX(0)
      box-shadow 0 0 48px rgba(0, 0, 0, 0.2)

  header
    position relative

  .toggle
    display flex
    align-items center
    justify-content center
    width 36px
    height 36px
    position absolute
    top 80px
    left 100%
    border 1px solid #e2e6f0
    border-top-right-radius 4px
    border-bottom-right-radius 4px
    background-color #fff
    box-shadow 0 0 12px rgba(0, 0, 0, 0.1)
    font-size 20px

    &::before
      content ""
      position absolute
      top 0
      bottom 0
      left -19px
      width 20px
      background-color #fff

.expanded-icon
.collapsed-icon
  position absolute
  transition transform 0.3s, opacity 0.3s

.expanded-icon
  margin-left -4px
  opacity 0
  transform translateX(-10px)

  .expanded &
    opacity 1
    transform none

.collapsed-icon
  .expanded &
    opacity 0
    transform translateX(10px)
</style>
