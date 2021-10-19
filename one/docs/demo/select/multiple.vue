<template>
<article>
  <section>
    <veui-checkbox v-model="searchable">
      Searchable
    </veui-checkbox>
  </section>
  <section>
    <veui-select
      v-model="license"
      multiple
      :options="options"
      :max="5"
      :searchable="searchable"
    />
  </section>
</article>
</template>

<script>
import { Select, Checkbox } from 'veui'

export default {
  components: {
    'veui-select': Select,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      searchable: false,
      license: null,
      options: [
        {
          label: 'MIT',
          value: 'mit'
        },
        {
          label: 'BSD',
          value: 'bsd'
        },
        {
          label: 'Apache 2.0',
          value: 'apache2'
        },
        {
          label: 'GPL 3.0',
          value: 'gpl3'
        },
        {
          label: 'AGPL 3.0',
          value: 'agpl3'
        },
        {
          label: 'LGPL 2.1',
          value: 'lgpl2'
        },
        {
          label: 'MPL 2.0',
          value: 'mpl2'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}
</style>

<docs>
可使用 [`max`](#props-max) 属性控制选中选项的最大数量。这种场景下也可以使用 [`searchable`](#props-searchable) 属性控制是否允许搜索选项。
</docs>

<docs locale="en-US">
Use `max` to specify the max number of options that can be selected. The [`searchable`](#props-searchable) prop can also be used here to make options searchable.
</docs>
