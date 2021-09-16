<template>
<article>
  <section>
    <veui-uploader
      v-model="images"
      :controls="controls"
      type="image"
      action="https://app.fakejson.com/q/ELymQ7xh?token=AWFkjMICPSAB_bO_z-Lnog"
      @star="handleStar"
    />
  </section>
</article>
</template>

<script>
import { Uploader, toast } from 'veui'
import 'veui-theme-dls-icons/star'

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
      ],
      controls (item, defaultControls) {
        return [
          ...defaultControls,
          {
            name: 'star',
            icon: 'star',
            label: 'star'
          }
        ]
      }
    }
  },
  methods: {
    handleStar () {
      toast.info('You click star!')
    }
  }
}
</script>

<docs>
用 `controls` 自定义的操作，点击会触发同名事件，事件参数为该上传项数据和 `status` 字段, 即通常是 `{src, key, type, status, ...}`。
</docs>
