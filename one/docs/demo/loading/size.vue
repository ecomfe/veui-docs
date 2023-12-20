<template>
<article>
  <div class="container">
    <veui-loading
      class="loading"
      loading
      ui="s"
    >
      s
    </veui-loading>
    <veui-loading
      class="loading"
      loading
      ui="m"
    >
      m
    </veui-loading>
    <veui-loading
      class="loading"
      loading
      ui="l"
    >
      l
    </veui-loading>
  </div>
  <div class="container">
    <veui-loading
      class="loading"
      loading
      ui="strong s"
    >
      s
    </veui-loading>
    <veui-loading
      class="loading"
      loading
      ui="strong m"
    >
      m
    </veui-loading>
    <veui-loading
      class="loading"
      loading
      ui="strong l"
    >
      l
    </veui-loading>
  </div>
  <div class="container">
    <veui-loading
      class="loading reverse"
      loading
      ui="reverse s"
    >
      s
    </veui-loading>
    <veui-loading
      class="loading reverse"
      loading
      ui="reverse m"
    >
      m
    </veui-loading>
    <veui-loading
      class="loading reverse"
      loading
      ui="reverse l"
    >
      l
    </veui-loading>
  </div>
</article>
</template>

<script>
import { Loading } from 'veui'

export default {
  components: {
    'veui-loading': Loading
  }
}
</script>

<style lang="less" scoped>
.reverse {
  background: #ccc;
  padding: 8px;
}

.loading {
  margin-left: 1em;
}

.container {
  margin-bottom: 2em;
}
</style>
