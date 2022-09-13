<template>
<article>
  <section>
    <veui-checkbox v-model="fluid">
      Fluid layout (bar)
    </veui-checkbox>
  </section>
  <section class="bar">
    <veui-progress
      :ui="`m ${fluid ? 'fluid' : ''}`"
      :value="71.1"
      :min="0"
      :max="100"
      desc
    />
    <veui-progress
      :ui="`s ${fluid ? 'fluid' : ''}`"
      status="success"
      :value="71.1"
      :min="0"
      :max="100"
      desc
    />
    <veui-progress
      :ui="`xs ${fluid ? 'fluid' : ''}`"
      status="error"
      :value="71.1"
      :min="0"
      :max="100"
      desc
    />
  </section>
  <section class="circular">
    <veui-progress
      type="circular"
      ui="m"
      :value="71.1"
      :min="0"
      :max="100"
      desc
    />
    <veui-progress
      type="circular"
      ui="s"
      status="success"
      :value="71.1"
      :min="0"
      :max="100"
      desc
    />
    <veui-progress
      type="circular"
      ui="xs"
      status="error"
      :value="71.1"
      :min="0"
      :max="100"
      desc
    />
  </section>
</article>
</template>

<script>
import { Progress, Checkbox } from 'veui'

export default {
  components: {
    'veui-progress': Progress,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      fluid: false
    }
  }
}
</script>

<style lang="less" scoped>
section + section {
  margin-top: 20px;
}

.bar,
.circular {
  display: flex;
  gap: 20px;
}

.bar {
  flex-direction: column;
}
</style>
