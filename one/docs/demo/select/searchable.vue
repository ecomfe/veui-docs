<template>
<article>
  <veui-select
    v-model="license"
    :options="options"
    searchable
  />
</article>
</template>

<script>
import { Select } from 'veui'

export default {
  components: {
    'veui-select': Select
  },
  data () {
    return {
      license: null,
      options: [
        {
          label: 'MIT',
          value: 'mit'
        },
        {
          label: 'BSD',
          value: 'bsd'
        },
        {
          label: 'Apache 2.0',
          value: 'apache2'
        }
      ]
    }
  }
}
</script>
