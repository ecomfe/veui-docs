<template>
<article>
  <veui-pagination
    :page="page"
    :total="total"
    :to="to"
    goto
  />
</article>
</template>

<script>
import { Pagination } from 'veui'

export default {
  components: {
    'veui-pagination': Pagination
  },
  data () {
    return {
      to: './pagination?page=:page',
      total: 10101
    }
  },
  computed: {
    page () {
      return Number(this.$route.query.page) || 1
    }
  }
}
</script>

<style lang="less" scoped docs>
article {
  text-align: right;
}
</style>
