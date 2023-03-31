<template>
<article>
  <section>
    <veui-checkbox v-model="override">
      Override icons
    </veui-checkbox>
  </section>
  <veui-config-provider :value="config">
    <veui-form>
      <veui-field
        label="Date"
        tip="The date must be earlier than today"
      >
        <veui-date-picker/>
      </veui-field>
    </veui-form>
  </veui-config-provider>
</article>
</template>

<script>
import { ConfigProvider, Form, Field, DatePicker, Checkbox } from 'veui'
import { IconQuestionCircleSolid, IconCalendarSolid } from 'dls-icons-vue'

export default {
  components: {
    'veui-config-provider': ConfigProvider,
    'veui-form': Form,
    'veui-field': Field,
    'veui-date-picker': DatePicker,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      override: true
    }
  },
  computed: {
    config () {
      return this.override ? {
        'field.icons.tip': IconQuestionCircleSolid,
        'datepicker.icons.calendar': IconCalendarSolid
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
