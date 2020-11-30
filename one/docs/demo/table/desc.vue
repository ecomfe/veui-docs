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
          <p>这是一段对 bid 字段的注释</p>
          <veui-button @click="close">关闭</veui-button>
        </template>
      </veui-table-column>
      <veui-table-column
        field="updateDate"
        title="Last updated"
        align="center"
      >
        <template slot-scope="{ updateDate }">
          {{ updateDate | date }}
        </template>
      </veui-table-column>
      <veui-table-column
        field="operation"
        title="Operations"
      >
        <template slot-scope="{ index }">
          <veui-button
            ui="text"
            @click="remove(index)"
          >
            Remove
          </veui-button>
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
    },
    date (value) {
      let [, ...parts] = value.match(/(\d{4})(\d{2})(\d{2})/) || []
      return parts.join('-')
    }
  },
  data () {
    return {
      density: 'normal',
      size: 'm',
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
        }
      ],
      nameDesc: "这是对 Name 字段的注释"
    }
  },
  computed: {
    ui () {
      return `${this.density} ${this.size}`
    }
  },
  methods: {
    remove (index) {
      this.data.splice(index, 1)
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

.veui-checkbox {
  margin-right: 20px;
}
</style>
