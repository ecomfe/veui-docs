<template>
<article>
  <section>
    <veui-checkbox v-model="isStable">
      Stable layout
    </veui-checkbox>
  </section>
  <veui-check-button-group
    v-model="flavor"
    :items="flavors"
    :ui="isStable ? 'stable' : ''"
  />
</article>
</template>

<script>
import { CheckButtonGroup, Checkbox } from 'veui'

export default {
  components: {
    'veui-check-button-group': CheckButtonGroup,
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
</style>
