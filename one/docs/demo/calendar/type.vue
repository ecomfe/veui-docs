<template>
<article>
  <veui-radio-group
    v-model="type"
    :items="types"
  />
  <veui-calendar :type="type"/>
</article>
</template>

<script>
import { Calendar, RadioGroup } from 'veui'

export default {
  components: {
    'veui-calendar': Calendar,
    'veui-radio-group': RadioGroup
  },
  data () {
    return {
      date: new Date(),
      type: 'date',
      types: [
        { label: 'date', value: 'date' },
        { label: 'month', value: 'month' },
        { label: 'year', value: 'year' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.veui-radio-group {
  margin-bottom: 20px;
}
</style>
