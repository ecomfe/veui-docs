<template>
<article>
  <veui-alert
    type="success"
    title="消息标题"
  >
    Your profile has been updated.
  </veui-alert>
  <veui-alert
    type="success"
  >
    Your profile has been updated.
    <template slot="title">
      消息标题
    </template>
  </veui-alert>
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

<style lang="less" scoped docs>
.veui-alert {
  margin-bottom: 20px;
}
</style>

<docs>
可将消息标题写在 `title` 插槽中，也可以通过 `title` 属性进行指定。
</docs>
