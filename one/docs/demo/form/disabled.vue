<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      禁用
    </veui-checkbox>
  </section>
  <veui-form
    :data="formData"
    :disabled="disabled"
  >
    <veui-field label="姓名">
      <veui-input v-model="formData.name"/>
    </veui-field>
  </veui-form>
</article>
</template>

<script>
import { Form, Field, Input, Checkbox } from 'veui'

export default {
  components: {
    'veui-checkbox': Checkbox,
    'veui-form': Form,
    'veui-field': Field,
    'veui-input': Input
  },
  data () {
    return {
      disabled: true,
      formData: {
        name: ''
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
