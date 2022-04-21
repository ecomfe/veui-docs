<template>
<article>
  <veui-form
    :data="formData"
  >
    <veui-field
      label="名称："
      name="name"
      :rules="[{ name: 'required', triggers: 'input,blur' }]"
    >
      <template #default="{ invalid, listeners }">
        <input
          v-model="formData.name"
          :class="{
            'demo-invalid': invalid
          }"
          v-on="listeners"
        >
      </template>
    </veui-field>
  </veui-form>
</article>
</template>

<script>
import { Form, Field } from 'veui'

export default {
  components: {
    'veui-form': Form,
    'veui-field': Field
  },
  data () {
    return {
      formData: {
        name: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.demo-invalid {
  border: 1px solid #cc1800;
}
</style>
