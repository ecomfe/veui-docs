<template>
<veui-config-provider :value="config">
  <one-repl
    standalone
    :code="code"
    @codechange="handleCodeChange"
  />
</veui-config-provider>
</template>

<script>
import { ConfigProvider } from 'veui'
import OneRepl from '../components/OneRepl'
import { loadPref, atou, utoa } from '../common/util'
import config from '../common/config'
import { htmlAttrs } from '../common/i18n'

export default {
  name: 'one-play',
  layout: 'standalone',
  components: {
    'veui-config-provider': ConfigProvider,
    'one-repl': OneRepl
  },
  mixins: [htmlAttrs],
  data () {
    return {
      code: '',
      config: config.value
    }
  },
  watch: {
    'config.theme' () {
      this.serialize()
    }
  },
  mounted () {
    config.value.theme = loadPref('theme') || ''
    this.deserialize()
  },
  methods: {
    deserialize () {
      try {
        const hash = atou(location.hash.slice(1))
        const { code, theme } = hash ? JSON.parse(hash) : {}
        this.code = code || ''
        config.value.theme = theme || ''
      } catch (e) {
        console.error(e)
      }
    },
    serialize () {
      const hash = utoa(
        JSON.stringify({
          code: this.code,
          theme: config.value.theme || undefined
        })
      )
      history.replaceState({}, '', `#${hash}`)
    },
    handleCodeChange (code) {
      this.code = code
      this.serialize()
    }
  }
}
</script>
