<template>
<article>
  <section>
    <h4>Normal size</h4>
    <veui-uploader
      v-model="media"
      type="media"
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
      v-model="media2"
      type="media"
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
    let media = [
      {
        type: 'image',
        src: '/images/development/uploader/demo-image1.jpg',
        key: 0
      },
      {
        type: 'video',
        src: 'https://nadvideo2.baidu.com/5dafd8544f4f53b27a5f59b0ab780403_1920_1080.mp4',
        poster: 'https://feed-image.baidu.com/0/pic/4dced79d185a16e228652b136f653dcc.jpg',
        key: 1
      }
    ]
    return {
      media,
      media2: cloneDeep(media)
    }
  }
}
</script>
