<template>
<article>
  <section>
    <veui-checkbox v-model="loading">
      Loading
    </veui-checkbox>
  </section>
  <section>
    <veui-button
      :loading="loading"
      ui="primary"
    >
      Primary
    </veui-button>
    <veui-button :loading="loading">
      Normal
    </veui-button>
    <veui-button
      :loading="loading"
      ui="strong"
    >
      Strong
    </veui-button>
    <veui-button
      :loading="loading"
      ui="text"
    >
      Text
    </veui-button>
    <veui-button
      :loading="loading"
      ui="icon"
    >
      <veui-icon name="home"/>
    </veui-button>
  </section>
</article>
</template>

<script>
import { Button, Checkbox, Icon } from 'veui'
import 'veui-theme-dls-icons/home'

export default {
  components: {
    'veui-button': Button,
    'veui-checkbox': Checkbox,
    'veui-icon': Icon
  },
  data () {
    return {
      loading: true
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
