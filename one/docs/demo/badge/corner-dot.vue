<template>
<article>
  <section>
    <veui-badge
      class="badge"
      status="success"
    >
      Running
    </veui-badge>
    <veui-badge
      class="badge"
      status="info"
    >
      New
    </veui-badge>
    <veui-badge class="badge">
      Rejected
    </veui-badge>
    <veui-badge
      class="badge"
      status="warning"
    >
      Auditing
    </veui-badge>
    <veui-badge
      class="badge"
      status="aux"
    >
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

.badge {
  & + & {
    margin-left: 30px;
  }
}
</style>
