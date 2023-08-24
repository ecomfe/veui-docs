<template>
<article>
  <section>
    <veui-uploader
      type="file"
      :pick="pick"
      action="/api/upload"
    />
  </section>
</article>
</template>

<script>
import { Uploader } from 'veui'
import confirm from 'veui/plugins/confirm'
import Vue from 'vue'

Vue.use(confirm)

export default {
  components: {
    'veui-uploader': Uploader
  },
  methods: {
    pick ({ remainingCount }) {
      return this.$confirm('模拟自定义选择文件', '确认').then((ready) => {
        return ready
          ? new File([`count: ${remainingCount}`], 'pick.txt', { type: 'text/plain' })
          : null
      })
    }
  }
}
</script>
