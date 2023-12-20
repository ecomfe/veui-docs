<template>
<article>
  <section>
    <veui-toast
      class="toast"
      status="info"
      open
      message="Press any key to continue..."
    />
  </section>
  <section>
    <veui-toast
      class="toast"
      status="success"
      open
      message="Your profile has been updated."
    />
  </section>
  <section>
    <veui-toast
      class="toast"
      status="warning"
      open
    >
      v1 is deprecated. Use v2 instead.
    </veui-toast>
  </section>
  <section>
    <veui-toast
      class="toast"
      status="error"
      open
      message="Uncaught SyntaxError: Unexpected token +"
    />
  </section>
</article>
</template>

<script>
import { Toast } from 'veui'

export default {
  components: {
    'veui-toast': Toast
  }
}
</script>

<style lang="less" scoped>
.toast {
  position: relative;
}

section {
  margin-bottom: 20px;
}
</style>
