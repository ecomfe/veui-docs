<template>
<article>
  <veui-slider v-model="value"/>
  <veui-slider
    v-model="value"
    readonly
  />
  <veui-slider
    v-model="value"
    disabled
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
      value: 0.5
    }
  }
}
</script>
