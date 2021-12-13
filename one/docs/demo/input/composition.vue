<template>
<article>
  <section>
    <veui-checkbox v-model="composition">
      Composition
    </veui-checkbox>
  </section>
  <section>Input value: {{ value }}</section>
  <section>
    <veui-input
      v-model="value"
      :composition="composition"
    />
  </section>
</article>
</template>

<script>
import { Input, Checkbox } from 'veui'

export default {
  components: {
    'veui-input': Input,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      composition: true,
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>
