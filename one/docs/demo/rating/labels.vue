<template>
<article>
  <section>
    <h4><code>label-position="inline"</code> (default)</h4>
    <veui-rating
      v-model="value"
      :labels="labels"
    />
  </section>
  <section>
    <h4><code>label-position="popup"</code></h4>
    <veui-rating
      v-model="value"
      :labels="labels"
      label-position="popup"
    />
  </section>
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
      value: 4,
      labels: {
        1: '非常不满意',
        2: '不满意',
        3: '一般',
        4: '满意',
        5: '非常满意'
      }
    }
  }
}
</script>
