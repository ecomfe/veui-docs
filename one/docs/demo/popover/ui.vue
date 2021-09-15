<template>
<article>
  <section>
    <veui-select
      v-model="ui"
      :options="options"
    />
    <veui-button @click="reset">
      reset
    </veui-button>
  </section>
  <section>
    <span ref="text">Move your mouse pointer over here.</span>
    <veui-popover
      :ui="ui"
      target="text"
    >
      This is a popover.
    </veui-popover>
  </section>
</article>
</template>

<script>
import { Popover, Select, Button } from 'veui'

export default {
  components: {
    'veui-select': Select,
    'veui-button': Button,
    'veui-popover': Popover
  },
  data () {
    return {
      ui: null,
      options: [
        {
          label: 's',
          value: 's'
        },
        {
          label: 'm',
          value: 'm'
        }
      ]
    }
  },
  methods: {
    reset () {
      this.ui = null
    }
  }
}
</script>

<style lang="less" scoped>
section + section {
  margin-top: 20px;
}
.veui-select {
  max-width: 120px;
  margin-right: 10px;
}
</style>
