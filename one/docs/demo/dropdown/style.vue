<template>
<article>
  <veui-dropdown
    label="Primary"
    ui="primary"
    :options="options"
  />
  <veui-dropdown
    label="Default"
    :options="options"
  />
  <veui-dropdown
    label="Normal"
    ui="normal"
    :options="options"
  />
  <veui-dropdown
    label="Text"
    ui="text"
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
          value: 'edit'
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

<style lang="less" scoped docs>
.veui-dropdown {
  & + & {
    margin-left: 1em;
  }
}
</style>
