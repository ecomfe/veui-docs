<template>
<article>
  <section>
    <h4>Normal size</h4>
    <veui-uploader
      v-model="images"
      type="image"
      action="/api/upload"
    >
      <template #help>
        Normal size
      </template>
    </veui-uploader>
  </section>
  <section>
    <h4>Small size</h4>
    <veui-uploader
      v-model="images2"
      type="image"
      action="/api/upload"
      ui="s"
    >
      <template #help>
        Small size
      </template>
    </veui-uploader>
  </section>
</article>
</template>

<script>
import { Uploader } from 'veui'
import { cloneDeep } from 'lodash'

export default {
  components: {
    'veui-uploader': Uploader
  },
  data () {
    let images = [
      {
        src: '/images/development/uploader/demo-image1.jpg',
        key: 0
      },
      {
        src: '/images/development/uploader/demo-image2.jpg',
        key: 1
      }
    ]
    return {
      images,
      images2: cloneDeep(images)
    }
  }
}
</script>
