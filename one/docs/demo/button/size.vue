<template>
<article>
  <veui-button
    class="button"
    ui="xl"
  >
    xl
  </veui-button>
  <veui-button
    class="button"
    ui="l"
  >
    l
  </veui-button>
  <veui-button
    class="button"
    ui="m"
  >
    m
  </veui-button>
  <veui-button
    class="button"
    ui="s"
  >
    s
  </veui-button>
  <veui-button
    class="button"
    ui="xs"
  >
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
.button {
  margin-right: 1em;
}
</style>
