<template>
<article>
  <section>
    <h4>Normal size</h4>
    <veui-uploader
      v-model="files"
      action="https://app.fakejson.com/q/ELymQ7xh?token=AWFkjMICPSAB_bO_z-Lnog"
    />
  </section>
  <section>
    <h4>Small size</h4>
    <veui-uploader
      v-model="files2"
      action="https://app.fakejson.com/q/ELymQ7xh?token=AWFkjMICPSAB_bO_z-Lnog"
      ui="s"
    />
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
    let files = [
      {
        name: 'demo-file1.txt',
        src: '/file/demo-file1.txt',
        key: 0
      },
      {
        name: 'demo-file2.txt',
        src: '/file/demo-file2.txt',
        key: 1
      }
    ]
    return {
      files,
      files2: cloneDeep(files)
    }
  }
}
</script>

<style lang="less" scoped>
article {
  display: flex;
}

section {
  width: 45%;
}
</style>
