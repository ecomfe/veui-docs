<template>
<article>
  <section class="options">
    <veui-radio-button-group
      v-model="ui"
      ui="s"
      :items="uiValues"
    />

    <veui-radio-button-group
      v-model="display"
      ui="s"
      :items="displayValues"
    />
  </section>
  <section>
    <veui-message
      :display="display"
      :ui="ui"
      status="info"
    >
      请在一小时内容完成付款，否则订单将自动取消
    </veui-message>
  </section>
  <section>
    <veui-message
      :display="display"
      :ui="ui"
      status="success"
    >
      订单创建成功
    </veui-message>
  </section>
  <section>
    <veui-message
      :display="display"
      :ui="ui"
      status="error"
    >
      网络连接失败
    </veui-message>
  </section>
  <section>
    <veui-message
      :display="display"
      :ui="ui"
      status="warning"
    >
      余额较低，请及时续费
    </veui-message>
  </section>
  <section>
    <veui-message
      :display="display"
      :ui="ui"
      status="aux"
    >
      允许上传的文件类型为：JPG、PNG
    </veui-message>
  </section>
</article>
</template>
<script>
import { Message, RadioButtonGroup } from 'veui'

export default {
  name: 'message-demo',
  components: {
    'veui-message': Message,
    'veui-radio-button-group': RadioButtonGroup
  },
  data () {
    return {
      ui: 'm',
      uiValues: [
        { label: 's', value: 's' },
        { label: 'm', value: 'm' }
      ],
      statuses: ['success', 'error', 'info', 'warning', 'aux'],
      display: 'normal',
      displayValues: [
        { label: 'normal', value: 'normal' },
        { label: 'popup', value: 'popup' },
        { label: 'simple', value: 'simple' },
        { label: 'standalone', value: 'standalone' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
section + section {
  margin-top: 20px;
}

.options {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
