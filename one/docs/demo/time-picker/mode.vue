<template>
<article>
  <section>
    <h4>Hour mode</h4>
    <veui-time-picker mode="hour"/>
  </section>
  <section>
    <h4>Minute mode</h4>
    <veui-time-picker
      v-model="value"
      mode="minute"
    />
  </section>
  <section>
    <h4>Second mode</h4>
    <veui-time-picker
      v-model="value"
      mode="second"
    />
  </section>
</article>
</template>

<script>
import { TimePicker } from 'veui'

export default {
  components: {
    'veui-time-picker': TimePicker
  },
  data () {
    return {
      value: null
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
