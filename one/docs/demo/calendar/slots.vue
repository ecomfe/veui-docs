<template>
<article>
  <veui-calendar class="default" v-model="date">
    <template #before>
      <div class="before">
        <veui-button ui="s basic" @click="pickDay(-1)">Yesterday</veui-button>
        <veui-button ui="s basic" @click="pickDay(0)">Today</veui-button>
        <veui-button ui="s basic" @click="pickDay(1)">Tomorrow</veui-button>
      </div>
    </template>
    <template #date="d">
      <sup v-if="d.date === 1" class="month-tip">{{ formatMonth(d) }}</sup>
      {{ d.date }}
    </template>
  </veui-calendar>
</article>
</template>

<script>
import { Calendar, Button } from 'veui'

const formatter = new Intl.DateTimeFormat('zh-CN', { month: 'long' })

export default {
  components: {
    'veui-calendar': Calendar,
    'veui-button': Button
  },
  data () {
    return {
      date: new Date()
    }
  },
  methods: {
    pickDay (d) {
      let date = new Date()
      date.setDate(date.getDate() + d)
      this.date = date
    },
    formatMonth ({ year, month, date }) {
      return formatter.format(new Date(year, month, date))
    }
  }
}
</script>

<style lang="less" scoped>
.default {
  /deep/ .veui-calendar-day,
  /deep/ .veui-calendar-aux {
    button {
      position: relative;
    }
  }
}
.month-tip {
  position: absolute;
  top: -1px;
  left: -2px;
  right: -2px;
  text-align: center;
  color: #848b99;
}
.before {
  padding: 4px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: space-around;
}
</style>
