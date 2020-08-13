<template>
<article>
  <section>
    <veui-checkbox
      v-model="ui"
      true-value="reverse"
      :false-value="null"
      ui="s"
    >
      Reverse style
    </veui-checkbox>
  </section>
  <section>
    <span ref="text">Move your mouse pointer over here.</span>
    <veui-tooltip
      target="text"
      :ui="ui"
    >
      This is a tooltip.
    </veui-tooltip>
  </section>
</article>
</template>

<script>
import { Tooltip, Checkbox } from 'veui'

export default {
  components: {
    'veui-tooltip': Tooltip,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      ui: null
    }
  }
}
</script>

<style lang="less" scoped docs>
section + section {
  margin-top: 20px;
}
</style>
