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
  z-index 1

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
