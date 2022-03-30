<template>
<article>
  <veui-form
    :data="formData"
  >
    <veui-field
      label="姓名："
      tip="提示"
      help="辅助文本"
      name="name"
    >
      <veui-input v-model="formData.name"/>
    </veui-field>
    <veui-field
      label="爱好："
      help="辅助文本"
      name="hobby"
      help-position="bottom"
    >
      <veui-input v-model="formData.hobby"/>
    </veui-field>
  </veui-form>
</article>
</template>

<script>
import { Form, Field, Input } from 'veui'

export default {
  components: {
    'veui-form': Form,
    'veui-field': Field,
    'veui-input': Input
  },
  data () {
    return {
      formData: {
        name: '',
        hobby: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>
