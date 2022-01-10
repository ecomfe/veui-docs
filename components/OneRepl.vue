<template>
<article class="repl">
  <header class="header">
    <h1>{{ t('liveEdit') }}</h1>
    <section class="actions">
      <veui-button
        v-tooltip="t(expanded ? 'shrinkEditor' : 'expandEditor')"
        ui="strong icon xl"
        @click="handleToggle"
      >
        <veui-icon :name="expanded ? 'one-repl-shrink' : 'one-repl-expand'"/>
      </veui-button>
      <veui-button
        ui="strong text"
        @click="handleClose"
      >
        {{ t('exit') }}
      </veui-button>
    </section>
  </header>
  <one-live
    class="editor"
    :code="code"
  />
</article>
</template>

<script>
import { Button, Loading, Icon } from 'veui'
import tooltip from 'veui/directives/tooltip'
import i18n from 'veui/mixins/i18n'

export default {
  name: 'one-repl',
  directives: {
    tooltip
  },
  components: {
    'veui-button': Button,
    'veui-icon': Icon,
    'one-live': () => ({
      component: import('./OneLive'),
      loading: {
        inheritAttrs: false,
        render (h) {
          return h(Loading, {
            props: {
              loading: true,
              ui: 'strong'
            },
            class: 'loading'
          })
        }
      }
    })
  },
  mixins: [i18n],
  props: {
    code: {
      type: String,
      default: ''
    },
    expanded: Boolean
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleToggle () {
      this.$emit('toggle', !this.expanded)
    }
  }
}

Icon.register({
  'one-repl-shrink': {
    width: 24,
    height: 24,
    d:
      'M7.41 18.59L8.83 20L12 16.83L15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4L12 7.17L8.83 4L7.41 5.41L12 10l4.59-4.59z'
  },
  'one-repl-expand': {
    width: 24,
    height: 24,
    d:
      'M12 5.83L15.17 9l1.41-1.41L12 3L7.41 7.59L8.83 9L12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15L12 18.17z'
  }
})
</script>

<style lang="stylus" scoped>
.repl
  display flex
  flex-direction column

.header
  display flex
  align-items center
  flex none
  height 48px
  padding 0 24px
  box-shadow 0 0 4px #0006
  position relative
  z-index 1

  h1
    flex none
    margin 0
    font-size 16px

  .actions
    display flex
    justify-content flex-end
    flex 1 1 auto
    gap 24px

.editor:not(.loading)
  position relative
  flex 1 1 auto
  height calc(100% - 48px)

  & >>> .live-preview
    padding 24px 36px

  & >>> .VueLive-error
    display none

.loading
  position absolute
  top 40vh
  left 50%
  transform translateX(-50%)
  font-size 40px
</style>
