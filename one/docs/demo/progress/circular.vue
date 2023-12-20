<template>
<article>
  <section class="settings">
    Progress
    <veui-slider
      v-model="value"
      class="slider"
      :min="0"
      :step="0.1"
      :max="100"
    />
  </section>
  <section class="settings">
    <veui-checkbox v-model="desc">
      Show description
    </veui-checkbox>
    <veui-checkbox
      v-model="autosucceed"
      :true-value="200"
    >
      Autosucceed
    </veui-checkbox>
  </section>
  <section>
    <veui-progress
      type="circular"
      :value="value"
      :desc="desc"
      :autosucceed="autosucceed"
      :decimal-place="1"
      :min="0"
      :max="100"
    />
  </section>
</article>
</template>

<script>
import { Progress, Slider, Checkbox } from 'veui'

export default {
  components: {
    'veui-progress': Progress,
    'veui-slider': Slider,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      value: 66.6,
      desc: true,
      autosucceed: 200
    }
  }
}
</script>

  <style lang="less" scoped>
  article {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .settings {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .slider {
    width: 200px;
  }
  </style>
