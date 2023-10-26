<template>
<article>
  <veui-rating v-model="value">
    <template #symbol>
      赞
    </template>
  </veui-rating>
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
