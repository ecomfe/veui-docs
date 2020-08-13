<template>
<article>
  <p>
    <veui-input
      ui="l"
      value="Large"
    />
  </p>
  <p><veui-input value="Normal"/></p>
  <p>
    <veui-input
      ui="s"
      value="Small"
    />
  </p>
  <p>
    <veui-input
      ui="xs"
      value="Extra small"
    />
  </p>
</article>
</template>

<script>
import { Input } from 'veui'

export default {
  components: {
    'veui-input': Input
  }
}
</script>

<style lang="less" scoped docs>
p {
  margin-bottom: 1em;
}
</style>
