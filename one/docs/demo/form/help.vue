<template>
<article>
  <section>
    <veui-checkbox
      v-model="helpPosition"
      true-value="bottom"
      false-value="side"
    >
      辅助信息显示在底部
    </veui-checkbox>
  </section>
  <veui-form
    :data="formData"
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
import { Form, Field, Input, Checkbox } from 'veui'

export default {
  components: {
    'veui-form': Form,
    'veui-field': Field,
    'veui-input': Input,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      formData: {
        name: '',
        address: ''
      },
      helpPosition: 'side'
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>
