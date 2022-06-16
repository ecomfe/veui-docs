<template>
<article class="veui-form-demo">
  <veui-form
    ref="form"
    :data="data"
  >
    <veui-field
      field="phone"
      name="phone"
      :rules="phoneRule"
      label="手机"
    >
      <veui-input
        v-model="data.phone"
        name="phone"
        autocomplete="off"
      />
    </veui-field>

    <template #actions>
      <veui-button
        ui="primary"
        type="submit"
      >提交</veui-button>
    </template>
  </veui-form>
</article>
</template>

<script>
import {
  Form,
  Field,
  Input,
  Button
} from 'veui'

export default {
  name: 'demo-form',
  components: {
    'veui-input': Input,
    'veui-button': Button,
    'veui-form': Form,
    'veui-field': Field
  },
  data () {
    return {
      data: {
        phone: '1888888888a'
      },
      phoneRule: [
        {
          name: 'pattern',
          value: /^1\d{10}$/,
          message: '{value} 不是正确的手机号',
          triggers: 'blur'
        }
      ]
    }
  }
}
</script>
