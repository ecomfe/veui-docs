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
    <h4>Size</h4>
    <veui-radio
      v-for="({ value, label }) in sizeList"
      :key="value"
      v-model="size"
      :value="value"
    >
      {{ label }}
    </veui-radio>
  </section>
  <section>
    <h4>Direction</h4>
    <veui-radio
      v-for="({ value, label }) in directionList"
      :key="value"
      v-model="direction"
      :value="value"
    >
      {{ label }}
    </veui-radio>
  </section>
  <section>
    <veui-steps
      :ui="ui"
      :steps="steps"
      :current="current - 1"
    />
  </section>
</article>
</template>

<script>
import { Steps, NumberInput, Radio } from 'veui'

export default {
  components: {
    'veui-steps': Steps,
    'veui-number-input': NumberInput,
    'veui-radio': Radio
  },
  data () {
    return {
      current: 1,
      size: 'm',
      direction: '',
      vertical: false,
      sizeList: [
        {
          label: 's',
          value: 's'
        },
        {
          label: 'm',
          value: 'm'
        }
      ],
      directionList: [
        {
          label: 'vertical',
          value: 'vertical'
        },
        {
          label: 'label-vertical',
          value: 'label-vertical'
        },
        {
          label: 'default',
          value: ''
        }
      ],
      steps: [
        { label: 'Step 1', desc: '填写信息' },
        { label: 'Step 2', desc: '验证身份' },
        { label: 'Step 3', desc: '注册成功' }
      ]
    }
  },
  computed: {
    ui () {
      return [
        this.size,
        this.direction
      ].join(' ')
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  margin: 0 0 10px;
}

section {
  margin-bottom: 10px;
}

section + section {
  margin-top: 20px;
}

.veui-radio {
  margin-right: 20px;
}
</style>
