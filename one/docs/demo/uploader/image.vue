<template>
<article>
  <section>
    <h4>Normal size</h4>
    <veui-uploader
      v-model="images"
      type="image"
      action="https://app.fakejson.com/q/ELymQ7xh?token=AWFkjMICPSAB_bO_z-Lnog"
    >
      <template #desc>
        Normal size
      </template>
    </veui-uploader>
  </section>
  <section>
    <h4>Small size</h4>
    <veui-uploader
      v-model="images2"
      type="image"
      action="https://app.fakejson.com/q/ELymQ7xh?token=AWFkjMICPSAB_bO_z-Lnog"
      ui="s"
    >
      <template #desc>
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
        src: '/images/development/uploader/demo-image1.jpg'
      },
      {
        src: '/images/development/uploader/demo-image2.jpg'
      }
    ]
    return {
      images,
      images2: cloneDeep(images)
    }
  }
}
</script>
