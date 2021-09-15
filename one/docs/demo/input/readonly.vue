<template>
<article>
  <section>
    <veui-checkbox v-model="readonly">
      Read-only
    </veui-checkbox>
  </section>
  <section>
    <section>
      <veui-input
        :readonly="readonly"
        ui="l"
        value="Large"
      />
    </section>
    <section>
      <veui-input
        :readonly="readonly"
        value="Normal"
      />
    </section>
    <section>
      <veui-input
        :readonly="readonly"
        ui="s"
        value="Small"
      />
    </section>
    <section>
      <veui-input
        :readonly="readonly"
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
      readonly: true
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}
</style>
