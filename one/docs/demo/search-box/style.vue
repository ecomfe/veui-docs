<template>
<article>
  <veui-search-box class="search-box"/>
  <veui-search-box
    class="search-box"
    ui="strong"
  />
</article>
</template>

<script>
import { SearchBox } from 'veui'

export default {
  components: {
    'veui-search-box': SearchBox
  }
}
</script>

<style lang="less" scoped>
.search-box {
  margin-right: 1em;
}
</style>
