<template>
<article>
  <section>
    <veui-tag-input
      v-model="valueL"
      ui="l"
    />
  </section>
  <section>
    <veui-tag-input v-model="valueM"/>
  </section>
  <section>
    <veui-tag-input
      v-model="valueS"
      ui="s"
    />
  </section>
  <section>
    <veui-tag-input
      v-model="valueXs"
      ui="xs"
    />
  </section>
</article>
</template>

<script>
import { TagInput } from 'veui'

export default {
  components: {
    'veui-tag-input': TagInput
  },
  data () {
    return {
      valueS: ['Small'],
      valueL: ['Large'],
      valueM: ['Normal'],
      valueXs: ['Extra small']
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}
</style>
