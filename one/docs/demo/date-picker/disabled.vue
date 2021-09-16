<template>
<article>
  <section>
    <h4>Disabled</h4>
    <veui-date-picker
      v-model="date"
      disabled
      placeholder="disabled"
    />
  </section>
  <section>
    <h4>Readonly</h4>
    <veui-date-picker
      v-model="date"
      readonly
      placeholder="readonly"
    />
  </section>
</article>
</template>

<script>
import { DatePicker } from 'veui'

export default {
  components: {
    'veui-date-picker': DatePicker
  },
  data () {
    return {
      date: new Date()
    }
  }
}
</script>

<style lang="less" scoped>
section:not(:last-child) {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
