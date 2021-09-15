<template>
<article>
  <div
    ref="container"
    class="container"
  >
    <div
      ref="target"
      v-drag:target.translate="{containment: 'container'}"
      class="target"
    />
  </div>
</article>
</template>

<script>
import drag from 'veui/directives/drag'

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

.container {
  width: 100%;
  height: 300px;
  background: #f7f7f7;
}
</style>
