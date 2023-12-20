<template>
<article>
  <veui-button
    class="button"
    @click="modalOpen = true"
  >
    Modal
  </veui-button>
  <veui-button
    class="button"
    @click="nonModalOpen = true"
  >
    Non-modal
  </veui-button>
  <veui-drawer
    title="System"
    :open.sync="modalOpen"
    @ok="handleModalClose(true)"
    @cancel="handleModalClose"
  >
    Do you want to refresh the page?
  </veui-drawer>
  <veui-drawer
    title="System"
    :open.sync="nonModalOpen"
    :modal="false"
    @ok="handleModalClose(true)"
    @cancel="handleModalClose"
  >
    Do you want to refresh the page?
  </veui-drawer>
</article>
</template>

<script>
import { Drawer, Button } from 'veui'

export default {
  components: {
    'veui-drawer': Drawer,
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
.button {
  margin-right: 20px;
}
</style>
