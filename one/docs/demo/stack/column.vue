<template>
<article>
  <veui-stack
    direction="column"
    gap="xs"
  >
    <div class="item"/>
    <div class="item"/>
    <div class="item"/>
  </veui-stack>
</article>
</template>

<script>
import { Stack } from 'veui'

export default {
  components: {
    'veui-stack': Stack
  }
}
</script>

<style scoped>
article {
  width: 400px;
}

.item {
  height: 60px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>

<doc>
设置 `direction` 属性为 `column`，可以使堆叠项垂直排列。
</doc>
