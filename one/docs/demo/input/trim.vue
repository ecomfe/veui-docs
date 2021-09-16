<template>
<article>
  <section>
    <p class="respect-whitespace">Input value: `{{ value }}`</p>
    <veui-input
      v-model="value"
      trim
    />
  </section>
</article>
</template>

<script>
import { Input } from 'veui'

export default {
  components: {
    'veui-input': Input
  },
  data () {
    return {
      composition: true,
      value: ''
    }
  }
}
</script>

<style scoped>
.respect-whitespace {
  white-space: pre;
}
</style>
