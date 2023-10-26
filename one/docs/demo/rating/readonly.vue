<template>
<article>
  <veui-rating
    v-model="value"
    readonly
  />
</article>
</template>

<script>
import { Rating } from 'veui'

export default {
  components: {
    'veui-rating': Rating
  },
  data () {
    return {
      value: 4
    }
  }
}
</script>
