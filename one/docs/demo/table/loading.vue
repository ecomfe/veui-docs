<template>
<article>
  <section class="settings">
    <veui-switch
      v-model="loading"
      ui="s"
    >
      Loading
    </veui-switch>
    <veui-switch
      v-model="noData"
      ui="s"
      :disabled="spinner"
    >
      No data
    </veui-switch>
    <veui-switch
      v-model="modal"
      ui="s"
    >
      Modal
    </veui-switch>
    <veui-switch
      v-model="spinner"
      ui="s"
    >
      Use spinner
    </veui-switch>
  </section>
  <veui-table
    :data="noData ? [] : data"
    :loading="loading"
    :loading-options="{ type: spinner ? 'spinner' : 'bar', modal }"
    key-field="id"
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
      <template #default="{ bid }">
        {{ bid | currency }}
      </template>
    </veui-table-column>
  </veui-table>
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
      data,
      noData: false,
      loading: true,
      modal: true,
      spinner: false
    }
  }
}
</script>

<style lang="less" scoped>
.settings {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
