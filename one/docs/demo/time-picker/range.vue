<template>
<article>
  <veui-time-picker
    v-model="min"
    :max="max"
  />
  ~
  <veui-time-picker
    v-model="max"
    :min="min"
  />
</article>
</template>

<script>
import { TimePicker } from 'veui'

export default {
  components: {
    'veui-time-picker': TimePicker
  },
  data () {
    return {
      min: null,
      max: null
    }
  }
}
</script>
