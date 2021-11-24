<template>
<article>
  <section>
    <div
      v-tooltip.overflow="loremIpsum"
      class="item"
    >
      {{ loremIpsum }}
    </div>
    <div
      v-tooltip.overflow="loremIpsum"
      class="item"
    >
      Lorem upsum.
    </div>
  </section>
</article>
</template>

<script>
import { tooltip } from 'veui'

const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur ad hic aspernatur maiores adipisci velit nostrum nobis, cum earum, incidunt repellendus ex! Fuga, fugit! Placeat quam ex minima laudantium.'

export default {
  directives: {
    tooltip
  },
  data () {
    return {
      loremIpsum
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  display: inline-block;
  margin-right: 12px;
  width: 200px;
  border: 1px solid #ccc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
