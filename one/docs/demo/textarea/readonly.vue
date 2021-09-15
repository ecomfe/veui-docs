<template>
<article>
  <section>
    <veui-checkbox v-model="readonly">
      Read-only
    </veui-checkbox>
  </section>
  <section>
    <div>
      <veui-textarea
        rows="2"
        :readonly="readonly"
        value="Normal"
      />
    </div>
    <div>
      <veui-textarea
        rows="2"
        :readonly="readonly"
        ui="s"
        value="Small"
      />
    </div>
  </section>
</article>
</template>

<script>
import { Textarea, Checkbox } from 'veui'

export default {
  components: {
    'veui-textarea': Textarea,
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
