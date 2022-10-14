<template>
<article>
  <section class="settings">
    <veui-label>
      Current step    <veui-number-input
        v-model="current"
        ui="s"
        :min="1"
        :max="steps.length"
        :step="1"
      />
    </veui-label>
    <veui-radio-button-group
      v-model="style"
      ui="s"
      :items="styles"
    />
    <veui-radio-button-group
      v-model="size"
      ui="s"
      :items="sizes"
    />
    <veui-radio-button-group
      v-model="direction"
      ui="s"
      :items="directions"
    />
    <veui-checkbox
      v-model="stateless"
      ui="s"
    >
      Stateless
    </veui-checkbox>
  </section>
  <section>
    <veui-steps
      :ui="ui"
      :steps="steps"
      :current="current - 1"
      :stateless="stateless"
    />
  </section>
</article>
</template>

<script>
import { Steps, Label, NumberInput, RadioButtonGroup, Checkbox } from 'veui'

export default {
  components: {
    'veui-steps': Steps,
    'veui-label': Label,
    'veui-number-input': NumberInput,
    'veui-radio-button-group': RadioButtonGroup,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      current: 1,
      size: 'm',
      direction: '',
      style: 'normal',
      sizes: [
        {
          label: 's',
          value: 's'
        },
        {
          label: 'm',
          value: 'm'
        }
      ],
      stateless: false,
      directions: [
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
      styles: [
        {
          label: 'normal',
          value: 'normal'
        },
        {
          label: 'dot',
          value: 'dot'
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
        this.style,
        this.size,
        this.style === 'dot' && this.direction === ''
          ? 'label-vertical'
          : this.direction
      ].join(' ')
    }
  }
}
</script>

<style lang="less" scoped>
.settings {
  display: flex;
  margin-bottom: 32px;
  gap: 16px;
  align-items: center;
}
</style>

<docs>
:::tip
`dot` 样式需要搭配 `label-vertical` 或 `vertical` 布局使用。
:::
</docs>
