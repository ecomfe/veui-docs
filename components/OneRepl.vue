<template>
<article class="repl">
  <header class="header">
    <h1>{{ t('liveEdit') }}</h1>
    <section class="actions">
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
import { Button, Loading } from 'veui'
import i18n from 'veui/mixins/i18n'

export default {
  name: 'one-repl',
  components: {
    'veui-button': Button,
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
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
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

  h1
    flex none
    margin 0
    font-size 16px

  .actions
    display flex
    justify-content flex-end
    flex 1 1 auto

.editor:not(.loading)
  position relative
  flex 1 1 auto
  height calc(100vh - 48px)

  & >>> .prism-editor-wrapper
    padding 8px 12px
    font-size 12px
    color #eee
    background-color #0a0b0d
    line-height 1.5
    font-family Menlo, consolas, monospace
    -webkit-font-smoothing auto

    &::-webkit-scrollbar
      width 8px
      background transparent
      transition all 0.3s

      &-thumb
        border-radius 4px
        background-color #282c33

    &:hover::-webkit-scrollbar-thumb
      background-color #545b66

    textarea
      outline none

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
