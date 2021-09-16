<template>
<article>
  <section>
    <veui-radio-button-group
      v-model="flavor"
      ui="simple"
      :items="flavors"
    />
    <p>Selected: {{ readable }}</p>
  </section>
</article>
</template>

<script>
import { RadioButtonGroup } from 'veui'

export default {
  components: {
    'veui-radio-button-group': RadioButtonGroup
  },
  data () {
    return {
      flavor: null,
      flavors: [
        { value: 'LATTE', label: 'Latte' },
        { value: 'MOCHA', label: 'Mocha' },
        { value: 'AMERICANO', label: 'Americano' }
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
