<template>
<article>
  <div>
    <veui-textarea
      v-model="value"
      autoresize
      line-number
    />
  </div>
</article>
</template>

<script>
import { Textarea } from 'veui'

export default {
  components: {
    'veui-textarea': Textarea
  },
  data () {
    return {
      value: 'Autoresize'
    }
  }
}
</script>
