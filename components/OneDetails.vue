<template>
<div
  :class="{
    'one-details': true,
    expanded
  }"
>
  <button
    class="summary"
    @click="toggle"
  >
    <veui-icon
      class="arrow"
      name="chevron-right"
    /> {{ summary }}
  </button>
  <div
    ref="content"
    class="content"
    :style="style"
    @transitionend="stable = true"
  >
    <slot/>
  </div>
</div>
</template>

<script>
import { Icon } from 'veui'
import 'veui-theme-dls-icons/chevron-right'

export default {
  name: 'one-details',
  components: {
    'veui-icon': Icon
  },
  props: {
    summary: {
      type: String,
      required: true,
      default: '详细信息'
    }
  },
  data () {
    return {
      expanded: false,
      intrinsicHeight: 0,
      height: 0,
      stable: true
    }
  },
  computed: {
    style () {
      return this.stable
        ? this.expanded
          ? null
          : 'height: 0'
        : `height: ${this.height}px`
    }
  },
  mounted () {
    this.updateHeight()
  },
  methods: {
    toggle () {
      this.expanded = !this.expanded
      this.stable = false
      this.height = this.intrinsicHeight

      if (!this.expanded) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.height = 0
          })
        })
      }
    },
    updateHeight () {
      let { content } = this.$refs
      this.intrinsicHeight = content.scrollHeight
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-details
  overflow hidden

.summary
  border none
  background none
  padding-left 0
  cursor help
  outline none
  display flex
  align-items center
  line-height 1em

  &:hover
    color #333

.content
  overflow hidden
  transition height 0.3s

.arrow
  transition transform 0.3s
  margin-right 8px
  width 1.2em
  height 1.2em

  .expanded > .summary > &
    transform rotateZ(90deg)
</style>
