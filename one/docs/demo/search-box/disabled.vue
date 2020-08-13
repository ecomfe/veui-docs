<template>
<article>
  <section>
    <veui-radio-group
      v-model="state"
      :items="states"
    />
  </section>
  <section>
    <veui-search-box
      :readonly="isReadonly"
      :disabled="isDisabled"
    />
    <veui-search-box
      :readonly="isReadonly"
      :disabled="isDisabled"
      ui="strong"
    />
  </section>
</article>
</template>

<script>
import { SearchBox, RadioGroup } from 'veui'

export default {
  components: {
    'veui-search-box': SearchBox,
    'veui-radio-group': RadioGroup
  },
  data () {
    return {
      state: null,
      states: [
        {
          label: 'Normal',
          value: null
        },
        {
          label: 'Read-only',
          value: 'readonly'
        },
        {
          label: 'Disabled',
          value: 'disabled'
        }
      ]
    }
  },
  computed: {
    isReadonly () {
      return this.state === 'readonly'
    },
    isDisabled () {
      return this.state === 'disabled'
    }
  }
}
</script>

<style lang="less" scoped docs>
section {
  margin-bottom: 1em;
}

.veui-search-box {
  margin-right: 1em;
}
</style>
