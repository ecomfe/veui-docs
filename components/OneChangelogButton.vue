<template>
<div
  v-if="tag"
  class="one-changelog-button trigger"
>
  <veui-button
    ui="s"
    class="normal"
    @click="open = !open"
  >
    <veui-icon name="clock"/>
    {{ t('changelog') }}
  </veui-button>
  <div
    class="mobile"
    @click="open = !open"
  >
    <veui-icon
      class="collapsed-icon"
      name="clock"
    />
  </div>
  <veui-drawer
    :title="t('changelog')"
    :open.sync="open"
    overlay-class="drawer"
    outside-closable
    footless
  >
    <one-changelog
      class="changelog"
      :tag="tag"
    />
  </veui-drawer>
</div>
</template>

<script>
import { Button, Drawer, Icon } from 'veui'
import i18n from 'veui/mixins/i18n'
import 'veui-theme-dls-icons/clock'

export default {
  name: 'one-changelog-button',
  components: {
    'veui-button': Button,
    'veui-drawer': Drawer,
    'veui-icon': Icon,
    OneChangelog: () => import('./OneChangelog')
  },
  mixins: [i18n],
  props: {
    tag: String
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.trigger
  position absolute
  right 60px
  height 36px
  display flex
  align-items center

.changelog
  padding 12px 16px

.mobile
  display none

@media (max-width 480px)
  .normal
    display none

  .mobile
    display flex
    align-items center
    justify-content center
    width 36px
    height 36px
    position fixed
    top 140px
    right 0
    border 1px solid #e2e6f0
    border-top-left-radius 4px
    border-bottom-left-radius 4px
    background-color #fff
    box-shadow 0 0 12px rgba(0, 0, 0, 0.1)
    font-size 20px

  .trigger
    top 80px
    right 30px
    height auto

  .drawer
    --dls-drawer-width calc(100vw - 16px)
</style>
