<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      禁用
    </veui-checkbox>
  </section>
  <section>
    <p>
      <veui-number-input
        v-model="value"
        :disabled="disabled"
      />
    </p>
    <p>
      <veui-number-input
        v-model="value"
        :disabled="disabled"
        ui="s"
      />
    </p>
    <p>
      <veui-number-input
        v-model="value"
        :disabled="disabled"
        ui="xs"
      />
    </p>
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
section,
p {
  margin-bottom: 1em;
}
</style>
