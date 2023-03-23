<template>
<article>
  <section>
    <h4>Max tag count</h4>
    <veui-number-input v-model="max"/>
  </section>
  <section>
    <veui-tag-input
      v-model="value"
      :max="max"
    />
  </section>
</article>
</template>

<script>
import { TagInput, NumberInput } from 'veui'

export default {
  components: {
    'veui-tag-input': TagInput,
    'veui-number-input': NumberInput
  },
  data () {
    return {
      max: 3,
      value: ['Tony', 'Steve']
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}
</style>
