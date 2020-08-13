<template>
<article>
  <section>
    <h4>Normal size</h4>
    <veui-checkbox-group
      v-model="selected"
      :items="licenses"
    />
    <p>Checked: {{ readable }}</p>
  </section>
  <section>
    <h4>Small size</h4>
    <veui-checkbox-group
      v-model="selected"
      ui="s"
      :items="licenses"
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
      selected: null,
      licenses: [
        {
          label: 'MIT License',
          value: 'mit'
        },
        {
          label: 'BSD License',
          value: 'bsd'
        },
        {
          label: 'Apache License 2.0',
          value: 'apache2'
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

<style lang="less" scoped docs>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
