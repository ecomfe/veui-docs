<template>
<article>
  <section>
    <veui-tabs
      ui="strong"
      sortable
      addable
      :items="tabs"
      @add="addTab"
      @remove="removeTab"
      @sort="handleSort"
    >
      <template
        #panel="{ activeTab }"
      ><p>{{ activeTab.label }}</p></template>
    </veui-tabs>
  </section>
</article>
</template>

<script>
import { Tabs } from 'veui'
import { findIndex, uniqueId } from 'lodash'

export default {
  components: {
    'veui-tabs': Tabs
  },
  data () {
    return {
      tabs: [
        { label: '默认1', name: '默认1', removable: true },
        { label: '默认2', name: '默认2', status: 'success', removable: true },
        { label: '默认3', name: '默认3', removable: true }
      ]
    }
  },
  methods: {
    addTab () {
      let label = uniqueId('默认')
      this.tabs.push({
        label,
        name: label
      })
    },
    removeTab ({ name }) {
      let index = findIndex(this.tabs, (tab) => tab.name === name)
      if (index !== -1) {
        this.tabs.splice(index, 1)
      }
    },
    handleSort (items) {
      this.tabs = items.map(({ name }) => {
        return this.tabs.find((item) => name === item.name)
      })
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
