<template>
<article>
  <section>
    <veui-calendar
      class="demo-date-class"
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
        return r ? 'x-holiday' : 'x-workday'
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
.demo-date-class {
  .x-holiday button,
  .x-workday button {
    position: relative;
    border: 1px solid red;

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      right: -1px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 20px 20px 0;
      border-color: transparent #ff2600 transparent transparent;

    }
    &::after {
      content: "假";
      position: absolute;
      top: -1px;
      right: -1px;
      font-size: 9px;
      font-weight: bold;
      color: white;
    }
  }
  .x-workday button {
    border: 1px solid blue;
    &::before {
      border-color: transparent blue transparent transparent;
    }
    &::after {
      content: "班";
    }
  }
  .x-weekend button {
    opacity: .6;
  }
  .veui-calendar-aux {
    button {
      display: none;
    }
  }
}
</style>
