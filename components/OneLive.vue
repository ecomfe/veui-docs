<template>
<v-splitpanes class="one-live">
  <v-pane
    min-size="30"
    class="live-editor"
  >
    <v-live-editor
      :code="localCode"
      line-numbers
      @change="handleChange"
    />
    <div class="editor-toolbar">
      <veui-button
        v-tooltip="t('@onedemo.playInCodeSandbox')"
        ui="s translucent square"
        @click="play('CodeSandbox')"
      >
        <veui-icon name="one-demo-codesandbox"/>
      </veui-button>
      <veui-button
        v-tooltip="t('@onedemo.playInStackBlitz')"
        ui="s translucent square"
        @click="play('StackBlitz')"
      >
        <veui-icon name="one-demo-stackblitz"/>
      </veui-button>
      <veui-button
        v-tooltip="t('reset')"
        ui="s translucent square"
        @click="reset"
      >
        <veui-icon name="anticlockwise"/>
      </veui-button>
      <veui-button
        v-tooltip="t('copyCode')"
        ui="s translucent square"
        @click="copy"
      >
        <veui-icon name="copy"/>
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
import { VueLiveEditor, VueLivePreview } from 'vue-live'
import 'vue-live/lib/vue-live.esm.css'
import 'prism-theme-night-owl/build/no-italics.css'
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

Vue.use(toast)

export default {
  name: 'one-live',
  components: {
    'veui-button': Button,
    'veui-icon': Icon,
    'veui-alert': Alert,
    'v-splitpanes': Splitpanes,
    'v-pane': Pane,
    'v-live-editor': VueLiveEditor,
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
        'veui-theme-dls-icons': {}
      }
    }
  },
  computed: {
    errorMessage () {
      const { error } = this

      if (!error) {
        return null
      }

      return error.name ? `${error.name}: ${error.message}` : error.message
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

.editor-toolbar
  position absolute
  top 12px
  right 20px
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

  span
    position relative
    top -1px

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
</style>
