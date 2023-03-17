<template>
<button
  class="one-goto"
  @click="goto"
>
  <veui-icon
    class="icon"
    name="bullseye-hit"
    :label="t('goto')"
  />
</button>
</template>

<script>
import { Icon } from 'veui'
import i18n from 'veui/mixins/i18n'
import 'veui-theme-dls-icons/bullseye-hit'

export default {
  name: 'one-back-to-top',
  components: {
    'veui-icon': Icon
  },
  mixins: [i18n],
  methods: {
    goto () {
      this.$emit('goto')
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-goto
  display none
  position fixed
  right 35px
  bottom 35px
  width 43px
  height 43px
  border 1px solid #dbdbdb
  border-radius 50%
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

@media (max-width 480px)
  .one-goto
    display block
</style>
