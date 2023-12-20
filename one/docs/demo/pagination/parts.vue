<template>
<article>
  <section class="toggles">
    <veui-checkbox
      v-model="showTotal"
      class="checkbox"
    >
      Show total
    </veui-checkbox>
    <veui-checkbox
      v-model="showPageSize"
      class="checkbox"
    >
      Show page size
    </veui-checkbox>
    <veui-checkbox
      v-model="showGoto"
      class="checkbox"
    >
      Show goto
    </veui-checkbox>
  </section>
  <section>
    <veui-pagination
      :page="page"
      :total="total"
      to="./pagination?page=:page"
      :show-total="showTotal"
      :show-goto="showGoto"
      :show-page-size="showPageSize"
    />
  </section>
</article>
</template>

<script>
import { Pagination, Checkbox } from 'veui'

export default {
  components: {
    'veui-pagination': Pagination,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      to: '.',
      total: 10101,
      showTotal: true,
      showGoto: true,
      showPageSize: true
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
.toggles {
  margin-bottom: 20px;
}

.checkbox + .checkbox {
  margin-left: 16px;
}
</style>
