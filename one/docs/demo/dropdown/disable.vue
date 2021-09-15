<template>
<article>
  <veui-dropdown
    label="Operation"
    disabled
    ui="text"
    :options="options"
  />
  <veui-dropdown
    label="Operation"
    disabled
    :options="options"
  />
  <veui-dropdown
    label="Operation"
    disabled
    ui="primary"
    :options="options"
  />
  <veui-dropdown
    label="Operation"
    disabled
    split
    :options="options"
  />
  <veui-dropdown
    label="Operation"
    disabled
    split
    ui="primary"
    :options="options"
  />
</article>
</template>

<script>
import { Dropdown } from 'veui'

export default {
  components: {
    'veui-dropdown': Dropdown
  },
  data () {
    return {
      options: [
        {
          label: '新建',
          value: 'create'
        },
        {
          label: '编辑',
          value: 'edit',
          disabled: true
        },
        {
          label: '删除',
          value: 'remove'
        },
        {
          label: '编辑',
          value: 'edit',
          disabled: true
        },
        {
          label: '删除',
          value: 'remove'
        },
        {
          label: '编辑',
          value: 'edit',
          disabled: true
        },
        {
          label: '删除',
          value: 'remove'
        },
        {
          label: '编辑',
          value: 'edit',
          disabled: true
        },
        {
          label: '删除',
          value: 'remove'
        },
        {
          label: '编辑',
          value: 'edit',
          disabled: true
        },
        {
          label: '删除',
          value: 'remove'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.veui-dropdown {
  margin-left: 1em;
}
</style>
