<template>
<article>
  <section>
    <veui-number-input
      v-model="value"
      :min="0"
      :max="100"
    />
  </section>
  <section>
    <veui-checkbox v-model="desc">
      Description
    </veui-checkbox>
    <veui-checkbox
      v-model="autoSucceed"
      :true-value="200"
    >
      Autosucceed
    </veui-checkbox>
    <veui-checkbox
      v-model="type"
      true-value="circular"
      false-value="bar"
    >
      Circular
    </veui-checkbox>
    <veui-checkbox
      v-model="indeterminate"
    >
      Indeterminate
    </veui-checkbox>
  </section>
  <section>
    <veui-progress
      :type="type"
      :value="value"
      :desc="desc"
      :autosucceed="autoSucceed"
      :indeterminate="indeterminate"
      :decimal-place="1"
      :min="0"
      :max="100"
    />
  </section>
</article>
</template>

<script>
import { Progress, NumberInput, Checkbox } from 'veui'

export default {
  components: {
    'veui-progress': Progress,
    'veui-number-input': NumberInput,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      type: 'bar',
      value: 66.6,
      desc: true,
      autoSucceed: true,
      indeterminate: false
    }
  }
}
</script>

<style lang="less" scoped>
section + section {
  margin-top: 20px;
}

section:last-child {
  height: 140px;
}

.veui-checkbox {
  margin-right: 15px;
}
</style>
