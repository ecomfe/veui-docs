<template>
<article>
  <div class="container">
    <veui-dropdown
      class="dropdown"
      label="Operation"
      split
      trigger="hover"
      :options="options"
    />
    <veui-dropdown
      class="dropdown"
      label="Operation"
      split
      trigger="click"
      :options="options"
    />
    <veui-dropdown
      class="dropdown"
      label="Operation"
      ui="primary"
      split
      trigger="hover"
      :options="options"
    />
    <veui-dropdown
      class="dropdown"
      label="Operation"
      ui="primary"
      split
      trigger="click"
      :options="options"
    />
  </div>
  <div class="container">
    <veui-dropdown
      class="dropdown"
      label="Operation"
      trigger="hover"
      :options="options"
    />
    <veui-dropdown
      class="dropdown"
      label="Operation"
      trigger="click"
      :options="options"
    />
    <veui-dropdown
      class="dropdown"
      label="Operation"
      ui="text"
      split
      trigger="hover"
      :options="options"
    />
    <veui-dropdown
      class="dropdown"
      label="Operation"
      ui="text"
      split
      trigger="click"
      :options="options"
    />
  </div>
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
          label: '新建新建新建新建新建新建新建',
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
.container {
  margin-bottom: 1em;
}

.dropdown {
  margin-left: 1em;
}
</style>
