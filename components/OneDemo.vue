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
  <section class="actions">
    <veui-button
      v-tooltip="t('playInCsb')"
      ui="icon"
      @click="play"
    >
      <veui-icon
        scale="0.8"
        name="one-demo-csb"
      />
    </veui-button>
    <veui-button
      v-tooltip="t(localExpanded ? 'hideCode' : 'showCode')"
      ui="icon"
      @click="localExpanded = !localExpanded"
    >
      <veui-icon
        :name="localExpanded ? 'one-demo-code-off' : 'one-demo-code'"
      />
    </veui-button>
  </section>
  <section
    v-if="$slots.source"
    ref="source"
    class="source"
    :style="{ height: localExpanded ? `${sourceHeight || 0}px` : '0' }"
  >
    <slot name="source"/>
  </section>
</article>
</template>

<script>
import { Button, Icon } from 'veui'
import tooltip from 'veui/directives/tooltip'
import i18n from 'veui/mixins/i18n'
import { BrowserWindow } from 'vue-windows'
import { createCodeSandbox } from './play'

export default {
  name: 'one-demo',
  directives: {
    tooltip
  },
  components: {
    'veui-button': Button,
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
  },
  methods: {
    play () {
      createCodeSandbox(preprocess(this.$refs.source.textContent))
    }
  }
}

function preprocess (code) {
  return code.replace(/from 'veui'/g, `from 'veui/dist/veui.esm'`)
    .replace(/(?:import 'veui-theme-dls-icons[^']+'\n)+/g, `import 'veui-theme-dls-icons/dist/icons.esm'\n`)
}

Icon.register({
  'one-demo-code': {
    width: 24,
    height: 24,
    d: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4z'
  },
  'one-demo-code-off': {
    width: 24,
    height: 24,
    d: 'M19.17 12l-4.58-4.59L16 6l6 6l-3.59 3.59L17 14.17L19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6l1.41-1.41L4.83 12L7 9.83l12.78 12.78l1.41-1.41L2.81 2.81L1.39 4.22z'
  },
  'one-demo-csb': {
    width: 32,
    height: 32,
    d: 'M2.667 8l13.938-8l13.943 8l.12 15.932L16.605 32L2.667 24zm2.786 3.307v6.344l4.458 2.479v4.688l5.297 3.063V16.85zm22.318 0l-9.755 5.542V27.88l5.292-3.063v-4.682l4.464-2.484zM6.844 8.802l9.74 5.526l9.76-5.573l-5.161-2.932l-4.547 2.594l-4.573-2.625z'
  }
})
</script>

<style src="vue-windows/dist/vue-windows.css"></style>

<style lang="stylus" scoped>
.one-demo
  overflow hidden

.demo
  border 1px solid #eee
  border-top-left-radius 4px
  border-top-right-radius 4px
  padding 30px

.desc
  border 1px solid #eee
  padding 18px 20px
  background-color #fcfcfc

.source
  overflow hidden
  transition height 0.3s

  & >>> pre
    margin-top 0
    margin-bottom 0

    .expanded &
      border-radius 0

.desc
.source >>> pre
.actions
  margin-top -1px

.actions
  position relative
  display flex
  justify-content center
  align-items center
  line-height 2
  width 100%
  height 48px
  border 1px solid #eee
  border-bottom-left-radius 4px
  border-bottom-right-radius 4px
  background-color #fff
  transition background-color 0.3s
  outline none

  .veui-button
    font-size 18px

  .veui-button + .veui-button
    margin-left 8px
</style>
