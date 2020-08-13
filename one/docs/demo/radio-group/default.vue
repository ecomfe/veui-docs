<template>
<article>
  <section>
    <h4>Normal size</h4>
    <veui-radio-group
      v-model="flavor"
      :items="flavors"
    />
    <p>Checked: {{ readable }}</p>
  </section>
  <section>
    <h4>Small size</h4>
    <veui-radio-group
      v-model="flavor"
      ui="s"
      :items="flavors"
    />
    <p>Checked: {{ readable }}</p>
  </section>
</article>
</template>

<script>
import { RadioGroup } from 'veui'

export default {
  components: {
    'veui-radio-group': RadioGroup
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

<style lang="less" scoped docs>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
