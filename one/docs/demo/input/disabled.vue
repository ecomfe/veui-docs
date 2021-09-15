<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      Disabled
    </veui-checkbox>
  </section>
  <section>
    <section>
      <veui-input
        :disabled="disabled"
        ui="l"
        value="Large"
      />
    </section>
    <section>
      <veui-input
        :disabled="disabled"
        value="Normal"
      />
    </section>
    <section>
      <veui-input
        :disabled="disabled"
        ui="s"
        value="Small"
      />
    </section>
    <section>
      <veui-input
        :disabled="disabled"
        ui="xs"
        value="Extra small"
      />
    </section>
  </section>
</article>
</template>

<script>
import { Input, Checkbox } from 'veui'

export default {
  components: {
    'veui-input': Input,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      disabled: true
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}
</style>
