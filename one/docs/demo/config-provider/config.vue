<template>
<article>
  <section>
    <veui-checkbox v-model="override">
      Override config
    </veui-checkbox>
  </section>
  <veui-config-provider :value="config">
    <section>
      <veui-select
        :options="options"
        clearable
      />
      <veui-date-picker/>
    </section>
  </veui-config-provider>
</article>
</template>

<script>
import { ConfigProvider, Select, DatePicker, Checkbox } from 'veui'

export default {
  components: {
    'veui-config-provider': ConfigProvider,
    'veui-select': Select,
    'veui-date-picker': DatePicker,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      override: true,
      options: [
        {
          label: 'MIT',
          value: 'mit'
        },
        {
          label: 'BSD',
          value: 'bsd'
        }
      ]
    }
  },
  computed: {
    config () {
      return this.override ? {
        'select.placeholder': 'Please select...',
        'datepicker.placeholder': 'Pick a day...'
      } : {}
    }
  }
}
</script>

<style lang="less" scoped>
section {
  display: flex;
  gap: 12px;
  align-items: center;

  & + & {
    margin-top: 20px;
  }
}
</style>
