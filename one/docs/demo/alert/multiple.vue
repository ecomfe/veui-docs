<template>
<article>
  <veui-alert
    type="info"
    close-label="Got it"
    closable
    :open.sync="open"
    :message="messages"
  />
  <section v-if="!open">
    <veui-button @click="open = true">
      Open
    </veui-button>
  </section>
</article>
</template>

<script>
import { Alert, Button } from 'veui'

export default {
  components: {
    'veui-alert': Alert,
    'veui-button': Button
  },
  data () {
    return {
      open: true,
      messages: [
        'Component data must be a function.',
        'Prop definitions should be as detailed as possible.',
        'Always use key with v-for.',
        'Never use v-if on the same element as v-for.'
      ]
    }
  }
}
</script>

<docs>
可以指定 `closable` 属性为 `true` 来允许提示被用户主动关闭，还可以通过指定 `close-label` 属性来将关闭按钮以文字形式展现。
</docs>

<docs locale="en-US">
Set the `closable` prop to `true` to allow the alert message to be closed by users. You can also use the `close-label` prop to make the close button shown as specified text.
</docs>
