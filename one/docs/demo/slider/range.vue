<template>
<article>
  <veui-slider
    v-model="value"
    :min="0"
    :max="100"
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
      value: [22, 66]
    }
  }
}
</script>
