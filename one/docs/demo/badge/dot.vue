<template>
<article>
  <section>
    <veui-badge
      value="Running"
      type="success"
    />
    <veui-badge
      value="New"
      type="info"
    />
    <veui-badge value="Rejected"/>
    <veui-badge
      value="Auditing"
      type="warning"
    />
    <veui-badge
      value="Expired"
      type="aux"
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
