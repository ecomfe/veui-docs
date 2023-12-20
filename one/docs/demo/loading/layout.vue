<template>
<article class="container">
  <veui-loading
    class="loading"
    loading
  >
    Horizontal
  </veui-loading>
  <veui-loading
    loading
    ui="vertical"
  >
    Vertical
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
.container {
  display: flex;
  align-items: flex-end;

  .loading {
    margin-left: 1em;
  }
}
</style>
