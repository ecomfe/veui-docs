<template>
<article>
  <veui-rating
    v-model="value"
    :max="3"
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
      value: 2
    }
  }
}
</script>
