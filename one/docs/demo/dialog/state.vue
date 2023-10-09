<template>
<article>
  <veui-button @click="open = true">
    Open Dialog
  </veui-button>
  <veui-dialog
    :open.sync="open"
    title="Dialog State"
    :loading="loading"
    :disabled="disabled"
  >
    <veui-stack gap="m">
      <veui-checkbox v-model="loading">
        Loading
      </veui-checkbox>
      <veui-checkbox
        v-model="disabled"
        class="ml-3p"
      >
        Disabled
      </veui-checkbox>
    </veui-stack>
  </veui-dialog>
</article>
</template>

<script>
import { Dialog, Button, Stack, Checkbox } from 'veui'

export default {
  components: {
    'veui-dialog': Dialog,
    'veui-button': Button,
    'veui-stack': Stack,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      open: false,
      disabled: false,
      loading: false
    }
  }
}
</script>
