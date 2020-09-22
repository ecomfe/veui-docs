<template>
<article>
  <section>
    <veui-checkbox v-model="readonly">
      只读
    </veui-checkbox>
  </section>
  <veui-form
    :data="formData"
    :readonly="readonly"
  >
    <veui-field label="姓名：">
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
      readonly: true,
      formData: {
        name: ''
      }
    }
  }
}
</script>

<style lang="less" scoped docs>
section {
  margin-bottom: 20px;
}
</style>
