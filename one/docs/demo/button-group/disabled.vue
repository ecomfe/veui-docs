<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      Disabled
    </veui-checkbox>
  </section>
  <section>
    <veui-button-group
      ui="primary"
      :disabled="disabled"
    >
      <veui-button :disabled="disabled">
        Undo
      </veui-button>
      <veui-button :disabled="disabled">
        Redo
      </veui-button>
    </veui-button-group>
  </section>
  <section>
    <veui-button-group
      :items="group"
      :disabled="disabled"
    />
  </section>
  <section>
    <veui-button-group
      ui="strong"
      :items="group"
      :disabled="disabled"
    />
  </section>
</article>
</template>

<script>
import { Button, ButtonGroup, Checkbox } from 'veui'

export default {
  components: {
    'veui-button': Button,
    'veui-button-group': ButtonGroup,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      disabled: true,
      group: [
        {
          label: 'Undo',
          value: 'undo'
        },
        {
          label: 'Redo',
          value: 'redo'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}
</style>

<docs>
`ButtonGroup` 的 [`disabled`](#props-disabled) 属性仅在使用 `items` 指定内容时生效，如果使用内联的 `Button` 组件，则需要为每个按钮分别指定 [`disabled`](./button#props-disabled) 属性。
</docs>

<docs locale="en-US">
The [`disabled`](#props-disabled) prop of `ButtonGroup` only takes effect when the content is specified using `items`, and if inline `Button` components are used, you need to specify the [`disabled`](./button#props-disabled) prop for each button.
</docs>
