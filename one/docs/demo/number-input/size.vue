<template>
<article>
  <section>
    <veui-number-input v-model="value"/>
  </section>
  <section>
    <veui-number-input
      v-model="value"
      ui="s"
    />
  </section>
  <section>
    <veui-number-input
      v-model="value"
      ui="xs"
    />
  </section>
</article>
</template>

<script>
import { NumberInput } from 'veui'

export default {
  components: {
    'veui-number-input': NumberInput
  },
  data () {
    return {
      value: 0
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>
