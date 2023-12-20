<template>
<article class="form-demo">
  <veui-form
    ref="form"
    :data="data"
    :validators="validators"
  >
    <veui-fieldset
      label="预期收入"
      class="salary"
      tip="下限必须小于上限"
      :required="true"
    >
      <veui-field
        field="start"
        name="start"
        :rules="numRequiredRule"
        class="start-field"
      >
        <veui-input
          v-model="data.start"
          class="input"
        />
      </veui-field>
      <veui-span style="margin: 0 4px">
        -
      </veui-span>
      <veui-field
        field="end"
        name="end"
        :rules="numRequiredRule"
      >
        <veui-input
          v-model="data.end"
          class="input"
        />
      </veui-field>
      <veui-span>万</veui-span>
    </veui-fieldset>

    <template #actions="{ validating }">
      <veui-button
        ui="primary"
        :loading="validating"
        type="submit"
      >
        提交
      </veui-button>
    </template>
  </veui-form>
</article>
</template>

<script>
import {
  Form,
  Fieldset,
  Field,
  Input,
  Button,
  Span
} from 'veui'

export default {
  name: 'demo-form',
  components: {
    'veui-span': Span,
    'veui-input': Input,
    'veui-button': Button,
    'veui-form': Form,
    'veui-field': Field,
    'veui-fieldset': Fieldset
  },
  data () {
    return {
      data: {
        start: 20000,
        end: 10000
      },
      numRequiredRule: [
        {
          name: 'numeric',
          value: true,
          triggers: 'blur,input'
        },
        {
          name: 'required',
          value: true,
          triggers: 'blur,input'
        }
      ],
      validators: [
        {
          fields: ['start', 'end'],
          handler (start, end) {
            if (start == null || end == null) {
              return true
            }

            return new Promise(function (resolve) {
              setTimeout(function () {
                let res = {}
                if (parseInt(start, 10) < 4000) {
                  res.start = {
                    status: 'warning',
                    message: '请提高下限'
                  }
                }
                if (parseInt(start, 10) >= parseInt(end, 10)) {
                  res.end = '上限必须大于下限'
                }
                resolve(Object.keys(res).length ? res : true)
              }, 2000)
            })
          },
          triggers: ['change', 'submit,input']
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.form-demo {
  .salary {
    .input {
      width: 80px;
    }
  }
}
</style>
