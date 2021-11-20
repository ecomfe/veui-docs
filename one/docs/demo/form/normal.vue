<template>
<article>
  <veui-form :data="formData">
    <veui-field label="状态：">
      <veui-select
        v-model="formData.statusSelected"
        :options="statusOptions"
      />
    </veui-field>

    <veui-field label="时间：">
      <veui-datepicker
        v-model="formData.range"
        range
      />
    </veui-field>

    <veui-field>
      <veui-search-box
        v-model="formData.query"
        placeholder="请输入搜索内容"
      />
    </veui-field>

    <template #actions>
      <veui-button
        ui="primary"
        type="submit"
      >
        提交
      </veui-button>
      <veui-button>取消</veui-button>
    </template>
  </veui-form>
</article>
</template>

<script>
import { Form, Field, Button, Select, DatePicker, SearchBox } from 'veui'

export default {
  components: {
    'veui-form': Form,
    'veui-field': Field,
    'veui-button': Button,
    'veui-select': Select,
    'veui-datepicker': DatePicker,
    'veui-search-box': SearchBox
  },
  data () {
    const start = new Date()
    const end = new Date(start.getFullYear(), start.getMonth() + 1, 0)

    return {
      statusOptions: [
        {
          label: '状态1',
          value: 1
        },
        {
          label: '状态2',
          value: 2
        },
        {
          label: '状态3',
          value: 3
        },
        {
          label: '状态4',
          value: 4
        }
      ],
      formData: {
        statusSelected: 1,
        query: '',
        range: [start, end]
      }
    }
  }
}
</script>
