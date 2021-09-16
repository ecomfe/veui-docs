<template>
<article>
  <section>
    <h4>精确2位小数,递增0.01</h4>
    <veui-number-input
      :decimal-place="2"
      :step="0.01"
    />
  </section>
  <section>
    <h4>精确2位小数,递增0.1</h4>
    <veui-number-input
      :decimal-place="2"
      :step="0.1"
    />
  </section>
</article>
</template>

<script>
import { NumberInput } from 'veui'

export default {
  components: {
    'veui-number-input': NumberInput
  }
}
</script>
