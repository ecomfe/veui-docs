<template>
<article>
  <section>
    <veui-button @click="open = !open">
      Toggle
    </veui-button>
  </section>

  <section>
    <veui-embedded
      :open.sync="open"
      title="Notification"
    >
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolorum eius vero expedita ut voluptates possimus recusandae id incidunt obcaecati asperiores eum, laborum dolore facilis aperiam quidem. Maiores, non eum.</p>
    </veui-embedded>
  </section>

  <section>
    <veui-embedded
      ui="s"
      :open.sync="open"
      title="Notification"
    >
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolorum eius vero expedita ut voluptates possimus recusandae id incidunt obcaecati asperiores eum, laborum dolore facilis aperiam quidem. Maiores, non eum.</p>
    </veui-embedded>
  </section>
</article>
</template>

<script>
import { Embedded, Button } from 'veui'

export default {
  components: {
    'veui-embedded': Embedded,
    'veui-button': Button
  },
  data () {
    return {
      open: true
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>
