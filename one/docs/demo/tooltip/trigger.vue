<template>
<article>
  <section>
    <code>trigger="{{ trigger }}"</code>
  </section>
  <section>
    Open trigger: <veui-select
      v-model="open"
      :options="triggers"
    />
  </section>
  <section>
    Close trigger: <veui-select
      v-model="close"
      :options="triggers"
    />
  </section>
  <section>
    <span
      ref="text"
      tabindex="0"
    >Trigger <b><code>{{ open }}</code></b> over here.</span>
    <veui-tooltip
      target="text"
      :trigger="trigger"
    >
      This is a tooltip.
    </veui-tooltip>
  </section>
</article>
</template>

<script>
import { Tooltip, Select } from 'veui'

export default {
  components: {
    'veui-tooltip': Tooltip,
    'veui-select': Select
  },
  data () {
    return {
      open: 'hover',
      close: 'hover',
      triggers: [
        { label: 'hover', value: 'hover' },
        { label: 'click', value: 'click' },
        { label: 'mousedown', value: 'mousedown' },
        { label: 'mouseup', value: 'mouseup' },
        { label: 'focus', value: 'focus' }
      ]
    }
  },
  computed: {
    trigger () {
      if (this.open === this.close) {
        return this.open
      }
      return `${this.open}-${this.close}`
    }
  }
}
</script>

<style lang="less" scoped>
section + section {
  margin-top: 20px;
}

span {
  outline: none;

  &.focus-visible {
    outline: 2px solid #ccc;
    outline-offset: 3px;
  }
}
</style>
