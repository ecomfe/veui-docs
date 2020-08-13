<template>
<article>
  <section>
    <veui-switch
      v-model="disabled"
      ui="xs"
    >
      Disabled
    </veui-switch>
  </section>
  <section>
    <veui-switch
      v-model="on"
      :disabled="disabled"
    >
      Medium size
    </veui-switch>
    <veui-switch
      v-model="on"
      :disabled="disabled"
      ui="s"
    >
      Small size
    </veui-switch>
    <veui-switch
      v-model="on"
      :disabled="disabled"
      ui="xs"
    >
      Extra small size
    </veui-switch>
  </section>
</article>
</template>

<script>
import { Switch } from 'veui'

export default {
  components: {
    'veui-switch': Switch
  },
  data () {
    return {
      on: false,
      disabled: false
    }
  }
}
</script>

<style lang="less" scoped docs>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}

.veui-switch {
  margin-right: 30px;
}
</style>
