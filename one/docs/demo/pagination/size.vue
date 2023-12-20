<template>
<article>
  <section>
    <veui-pagination
      class="pagination"
      :page="page"
      :total="total"
      :to="to"
    />
  </section>
  <section>
    <veui-pagination
      class="pagination"
      :page="page"
      :total="total"
      :to="to"
      ui="s"
    />
  </section>
  <section>
    <veui-pagination
      class="pagination"
      :page="page"
      :total="total"
      :to="to"
      ui="xs"
    />
  </section>
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

.pagination {
  margin: 1.2em 0;
}
</style>
