<template>
<article>
  <veui-table
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
    />
    <veui-table-column
      field="desc"
      title="Description"
      tooltip
    />
  </veui-table>
</article>
</template>

<script>
import { Table, Column } from 'veui'

const long = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam! Pariatur, laboriosam? Voluptatibus, sunt.'
const short = 'Lorem ipsum.'

export default {
  components: {
    'veui-table': Table,
    'veui-table-column': Column
  },
  data () {
    return {
      density: 'normal',
      size: 'm',
      data: [
        {
          id: '3154',
          name: 'Steve Rogers',
          desc: long
        },
        {
          id: '3155',
          name: 'Thor Odinson',
          desc: short
        },
        {
          id: '3156',
          name: 'Tony Stark',
          desc: short
        },
        {
          id: '3157',
          name: 'Stephen Strange',
          desc: long
        }
      ]
    }
  }
}
</script>
