<template>
<article>
  <section>
    <veui-check-button-group
      v-model="flavor"
      :items="flavors"
    />
  </section>
  <section>
    <veui-check-button-group
      v-model="flavor"
      :items="flavors"
    >
      <template #desc="{ desc, label }">
        {{ desc || `a description for ${label}` }}
      </template>
    </veui-check-button-group>
  </section>
</article>
</template>

<script>
import { CheckButtonGroup } from 'veui'

export default {
  components: {
    'veui-check-button-group': CheckButtonGroup
  },
  data () {
    return {
      flavor: null,
      flavors: [
        { value: 'LATTE', label: 'Latte', desc: 'a description for latte.' },
        { value: 'MOCHA', label: 'Mocha', desc: 'a description for mocha.' },
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
