<template>
<article>
  <veui-button @click="aOpen = true">
    Dialog A
  </veui-button>
  <veui-dialog
    :open.sync="aOpen"
    title="Dialog A"
    draggable
    :modal="false"
    @ok="aOpen = false"
    @cancel="aOpen = false"
  >
    The content of Dialog A.
  </veui-dialog>

  <veui-button @click="bOpen = true">
    Dialog B
  </veui-button>
  <veui-dialog
    :open.sync="bOpen"
    title="Dialog B"
    draggable
    :modal="false"
    @ok="bOpen = false"
    @cancel="bOpen = false"
  >
    The content of Dialog B.
  </veui-dialog>
</article>
</template>

<script>
import { Dialog, Button } from 'veui'

export default {
  components: {
    'veui-dialog': Dialog,
    'veui-button': Button
  },
  data () {
    return {
      aOpen: false,
      bOpen: false
    }
  }
}
</script>

<style lang="less" scoped>
.veui-button {
  margin-right: 20px;
}
</style>

<docs>
同时打开上面两个对话框，将一个拖动到使两个对话框稍稍重叠的位置。然后当你点击激活一个对话框，它就将显示于另一个之上了。
</docs>

<docs locale="en-US">
Open both dialogs and drag one of them to make them overlap a little bit. Then when you activate one dialog, it will be displayed on top of the other one.
</docs>
