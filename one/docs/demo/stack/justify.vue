<template>
<article>
  <veui-stack
    gap="l"
    wrap
  >
    <veui-stack
      class="stack"
      justify="start"
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
      justify="center"
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
      justify="end"
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
      justify="space-between"
      gap="xs"
    >
      <div class="item column">
        <span>space-</span><span>between</span>
      </div>
      <div class="item column">
        <span>space-</span><span>between</span>
      </div>
      <div class="item column">
        <span>space-</span><span>between</span>
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
  min-width: 60px;
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

.column {
  flex-direction: column;
}

.stack {
  width: 35%;
  padding: 2px;
  border: 1px dotted goldenrod;
}
</style>

<doc>
设置 `direction` 属性为 `column`，可以使堆叠项垂直排列。
</doc>
