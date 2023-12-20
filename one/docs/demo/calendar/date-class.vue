<template>
<article>
  <section>
    <veui-calendar
      class="demo-date-class"
      :date-class="dayClass"
    />
  </section>
</article>
</template>

<script>
import { Calendar } from 'veui'

export default {
  components: {
    'veui-calendar': Calendar
  },
  methods: {
    dayClass (date) {
      return [0, 6].includes(date.getDay()) ? 'weekend' : undefined
    }
  }
}
</script>

<style lang="less" scoped>
.demo-date-class {
  ::v-deep .weekend button {
    color: rebeccapurple;
  }
}
</style>
