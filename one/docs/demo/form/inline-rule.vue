<template>
<article class="veui-form-demo">
  <veui-form
    ref="form"
    :data="data"
  >
    <veui-field
      label="密码："
      name="password"
      :rules="[
        { name: 'required', triggers: 'input,blur' },
        { name: 'minLength', value: '6', triggers: 'blur' }
      ]"
    >
      <veui-input
        v-model="data.password"
        type="password"
      />
    </veui-field>

    <veui-field
      label="确认密码："
      name="password2"
      :rules="p2Rules"
    >
      <veui-input
        v-model="data.password2"
        type="password"
      />
    </veui-field>
  </veui-form>
</article>
</template>

<script>
import {
  Form,
  Field,
  Input
} from 'veui'

export default {
  name: 'demo-form',
  components: {
    'veui-input': Input,
    'veui-form': Form,
    'veui-field': Field
  },
  data () {
    return {
      data: {
        password: '',
        password2: ''
      }
    }
  },
  computed: {
    p2Rules () {
      return [
        { name: 'required', triggers: 'input,blur' },
        {
          name: 'prefix',
          value: this.data.password,
          triggers: 'input',
          message: '两次输入的密码不一致',
          validate (val, ruleValue) {
            return (ruleValue || '').indexOf(val || '') === 0
          }
        },
        {
          name: 'same',
          value: this.data.password,
          triggers: 'change,password:input',
          message: '两次输入的密码不一致',
          validate (val, ruleValue) {
            return !val || (ruleValue || '') === val
          }
        }
      ]
    }
  }
}
</script>
