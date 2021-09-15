<template>
<article>
  <section>
    <h4>Clearable</h4>
    <veui-date-picker
      v-model="range"
      range
      clearable
    />
  </section>
  <section>
    <h4>Customizable placeholder</h4>
    <veui-date-picker
      v-model="range"
      class="custom"
      range
      placeholder="Pick a date range..."
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
      range: null
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

<docs>
支持 `v-model`，选择日期范围时数据类型为 `[Date, Date]`。
</docs>

<docs locale="en-US">
Supports `v-model`, with value type being `[Date, Date]` when selecting a date range.
</docs>
