<template>
<article>
  <section>
    <p>
      允许不排序：<veui-switch
        v-model="allowFalse"
        @change="handleChange"
      />
    </p>
    <veui-table
      :data="sorted"
      key-field="id"
      :order="order"
      :order-by="orderBy"
      :allowed-orders="allowedOrders"
      @sort="handleSort"
    >
      <veui-table-column
        field="id"
        title="ID"
        sortable
      />
      <veui-table-column
        field="name"
        title="Name"
      />
      <veui-table-column
        field="bid"
        title="Bid"
        width="160"
        align="right"
        sortable
      >
        <template slot-scope="{ bid }">
          {{ bid | currency }}
        </template>
      </veui-table-column>
    </veui-table>
  </section>
</article>
</template>

<script>
import { Table, Column, Switch } from 'veui'

let data = [
  {
    id: '31552',
    name: 'Thor Odinson',
    bid: 598,
    updateDate: '20140214'
  },
  {
    id: '31541',
    name: 'Steve Rogers',
    bid: 1024,
    updateDate: '20131117'
  },
  {
    id: '31563',
    name: 'Tony Stark',
    bid: 820,
    updateDate: '20170610'
  },
  {
    id: '31574',
    name: 'Stephen Strange',
    bid: 736,
    updateDate: '20180109'
  }
]

let allowedOrders = [false, 'desc', 'asc']

export default {
  components: {
    'veui-table': Table,
    'veui-table-column': Column,
    'veui-switch': Switch
  },
  filters: {
    currency (value) {
      return '¥' + value.toFixed(2)
    }
  },
  data () {
    return {
      order: 'asc',
      orderBy: 'id',
      allowFalse: true
    }
  },
  computed: {
    sorted () {
      let result = data.slice(0)
      if (this.order) {
        const sign = this.order === 'desc' ? -1 : 1
        result.sort((a, b) => {
          return sign * (+a[this.orderBy] - +b[this.orderBy])
        })
      }
      return result
    },
    allowedOrders () {
      let result = allowedOrders.slice(0)
      return this.allowFalse ? result : result.filter(item => item)
    }
  },
  methods: {
    handleSort (field, order) {
      this.order = order
      this.orderBy = field
    },
    handleChange (val) {
      // 不允许不排序时，当前却是不排序，随便改下
      if (!val && !this.order) {
        this.order = 'desc'
      }
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
