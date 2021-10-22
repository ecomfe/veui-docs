<template>
<button
  class="one-back-to-top"
  :class="{
    scrolled: !top
  }"
  aria-hidden="true"
  @click="scrollToTop"
>
  <veui-icon
    class="icon"
    name="chevron-up"
    :label="t('toTop')"
  />
</button>
</template>

<script>
import { Icon } from 'veui'
import i18n from 'veui/mixins/i18n'
import 'veui-theme-dls-icons/chevron-up'
import { debounce } from 'lodash'

export default {
  name: 'one-back-to-top',
  components: {
    'veui-icon': Icon
  },
  mixins: [i18n],
  data () {
    return {
      top: true
    }
  },
  mounted () {
    this.check = debounce(() => {
      this.top = window.scrollY === 0
    }, 300)
    window.addEventListener('scroll', this.check)
    this.check()
  },
  beforeDestroy () {
    this.check.cancel()
    window.removeEventListener('scroll', this.check)
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-back-to-top
  position fixed
  right 35px
  bottom 35px
  width 43px
  height 43px
  border 1px solid #dbdbdb
  border-radius 50%
  opacity 0
  outline none
  box-shadow 0 0 2px #dbdbdb
  cursor pointer
  transition background-color 0.3s, opacity 0.3s

  &:hover
  &.focus-visible
    background-color #f7f7f7

  &:active
    background-color #ececec

  .icon
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)

.scrolled
  opacity 1
</style>
