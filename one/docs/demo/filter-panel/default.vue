<template>
<article>
  <veui-filter-panel
    title="Browsers"
    :datasource="browsersDatasource"
  >
    <template slot-scope="{ items }">
      <div
        v-for="item in items"
        v-show="!item.hidden"
        :key="item.value"
        class="item"
      >
        {{ item.label }}
      </div>
    </template>
  </veui-filter-panel>
</article>
</template>

<script>
import { FilterPanel } from 'veui'

export default {
  components: {
    'veui-filter-panel': FilterPanel
  },
  data () {
    return {
      browsers: [
        'Google Chrome',
        'Apple Safari',
        'Microsoft Edge',
        'Mozilla Firefox',
        'Opera',
        'Vivaldi',
        'Internet Explorer',
        'Maxthon',
        'Android Browser',
        'UC Browser',
        'Samsung Internet',
        'QQ Browser'
      ]
    }
  },
  computed: {
    browsersDatasource () {
      return this.browsers.map(label => {
        return {
          label,
          value: label.toLowerCase().replace(/\s+/g, '-')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  padding: 8px 15px;
}
</style>
