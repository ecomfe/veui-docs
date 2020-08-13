<template>
<article>
  <veui-button-group :items="group"/>
</article>
</template>

<script>
import { ButtonGroup } from 'veui'

export default {
  components: {
    'veui-button-group': ButtonGroup
  },
  data () {
    return {
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

<style lang="less" scoped docs>
.veui-button-group {
  margin-right: 1em;
}
</style>

<docs>
当每个数据项的 `value` 字段是字符串时，点击按钮将在 `ButtonGroup` 组件上触发 `value` 同名的事件。
</docs>

<docs locale="en-US">
When given a string `value` property on an item, clicking the corresponding button will emit an event with the same name on `ButtonGroup`.
</docs>
