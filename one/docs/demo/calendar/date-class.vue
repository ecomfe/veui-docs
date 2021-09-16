<template>
<article>
  <section>
    <veui-calendar
      date-class="custom-date"
    />
  </section>
</article>
</template>

<script>
import { Calendar } from 'veui'

export default {
  components: {
    'veui-calendar': Calendar
  }
}
</script>

<style lang="less">
.custom-date {
  font-style: italic;
}
</style>
