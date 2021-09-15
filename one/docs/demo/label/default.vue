<template>
<article>
  <section>
    <h4>Inline with Select</h4>
    <veui-label>
      Click me:
      <veui-select
        :options="protocols"
        style="width: 100px"
      />
    </veui-label>
  </section>
  <section>
    <h4><code>for</code> + <code>ref</code> with Input</h4>
    <veui-label for="origin">
      Click me:
    </veui-label>
    <veui-input
      ref="origin"
      style="width: 200px"
    />
  </section>
</article>
</template>

<script>
import { Label, Select, Input } from 'veui'

export default {
  name: 'text-input',
  components: {
    'veui-label': Label,
    'veui-select': Select,
    'veui-input': Input
  },
  data () {
    return {
      protocols: [
        { label: 'https://', value: 'https' },
        { label: 'http://', value: 'http' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
