<template>
<v-splitpanes class="one-live">
  <v-pane
    min-size="30"
    class="live-editor"
  >
    <v-monaco-editor
      v-model="localCode"
      style="height: 100%"
      language="html"
      :theme="theme"
      :options="{
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
      }"
    />
    <div class="editor-toolbar">
      <veui-button
        v-tooltip="t('@onedemo.playInCodeSandbox')"
        :ui="iconUi"
        @click="play('CodeSandbox')"
      >
        <veui-icon name="one-demo-codesandbox"/>
      </veui-button>
      <veui-button
        v-tooltip="t('@onedemo.playInStackBlitz')"
        :ui="iconUi"
        @click="play('StackBlitz')"
      >
        <veui-icon name="one-demo-stackblitz"/>
      </veui-button>
      <veui-button
        v-tooltip="t('reset')"
        :ui="iconUi"
        @click="reset"
      >
        <veui-icon name="anticlockwise"/>
      </veui-button>
      <veui-button
        v-tooltip="t('copyCode')"
        :ui="iconUi"
        @click="copy"
      >
        <veui-icon name="copy"/>
      </veui-button>
      <veui-button
        v-tooltip="t(colorSchemeLabelKey)"
        :ui="iconUi"
        @click="switchColorScheme"
      >
        <veui-icon
          :name="colorSchemeIcon"
          scale="1.2"
        />
      </veui-button>
      <div class="editor-live-badge">
        <span>Live</span>
      </div>
    </div>
  </v-pane>
  <v-pane
    min-size="40"
    class="live-preview"
  >
    <v-live-preview
      class="editor-preview"
      :code="transformedCode"
      :requires="imports"
      :check-variable-availability="false"
      @success="dismissError"
      @error="handleError"
    />
    <transition name="editor-error">
      <veui-alert
        v-if="error"
        v-tooltip="t('dismiss')"
        ui="s"
        type="error"
        class="editor-error"
        @click.native="dismissError"
      >
        <code>{{ errorMessage }}</code>
      </veui-alert>
    </transition>
  </v-pane>
</v-splitpanes>
</template>

<script>
import Vue from 'vue'
import { VueLivePreview } from 'vue-live'
import MonacoEditor from 'vue-monaco'
import { editor } from 'monaco-editor/esm/vs/editor/editor.api'
import NightOwl from 'monaco-themes/themes/Night Owl.json'
import { Button, Icon, Alert } from 'veui'
import * as veui from 'veui'
import lodash from 'lodash'
import 'veui-theme-dls-icons'
import tooltip from 'veui/directives/tooltip'
import i18n from 'veui/mixins/i18n'
import toast from 'veui/plugins/toast'
import 'veui-theme-dls-icons/copy'
import 'veui-theme-dls-icons/anticlockwise'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { getLocale } from '../common/i18n'
import { play } from '../common/play'
import { transformLessCode } from '../common/transform'
import { loadPref, savePref } from '../common/util'

Vue.use(toast)

editor.defineTheme('night-owl', NightOwl)

Icon.register({
  'one-live-color-scheme-auto': {
    width: 24,
    height: 24,
    d:
      'M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 0 1 7.5 2m11.57 1.5l1.43 1.43L4.93 20.5L3.5 19.07L19.07 3.5m-6.18 2.43L11.41 5L9.97 6l.42-1.7L9 3.24l1.75-.12l.58-1.65L12 3.1l1.73.03l-1.35 1.13l.51 1.67m-3.3 3.61l-1.16-.73l-1.12.78l.34-1.32l-1.09-.83l1.36-.09l.45-1.29l.51 1.27l1.36.03l-1.05.87l.4 1.31M19 13.5a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15l-.24 3.35l-2.53-2.2m4.33-2.7l1.15-2.77l2.2 2.54l-3.35.23m1.15-4.96l-1.14-2.78l3.34.24l-2.2 2.54M9.63 18.93l2.77 1.15l-2.53 2.19l-.24-3.34z'
  },
  'one-live-color-scheme-light': {
    width: 24,
    height: 24,
    d:
      'M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z'
  },
  'one-live-color-scheme-dark': {
    width: 24,
    height: 24,
    d:
      'M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z'
  }
})

const iconPackage = 'veui-theme-dls-icons'
const iconNames = Object.keys(Icon.icons).filter(
  name => !name.startsWith('one-demo-') && Icon.icons[name]
)
const iconModules = [iconPackage].concat(
  iconNames.map(name => `${iconPackage}/${name}`)
)

const colorSchemeOptions = ['dark', 'light', 'auto']

export default {
  name: 'one-live',
  components: {
    'veui-button': Button,
    'veui-icon': Icon,
    'veui-alert': Alert,
    'v-splitpanes': Splitpanes,
    'v-pane': Pane,
    'v-monaco-editor': MonacoEditor,
    'v-live-preview': VueLivePreview
  },
  directives: {
    tooltip
  },
  mixins: [i18n],
  inheritAttrs: false,
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      localCode: this.code,
      transformedCode: '',
      error: null,
      imports: {
        veui,
        lodash,
        ...iconModules.reduce((mocks, module) => {
          mocks[module] = true
          return mocks
        }, {})
      },
      colorSchemeOption: loadPref('prefers-color-scheme'),
      colorSchemeSystemPref: null
    }
  },
  computed: {
    errorMessage () {
      const { error } = this

      if (!error) {
        return null
      }

      return error.name ? `${error.name}: ${error.message}` : error.message
    },
    colorScheme () {
      if (!this.colorSchemeOption) {
        return 'dark'
      }

      if (this.colorSchemeOption === 'auto') {
        return this.colorSchemeSystemPref
      }

      return this.colorSchemeOption
    },
    theme () {
      return this.colorScheme === 'dark' ? 'night-owl' : 'vs'
    },
    iconUi () {
      const ui = 's square icon'
      return this.colorScheme === 'dark' ? `${ui} reverse` : ui
    },
    colorSchemeIcon () {
      if (!this.colorSchemeOption) {
        return 'one-live-color-scheme-dark'
      }

      return {
        light: 'one-live-color-scheme-light',
        dark: 'one-live-color-scheme-dark',
        auto: 'one-live-color-scheme-auto'
      }[this.colorSchemeOption]
    },
    colorSchemeLabelKey () {
      if (!this.colorSchemeOption) {
        return 'darkMode'
      }

      return {
        light: 'lightMode',
        dark: 'darkMode',
        auto: 'followSystem'
      }[this.colorSchemeOption]
    }
  },
  watch: {
    localCode: {
      immediate: true,
      handler (code) {
        this.$nextTick(() => {
          try {
            this.transformedCode = transformLessCode(code)
          } catch (e) {
            this.error = e
            return
          }
          this.error = null
        })
      }
    }
  },
  mounted () {
    this.mql = window.matchMedia('(prefers-color-scheme: dark)')
    this.mql.addEventListener('change', this.handleColorSchemeChange)
    this.colorSchemeSystemPref = this.mql.matches ? 'dark' : 'light'
  },
  beforeDestroy () {
    this.mql.removeEventListener('change', this.handleColorSchemeChange)
  },
  methods: {
    play (vendor) {
      let locale = getLocale(this.$route.path)
      play(this.code, { locale, vendor })
    },
    async copy () {
      try {
        await navigator.clipboard.writeText(this.code)
        this.$toast.success(this.t('copySuccess'))
      } catch (e) {
        this.$toast.error(this.t('copyFailed'))
      }
    },
    switchColorScheme () {
      if (!this.colorSchemeOption) {
        this.colorSchemeOption = 'light'
      } else {
        this.colorSchemeOption = colorSchemeOptions[
          (colorSchemeOptions.indexOf(this.colorSchemeOption) + 1) %
            colorSchemeOptions.length
        ]
      }

      savePref('prefers-color-scheme', this.colorSchemeOption)
    },
    handleColorSchemeChange () {
      this.colorSchemeSystemPref = this.mql.matches ? 'dark' : 'light'
    },
    reset () {
      this.localCode = this.code
    },
    handleChange (code) {
      this.localCode = code
    },
    handleError (error) {
      this.error = error
    },
    dismissError () {
      this.error = null
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-live
  & >>> .splitpanes__pane
    position relative

  & >>> .splitpanes__splitter
    width 6px
    background #eee
    transition all 0.3s

    &:hover
      background #ccc
      transform scaleX(2)

  & >>> .live-preview
    overflow auto

.editor-toolbar
  position absolute
  top 12px
  right 28px
  display flex
  align-items center

.editor-live-badge
  display flex
  align-items center
  position relative
  margin-left 8px
  padding 0 4px 0 20px
  border-radius 2px
  font-size 12px
  background-color #00bf5c
  color #fff
  height 18px

  &::before
    content ""
    position absolute
    left 7px
    top 6px
    width 6px
    height 6px
    border-radius 50%
    background-color #fff
    box-shadow 0 0 0 0 rgba(255, 255, 255, 1)
    animation pulse 2s infinite

.editor-error
  position absolute
  bottom 16px
  right 16px
  left 16px
  cursor pointer
  transition all 0.3s

  &:hover
    opacity 0.8

.editor-error-enter
.editor-error-leave-to
  opacity 0
  transform translateY(10px)

@keyframes pulse
  0%
    transform scale(0.95)
    box-shadow 0 0 0 0 rgba(255, 255, 255, 0.9)

  70%
    transform scale(1)
    box-shadow 0 0 0 12px rgba(255, 255, 255, 0)

  100%
    transform scale(0.95)
    box-shadow 0 0 0 0 rgba(255, 255, 255, 0)

.veui-button[ui~="icon"][ui~="reverse"]
  color #ebedf5

  &:hover
  &[data-focus-visible-added]
    color #f6f7fa

  &:active
    color #fff
</style>
