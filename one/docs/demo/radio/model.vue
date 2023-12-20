<template>
<article>
  <veui-radio
    v-for="({ value, label }) in flavors"
    :key="value"
    v-model="flavor"
    class="radio"
    :value="value"
  >
    {{ label }}
  </veui-radio>
  <p>Selected: {{ flavorLabelMap[flavor] || '-' }}</p>
</article>
</template>

<script>
import { Radio } from 'veui'

export default {
  components: {
    'veui-radio': Radio
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
    }
  }
}
</script>

<style lang="less" scoped>
.radio {
  margin-right: 20px;
}
</style>
