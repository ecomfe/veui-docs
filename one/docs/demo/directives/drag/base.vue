<template>
<article>
  <div
    ref="target"
    v-drag:target.translate
    class="target"
  />
</article>
</template>

<script>
import { drag } from 'veui'

export default {
  directives: {
    drag
  }
}
</script>

<style lang="less" scoped>
.target {
  width: 80px;
  height: 80px;
  background: #e7e7e7;
}
</style>
