<template>
<article class="autocomplete-normal-demo">
  <section>
    <h3>大小写敏感搜索叶子节点</h3>
    <veui-autocomplete
      :datasource="suggestions"
      placeholder="请输入"
      suggest-trigger="focus"
      :match="match"
      :filter="filter"
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
          label: 'Milk coffee',
          value: 'milk-coffee',
          options: [
            {
              value: 'Moka'
            }
          ]
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
  },
  methods: {
    match ({ label }, keyword) {
      const index = label.indexOf(keyword)
      return index >= 0
        ? [[index, index + keyword.length]]
        : false
    },
    filter ({ options }, _, { offsets }) {
      // 不要父节点，只要叶子节点
      return options && options.length
        ? false
        : offsets === true || (!!offsets && !!offsets.length)
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
