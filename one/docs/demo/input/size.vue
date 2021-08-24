<template>
<article>
  <section>
    <veui-input
      ui="l"
      value="Large"
    />
  </section>
  <section><veui-input value="Normal"/></section>
  <section>
    <veui-input
      ui="s"
      value="Small"
    />
  </section>
  <section>
    <veui-input
      ui="xs"
      value="Extra small"
    />
  </section>
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
section {
  margin-bottom: 1em;
}
</style>
