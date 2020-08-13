<template>
<article>
  <veui-calendar
    v-model="ranges"
    range
    multiple
    :panel="2"
  />
  <section>Selected: {{ readableRanges }}</section>
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
      ranges: null
    }
  },
  computed: {
    readableRanges () {
      if (!this.ranges || this.ranges.length === 0) {
        return 'Nothing.'
      }
      return this.ranges
        .map(range => this.toReadable(range).join(' to '))
        .join(', ')
    }
  },
  methods: {
    toReadable (dates) {
      return dates.map(date => date.toLocaleDateString(this.$i18n.locale))
    }
  }
}
</script>

<docs>
支持 `v-model`，选择多日期范围时数据类型为 `Array<[Date, Date]>`。
</docs>

<docs locale="en-US">
Supports `v-model`, with value type being `Array<[Date, Date]>` when selecting multiple date ranges.
</docs>
