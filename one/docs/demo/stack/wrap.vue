<template>
<article>
  <veui-stack
    class="stack"
    gap="s"
    wrap
  >
    <veui-tag status="info">
      Chase
    </veui-tag>
    <veui-tag status="success">
      Rocky
    </veui-tag>
    <veui-tag status="warning">
      Skye
    </veui-tag>
    <veui-tag status="error">
      Marshall
    </veui-tag>
    <veui-tag status="info">
      Rubble
    </veui-tag>
    <veui-tag status="success">
      Zuma
    </veui-tag>
    <veui-tag status="warning">
      Everest
    </veui-tag>
    <veui-tag status="error">
      Tracker
    </veui-tag>
  </veui-stack>
</article>
</template>

<script>
import { Stack, Tag } from 'veui'

export default {
  components: {
    'veui-stack': Stack,
    'veui-tag': Tag
  }
}
</script>

<style scoped>
.stack {
  width: 425px;
  padding: 2px;
  border: 1px dotted goldenrod;
}
</style>
