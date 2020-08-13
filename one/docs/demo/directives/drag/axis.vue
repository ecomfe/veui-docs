<template>
<article>
  <div
    ref="target1"
    v-drag:target1.translate.x
    class="target"
  >
    水平方向
  </div>
  <div
    ref="target2"
    v-drag:target2.translate.y
    class="target"
  >
    垂直方向
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

article {
  height: 200px;
}

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
