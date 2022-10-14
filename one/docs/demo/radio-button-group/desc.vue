<template>
<article>
  <section>
    <h4><code>desc</code> field</h4>
    <veui-radio-button-group
      v-model="flavor"
      :items="flavors"
    />
  </section>
  <section>
    <h4><code>desc</code> slot</h4>
    <veui-radio-button-group
      v-model="flavor"
      :items="flavors"
    >
      <template #desc="{ desc, label }">
        {{ desc || `A description for ${label}` }}
      </template>
    </veui-radio-button-group>
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
        { value: 'LATTE', label: 'Latte', desc: 'A description for latte.' },
        { value: 'MOCHA', label: 'Mocha', desc: 'A description for mocha.' },
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
