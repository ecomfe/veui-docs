<template>
<article>
  <veui-badge
    :value="count"
    :max="100"
  >
    <veui-button
      ui="primary"
      @click="inc"
    >
      Add
    </veui-button>
  </veui-badge>
  <veui-button
    ui="s"
    @click="reset"
  >
    Reset
  </veui-button>
</article>
</template>

<script>
import { Badge, Button } from 'veui'

const initial = 96

export default {
  components: {
    'veui-badge': Badge,
    'veui-button': Button
  },
  data () {
    return {
      count: initial
    }
  },
  methods: {
    inc () {
      this.count++
    },
    reset () {
      this.count = initial
    }
  }
}
</script>

<style lang="less" scoped>
.veui-badge {
  margin-right: 2em;
}
</style>

<docs>
可以使用 [`max`](#props-max) 属性，指定可现实数字的最大值，超过则显示为“<var>max</var>+”。
</docs>

<docs locale="en-US">
Use the [`max`](#props-max) prop to specify the max value can be displayed. Displays “<var>max</var>+” when value is larger than `max`.
</docs>
