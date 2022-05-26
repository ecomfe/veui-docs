<template>
<article>
  <section>
    <span class="label-text">辅助信息位置:</span>
    <veui-radio-button-group
      v-model="helpPosition"
      ui="s"
      :items="helpPositions"
    />
    <veui-checkbox
      v-model="labelPosition"
      true-value="top"
      false-value="side"
      ui="s"
      style="margin-left: 8px"
    >
      上下布局
    </veui-checkbox>
  </section>
  <veui-form
    :data="formData"
    :label-position="labelPosition"
  >
    <veui-field
      name="name"
      label="姓名"
      tip="你的全名"
      help="至少 2 个字符"
      :help-position="helpPosition"
    >
      <veui-input v-model="formData.name"/>
    </veui-field>
    <veui-field
      name="address"
      label="地址"
      tip="居住地的详细地址"
      help="精确到门牌号"
      :help-position="helpPosition"
    >
      <veui-input v-model="formData.address"/>
    </veui-field>
  </veui-form>
</article>
</template>

<script>
import { Form, Field, Input, Checkbox, RadioButtonGroup } from 'veui'

export default {
  components: {
    'veui-form': Form,
    'veui-field': Field,
    'veui-input': Input,
    'veui-radio-button-group': RadioButtonGroup,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      formData: {
        name: '',
        address: ''
      },
      helpPositions: [
        { label: 'top', value: 'top' },
        { label: 'side', value: 'side' },
        { label: 'bottom', value: 'bottom' }
      ],
      helpPosition: 'side',
      labelPosition: 'side'
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}

.label-text {
   font-size: 12px;
   margin-right: 8px;
 }
</style>
