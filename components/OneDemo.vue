<template>
<article
  class="one-demo"
  :class="{ codeExpanded }"
>
  <section class="demo">
    <browser-window
      v-if="browser"
      :url="browser"
      width="auto"
      height="400px"
    >
      <one-iframe global-style="body { margin: 0 !important; } .veui-layout { min-width: auto !important; }">
        <one-focus ref="focuser"/>
        <slot/>
      </one-iframe>
    </browser-window>
    <div
      v-else
      class="content"
    >
      <one-focus ref="focuser"/>
      <slot/>
    </div>
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
      v-tooltip="t('resetFocus')"
      class="reset-focus"
      ui="icon"
      @click="resetFocus"
    >
      <veui-icon name="one-demo-focus"/>
    </veui-button>
    <veui-button
      v-tooltip="t(codeExpanded ? 'hideCode' : 'showCode')"
      ui="icon"
      @click="codeExpanded = !codeExpanded"
    >
      <veui-icon
        scale="1.2"
        :name="codeExpanded ? 'one-demo-code-off' : 'one-demo-code'"
      />
    </veui-button>
    <veui-button
      v-tooltip="t(editing ? 'closeEditor' : 'openEditor')"
      class="toggle-editor"
      ui="text"
      @click="editing = !editing"
    >
      Live
    </veui-button>
    <one-edit-link
      class="edit"
      variant="quiet"
      type="demo"
      :path="path"
    />
  </section>
  <section
    v-if="$slots.source"
    ref="source"
    class="source"
    :style="{ height: codeExpanded ? `${sourceHeight || 0}px` : '0' }"
  >
    <div class="source-toolbar">
      <veui-button
        v-tooltip="t('@onelive.copyCode')"
        ui="icon reverse"
        @click="copy"
      >
        <veui-icon name="copy"/>
      </veui-button>
    </div>
    <slot name="source"/>
  </section>
  <transition name="editor">
    <one-repl
      v-if="editing"
      class="one-demo-editor"
      :class="{
        'one-demo-editor-shrink': !editorExpanded
      }"
      :code="code"
      :expanded="editorExpanded"
      :browser="!!browser"
      @close="handleEditorClose"
      @toggle="handleEditorToggle"
    />
  </transition>
</article>
</template>

<script>
import Vue from 'vue'
import { Button, Icon } from 'veui'
import tooltip from 'veui/directives/tooltip'
import modal from 'veui/managers/modal'
import i18n from 'veui/mixins/i18n'
import toast from 'veui/plugins/toast'
import { BrowserWindow } from 'vue-windows'
import { getLocale } from '../common/i18n'
import { play } from '../common/play'
import OneIframe from './OneIframe'
import OneEditLink from './OneEditLink'
import OneRepl from './OneRepl'
import OneFocus from './OneFocus'
import 'veui-theme-dls-icons/copy'

Vue.use(toast)

export default {
  name: 'one-demo',
  directives: {
    tooltip
  },
  components: {
    'veui-button': Button,
    'veui-icon': Icon,
    BrowserWindow,
    OneIframe,
    OneEditLink,
    OneRepl,
    OneFocus
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
      codeExpanded: false,
      editing: false,
      editorExpanded: true
    }
  },
  computed: {
    lock () {
      return this.editing && this.editorExpanded
    }
  },
  watch: {
    lock (value) {
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

    this.code = this.$refs.source?.querySelector('pre')?.textContent || ''
  },
  destroyed () {
    modal.close()
  },
  methods: {
    play (vendor) {
      let locale = getLocale(this.$route.path)
      play(this.$refs.source.textContent, { locale, vendor })
    },
    async copy () {
      try {
        await navigator.clipboard.writeText(this.code)
        this.$toast.success(this.t('@onelive.copySuccess'))
      } catch (e) {
        this.$toast.error(this.t('@onelive.copyFailed'))
      }
    },
    handleEditorClose () {
      this.editing = false
    },
    handleEditorToggle (val) {
      this.editorExpanded = val
    },
    resetFocus () {
      this.$refs.focuser.focus()
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
  },
  'one-demo-focus': {
    width: 24,
    height: 24,
    d: 'M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17Zm0-2q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm-7 6q-.825 0-1.413-.587Q3 19.825 3 19v-4h2v4h4v2Zm10 0v-2h4v-4h2v4q0 .825-.587 1.413Q19.825 21 19 21ZM3 9V5q0-.825.587-1.413Q4.175 3 5 3h4v2H5v4Zm16 0V5h-4V3h4q.825 0 1.413.587Q21 4.175 21 5v4Zm-7 3Z'
  }
})
</script>

<style src="vue-windows/dist/vue-windows.css"></style>

<style lang="stylus" scoped>
.one-demo
  overflow hidden

.demo
  position relative
  border 1px solid #eee
  border-top-left-radius 4px
  border-top-right-radius 4px
  padding 30px
  overflow-x auto

  & >>> .style-module_body__14MV-
    overflow hidden
    transform translate(0, 0)
    padding 0

.demo > :not(.content):first-child // as vue-windows do not output class or style
  min-width calc(100% - 40px)

.content
  width calc(100% - 40px)
  min-width max-content

.desc
  border 1px solid #eee
  padding 18px 20px
  background-color #fcfcfc

.source
  position relative
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

  .codeExpanded &
    border-radius 0

  .veui-button:not(.toggle-editor)
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
  transition bottom 0.1s, box-shadow 0.2s

  &-shrink
    bottom 50vh
    box-shadow 0 0 4px #0006

.editor-enter-active
.editor-leave-active
  transform-origin 50% 50%
  transition all 0.3s

.editor-enter
.editor-leave-to
  opacity 0
  transform scale(0.99) translateY(3px)

.toggle-editor
  height 20px
  padding 0 3px
  font-weight 600

  &::after
    content none !important

  &
  &:hover
  &[data-focus-visible-added]
  &:active
    border 1.5px solid currentColor !important

  &[data-focus-visible-added]
    border-color #0052cc !important
    box-shadow 0 0 0 2px rgba(0, 102, 255, 0.2) !important

.source-toolbar
  position absolute
  top 12px
  right 28px
  display flex
  align-items center

.veui-button[ui~="icon"][ui~="reverse"]
  color #ebedf5

  &:hover
  &[data-focus-visible-added]
    color #f6f7fa

  &:active
    color #fff

@media (max-width 480px)
  .toggle-editor
  .reset-focus
    display none
</style>
