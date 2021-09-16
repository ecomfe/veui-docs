<template>
<article>
  <section>
    <veui-uploader
      v-model="images"
      type="image"
      :action="action"
      :controls="controls"
      request-mode="custom"
      :upload="upload"
      @moveright="handleMoveRight"
    >
      <template #desc>
        点击图片浮层上的向右箭头按钮改变图片位置
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
      action: 'https://app.fakejson.com/q/ELymQ7xh?token=AWFkjMICPSAB_bO_z-Lnog',
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
      controls (file, defaultControls) {
        if (file.status === 'success') {
          return [
            { name: 'moveright', icon: 'chevron-right', disabled: false },
            ...defaultControls
          ]
        }
        return defaultControls
      },
      upload: (file, { onload, onprogress, onerror }) => {
        let xhr = new XMLHttpRequest()
        file.xhr = xhr

        xhr.upload.onprogress = e => onprogress(e)
        xhr.onload = e => {
          try {
            onload(JSON.parse(xhr.responseText))
          } catch (e) {
            onload({ success: false, message: e })
          }
        }
        xhr.onerror = e => onerror(e)
        let formData = new FormData()
        formData.append('file', file)

        xhr.open('POST', this.action, true)
        xhr.send(formData)

        return () => {
          xhr.abort()
        }
      }
    }
  },
  methods: {
    handleMoveRight (file, index) {
      if (index < this.images.length - 1) {
        let temp = { ...this.images[index] }
        this.$set(this.images, index, this.images[index + 1])
        this.$set(this.images, index + 1, temp)
      }
    }
  }
}
</script>
