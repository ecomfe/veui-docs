<template>
<article>
  <section>
    <h4>Clearable</h4>
    <veui-date-picker
      v-model="date"
      clearable
    />
  </section>
  <section>
    <h4>Customizable placeholder</h4>
    <veui-date-picker
      v-model="date2"
      placeholder="Pick a day"
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
      date: new Date(),
      date2: null
    }
  }
}
</script>

<style lang="less" scoped docs>
section:not(:last-child) {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>

<docs>
支持 `v-model`，数据类型为原生 `Date` 类型。
</docs>

<docs locale="en-US">
Supports `v-model` with value type being the native `Date`.
</docs>
