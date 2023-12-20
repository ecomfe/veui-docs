<template>
<article>
  <section>
    <h4>Normal</h4>
    <veui-tag class="tag">
      Steve
    </veui-tag>
    <veui-tag
      class="tag"
      status="info"
    >
      Tony
    </veui-tag>
    <veui-tag
      class="tag"
      status="success"
    >
      Peter
    </veui-tag>
    <veui-tag
      class="tag"
      status="warning"
    >
      Natasha
    </veui-tag>
    <veui-tag
      class="tag"
      status="error"
    >
      Bruce
    </veui-tag>
  </section>
  <section>
    <h4>Small</h4>
    <veui-tag
      class="tag"
      ui="s"
    >
      Steve
    </veui-tag>
    <veui-tag
      class="tag"
      ui="s"
      status="info"
    >
      Tony
    </veui-tag>
    <veui-tag
      class="tag"
      ui="s"
      status="success"
    >
      Peter
    </veui-tag>
    <veui-tag
      class="tag"
      ui="s"
      status="warning"
    >
      Natasha
    </veui-tag>
    <veui-tag
      class="tag"
      ui="s"
      status="error"
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
.tag {
  margin-right: 10px;
}

section {
  margin-bottom: 20px;
}
</style>
