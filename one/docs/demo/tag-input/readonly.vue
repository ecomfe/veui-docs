<template>
<article>
  <section>
    <veui-checkbox v-model="readonly">
      Read-only
    </veui-checkbox>
  </section>
  <section>
    <section>
      <veui-tag-input
        v-model="valueL"
        ui="l"
        :readonly="readonly"
      />
    </section>
    <section>
      <veui-tag-input
        v-model="valueM"
        :readonly="readonly"
      />
    </section>
    <section>
      <veui-tag-input
        v-model="valueS"
        ui="s"
        :readonly="readonly"
      />
    </section>
    <section>
      <veui-tag-input
        v-model="valueXs"
        ui="xs"
        :readonly="readonly"
      />
    </section>
  </section>
</article>
</template>

<script>
import { TagInput, Checkbox } from 'veui'

export default {
  components: {
    'veui-tag-input': TagInput,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      valueS: ['Small'],
      valueL: ['Large'],
      valueM: ['Normal'],
      valueXs: ['Extra small'],
      readonly: true
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}
</style>
