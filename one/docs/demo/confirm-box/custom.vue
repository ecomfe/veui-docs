<template>
<article>
  <veui-button @click="open = true">
    Remove
  </veui-button>
  <veui-confirm-box
    title="System Notification"
    :open.sync="open"
    @ok="ok"
    @cancel="cancel"
  >
    <p>Are you sure to remove the item?</p>
  </veui-confirm-box>
</article>
</template>

<script>
import { ConfirmBox, Button } from 'veui'
import toast from 'veui/managers/toast'

export default {
  components: {
    'veui-confirm-box': ConfirmBox,
    'veui-button': Button
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    ok () {
      this.open = false
      toast.info('Confirmed')
    },
    cancel () {
      toast.info('Canceled')
    }
  }
}
</script>
