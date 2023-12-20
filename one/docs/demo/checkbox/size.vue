<template>
<article>
  <section>
    <veui-checkbox
      v-model="checked"
      class="checkbox"
      :ui="size"
      :indeterminate.sync="indeterminate"
    >
      Checked: {{ checked }}
    </veui-checkbox>
  </section>
  <section>
    <veui-checkbox
      v-model="small"
      class="checkbox"
      ui="s"
    >
      Small
    </veui-checkbox>
    <veui-checkbox
      v-model="indeterminate"
      class="checkbox"
      ui="s"
    >
      Indeterminate
    </veui-checkbox>
  </section>
</article>
</template>

<script>
import { Checkbox } from 'veui'

export default {
  components: {
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      checked: false,
      indeterminate: false,
      small: false
    }
  },
  computed: {
    size () {
      return this.small ? 's' : ''
    }
  }
}
</script>

<style lang="less" scoped>
.checkbox {
  & + & {
    margin-left: 20px;
  }
}
</style>

<docs>
可以使用 [`indeterminate`](#props-indeterminate) 属性来设置半选状态。
</docs>

<docs locale="en-US">
Use the [`indeterminate`](#props-indeterminate) prop to put the checkbox in indeterminate state.
</docs>
