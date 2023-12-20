<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      Disabled
    </veui-checkbox>
  </section>
  <section>
    <veui-button
      class="button"
      ui="primary"
      :disabled="disabled"
    >
      Primary
    </veui-button>
    <veui-button
      class="button"
      :disabled="disabled"
    >
      Normal
    </veui-button>
    <veui-button
      class="button"
      ui="basic"
      :disabled="disabled"
    >
      Basic
    </veui-button>
    <veui-button
      class="button"
      ui="strong"
      :disabled="disabled"
    >
      Strong
    </veui-button>
    <veui-button
      class="button"
      ui="translucent"
      :disabled="disabled"
    >
      Translucent
    </veui-button>
  </section>
  <section>
    <veui-button
      class="button"
      ui="text"
      :disabled="disabled"
    >
      Text
    </veui-button>
    <veui-button
      class="button"
      ui="icon"
      :disabled="disabled"
    >
      <veui-icon name="home"/>
    </veui-button>
    <veui-button
      class="button"
      ui="icon strong"
      :disabled="disabled"
    >
      <veui-icon name="home"/>
    </veui-button>
    <veui-button
      class="button"
      ui="icon aux"
      :disabled="disabled"
    >
      <veui-icon name="home"/>
    </veui-button>
    <veui-button
      class="button"
      ui="primary square"
      :disabled="disabled"
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
      disabled: true
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}

.button {
  margin-right: 1em;
}
</style>
