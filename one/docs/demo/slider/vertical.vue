<template>
<article>
  <veui-slider
    v-model="value"
    :min="0"
    :max="100"
    vertical
    style="height: 180px"
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
      value: 42
    }
  }
}
</script>

<docs>
在使用 [`step`](#props-step) 属性设置步长后，可以通过 [`mark`](#props-mark) 属性来显示刻度。
</docs>

<docs locale="en-US">
After setting the [`step`](#props-step) prop, you can display the scale marks by setting the [`mark`](#props-mark) prop.
</docs>
