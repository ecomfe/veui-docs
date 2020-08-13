<template>
<article>
  <veui-dropdown
    label="Action"
    ui="xs"
    :options="operations"
    @click="alert"
  />
  <veui-dropdown
    label="Action"
    ui="s"
    :options="operations"
    @click="alert"
  />
  <veui-dropdown
    label="Action"
    :options="operations"
    @click="alert"
  />
  <veui-dropdown
    label="Action"
    ui="l"
    :options="operations"
    @click="alert"
  />
</article>
</template>

<script>
import { Dropdown } from 'veui'
import toast from 'veui/managers/toast'

export default {
  components: {
    'veui-dropdown': Dropdown
  },
  data () {
    return {
      operations: [
        {
          label: 'Edit',
          value: 'edit'
        },
        {
          label: 'Delete',
          value: 'delete'
        },
        {
          label: 'Save',
          value: 'save'
        },
        {
          label: 'Publish',
          value: 'publish'
        }
      ]
    }
  },
  methods: {
    alert (e) {
      toast.info(e)
    }
  }
}
</script>

<style lang="less" scoped docs>
.veui-dropdown {
  max-width: 120px;
  margin-right: 10px;
}
</style>
