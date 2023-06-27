<template>
<article>
  <section>
    <veui-badge
      value="Running"
      status="success"
    />
    <veui-badge
      value="New"
      status="info"
    />
    <veui-badge value="Rejected"/>
    <veui-badge
      value="Auditing"
      status="warning"
    />
    <veui-badge
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

.veui-badge {
  & + & {
    margin-left: 30px;
  }
}
</style>
