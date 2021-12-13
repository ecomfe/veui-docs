<template>
<article>
  <section>
    <veui-checkbox v-model="readonly">
      只读
    </veui-checkbox>
  </section>
  <section>
    <veui-number-input
      v-model="value"
      :readonly="readonly"
    />
  </section>
  <section>
    <veui-number-input
      v-model="value"
      :readonly="readonly"
      ui="s"
    />
  </section>
  <section>
    <veui-number-input
      v-model="value"
      :readonly="readonly"
      ui="xs"
    />
  </section>
</article>
</template>

<script>
import { NumberInput, Checkbox } from 'veui'

export default {
  components: {
    'veui-number-input': NumberInput,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      readonly: true,
      value: 0
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}
</style>
