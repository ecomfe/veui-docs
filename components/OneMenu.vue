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
  <veui-sidenav
    class="one-menu"
    :items="menuItems"
    :expanded.sync="menuExpanded"
  >
    <template #item-label="{ name, label, sub, cn }">
      <template v-if="name === '/components'">
        {{ label }}
        <veui-button
          v-tooltip="t(sort ? 'unsort' : 'sort')"
          class="sort"
          :ui="`icon ${sort ? 'strong' : 'aux'}`"
          @click.stop="sort = !sort"
        >
          <veui-icon name="one-alphabetical-sort"/>
        </veui-button>
      </template>
      <template v-else>
        <small
          v-if="sub"
          class="sub"
        >⤷</small>{{ label
        }}<small
          v-if="cn"
          class="cn"
        >{{ cn }}</small>
      </template>
    </template>
  </veui-sidenav>
</nav>
</template>

<script>
import { Button, Sidenav, Icon } from 'veui'
import i18n from '../common/i18n'
import veuiI18n from 'veui/mixins/i18n'
import tooltip from 'veui/directives/tooltip'
import outside from 'veui/directives/outside'
import { loadPref, savePref } from '../common/util'
import 'veui-theme-dls-icons/hamburger'
import 'veui-theme-dls-icons/chevron-left'

Icon.register({
  'one-alphabetical-sort': {
    width: 24,
    height: 24,
    d:
      'M12 5h10v2H12m0 12v-2h10v2m-10-8h10v2H12m-3 0v2l-3.33 4H9v2H3v-2l3.33-4H3v-2M7 3H5c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H5V5h2Z'
  }
})

export default {
  name: 'one-menu',
  directives: {
    outside,
    tooltip
  },
  components: {
    'veui-button': Button,
    'veui-sidenav': Sidenav,
    'veui-icon': Icon
  },
  mixins: [i18n, veuiI18n],
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
      menuExpanded: [],
      sort: false
    }
  },
  computed: {
    menuItems () {
      return this.nav.map(item => this.normalizeItem(item))
    }
  },
  watch: {
    sort (val) {
      savePref('sort-components', val)
    }
  },
  created () {
    this.menuExpanded = this.menuItems.map(({ name }) => name)
  },
  mounted () {
    this.sort = loadPref('sort-components') || false
  },
  methods: {
    getTitleDetail (title) {
      let [main, cn] = title.split(' - ')
      return [main, cn]
    },
    isActive (path) {
      let { route = {} } = this.$router.resolve(path) || {}
      return route.name === this.$route.name
    },
    normalizeItem ({ title, children, slug, sub, link, disabled }, base = '') {
      const fullSlug = `${base}/${slug}`
      const localePath = this.getLocalePath(fullSlug)
      const to = link !== false && fullSlug && !disabled ? localePath : null
      const [main, cn] = this.getTitleDetail(title)

      const normalizedChildren = children
        ? children.map(child => this.normalizeItem(child, fullSlug))
        : []

      return {
        label: main,
        cn,
        to,
        name: fullSlug,
        sub: this.sort ? false : sub,
        disabled,
        children: fullSlug === '/components' && this.sort
          ? normalizedChildren.sort((a, b) => a.label.localeCompare(b.label))
          : normalizedChildren
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

  .cn
    margin-left 8px
    opacity 0.7

  .sub
    margin-right 8px
    opacity 0.3

  & >>> .veui-menu-item-label
    flex-grow 1

  .sort
    margin-left 8px

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
