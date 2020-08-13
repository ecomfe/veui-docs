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

<style lang="less" scoped docs>
@import "~veui-theme-dls/lib.less";

.target {
  .size(80px);
  background: @veui-gray-color-6;
}

.container {
  .size(100%, 300px);
  background: @veui-gray-color-8;
}
</style>
