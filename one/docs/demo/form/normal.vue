<template>
<article>
  <veui-form
    :data="formData"
    @submit="handleSubmit"
  >
    <veui-field label="型号">
      <veui-select
        v-model="formData.model"
        :options="models"
      />
    </veui-field>
    <veui-field label="日期">
      <veui-date-picker
        v-model="formData.date"
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
import { Form, Field, Button, Select, DatePicker } from 'veui'

export default {
  components: {
    'veui-form': Form,
    'veui-field': Field,
    'veui-button': Button,
    'veui-select': Select,
    'veui-date-picker': DatePicker
  },
  data () {
    return {
      models: [
        {
          label: 'APTX-4867',
          value: 'aptx-4867'
        },
        {
          label: 'APTX-4868',
          value: 'aptx-4868'
        },
        {
          label: 'APTX-4869',
          value: 'aptx-4869'
        },
        {
          label: 'APTX-4870',
          value: 'aptx-4870'
        }
      ],
      formData: {
        model: null,
        date: null
      }
    }
  },
  methods: {
    handleSubmit (data) {
      this.$toast(JSON.stringify(data, null, 2))
    }
  }
}
</script>
