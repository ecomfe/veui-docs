<template>
<article>
  <veui-stack
    class="stack"
    gap="s"
    wrap
  >
    <veui-tag type="info">
      Chase
    </veui-tag>
    <veui-tag type="success">
      Rocky
    </veui-tag>
    <veui-tag type="warning">
      Skye
    </veui-tag>
    <veui-tag type="error">
      Marshall
    </veui-tag>
    <veui-tag type="info">
      Rubble
    </veui-tag>
    <veui-tag type="success">
      Zuma
    </veui-tag>
    <veui-tag type="warning">
      Everest
    </veui-tag>
    <veui-tag type="error">
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
