<template>
<article>
  <section>
    <veui-radio
      v-model="size"
      value="m"
      :ui="size"
      name="size"
    >
      Normal size
    </veui-radio>
    <veui-radio
      v-model="size"
      value="s"
      :ui="size"
      name="size"
    >
      Small size
    </veui-radio>
  </section>
</article>
</template>

<script>
import { Radio } from 'veui'

export default {
  components: {
    'veui-radio': Radio
  },
  data () {
    return {
      size: 'm'
    }
  }
}
</script>

<style lang="less" scoped>
.veui-radio {
  margin-right: 20px;
}

section {
  margin-bottom: 20px;
}
</style>
