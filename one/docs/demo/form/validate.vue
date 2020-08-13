<template>
<article>
  <veui-form
    ref="form"
    :before-validate="beforeValidate"
    :after-validate="afterValidate"
    :readonly="isValidating"
    :data="formData"
    :validators="validators"
    @invalid="handleInvalid"
  >
    <veui-field
      name="name"
      label="姓名"
      rules="required"
    >
      <veui-input v-model="formData.name"/>
    </veui-field>

    <veui-field
      name="age"
      :rules="ageRule"
      label="年龄"
    >
      <veui-input
        v-model="formData.age"
        placeholder="错误提示优先出在右侧"
      />
    </veui-field>

    <veui-field
      name="desc"
      rules="required"
      label="介绍"
    >
      <veui-textarea
        v-model="formData.desc"
        rows="3"
      />
    </veui-field>

    <veui-fieldset
      name="phoneSet"
      label="电话"
      required
    >
      <veui-field
        name="phoneType"
        :rules="numRequiredRule"
      >
        <veui-select
          v-model="formData.phoneType"
          :options="phoneTypeOptions"
        />
      </veui-field>

      <veui-field
        name="phone"
        :rules="numRequiredRule"
      >
        <veui-input v-model="formData.phone"/>
      </veui-field>
    </veui-fieldset>

    <veui-field
      name="hobby"
      :rules="hobbyRule"
      label="爱好"
      tip="选择则至少选三个"
    >
      <veui-checkbox-group
        v-model="formData.hobby"
        :items="hobbyItems"
      />
    </veui-field>

    <veui-fieldset
      label="预期收入"
      class="salary"
      tip="联合校验，下限必须小于上限"
      required
    >
      <veui-field
        name="start"
        :rules="numRequiredRule"
      >
        <veui-input v-model="formData.start"/>
      </veui-field>
      <veui-span>-</veui-span>
      <veui-field
        name="end"
        :rules="numRequiredRule"
      >
        <veui-input v-model="formData.end"/>
      </veui-field>
      <veui-span>万</veui-span>
    </veui-fieldset>

    <veui-field
      label="收入下限"
      name="floor"
      :rules="[
        {name: 'required', value: true},
        {name: 'min', value: 3500, message: '最低收入不小于 3500'}
      ]"
    >
      <veui-number-input v-model="formData.floor"/>
    </veui-field>

    <veui-field
      name="term"
      :rules="termRequiredRule"
      label="协议"
    >
      <veui-checkbox
        v-model="formData.term"
      >
        我已阅读并同意工作协议
      </veui-checkbox>
    </veui-field>

    <template #actions>
      <veui-button
        ui="primary"
        :loading="isValidating"
        type="submit"
      >
        提交
      </veui-button>
      <veui-button
        :loading="isValidating"
        @click="() => this.$refs.form.reset()"
      >
        重置
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
  Span,
  Input,
  Button,
  Select,
  Textarea,
  Checkbox,
  CheckboxGroup,
  NumberInput
} from 'veui'

export default {
  components: {
    'veui-span': Span,
    'veui-input': Input,
    'veui-number-input': NumberInput,
    'veui-button': Button,
    'veui-form': Form,
    'veui-fieldset': Fieldset,
    'veui-field': Field,
    'veui-select': Select,
    'veui-checkbox': Checkbox,
    'veui-checkbox-group': CheckboxGroup,
    'veui-textarea': Textarea
  },
  data () {
    return {
      formData: {
        name: 'liyunteng1',
        name1: 'liyunteng2',
        age: null,
        desc: '',
        hobby: ['🏸'],
        phone: '18888888888',
        phoneType: 'mobile',
        start: null,
        end: null,
        term: null,
        floor: 3501
      },
      hobbyItems: [
        {
          value: '⚽️',
          label: '足球'
        },
        {
          value: '🏀',
          label: '篮球'
        },
        {
          value: '🏸',
          label: '羽毛球'
        },
        {
          value: '🎾',
          label: '网球'
        }
      ],
      phoneTypeOptions: [
        {
          label: '座机',
          value: 'phone'
        },
        {
          label: '手机',
          value: 'mobile'
        }
      ],
      requiredRule: [
        {
          name: 'required',
          value: true,
          triggers: 'blur,input'
        }
      ],
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
      termRequiredRule: [
        {
          name: 'required',
          value: true,
          message: '请勾选阅读协议',
          triggers: 'change'
        }
      ],
      dynamicNameRule: [
        {
          name: 'required',
          value: true,
          triggers: 'blur,input'
        },
        {
          name: 'minLength',
          value: 2
        }
      ],
      ageRule: [
        {
          name: 'required',
          value: true,
          triggers: 'input'
        },
        {
          name: 'numeric',
          value: true,
          triggers: 'input'
        },
        {
          name: 'maxLength',
          value: 3,
          triggers: 'change'
        }
      ],
      hobbyRule: [
        {
          name: 'minLength',
          value: 3,
          message: '至少选择三个爱好',
          triggers: 'change'
        }
      ],
      isValidating: false,
      validators: [
        {
          fields: ['start', 'end'],
          handler (start, end) {
            if (start == null || end == null) {
              return true
            }

            if (parseInt(start, 10) >= parseInt(end, 10)) {
              return {
                start: '下限必须小于上限'
              }
            }
            return true
          },
          triggers: ['change', 'submit,input']
        },
        {
          fields: ['phone'],
          validate (phone) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                let res
                if (phone === '18888888888') {
                  res = {
                    phone: '该手机已被注册'
                  }
                }
                return resolve(res)
              }, 3000)
            })
          },
          triggers: ['input']
        }
      ]
    }
  },
  methods: {
    beforeValidate () {
      this.isValidating = true
    },
    afterValidate () {
      this.isValidating = false
    },
    handleInvalid () {
      this.isValidating = false
    }
  }
}
</script>
