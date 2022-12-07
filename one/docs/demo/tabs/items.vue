<template>
<article>
  <section>
    <veui-tabs :items="tabs">
      <template
        #panel="{ activeTab }"
      >
        <p>{{ activeTab.label }}</p>
      </template>
    </veui-tabs>
  </section>
</article>
</template>

<script>
import { Tabs } from 'veui'

export default {
  components: {
    'veui-tabs': Tabs
  },
  data () {
    return {
      tabs: [
        { label: '默认1', name: '默认1' },
        { label: '默认2', name: '默认2' },
        { label: '默认3', name: '默认3' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
