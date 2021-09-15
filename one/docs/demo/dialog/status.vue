<template>
<article>
  <div class="op-wrap">
    <veui-button @click="aOpen = true">
      Open Dialog
    </veui-button>
    <veui-checkbox v-model="loading">
      Loading
    </veui-checkbox>
    <veui-checkbox
      v-model="disabled"
      class="ml-3p"
    >
      Disabled
    </veui-checkbox>
  </div>
  <veui-dialog
    :open.sync="aOpen"
    title="Dialog A"
    :loading="loading"
    :disabled="disabled"
  >
    The content of Dialog A.
  </veui-dialog>
</article>
</template>

<script>
import { Dialog, Button, Checkbox } from 'veui'

export default {
  components: {
    'veui-dialog': Dialog,
    'veui-button': Button,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      aOpen: false,
      disabled: false,
      loading: false
    }
  }
}
</script>

<style lang="less" scoped>
.veui-button {
  margin-right: 20px;
}
.op-wrap {
  display: flex;
}
.ml-3p {
  margin-left: 12px;
}
</style>
