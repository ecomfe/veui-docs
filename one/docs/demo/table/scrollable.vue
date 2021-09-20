<template>
<article>
  <section>
    <veui-table
      :data="data"
      scroll="360"
      key-field="id"
    >
      <veui-table-column
        field="id"
        title="ID"
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
      >
        <template #default="{ bid }">
          {{ bid | currency }}
        </template>
      </veui-table-column>
      <veui-table-column
        field="updateDate"
        title="Last updated"
        align="center"
      >
        <template #default="{ updateDate }">
          {{ updateDate | date }}
        </template>
      </veui-table-column>
    </veui-table>
  </section>
</article>
</template>

<script>
import { Table, Column } from 'veui'

export default {
  components: {
    'veui-table': Table,
    'veui-table-column': Column
  },
  filters: {
    currency (value) {
      return '¥' + value.toFixed(2)
    },
    date (value) {
      let [, ...parts] = value.match(/(\d{4})(\d{2})(\d{2})/) || []
      return parts.join('-')
    }
  },
  data () {
    return {
      data: [
        {
          id: '3154',
          name: 'Steve Rogers',
          bid: 1024,
          updateDate: '20131117'
        },
        {
          id: '3155',
          name: 'Thor Odinson',
          bid: 598,
          updateDate: '20140214'
        },
        {
          id: '3156',
          name: 'Tony Stark',
          bid: 820,
          updateDate: '20170610'
        },
        {
          id: '3157',
          name: 'Stephen Strange',
          bid: 736,
          updateDate: '20180109'
        },
        {
          id: '3158',
          name: 'Natalie Romanoff',
          bid: 736,
          updateDate: '20180123'
        },
        {
          id: '3159',
          name: 'Bruce Banner',
          bid: 736,
          updateDate: '20181201'
        },
        {
          id: '3160',
          name: 'Peter Parker',
          bid: 736,
          updateDate: '20181113'
        },
        {
          id: '3161',
          name: "T'Challa",
          bid: 736,
          updateDate: '20180730'
        },
        {
          id: '3162',
          name: 'Loki',
          bid: 736,
          updateDate: '20180601'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>
