<template>
<article>
  <section>
    <h4>Normal size</h4>
    <veui-radio-button-group
      v-model="flavor"
      :items="flavors"
    />
    <p>Selected: {{ readable }}</p>
  </section>
  <section>
    <h4>Small size &amp; Square shape</h4>
    <veui-radio-button-group
      ui="s"
      :items="actions"
    >
      <template #item="{ value }">
        <veui-icon :name="value"/>
      </template>
    </veui-radio-button-group>
  </section>
</article>
</template>

<script>
import { RadioButtonGroup, Icon } from 'veui'
import 'veui-theme-dls-icons/clockwise'
import 'veui-theme-dls-icons/search'

export default {
  components: {
    'veui-radio-button-group': RadioButtonGroup,
    'veui-icon': Icon
  },
  data () {
    return {
      flavor: null,
      flavors: [
        { value: 'LATTE', label: 'Latte' },
        { value: 'MOCHA', label: 'Mocha' },
        { value: 'AMERICANO', label: 'Americano' }
      ],
      actions: [
        {
          label: '刷新',
          value: 'clockwise'
        },
        {
          label: '搜索',
          value: 'search'
        }
      ]
    }
  },
  computed: {
    flavorLabelMap () {
      return this.flavors.reduce((map, { value, label }) => {
        map[value] = label
        return map
      }, {})
    },
    readable () {
      return this.flavorLabelMap[this.flavor] || '-'
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
