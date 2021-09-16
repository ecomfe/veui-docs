<template>
<article>
  <section>
    <h4>只允许选未来的日期</h4>
    <veui-calendar :disabled-date="disabledDate"/>
  </section>
</article>
</template>

<script>
import { Calendar } from 'veui'

export default {
  components: {
    'veui-calendar': Calendar
  },
  created () {
    this.now = new Date()
    this.now.setHours(0, 0, 0, 0)
  },
  methods: {
    disabledDate (date) {
      return this.now.getTime() > date.getTime()
    }
  }
}
</script>
