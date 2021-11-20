<template>
<article
  class="one-demo"
  :class="{ expanded }"
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
      v-tooltip="t('playInCodeSandbox')"
      ui="icon"
      @click="play('CodeSandbox')"
    >
      <veui-icon name="one-demo-codesandbox"/>
    </veui-button>
    <veui-button
      v-tooltip="t('playInStackBlitz')"
      ui="icon"
      @click="play('StackBlitz')"
    >
      <veui-icon name="one-demo-stackblitz"/>
    </veui-button>
    <veui-button
      v-tooltip="t('expandEditor')"
      class="toggle-editor"
      ui="icon"
      @click="editing = true"
    >
      <veui-icon
        scale="1.2"
        :name="expanded ? 'one-demo-code-off' : 'one-demo-code'"
      />
    </veui-button>
    <veui-button
      v-tooltip="t(expanded ? 'hideCode' : 'showCode')"
      class="toggle-source"
      ui="icon"
      @click="expanded = !expanded"
    >
      <veui-icon
        scale="1.2"
        :name="expanded ? 'one-demo-code-off' : 'one-demo-code'"
      />
    </veui-button>
    <one-edit-link
      class="edit"
      variant="quiet"
      :path="path"
    />
  </section>
  <section
    v-if="$slots.source"
    ref="source"
    class="source"
    :style="{ height: expanded ? `${sourceHeight || 0}px` : '0' }"
  >
    <slot name="source"/>
  </section>
  <transition name="editor">
    <one-repl
      v-if="editing"
      class="one-demo-editor"
      :code="code"
      @close="editing = false"
    />
  </transition>
</article>
</template>

<script>
import { Button, Icon } from 'veui'
import tooltip from 'veui/directives/tooltip'
import modal from 'veui/managers/modal'
import i18n from 'veui/mixins/i18n'
import { BrowserWindow } from 'vue-windows'
import { getLocale } from '../common/i18n'
import { play } from '../common/play'
import OneEditLink from './OneEditLink'

export default {
  name: 'one-demo',
  directives: {
    tooltip
  },
  components: {
    'veui-button': Button,
    'veui-icon': Icon,
    BrowserWindow,
    OneEditLink,
    OneRepl: () => import('./OneRepl')
  },
  mixins: [i18n],
  props: {
    browser: String,
    path: String
  },
  data () {
    return {
      code: '',
      sourceHeight: 0,
      expanded: false,
      editing: false
    }
  },
  watch: {
    editing (value) {
      if (value) {
        modal.open()
      } else {
        modal.close()
      }
    }
  },
  mounted () {
    let source = this.$refs.source
    let style = source.style
    style.height = ''
    style.height = source.offsetHeight
    this.sourceHeight = source.offsetHeight
    style.height = '0'

    this.code = this.$refs.source?.textContent
  },
  methods: {
    play (vendor) {
      let locale = getLocale(this.$route.path)
      play(this.$refs.source.textContent, { locale, vendor })
    }
  }
}

Icon.register({
  'one-demo-code': {
    width: 24,
    height: 24,
    d:
      'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4z'
  },
  'one-demo-code-off': {
    width: 24,
    height: 24,
    d:
      'M19.17 12l-4.58-4.59L16 6l6 6l-3.59 3.59L17 14.17L19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6l1.41-1.41L4.83 12L7 9.83l12.78 12.78l1.41-1.41L2.81 2.81L1.39 4.22z'
  },
  'one-demo-codesandbox': {
    width: 32,
    height: 32,
    d:
      'M2.667 8l13.938-8l13.943 8l.12 15.932L16.605 32L2.667 24zm2.786 3.307v6.344l4.458 2.479v4.688l5.297 3.063V16.85zm22.318 0l-9.755 5.542V27.88l5.292-3.063v-4.682l4.464-2.484zM6.844 8.802l9.74 5.526l9.76-5.573l-5.161-2.932l-4.547 2.594l-4.573-2.625z'
  },
  'one-demo-stackblitz': {
    width: 28,
    height: 28,
    d:
      'M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z'
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
    border-top-right-radius 0
    border-top-left-radius 0

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

  .expanded &
    border-radius 0

  .veui-button
    font-size 18px

  .veui-button + .veui-button
    margin-left 12px

.edit
  position absolute
  right 30px
  top 50%
  transform translateY(-50%)
  font-size 12px

.one-demo-editor
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 10
  background-color #fff

.editor-enter-active
.editor-leave-active
  transform-origin 50% 50%
  transition all 0.3s

.editor-enter
.editor-leave-to
  opacity 0
  transform scale(0.99) translateY(3px)

.toggle-source
  display none

@media (max-width 480px)
  .toggle-source
    display inline-block

  .toggle-editor
    display none
</style>
