<template>
<veui-layout>
  <veui-header class="header">
    Header
  </veui-header>
  <veui-layout>
    <veui-sidebar
      collapsible
      :collapse-mode="mode"
    >
      <div class="center full">
        Sidebar
      </div>
    </veui-sidebar>
    <veui-layout>
      <veui-content class="content">
        <veui-radio-button-group
          v-model="mode"
          class="group"
          :items="modes"
        />
      </veui-content>
      <veui-footer
        class="footer"
        style="background: #ccc;"
      >
        Footer（背景仅为演示）
      </veui-footer>
    </veui-layout>
  </veui-layout>
</veui-layout>
</template>

<script>
import { Layout, Header, Footer, Sidebar, Content, RadioButtonGroup } from 'veui'

export default {
  components: {
    'veui-layout': Layout,
    'veui-header': Header,
    'veui-footer': Footer,
    'veui-sidebar': Sidebar,
    'veui-content': Content,
    'veui-radio-button-group': RadioButtonGroup
  },
  data () {
    return {
      mode: 'slim',
      modes: [
        { label: 'slim', value: 'slim' },
        { label: 'hidden', value: 'hidden' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.center,
.header,
.footer,
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.group {
  margin-bottom: 12px;
}

.full {
  height: 100%;
}
</style>
