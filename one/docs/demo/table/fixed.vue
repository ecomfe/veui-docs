<template>
<article>
  <veui-table
    :data="data"
    key-field="id"
    :scroll="{ x: 800 }"
  >
    <veui-table-column
      field="id"
      title="ID"
      width="80"
      fixed="left"
    />
    <veui-table-column title="Characters">
      <veui-table-column
        field="name"
        title="Name"
        width="200"
      />
      <veui-table-column
        field="title"
        title="Title"
        width="200"
      />
    </veui-table-column>
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
      width="200"
    >
      <template #default="{ updateDate }">
        {{ updateDate | date }}
      </template>
    </veui-table-column>
    <veui-table-column
      field="operation"
      title="Operations"
      width="140"
      fixed="right"
    >
      <template #default="{ index }">
        <veui-button
          ui="text"
          @click="remove(index)"
        >
          Remove
        </veui-button>
      </template>
    </veui-table-column>
  </veui-table>
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
          title: 'Captain America',
          updateDate: '20131117'
        },
        {
          id: '3155',
          name: 'Thor Odinson',
          bid: 598,
          title: 'God of Thunder',
          updateDate: '20140214'
        },
        {
          id: '3156',
          name: 'Tony Stark',
          bid: 820,
          title: 'Ironman',
          updateDate: '20170610'
        },
        {
          id: '3157',
          name: 'Stephen Strange',
          bid: 736,
          title: 'Doctor Strange',
          updateDate: '20180109'
        }
      ]
    }
  },
  methods: {
    remove (index) {
      this.data.splice(index, 1)
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

.veui-checkbox {
  margin-right: 20px;
}
</style>

<docs>
在固定列模式下，必须为被固定的列指定 `width` 属性。
</docs>

<docs locale="en-US">
The `width` prop must be specified for fixed columns.
</docs>
