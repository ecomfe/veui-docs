<template>
<article>
  <section>
    <veui-tabs
      ref="tabs"
      addable
      :items="realTabs"
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
        { label: 'Tab 2', name: 't2' },
        { label: 'Tab 3', name: 't3' }
      ],
      active: 't1',
      count: 3
    }
  },
  computed: {
    realTabs () {
      let { tabs } = this
      return tabs.length === 1
        ? [{ ...tabs[0], removable: false }]
        : tabs.map(tab => ({ ...tab, removable: true }))
    }
  },
  methods: {
    addTab () {
      this.count++

      let name = `t${this.count}`

      this.tabs.push({
        label: `Tab ${this.count}`,
        name
      })

      this.active = name
    },
    removeTab ({ name }) {
      let index = findIndex(this.tabs, tab => tab.name === name)

      if (index !== -1) {
        this.tabs.splice(index, 1)
        this.active = (this.tabs[index - 1] || this.tabs[0]).name
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

<docs>
:::tip
在添加新标签后，通常需要将其设置为当前页。如果不希望激活新增的标签，则应确保通过 [`scrollTabIntoView`](#methods-scrollTabIntoView) 方法将其滚动到可视区域，以避免用户无法感知添加结果。

通常应当保证仅一个标签时不允许删除。如果当前被激活的标签被删除，应当激活临近的前一个标签，如果被删除的是第一个标签，应当激活下一个标签。
:::
</docs>
