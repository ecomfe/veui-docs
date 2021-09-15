<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      Disabled
    </veui-checkbox>
  </section>
  <section>
    <div>
      <veui-textarea
        :disabled="disabled"
        value="Normal"
      />
    </div>
    <div>
      <veui-textarea
        :disabled="disabled"
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
