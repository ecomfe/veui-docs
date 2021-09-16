<template>
<article>
  <section>
    <veui-uploader
      v-model="images"
      type="image"
      action="https://app.fakejson.com/q/ELymQ7xh?token=AWFkjMICPSAB_bO_z-Lnog"
      accept="jpg,png"
      :max-count="6"
      max-size="100kb"
      :validator="validator"
    >
      <template #desc>
        请选择jpg、png图片，大小不超过100kb，宽高分别大于200px，最多上传6张图片
      </template>
    </veui-uploader>
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
          src: '/images/development/uploader/demo-image1.jpg',
          key: 0
        },
        {
          src: '/images/development/uploader/demo-image2.jpg',
          key: 1
        }
      ],
      validator (file) {
        return new Promise(resolve => {
          let image = new Image()
          image.src = window.URL.createObjectURL(file)
          image.onload = () => {
            resolve({
              valid: image.height > 200 && image.width > 200,
              message: '图片宽高太小'
            })
          }
        })
      }
    }
  }
}
</script>
