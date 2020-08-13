<template>
<article>
  <veui-slider
    v-model="videoPlayProgress"
    :secondary-progress="videoBufferProgress"
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
      videoPlayProgress: 0.11,
      videoBufferProgress: 0.57
    }
  }
}
</script>
