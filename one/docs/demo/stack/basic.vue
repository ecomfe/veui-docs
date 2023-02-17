<template>
<article>
  <section>
    <veui-radio-button-group
      v-model="gap"
      ui="s"
      :items="gaps"
    />
  </section>
  <veui-stack :gap="gap">
    <veui-button ui="primary">
      Submit
    </veui-button>
    <veui-button ui="normal">
      Save
    </veui-button>
    <veui-button ui="text">
      Cancel
    </veui-button>
  </veui-stack>
</article>
</template>

<script>
import { RadioButtonGroup, Stack, Button } from 'veui'

export default {
  components: {
    'veui-radio-button-group': RadioButtonGroup,
    'veui-stack': Stack,
    'veui-button': Button
  },
  data () {
    return {
      gaps: [
        { label: '/', value: null },
        { label: 'XXS', value: 'xxs' },
        { label: 'XS', value: 'xs' },
        { label: 'S', value: 's' },
        { label: 'M', value: 'm' },
        { label: 'L', value: 'l' },
        { label: 'XL', value: 'xl' },
        { label: 'XXL', value: 'xxl' }
      ],
      gap: null
    }
  }
}
</script>

<style scoped>
section {
  margin-bottom: 20px;
}
</style>

<docs>
可以使用 [`gap`](#props-gap) 属性来设置堆叠项的间距。
</docs>
