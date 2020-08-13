<template>
<article>
  <veui-date-picker
    v-model="range"
    :shortcuts="shortcuts"
    range
    clearable
  />
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
      range: null,
      shortcuts: [
        {
          label: '上个月',
          from: {
            startOf: 'month',
            month: -1
          },
          to: {
            startOf: 'month',
            days: -1
          }
        },
        {
          label: '本月',
          from: {
            startOf: 'month'
          },
          to: 0
        },
        {
          label: '本周',
          from: {
            startOf: 'week',
            days: 0
          },
          to: 0
        },
        {
          label: '最近7天',
          from: -6,
          to: 0
        },
        {
          label: '今天',
          to: 0
        }
      ]
    }
  }
}
</script>
