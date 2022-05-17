<template>
<article class="veui-form-demo">
  <veui-form
    ref="form"
    :data="storeData4"
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
        <veui-input v-model="storeData4.start"/>
      </veui-field>
      <veui-span style="margin: 0 4px">-</veui-span>
      <veui-field field="end" name="end" :rules="numRequiredRule">
        <veui-input v-model="storeData4.end"/>
      </veui-field>
      <veui-span>万</veui-span>
    </veui-fieldset>

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
    'veui-field': Field,
    'veui-fieldset': Fieldset
  },
  data () {
    return {
      storeData4: {
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
                if (parseInt(start, 10) >= parseInt(end, 10)) {
                  return resolve({
                    start: '下限必须小于上限'
                  })
                }
                return resolve(true)
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
@import "~veui-theme-dls/lib.less";

.veui-form-demo {
  .salary {
  .veui-input {
      width: 80px;
    }
  }

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
