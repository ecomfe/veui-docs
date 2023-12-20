<template>
<article>
  <veui-button
    class="button"
    @click="$toast.info({
      message: 'Press any key to continue...',
      duration: 5000
    })"
  >
    Info
  </veui-button>
  <veui-button
    class="button"
    @click="$toast.success('Your profile has been updated.')"
  >
    Success
  </veui-button>
  <veui-button
    class="button"
    @click="$toast.warn('v1 is deprecated. Use v2 instead.')"
  >
    Warn
  </veui-button>
  <veui-button
    class="button"
    @click="$toast.error('Uncaught SyntaxError: Unexpected token +')"
  >
    Error
  </veui-button>
</article>
</template>

<script>
import Vue from 'vue'
import { Button } from 'veui'
import toast from 'veui/plugins/toast'

Vue.use(toast)

export default {
  components: {
    'veui-button': Button
  }
}
</script>

<style lang="less" scoped>
.button {
  margin-right: 20px;
}
</style>
