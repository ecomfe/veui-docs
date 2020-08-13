<template>
<article>
  <veui-search-box
    v-model="value"
    clearable
    :suggestions="suggestions"
    replace-on-select
    @select="handleSelect"
  />
  <veui-search-box
    ui="strong"
    v-model="value1"
    clearable
    :suggestions="suggestions1"
    replace-on-select
    @select="handleSelect"
  />
</article>
</template>

<script>
import { SearchBox } from 'veui'
import toast from 'veui/managers/toast'

export default {
  components: {
    'veui-search-box': SearchBox
  },
  data () {
    return {
      value: '',
      value1: '',
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
    suggestions () {
      if (!this.value) {
        return []
      }
      return this.browsers.filter(browser => {
        return browser.toLowerCase().indexOf(this.value.toLowerCase()) !== -1
      })
    },
    suggestions1 () {
      if (!this.value1) {
        return []
      }
      return this.browsers.filter(browser => {
        return browser.toLowerCase().indexOf(this.value1.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    handleSelect ({ value }) {
      toast.info(value)
    }
  }
}
</script>
<style lang="less">
.veui-search-box {
  margin-left: 1em;
}
</style>
