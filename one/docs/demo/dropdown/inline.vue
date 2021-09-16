<template>
<veui-dropdown
  label="Files"
  @click="alert"
>
  <veui-option-group>
    <veui-option
      value="new-file"
      label="New File"
    />
    <veui-option
      value="new-window"
      label="New Window"
    />
  </veui-option-group>
  <veui-option-group>
    <veui-option
      value="open"
      label="Open…"
    />
    <veui-option
      value="open-workspace"
      label="Open Workspace…"
    />
    <veui-option-group
      label="Open Recent"
      position="popup"
    >
      <veui-option-group>
        <veui-option
          value="reopen"
          label="Reopen Closed Editor"
        />
      </veui-option-group>
      <veui-option-group>
        <veui-option
          value="open:~/Dropdown.vue"
          label="~/Dropdown.vue"
        />
        <veui-option
          value="open:~/Select.vue"
          label="~/Select.vue"
        />
      </veui-option-group>
    </veui-option-group>
  </veui-option-group>
</veui-dropdown>
</template>

<script>
import { Dropdown, OptionGroup, Option, toast } from 'veui'

export default {
  components: {
    'veui-dropdown': Dropdown,
    'veui-option-group': OptionGroup,
    'veui-option': Option
  },
  methods: {
    alert (e) {
      toast.info(e)
    }
  }
}
</script>

<docs>
将 `OptionGroup` 的 `position` 属性设置为 `popup` 后可以让子选项在新的浮动子菜单中展现。
</docs>
