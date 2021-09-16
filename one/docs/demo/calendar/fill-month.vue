<template>
<article>
  <p>
    fill-month: <veui-switch v-model="isFill"/>
  </p>
  <veui-calendar :fill-month="isFill"/>
</article>
</template>

<script>
import { Calendar, Switch } from 'veui'

export default {
  components: {
    'veui-calendar': Calendar,
    'veui-switch': Switch
  },
  data () {
    return {
      date: new Date(),
      isFill: true
    }
  }
}
</script>

<style lang="less" scoped>
.veui-radio-group {
  margin-bottom: 20px;
}
</style>
