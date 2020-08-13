<template>
<article>
  <veui-button @click="draggableOpen = true">
    Draggable
  </veui-button>
  <veui-dialog
    :open.sync="draggableOpen"
    title="Draggable Dialog"
    draggable
    @ok="draggableOpen = false"
    @cancel="draggableOpen = false"
  >
    This dialog is draggable.
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
      draggableOpen: false
    }
  }
}
</script>

<style lang="less" scoped docs>
.veui-button {
  margin-right: 20px;
}
</style>
