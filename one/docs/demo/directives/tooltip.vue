<template>
<article>
  <veui-button
    v-tooltip="'Preview'"
    ui="icon"
  >
    <veui-icon name="zoom-in"/>
  </veui-button>
  <veui-button
    v-tooltip="'Upload'"
    ui="icon"
  >
    <veui-icon name="upload"/>
  </veui-button>
  <veui-button
    v-tooltip="'Remove'"
    ui="icon"
  >
    <veui-icon name="trash"/>
  </veui-button>
</article>
</template>

<script>
import { Button, Icon } from 'veui'
import tooltip from 'veui/directives/tooltip'
import 'veui-theme-dls-icons/zoom-in'
import 'veui-theme-dls-icons/upload'
import 'veui-theme-dls-icons/trash'

export default {
  components: {
    'veui-button': Button,
    'veui-icon': Icon
  },
  directives: {
    tooltip
  }
}
</script>

<style lang="less" scoped>
.veui-button + .veui-button {
  margin-left: 8px;
}
</style>
