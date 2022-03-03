<template>
<article>
  <section>
    <veui-calendar
      :date-class="holidayClass"
    />
  </section>
</article>
</template>

<script>
import { isString, inRange } from 'lodash'
import { Calendar } from 'veui'

const holidays = [
  [true, ['2022-1-1', '2022-1-3']],

  [true, ['2022-1-31', '2022-2-6']],
  [false, ['2022-1-29', '2022-1-30']],

  [true, ['2022-4-3', '2022-4-5']],
  [false, '2022-4-2'],

  [true, ['2022-4-30', '2022-5-4']],
  [false, '2022-4-24', '2022-5-7'],

  [true, ['2022-6-3', '2022-6-5']],

  [true, ['2022-9-10', '2022-9-12']],

  [true, ['2022-10-1', '2022-10-7']],
  [false, ['2022-10-8', '2022-10-9']]
]

export default {
  components: {
    'veui-calendar': Calendar
  },
  computed: {
    isHoliday () {
      const items = holidays.map(function ([isHoliday, ...dateRanges]) {
        dateRanges = dateRanges.map(range => isString(range) ? [range, range] : range)
          .map(([start, end]) => [parseDateString(start), parseDateString(end, true)])
        return [isHoliday, dateRanges]
      })
      return function (date) {
        const time = date.getTime()
        const match = items.find(([, ranges]) => ranges.some(([start, end]) => inRange(time, start, end)))
        return match ? match[0] : undefined
      }
    }
  },
  methods: {
    holidayClass (date) {
      const r = this.isHoliday(date)
      if (r !== undefined) {
        return r ? 'x-holiday' : undefined
      }
      return [0, 6].includes(date.getDay()) ? 'x-weekend' : undefined
    }
  }
}

function parseDateString (str, isEnd) {
  const [year, month, day] = str.split('-')
  return new Date(year, month - 1, isEnd ? +day + 1 : day, 0, 0, 0).getTime()
}
</script>

<style lang="less">
.x-holiday button {
  color: #9e0202;
}
.x-weekend button {
  color: #041277;
}
.veui-calendar-aux {
  &.x-holiday button {
    color: fadeout(#9e0202, 40);
  }
  &.x-weekend button {
    color: fadeout(#041277, 40);
  }
}
</style>
