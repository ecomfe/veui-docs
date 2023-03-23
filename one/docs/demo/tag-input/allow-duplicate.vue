<template>
<article>
  <section>
    <veui-checkbox v-model="allowDuplicate">
      Allow duplicate
    </veui-checkbox>
  </section>
  <section>
    <veui-tag-input
      v-model="value"
      :allow-duplicate="allowDuplicate"
    />
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
      allowDuplicate: true,
      value: ['Steve', 'Steve']
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}
</style>
