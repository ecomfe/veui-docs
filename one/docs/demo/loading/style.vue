<template>
<article>
  <veui-loading
    class="loading"
    loading
    ui="normal"
  >
    Normal
  </veui-loading>
  <veui-loading
    class="loading"
    loading
    ui="strong"
  >
    Strong
  </veui-loading>
  <veui-loading
    class="loading reverse"
    loading
    ui="reverse"
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

<style lang="less" scoped>
.loading {
  margin-left: 1em;
}

.reverse {
  background: #ccc;
  padding: 8px;
}
</style>
