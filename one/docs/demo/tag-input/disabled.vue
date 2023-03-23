<template>
<article>
  <section>
    <veui-checkbox v-model="disabled">
      Disabled
    </veui-checkbox>
  </section>
  <section>
    <section>
      <veui-tag-input
        v-model="valueL"
        ui="l"
        :disabled="disabled"
      />
    </section>
    <section>
      <veui-tag-input
        v-model="valueM"
        :disabled="disabled"
      />
    </section>
    <section>
      <veui-tag-input
        v-model="valueS"
        ui="s"
        :disabled="disabled"
      />
    </section>
    <section>
      <veui-tag-input
        v-model="valueXs"
        ui="xs"
        :disabled="disabled"
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
      disabled: true
    }
  }
}
</script>

  <style lang="less" scoped>
  section {
    margin-bottom: 1em;
  }
  </style>
