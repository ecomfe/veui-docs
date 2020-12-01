<template>
<article>
  <section>
    <veui-table
      :ui="ui"
      :data="data"
      key-field="id"
    >
      <veui-table-column
        field="id"
        title="ID"
      />
      <veui-table-column
        field="name"
        title="Name"
        :desc="nameDesc"
      />
      <veui-table-column
        field="bid"
        title="Bid"
        width="160"
        align="right"
      >
        <template slot-scope="{ bid }">
          {{ bid | currency }}
        </template>
        <template #desc="{ close }">
          <p>This is a description for bid.</p>
          <veui-button @click="close">close</veui-button>
        </template>
      </veui-table-column>
    </veui-table>
  </section>
</article>
</template>

<script>
import { Table, Column, Button } from 'veui'

export default {
  components: {
    'veui-table': Table,
    'veui-table-column': Column,
    'veui-button': Button
  },
  filters: {
    currency (value) {
      return '¥' + value.toFixed(2)
    }
  },
  data () {
    return {
      data: [
        {
          id: '31541',
          name: 'Steve Rogers',
          bid: 1024,
          updateDate: '20131117'
        },
        {
          id: '31552',
          name: 'Thor Odinson',
          bid: 598,
          updateDate: '20140214'
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
      ],
      nameDesc: 'This is a description for name.'
    }
  }
}
</script>

<style lang="less" scoped docs>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
