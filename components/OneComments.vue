<template>
<giscus-widget
  id="comments"
  class="comments"
  repo="ecomfe/veui"
  repoid="MDEwOlJlcG9zaXRvcnk4NTU0NDY0Ng=="
  category="Giscus"
  categoryid="DIC_kwDOBRlOxs4CT2W8"
  mapping="pathname"
  strict="1"
  reactionsenabled="0"
  emitmetadata="0"
  inputposition="bottom"
  theme="light"
  :lang="giscusLocale"
  loading="lazy"
/>
</template>

<script>
import Vue from 'vue'
import i18n from '../common/i18n'

Vue.config.ignoredElements.push('giscus-widget')

export default {
  name: 'one-comments',
  mixins: [i18n],
  computed: {
    giscusLocale () {
      return this.locale.startsWith('en') ? 'en' : 'zh-CN'
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-expressions
    import('giscus')
  }
}
</script>
