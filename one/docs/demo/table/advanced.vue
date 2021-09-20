<template>
<article>
  <section>
    <veui-button
      ui="primary"
      @click="append"
    >
      Add
    </veui-button>
  </section>
  <section>
    <veui-checkbox
      v-model="mode"
      true-value="multiple"
      false-value="single"
    >
      Multiple selection
    </veui-checkbox>
    <veui-checkbox v-model="showOps">
      Display “Operations”
    </veui-checkbox>
    <veui-checkbox v-model="selectSpanRow">
      Select by “Group” <small>(instead of “ID”)</small>
    </veui-checkbox>
  </section>
  <section>
    <veui-table
      :data="data"
      :key-field="selectSpanRow ? 'group' : 'id'"
      selectable
      :select-mode="mode"
      :order-by="orderBy"
      :order="order"
      :selected.sync="selected"
      @sort="handleSort"
    >
      <veui-table-column
        field="id"
        title="ID"
        sortable
      >
        <template #head>
          <strong>ID</strong>
        </template>
        <template #foot>
          <strong>Total</strong>
        </template>
      </veui-table-column>
      <veui-table-column
        field="group"
        title="Group"
        :span="groupSpan"
      />
      <veui-table-column
        field="name"
        title="Name"
        width="160"
      />
      <veui-table-column
        field="bid"
        title="Bid"
        sortable
        width="160"
        align="right"
      >
        <template #default="{ bid }">
          {{ bid | currency }}
        </template>
        <template #foot>
          <strong>{{ total | currency }}</strong>
        </template>
      </veui-table-column>
      <veui-table-column
        field="updateDate"
        title="Last updated"
        align="center"
      >
        <template #default="{ id, updateDate }">
          <span :ref="`time-a-${id}`">{{ updateDate | date }}</span>
          <veui-tooltip :target="`time-a-${id}`">
            {{ updateDate | time }}
          </veui-tooltip>
        </template>
      </veui-table-column>
      <veui-table-column
        v-if="showOps"
        field="operation"
        title="Opertaions"
      >
        <template #default="{ index }">
          <veui-button
            ui="text"
            @click="del(index)"
          >
            Remove
          </veui-button>
        </template>
      </veui-table-column>
    </veui-table>
    <p>Selected: {{ JSON.stringify(selected) }}</p>
  </section>
</article>
</template>

<script>
import { groupBy } from 'lodash'
import { Button, Checkbox, Table, Column, Tooltip } from 'veui'

export default {
  components: {
    'veui-button': Button,
    'veui-table': Table,
    'veui-table-column': Column,
    'veui-tooltip': Tooltip,
    'veui-checkbox': Checkbox
  },
  filters: {
    currency (value) {
      return '¥' + value.toFixed(2)
    },
    date (value) {
      let [, ...parts] = value.match(/(\d{4})(\d{2})(\d{2})/) || []
      return parts.join('-')
    },
    time (value) {
      let [, ...parts] = value.match(/(\d{4})(\d{2})(\d{2})/) || []
      return parts.join('-') + ' 00:00:00'
    }
  },
  data () {
    return {
      mode: 'multiple',
      showOps: true,
      selectSpanRow: true,
      data: [
        {
          id: '3154',
          name: 'Steve Rogers',
          bid: 1024,
          updateDate: '20131117',
          group: '1577'
        },
        {
          id: '3155',
          name: 'Thor Odinson',
          bid: 598,
          updateDate: '20140214',
          group: '1577'
        },
        {
          id: '3156',
          name: 'Tony Stark',
          bid: 820,
          updateDate: '20170610',
          group: '1578'
        },
        {
          id: '3157',
          name: 'Stephen Strange',
          bid: 736,
          updateDate: '20180109',
          group: '1578'
        }
      ],
      nextId: 3158,
      nextIndex: 4,
      order: false,
      orderBy: null,
      selected: ['1577'],
      groupSpan: i => {
        let groups = groupBy(this.data, 'group')
        let item = this.data[i]
        let itemGroup = groups[item.group]
        if (item.id === (itemGroup[0] || {}).id) {
          return {
            row: itemGroup.length
          }
        }
        return {
          row: 0
        }
      }
    }
  },
  computed: {
    total () {
      return this.data.reduce((total, item) => {
        return total + item.bid
      }, 0)
    }
  },
  methods: {
    del (index) {
      this.data.splice(index, 1)
    },
    append () {
      let d = new Date(Date.now() + Math.floor(Math.random() * 1e10))

      let item = {
        id: String(this.nextId),
        group: String(Math.floor(this.nextId / 2)),
        name: `Character-${this.nextIndex}`,
        bid: Math.floor(Math.random() * 1280),
        updateDate:
          d.getFullYear() +
          String(d.getMonth() + 1).padStart(2, '0') +
          String(d.getMonth() + 1).padStart(2, '0')
      }
      this.nextId++
      this.nextIndex++
      this.data.push(item)
    },
    handleSort (orderBy, order) {
      this.orderBy = orderBy
      this.order = order
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}

.veui-checkbox {
  margin-right: 20px;
}
</style>
