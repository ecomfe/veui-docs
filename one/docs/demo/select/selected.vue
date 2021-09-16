<template>
<article>
  <section>
    <h4>下拉关闭时省略显示已选项</h4>
    <veui-select
      v-model="license"
      multiple
      :options="options"
    >
      <template
        #label="{ selected }"
      >{{ selected[0].label }}等{{ selected.length }}个{{ ' ' }}</template>
    </veui-select>
  </section>
  <section>
    <h4>始终省略显示已选项</h4>
    <veui-select
      v-model="license"
      multiple
      :options="options"
    >
      <template
        #selected="{ selected }"
      >{{ selected[0].label
      }}{{ selected.length > 1 ? `等${selected.length}个` : '' }}</template>
    </veui-select>
  </section>
</article>
</template>

<script>
import { Select } from 'veui'

export default {
  components: {
    'veui-select': Select
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
