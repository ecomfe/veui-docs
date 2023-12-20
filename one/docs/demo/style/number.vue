<template>
<article>
  <section>
    <strong :class="{ tabular }">
      {{ value }}
    </strong>
    <veui-checkbox v-model="tabular">
      Tabular numbers
    </veui-checkbox>
  </section>
  <veui-slider
    v-model="value"
    class="slider"
    :step="1"
    :min="19000101"
    :max="21001231"
  />
</article>
</template>

<script>
import { Checkbox, Slider } from 'veui'

export default {
  components: {
    'veui-checkbox': Checkbox,
    'veui-slider': Slider
  },
  data () {
    return {
      tabular: true,
      value: 20170320
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  gap: 24px;
}

strong {
  font-family: "Baidu Number", sans-serif;
  font-size: 32px;
}

.tabular {
  font-variant-numeric: tabular-nums;
}

.slider {
  width: 50%;
  margin-top: 24px;
}
</style>
