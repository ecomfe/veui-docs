<template>
<button
  ref="self"
  class="one-focus"
  tabindex="-1"
  :aria-label="t('focusDesc')"
/>
</template>

<script>
import i18n from 'veui/mixins/i18n'

export default {
  name: 'one-focus',
  mixins: [i18n],
  methods: {
    focus () {
      this.$refs.self.focus()
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-focus
  position absolute
  display flex
  justify-content center
  align-items center
  top 6px
  left 6px
  width 20px
  height 20px
  border-radius 50%
  border none
  background-color rgba(0, 102, 255, 20%)
  transition transform 0.2s, box-shadow 0.2s
  transform-origin center center
  transform scale(0)
  z-index 2147483647

  &:focus
    transform scale(1)
    box-shadow 0 0 0 2px #0054e6
    outline none
</style>
