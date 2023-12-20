<template>
<article>
  <veui-pagination
    class="pagination"
    :page="page"
    :page-size="pageSize"
    :page-sizes="pageSizes"
    :total="total"
    :to="to"
    @pagesizechange="handlePageSizeChange"
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
      total: 10101,
      pageSize: 20,
      pageSizes: [20, 30, 50, 100]
    }
  },
  computed: {
    page () {
      return Number(this.$route.query.page) || 1
    }
  },
  methods: {
    handlePageSizeChange (size) {
      this.pageSize = size
      if (this.page !== 1) {
        this.$router.push({
          path: './pagination?page=1'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
article {
  text-align: right;
}

.pagination {
  margin: 1.2em 0;
}
</style>
