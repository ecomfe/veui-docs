<template>
<article>
  <section>
    <h4>Max tag length</h4>
    <veui-number-input v-model="maxlength"/>
  </section>
  <section>
    <veui-tag-input
      v-model="value"
      :maxlength="maxlength"
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
      maxlength: 6,
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
