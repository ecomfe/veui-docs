<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      Disabled
    </veui-checkbox>
  </section>
  <section>
    <p>
      <veui-input
        :disabled="disabled"
        ui="l"
        value="Large"
      />
    </p>
    <p>
      <veui-input
        :disabled="disabled"
        value="Normal"
      />
    </p>
    <p>
      <veui-input
        :disabled="disabled"
        ui="s"
        value="Small"
      />
    </p>
    <p>
      <veui-input
        :disabled="disabled"
        ui="xs"
        value="Extra small"
      />
    </p>
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

<style lang="less" scoped docs>
section,
p {
  margin-bottom: 1em;
}
</style>
