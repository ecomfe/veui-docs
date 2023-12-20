<template>
<article>
  <section>
    <veui-checkbox v-model="loading">
      Loading
    </veui-checkbox>
  </section>
  <section>
    <veui-button
      class="button"
      ui="primary"
      :loading="loading"
    >
      Primary
    </veui-button>
    <veui-button
      class="button"
      :loading="loading"
    >
      Normal
    </veui-button>
    <veui-button
      class="button"
      ui="basic"
      :loading="loading"
    >
      Basic
    </veui-button>
    <veui-button
      class="button"
      ui="strong"
      :loading="loading"
    >
      Strong
    </veui-button>
    <veui-button
      class="button"
      ui="translucent"
      :loading="loading"
    >
      Translucent
    </veui-button>
  </section>
  <section>
    <veui-button
      class="button"
      ui="text"
      :loading="loading"
    >
      Text
    </veui-button>
    <veui-button
      class="button"
      ui="icon"
      :loading="loading"
    >
      <veui-icon name="home"/>
    </veui-button>
    <veui-button
      class="button"
      ui="icon strong"
      :loading="loading"
    >
      <veui-icon name="home"/>
    </veui-button>
    <veui-button
      class="button"
      ui="icon aux"
      :loading="loading"
    >
      <veui-icon name="home"/>
    </veui-button>
    <veui-button
      class="button"
      ui="primary square"
      :loading="loading"
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

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}

.button {
  margin-right: 1em;
}
</style>
