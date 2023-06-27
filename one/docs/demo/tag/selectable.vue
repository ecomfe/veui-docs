<template>
<article>
  <veui-tag selectable>
    Steve
  </veui-tag>
  <veui-tag
    selectable
    status="info"
  >
    Tony
  </veui-tag>
  <veui-tag
    selectable
    status="success"
  >
    Peter
  </veui-tag>
  <veui-tag
    selectable
    status="warning"
  >
    Natasha
  </veui-tag>
  <veui-tag
    selectable
    status="error"
  >
    Bruce
  </veui-tag>
</article>
</template>

<script>
import { Tag } from 'veui'

export default {
  components: {
    'veui-tag': Tag
  }
}
</script>

<style lang="less" scoped>
.veui-tag {
  margin-right: 10px;
}

section {
  margin-bottom: 20px;
}
</style>
