<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      禁用
    </veui-checkbox>
  </section>
  <section>
    <veui-number-input
      v-model="value"
      :disabled="disabled"
    />
  </section>
  <section>
    <veui-number-input
      v-model="value"
      :disabled="disabled"
      ui="s"
    />
  </section>
  <section>
    <veui-number-input
      v-model="value"
      :disabled="disabled"
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
      disabled: true,
      value: 0
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>
