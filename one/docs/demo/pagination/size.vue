<template>
<article>
  <veui-pagination
    :page="page"
    :total="total"
    :to="to"
  />
  <veui-pagination
    :page="page"
    :total="total"
    :to="to"
    ui="s"
  />
  <veui-pagination
    :page="page"
    :total="total"
    :to="to"
    ui="xs"
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

<style lang="less" scoped>
article {
  text-align: right;
}

.veui-pagination {
  margin: 1.2em 0;
}
</style>
