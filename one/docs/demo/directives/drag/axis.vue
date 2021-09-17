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
import { drag } from 'veui'

export default {
  directives: {
    drag
  }
}
</script>

<style lang="less" scoped>
article {
  height: 200px;
}

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
