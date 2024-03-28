<template>
<article class="autocomplete-normal-demo">
  <section>
    <veui-checkbox v-model="strict.maxlength">
      Strict maxlength
    </veui-checkbox>
    <veui-checkbox v-model="strict.select">
      Strict select
    </veui-checkbox>
  </section>
  <section>
    <veui-autocomplete
      :datasource="suggestions"
      :maxlength="6"
      :strict="strict"
    />
  </section>
</article>
</template>

<script>
import { Autocomplete, Checkbox } from 'veui'

export default {
  components: {
    'veui-autocomplete': Autocomplete,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      strict: {
        maxlength: false,
        select: true
      },
      suggestions: [
        {
          value: 'Moka'
        },
        {
          value: 'Turkish'
        },
        {
          value: 'Latte'
        },
        {
          value: 'Cappuccino'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
section {
  display: flex;
  align-items: center;
  gap: 12px;

  & + & {
    margin-top: 20px;
  }
}
</style>
