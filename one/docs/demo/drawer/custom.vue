<template>
<article>
  <veui-button
    class="button"
    @click="simpleOpen = true"
  >
    Title & content
  </veui-button>
  <veui-drawer
    :open.sync="simpleOpen"
    title="Customized Title & Content"
    @ok="simpleOpen = false"
    @cancel="simpleOpen = false"
  >
    Customized content via <code>&lt;slot&gt;</code>.
  </veui-drawer>

  <veui-button
    class="button"
    @click="titleIconOpen = true"
  >
    Icon in Title
  </veui-button>
  <veui-drawer
    :open.sync="titleIconOpen"
    @ok="titleIconOpen = false"
    @cancel="titleIconOpen = false"
  >
    <template #title>
      Title with Icon <veui-icon name="flag"/>
    </template>
    Customized content via <code>&lt;slot&gt;</code>.
  </veui-drawer>

  <veui-button
    class="button"
    @click="footOpen = true"
  >
    Foot
  </veui-button>
  <veui-drawer
    :open.sync="footOpen"
    title="Customized Foot"
  >
    Customized content via <code>&lt;slot&gt;</code>.
    <template #foot="{ close }">
      <veui-button
        ui="s primary"
        @click="close('ok')"
      >
        Close
      </veui-button>
    </template>
  </veui-drawer>
</article>
</template>

<script>
import { Drawer, Button, Icon } from 'veui'
import 'veui-theme-dls-icons/flag'

export default {
  components: {
    'veui-drawer': Drawer,
    'veui-button': Button,
    'veui-icon': Icon
  },
  data () {
    return {
      simpleOpen: false,
      titleIconOpen: false,
      footOpen: false
    }
  }
}
</script>

<style lang="less" scoped>
.button {
  margin-right: 20px;
}
</style>
