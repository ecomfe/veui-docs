<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      Disabled
    </veui-checkbox>
  </section>
  <section>
    <veui-button
      :disabled="disabled"
      ui="primary"
    >
      Primary
    </veui-button>
    <veui-button :disabled="disabled">
      Normal
    </veui-button>
    <veui-button
      :disabled="disabled"
      ui="alt"
    >
      Alternate
    </veui-button>
    <veui-button
      :disabled="disabled"
      ui="link"
    >
      Link
    </veui-button>
  </section>
</article>
</template>

<script>
import { Button, Checkbox } from 'veui'

export default {
  components: {
    'veui-button': Button,
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
section {
  margin-bottom: 1em;
}

.veui-button {
  margin-right: 1em;
}
</style>
