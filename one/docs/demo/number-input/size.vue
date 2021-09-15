<template>
<article>
  <p>
    <veui-number-input v-model="value"/>
  </p>
  <p>
    <veui-number-input
      v-model="value"
      ui="s"
    />
  </p>
  <p>
    <veui-number-input
      v-model="value"
      ui="xs"
    />
  </p>
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
p {
  margin-bottom: 1em;
}
</style>
