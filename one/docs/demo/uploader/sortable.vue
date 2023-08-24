<template>
<article>
  <section>
    <veui-uploader
      v-model="images"
      sortable
      type="image"
      action="/api/upload"
    />
  </section>
</article>
</template>

<script>
import { Uploader } from 'veui'

export default {
  components: {
    'veui-uploader': Uploader
  },
  data () {
    return {
      images: [
        {
          key: 0,
          src: '/images/development/uploader/demo-image1.jpg'
        },
        {
          key: 1,
          src: '/images/development/uploader/demo-image2.jpg'
        }
      ]
    }
  }
}
</script>
