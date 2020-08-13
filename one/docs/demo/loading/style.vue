<template>
<article>
  <veui-loading
    loading
    ui="normal"
  >
    Normal
  </veui-loading>
  <veui-loading
    loading
    ui="strong"
  >
    Strong
  </veui-loading>
  <veui-loading
    loading
    ui="reverse"
    class="reverse"
  >
    Reverse
  </veui-loading>
</article>
</template>

<script>
import { Loading } from 'veui'

export default {
  components: {
    'veui-loading': Loading
  }
}
</script>

<style lang="less" scoped docs>
.veui-loading {
  margin-left: 1em;
}
.reverse {
  background: #ccc;
  padding: 8px;
}
</style>
