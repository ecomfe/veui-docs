<template>
<article>
  <veui-button
    style="margin-right: 8px;"
    @click="toggle"
  >切换</veui-button>
  <veui-config-provider :value="value">
    <veui-select
      :options="options"
      clearable
    />
  </veui-config-provider>
</article>
</template>

<script>
import { Select, ConfigProvider, Button } from 'veui'

const PLACEHOLDER1 = '请选择协议1'
const PLACEHOLDER2 = '请选择协议2'

// Select 的 placeholder 会响应配置 `select.placeholder`

export default {
  components: {
    'veui-config-provider': ConfigProvider,
    'veui-select': Select,
    'veui-button': Button
  },
  data () {
    return {
      value: {
        'select.placeholder': PLACEHOLDER1
      },
      options: [
        {
          label: 'MIT',
          value: 'mit'
        },
        {
          label: 'BSD',
          value: 'bsd'
        }
      ]
    }
  },
  methods: {
    toggle () {
      let prev = this.value['select.placeholder']
      this.value['select.placeholder'] = prev === PLACEHOLDER1
        ? PLACEHOLDER2
        : PLACEHOLDER1
    }
  }
}
</script>
