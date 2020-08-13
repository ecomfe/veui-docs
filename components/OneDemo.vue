<template>
<article
  class="one-demo"
  :class="{ expanded: localExpanded }"
>
  <section class="demo">
    <browser-window
      v-if="browser"
      :url="browser"
      width="80%"
      height="400px"
    >
      <slot/>
    </browser-window>
    <slot v-else/>
  </section>
  <section
    v-if="$slots.desc"
    class="desc"
  >
    <slot name="desc"/>
  </section>
  <section
    v-if="$slots.source"
    ref="source"
    class="source"
    :style="{ height: localExpanded ? `${sourceHeight || 0}px` : '0' }"
  >
    <slot name="source"/>
  </section>
  <button
    class="toggle"
    @click="localExpanded = !localExpanded"
  >
    <veui-icon
      class="arrow"
      name="chevron-down"
    /> {{ t(localExpanded ? 'hideCode' : 'showCode') }}
  </button>
</article>
</template>

<script>
import { Icon } from 'veui'
import i18n from 'veui/mixins/i18n'
import { BrowserWindow } from 'vue-windows'
import 'veui-theme-dls-icons/chevron-down'

export default {
  name: 'one-demo',
  components: {
    'veui-icon': Icon,
    BrowserWindow
  },
  mixins: [i18n],
  props: {
    expanded: Boolean,
    browser: String
  },
  data () {
    return {
      sourceHeight: 0,
      localExpanded: this.expanded
    }
  },
  watch: {
    expanded (val) {
      this.localExpanded = val
    },
    localExpanded (val) {
      this.$emit('update:expanded', val)
    }
  },
  mounted () {
    let source = this.$refs.source
    let style = source.style
    style.height = ''
    style.height = source.offsetHeight
    this.sourceHeight = source.offsetHeight
    style.height = '0'
  }
}
</script>

<style src="vue-windows/dist/vue-windows.css"></style>

<style lang="stylus" scoped>
.one-demo
  overflow hidden

.arrow
  transition transform 0.3s
  height 1.2em
  margin-right 4px

  .one-demo.expanded &
    transform rotateZ(180deg)

.demo
  border 1px solid #eee
  padding 30px

.desc
  border 1px solid #eee
  padding 18px 20px
  background-color #fcfcfc

.source
  transition height 0.3s

  & >>> pre
    margin-top 0
    margin-bottom 0

.desc
.source >>> pre
.toggle
  margin-top -1px

.toggle
  position relative
  display flex
  justify-content center
  align-items center
  line-height 2
  width 100%
  height 40px
  border 1px solid #eee
  background-color #fff
  transition background-color 0.3s
  outline none
  cursor pointer

  &:hover
  &.focus-visible
    background-color #fafafa
</style>
