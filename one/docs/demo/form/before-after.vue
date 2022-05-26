<template>
<article class="veui-form-demo">
  <veui-form
    ref="form"
    :data="data"
    :before-validate="beforeValidate"
    :after-validate="afterValidate"
  >
    <veui-field
      field="name"
      name="name"
      label="姓名"
    >
      <veui-input v-model="data.name"/>
    </veui-field>

    <veui-field
      field="phone"
      name="phone"
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
import confirmManager from 'veui/managers/confirm'

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
        name: '曹达华',
        phone: '18888888888'
      }
    }
  },
  methods: {
    beforeValidate () {
      return new Promise((resolve) => {
        confirmManager
          .warn('前置校验通过吗？', '确认', {
            ok: () => {}
          })
          .then((ok) => {
            resolve(ok)
          })
      })
    },
    afterValidate () {
      return new Promise((resolve) => {
        confirmManager
          .warn('后置校验通过吗？', '确认', {
            ok: () => {}
          })
          .then((ok) => {
            resolve(ok)
          })
      })
    }
  }
}
</script>
