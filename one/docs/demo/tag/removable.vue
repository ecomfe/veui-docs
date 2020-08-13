<template>
<article>
  <veui-tag removable>
    Steve
  </veui-tag>
  <veui-tag
    removable
    type="info"
  >
    Tony
  </veui-tag>
  <veui-tag
    removable
    type="success"
  >
    Peter
  </veui-tag>
  <veui-tag
    removable
    type="warning"
  >
    Natasha
  </veui-tag>
  <veui-tag
    removable
    type="error"
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
</style>

<style lang="less" scoped docs>
section {
  margin-bottom: 20px;
}
</style>
