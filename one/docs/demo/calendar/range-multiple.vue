<template>
<article>
  <section class="col">
    <h4>Multiple dates</h4>
    <veui-calendar
      v-model="dates"
      multiple
    />
    <section>Selected: {{ readableDates }}</section>
  </section>
  <section class="col">
    <h4>Date ranges</h4>
    <veui-calendar
      v-model="range"
      range
    />
    <section>Selected: {{ readableRange }}</section>
  </section>
</article>
</template>

<script>
import { Calendar } from 'veui'

export default {
  components: {
    'veui-calendar': Calendar
  },
  data () {
    return {
      dates: null,
      range: null
    }
  },
  computed: {
    readableDates () {
      if (!this.dates || !this.dates.length) {
        return 'Nothing.'
      }
      return this.toReadable(this.dates).join(', ')
    },
    readableRange () {
      if (!this.range) {
        return 'Nothing.'
      }
      return this.toReadable(this.range).join(' to ')
    }
  },
  methods: {
    toReadable (dates) {
      return dates.map(date => date.toLocaleDateString(this.$i18n.locale))
    }
  }
}
</script>

<style lang="less" scoped docs>
article {
  overflow: hidden;
}

.col {
  float: left;
  width: 340px;
  margin-right: 20px;
}

h4 {
  margin-top: 0;
}
</style>

<docs>
支持 `v-model`，选择多个单日时数据类型为 `Array<Date>`，选择日期范围时数据类型为 `[Date, Date]`。
</docs>

<docs locale="en-US">
Supports `v-model`, with value type being `Array<Date>` when selecting multiple dates, being `[Date, Date]` when selecting a date range.
</docs>
