<template>
<article>
  <section>
    <veui-badge
      class="badge"
      value="Running"
      status="success"
    />
    <veui-badge
      class="badge"
      value="New"
      status="info"
    />
    <veui-badge
      class="badge"
      value="Rejected"
    />
    <veui-badge
      class="badge"
      value="Auditing"
      status="warning"
    />
    <veui-badge
      class="badge"
      value="Expired"
      status="aux"
    />
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
