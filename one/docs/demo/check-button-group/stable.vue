<template>
<article>
  <section>
    <p>
      最小宽度：<veui-switch v-model="isStable"/>
    </p>
    <veui-check-button-group
      v-model="flavor"
      :items="flavors"
      :ui="isStable ? 'stable' : ''"
    />
  </section>
</article>
</template>

<script>
import { CheckButtonGroup, Switch } from 'veui'

export default {
  components: {
    'veui-check-button-group': CheckButtonGroup,
    'veui-switch': Switch
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
