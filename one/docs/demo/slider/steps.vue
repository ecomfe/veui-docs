<template>
<article>
  <veui-slider
    v-model="value"
    :min="min"
    :max="max"
    :step="step"
    mark
  />
  <veui-slider
    v-model="value"
    :min="min"
    :max="max"
    :step="step"
  />
</article>
</template>

<script>
import { Slider } from 'veui'

export default {
  components: {
    'veui-slider': Slider
  },
  data () {
    return {
      value: 55,
      min: 0,
      max: 100,
      step: 8
    }
  }
}
</script>
