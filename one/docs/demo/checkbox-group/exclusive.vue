<template>
<article>
  <section>
    <h4>Select size</h4>
    <veui-checkbox-group
      v-model="selected"
      :items="licenses"
      empty-value="any"
    />
    <p>Checked: {{ readable }}</p>
  </section>
</article>
</template>

<script>
import { CheckboxGroup } from 'veui'

export default {
  components: {
    'veui-checkbox-group': CheckboxGroup
  },
  data () {
    return {
      selected: ['any'],
      licenses: [
        {
          label: 'Any',
          value: 'any',
          exclusive: true
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
