<template>
<article>
  <section>
    <veui-tabs
      sortable
      :items="tabs"
      @sort="handleSort"
    >
      <template #panel="{ activeTab }">
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
        { label: 'Tab 1', name: 't1' },
        { label: 'Tab 2', name: 't2' },
        { label: 'Tab 3', name: 't3' }
      ]
    }
  },
  methods: {
    handleSort (fromIndex, toIndex) {
      const item = this.tabs[fromIndex]
      this.tabs.splice(fromIndex, 1)
      this.tabs.splice(toIndex, 0, item)
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
