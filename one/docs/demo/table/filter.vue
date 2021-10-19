<template>
<article>
  <section>
    <h4>Layout</h4>
    <veui-checkbox v-model="crowded">
      Crowded layout
    </veui-checkbox>
  </section>
  <section>
    <veui-table
      :ui="crowded ? 'crowded' : null"
      :data="filteredData"
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
        :filter-value="filtered"
      >
        <template #default="{ bid }">
          {{ bid | currency }}
        </template>
        <template #filter="{ close }">
          <veui-checkbox v-model="filtered">
            &gt;800
          </veui-checkbox>
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
      <veui-table-column
        field="operation"
        title="Operations"
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
  </section>
</article>
</template>

<script>
import { Table, Column, Checkbox, Button } from 'veui'

export default {
  components: {
    'veui-table': Table,
    'veui-table-column': Column,
    'veui-checkbox': Checkbox,
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
      crowded: false,
      filtered: false
    }
  },
  computed: {
    filteredData () {
      if (!this.filtered) {
        return this.data
      }
      return this.data.filter(({ bid }) => bid > 800)
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
.veui-checkbox {
  margin: 8px 16px;
}

section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>

<docs>
可以使用 `crowded` 这个 [`ui`](#props-ui) 属性值来在需要展示很多列的布局下默认隐藏筛选按钮。
</docs>

<docs locale="en-US">
You can use the [`ui`](#props-ui) prop value `crowded` to hide filter button by default when there are too many columns to be displayed.
</docs>
