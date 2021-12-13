<template>
<article>
  <section>
    <veui-checkbox v-model="isFill">
      Fill month
    </veui-checkbox>
  </section>
  <veui-calendar :fill-month="isFill"/>
</article>
</template>

<script>
import { Calendar, Checkbox } from 'veui'

export default {
  components: {
    'veui-calendar': Calendar,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      date: new Date(),
      isFill: true
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>
