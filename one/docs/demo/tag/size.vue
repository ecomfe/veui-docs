<template>
<article>
  <section>
    <h4>Normal</h4>
    <veui-tag>Steve</veui-tag>
    <veui-tag type="info">
      Tony
    </veui-tag>
    <veui-tag type="success">
      Peter
    </veui-tag>
    <veui-tag type="warning">
      Natasha
    </veui-tag>
    <veui-tag type="error">
      Bruce
    </veui-tag>
  </section>
  <section>
    <h4>Small</h4>
    <veui-tag ui="s">
      Steve
    </veui-tag>
    <veui-tag
      ui="s"
      type="info"
    >
      Tony
    </veui-tag>
    <veui-tag
      ui="s"
      type="success"
    >
      Peter
    </veui-tag>
    <veui-tag
      ui="s"
      type="warning"
    >
      Natasha
    </veui-tag>
    <veui-tag
      ui="s"
      type="error"
    >
      Bruce
    </veui-tag>
  </section>
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
