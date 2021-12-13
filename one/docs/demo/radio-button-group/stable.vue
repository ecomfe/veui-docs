<template>
<article>
  <section>
    <veui-checkbox v-model="isStable">
      Stable layout
    </veui-checkbox>
  </section>
  <veui-radio-button-group
    v-model="flavor"
    :items="flavors"
    :ui="isStable ? 'stable' : ''"
  />
  </section>
</article>
</template>

<script>
import { RadioButtonGroup, Checkbox } from 'veui'

export default {
  components: {
    'veui-radio-button-group': RadioButtonGroup,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      isStable: true,
      flavor: null,
      flavors: [
        { value: 'LATTE', label: 'Latte' },
        { value: 'MOCHA', label: 'Mocha' },
        { value: 'AMERICANO', label: 'Americano' }
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
