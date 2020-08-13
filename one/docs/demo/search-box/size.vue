<template>
<article>
  <div class="container">
    <veui-search-box ui="strong xs"/>
  </div>
  <div class="container">
    <veui-search-box ui="strong s"/>
  </div>
  <div class="container">
    <veui-search-box ui="strong"/>
  </div>
  <div class="container">
    <veui-search-box ui="strong l"/>
  </div>
  <div class="container">
    <veui-search-box ui="xs"/>
    <veui-search-box ui="s"/>
  </div>
  <div class="container">
    <veui-search-box/>
    <veui-search-box ui="l"/>
  </div>
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

<style lang="less" scoped docs>
.container {
  margin-bottom: 1em;
  .veui-search-box {
    margin-right: 1em;
  }
}
</style>
