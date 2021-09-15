<template>
<article>
  <veui-button ui="xl">
    xl
  </veui-button>
  <veui-button ui="l">
    l
  </veui-button>
  <veui-button ui="m">
    m
  </veui-button>
  <veui-button ui="s">
    s
  </veui-button>
  <veui-button ui="xs">
    xs
  </veui-button>
</article>
</template>

<script>
import { Button } from 'veui'

export default {
  components: {
    'veui-button': Button
  }
}
</script>

<style lang="less" scoped>
.veui-button {
  margin-right: 1em;
}
</style>
