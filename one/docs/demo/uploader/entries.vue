<template>
<article>
  <section>
    <veui-uploader
      v-model="images"
      :entries="entries"
      type="image"
      action="/api/upload"
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
      entries (defaultEntries) {
        return [
          ...defaultEntries,
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
      toast.info('You clicked star!')
    }
  }
}
</script>

<docs>
用 `entries` 自定义的操作，点击会触发同名事件，事件参数为空。
</docs>
