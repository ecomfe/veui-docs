<template>
<article class="autocomplete-normal-demo">
  <section>
    <veui-autocomplete
      :datasource="suggestions"
      placeholder="请输入"
      suggest-trigger="focus"
      strict
    />
  </section>
</article>
</template>

<script>
import { Autocomplete } from 'veui'

export default {
  components: {
    'veui-autocomplete': Autocomplete
  },
  data () {
    return {
      suggestions: [
        {
          value: 'Moka'
        },
        {
          value: 'Turkish'
        },
        {
          value: 'latte'
        },
        {
          value: 'cappuccino'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.autocomplete-normal-demo {
  display: flex;

  section + section {
    margin-left: 60px;
  }
}
</style>
