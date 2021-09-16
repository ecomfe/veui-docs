<template>
<article>
  <section>
    <veui-badge type="success">
      Running
    </veui-badge>
    <veui-badge type="info">
      New
    </veui-badge>
    <veui-badge>
      Rejected
    </veui-badge>
    <veui-badge type="warning">
      Auditing
    </veui-badge>
    <veui-badge type="aux">
      Expired
    </veui-badge>
  </section>
</article>
</template>

<script>
import { Badge } from 'veui'

export default {
  components: {
    'veui-badge': Badge
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}

.veui-badge {
  & + & {
    margin-left: 30px;
  }
}
</style>
