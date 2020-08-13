<template>
<article>
  <section>
    <h4>Current step</h4>
    <veui-number-input
      v-model="current"
      :min="1"
      :max="steps.length"
      :step="1"
    />
  </section>
  <section>
    <veui-steps
      :steps="steps"
      :current="current - 1"
    />
  </section>
</article>
</template>

<script>
import { Steps, NumberInput } from 'veui'

export default {
  components: {
    'veui-steps': Steps,
    'veui-number-input': NumberInput
  },
  data () {
    return {
      current: 2,
      steps: [
        { label: 'Step 1', desc: '填写信息' },
        { label: 'Step 2', desc: '验证身份', status: 'error' },
        { label: 'Step 3', desc: '注册成功' }
      ]
    }
  }
}
</script>

<style lang="less" scoped docs>
h4 {
  margin: 0 0 10px;
}

section {
  margin-bottom: 10px;
}

section + section {
  margin-top: 20px;
}
</style>
