<template>
<nav class="one-toc">
  <veui-anchor
    ui="s"
    sticky
    target-offset="120px"
    sticky-offset="20px"
    :items="flattenItems"
  />
</nav>
</template>

<script>
import { Anchor } from 'veui'

export default {
  name: 'one-toc',
  components: {
    'veui-anchor': Anchor
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    flattenItems () {
      return this.items.flatMap(({ children }) => children || [])
    }
  }
}
</script>
