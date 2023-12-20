<template>
<article>
  <veui-alert
    class="alert"
    status="success"
  >
    Your profile has been updated.
  </veui-alert>
  <veui-alert
    class="alert"
    status="info"
  >
    Press any key to continue...
  </veui-alert>
  <veui-alert
    class="alert"
    status="warning"
  >
    <code>slot-scope</code> is deprecated. Use <code>v-slot</code> instead.
  </veui-alert>
  <veui-alert
    class="alert"
    status="error"
    message="Uncaught SyntaxError: Unexpected token +"
  />
</article>
</template>

<script>
import { Alert } from 'veui'

export default {
  components: {
    'veui-alert': Alert
  }
}
</script>

<style lang="less" scoped>
.alert {
  margin-bottom: 20px;
}
</style>

<docs>
可将消息内容写在默认插槽中，也可以通过 [`message`](#props-message) 属性进行指定。
</docs>

<docs locale="en-US">
Messages can either be specified in the default slot, or via the [`message`](#props-message) prop.
</docs>
