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
  display: inline-flex;
  margin-right: 40px;
  align-items: center;
  justify-content: center;
  vertical-align: top;
}

.container {
  width: 100%;
  height: 300px;
  background: #f7f7f7;
}
</style>
