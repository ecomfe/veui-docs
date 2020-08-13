<template>
<article>
  <div
    ref="target1"
    v-drag:target1,target2,target3.translate
    class="target"
  >
    主元素
  </div>
  <div
    ref="target2"
    class="target"
  />
  <div
    ref="target3"
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
  display: inline-flex;
  margin-right: 40px;
  align-items: center;
  justify-content: center;
  vertical-align: top;
}

.container {
  .size(100%, 300px);
  background: @veui-gray-color-8;
}
</style>
