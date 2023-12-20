<template>
<article>
  <veui-calendar
    v-model="date"
    class="default"
  >
    <template #before>
      <veui-stack
        class="before"
        gap="xxs"
        justify="center"
      >
        <veui-button
          ui="s ghost"
          @click="pickDay(-1)"
        >
          Yesterday
        </veui-button>
        <veui-button
          ui="s ghost"
          @click="pickDay(0)"
        >
          Today
        </veui-button>
        <veui-button
          ui="s ghost"
          @click="pickDay(1)"
        >
          Tomorrow
        </veui-button>
      </veui-stack>
    </template>
    <template #date="d">
      <u v-if="d.date === 1">{{ d.date }}</u>
      <template v-else>
        {{ d.date }}
      </template>
    </template>
  </veui-calendar>
</article>
</template>

<script>
import { Calendar, Button, Stack } from 'veui'

export default {
  components: {
    'veui-calendar': Calendar,
    'veui-button': Button,
    'veui-stack': Stack
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
    }
  }
}
</script>

<style scoped>
.before {
  padding: 8px;
  border-bottom: 1px solid #e2e6f0;
}
</style>
