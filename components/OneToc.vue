<template>
<nav class="one-toc">
  <veui-anchor
    ui="s"
    sticky
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
    items: Array
  },
  computed: {
    flattenItems () {
      return this.items.flatMap(({ children }) => children || [])
    }
  }
}
</script>
