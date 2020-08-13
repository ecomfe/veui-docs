<template>
<article>
  <section>
    <veui-checkbox v-model="readonly">
      Read-only
    </veui-checkbox>
  </section>
  <section>
    <p>
      <veui-input
        :readonly="readonly"
        ui="l"
        value="Large"
      />
    </p>
    <p>
      <veui-input
        :readonly="readonly"
        value="Normal"
      />
    </p>
    <p>
      <veui-input
        :readonly="readonly"
        ui="s"
        value="Small"
      />
    </p>
    <p>
      <veui-input
        :readonly="readonly"
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
      readonly: true
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
