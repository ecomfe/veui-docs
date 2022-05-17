<template>
<article class="veui-form-demo">
  <veui-form
    ref="form"
    :data="storeData4"
  >
    <veui-field
      field="name"
      name="name"
      label="姓名"
      :rules="requiredRule"
    >
      <veui-input v-model="storeData4.name"/>
    </veui-field>

    <veui-field
      field="phone"
      name="phone"
      :rules="phoneRule"
      label="手机"
    >
      <veui-input
        v-model="storeData4.phone"
        name="phone"
        autocomplete="off"
      />
    </veui-field>

    <template #actions="{ validating }">
      <veui-button
        ui="primary"
        :loading="validating"
        type="submit"
      >提交</veui-button>
    </template>
  </veui-form>
</article>
</template>

<script>
import {
  Form,
  Fieldset,
  Field,
  Span,
  Input,
  Button,
  Select,
  Checkbox,
  CheckboxGroup,
  NumberInput,
  Transfer,
  ConfigProvider
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
      storeData4: {
        name: '',
        phone: '1888888888a'
      },
      requiredRule: [
        {
          name: 'required',
          value: true,
          triggers: 'blur,input'
        }
      ],
      phoneRule: [
        { name: 'required', triggers: 'change,input,blur' },
        {
          name: 'pattern',
          value: /^1\d{10}$/,
          message: '请输入正确的手机号',
          triggers: 'blur'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import "~veui-theme-dls/lib.less";

.veui-form-demo {
  .operation {
    margin-top: 60px;
    margin-left: 120px;

    [class*="veui"] {
      margin-left: 10px;
    }

    [class*="veui"]:first-child {
      margin-left: 0;
    }
  }
}
</style>
