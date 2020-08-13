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
</style>
