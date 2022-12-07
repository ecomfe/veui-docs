<template>
<article>
  <section>
    <veui-tabs
      ref="tabs"
      addable
      :items="tabs"
      :active.sync="active"
      @add="addTab"
      @remove="removeTab"
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
import { findIndex } from 'lodash'

export default {
  components: {
    'veui-tabs': Tabs
  },
  data () {
    return {
      tabs: [
        { label: 'Tab 1', name: 't1' },
        { label: 'Tab 2', name: 't2', removable: true },
        { label: 'Tab 3', name: 't3', removable: true }
      ],
      active: 't1',
      count: 3
    }
  },
  methods: {
    addTab () {
      this.count++

      let name = `t${this.count}`

      this.tabs.push({
        label: `Tab ${this.count}`,
        name,
        removable: true
      })

      this.$refs.tabs.scrollTabIntoView(name)

      this.active = name
    },
    removeTab ({ name }) {
      let index = findIndex(this.tabs, tab => tab.name === name)

      if (index !== -1) {
        this.tabs.splice(index, 1)
        this.active = this.tabs[index - 1].name
      }
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
