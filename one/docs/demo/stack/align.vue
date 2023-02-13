<template>
<article>
  <veui-stack gap="l">
    <veui-stack
      class="stack"
      align="start"
      gap="xs"
    >
      <div class="item">
        start
      </div>
      <div class="item">
        start
      </div>
      <div class="item">
        start
      </div>
    </veui-stack>
    <veui-stack
      class="stack"
      align="center"
      gap="xs"
    >
      <div class="item">
        center
      </div>
      <div class="item">
        center
      </div>
      <div class="item">
        center
      </div>
    </veui-stack>
    <veui-stack
      class="stack"
      align="end"
      gap="xs"
    >
      <div class="item">
        end
      </div>
      <div class="item">
        end
      </div>
      <div class="item">
        end
      </div>
    </veui-stack>
    <veui-stack
      class="stack"
      align="stretch"
      gap="xs"
    >
      <div class="item">
        stretch
      </div>
      <div class="item">
        stretch
      </div>
      <div class="item">
        stretch
      </div>
    </veui-stack>
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

.item {
  display: flex;
  min-width: 48px;
  align-items: center;
  justify-content: center;
  background-color: gold;
  font-size: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.item:nth-child(1) {
  min-height: 40px;
}

.item:nth-child(2) {
  min-height: 80px;
}

.item:nth-child(3) {
  min-height: 60px;
}

.stack {
  padding: 2px;
  border: 1px dotted goldenrod;
}
</style>

<doc>
设置 `direction` 属性为 `column`，可以使堆叠项垂直排列。
</doc>
