<template>
<article>
  <section>
    <veui-check-button-group
      v-model="selected"
      ui="simple"
      :items="sizes"
    />
    <p>Checked: {{ readable }}</p>
  </section>
</article>
</template>

<script>
import { CheckButtonGroup } from 'veui'

export default {
  components: {
    'veui-check-button-group': CheckButtonGroup
  },
  data () {
    return {
      selected: ['any'],
      sizes: [
        {
          label: 'Any',
          value: 'any'
        },
        {
          label: 'Small',
          value: 'sm'
        },
        {
          label: 'Medium',
          value: 'md'
        },
        {
          label: 'Large',
          value: 'lg'
        }
      ]
    }
  },
  computed: {
    readable () {
      return (this.selected || []).join(', ') || '-'
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
