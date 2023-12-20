<template>
<article>
  <veui-time-picker
    class="time-picker"
    mode="hour"
    :hours="[2, 4, 6, 8, 10, 12, 14, 16]"
  />
  <veui-time-picker
    class="time-picker"
    mode="minute"
    :hours="[2, 4, 6, 8, 10, 12, 14, 16]"
    :minutes="[0, 10, 20, 30, 40, 50]"
  />
  <veui-time-picker
    class="time-picker"
    mode="second"
    :hours="[2, 4, 6, 8, 10, 12, 14, 16]"
    :minutes="[0, 10, 20, 30, 40, 50]"
    :seconds="[0, 10, 20, 30, 40, 50]"
  />
</article>
</template>

<script>
import { TimePicker } from 'veui'

export default {
  components: {
    'veui-time-picker': TimePicker
  }
}
</script>

<style lang="less" scoped>
.time-picker {
  & + & {
    margin-left: 20px;
  }
}
</style>
