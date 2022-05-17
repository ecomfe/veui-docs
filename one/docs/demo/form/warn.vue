<template>
<article class="veui-form-demo">
  <veui-form
    ref="form"
    :data="storeData4"
    :validators="validators"
  >
    <veui-field
      label="收入下限"
      field="floor"
      name="floor"
      help-position="bottom"
      :rules="[
        { name: 'required', value: true, triggers: 'change'},
        { name: 'min', value: 3500, message: '最低收入不小于 3500',triggers: 'change' }
      ]"
    >
      <veui-number-input v-model="storeData4.floor"/>
      <template #help>
        <p>低于 4000 将会得到警告</p>
      </template>
    </veui-field>

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
    'veui-number-input': NumberInput,
    'veui-button': Button,
    'veui-form': Form,
    'veui-field': Field
  },
  data () {
    return {
      storeData4: {
        floor: null
      },
      validators: [
        {
          fields: ['floor'],
          validate (floor) {
            if (floor == null) {
              return true
            }
            return new Promise(function (resolve) {
              setTimeout(function () {
                let res
                if (floor <= 4000) {
                  res = {
                    floor: {
                      status: 'warning',
                      message: '请提高预期收入下限'
                    }
                  }
                }
                return resolve(res)
              }, 3000)
            })
          },
          triggers: ['change']
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import "~veui-theme-dls/lib.less";

.veui-form-demo {
  p {
    margin: 0;
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
