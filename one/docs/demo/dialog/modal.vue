<template>
<article>
  <veui-button @click="modalOpen = true">
    Modal
  </veui-button>
  <veui-button @click="nonModalOpen = true">
    Non-modal
  </veui-button>
  <veui-dialog
    title="System"
    :open.sync="modalOpen"
    @ok="handleModalClose(true)"
    @cancel="handleModalClose"
  >
    Do you want to refresh the page?
  </veui-dialog>
  <veui-dialog
    title="System"
    :open.sync="nonModalOpen"
    :modal="false"
    @ok="handleModalClose(true)"
    @cancel="handleModalClose"
  >
    Do you want to refresh the page?
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
      modalOpen: false,
      nonModalOpen: false
    }
  },
  methods: {
    handleModalClose (ok) {
      this.modalOpen = false
      if (ok) {
        location.reload()
      }
    },
    handleNonModalClose (ok) {
      this.nonModalOpen = false
      if (ok) {
        location.reload()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.veui-button {
  margin-right: 20px;
}
</style>
