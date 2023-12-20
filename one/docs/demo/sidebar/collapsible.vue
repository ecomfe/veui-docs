<template>
<veui-layout>
  <veui-header class="heaer">
    Header
  </veui-header>
  <veui-layout>
    <veui-sidebar :collapsible="collapsible">
      <div class="center full">
        Sidebar
      </div>
    </veui-sidebar>
    <veui-layout>
      <veui-content class="content">
        <veui-switch
          v-model="collapsible"
        >
          Collapsible
        </veui-switch>
      </veui-content>
      <veui-footer
        class="footer"
        style="background: #ccc;"
      >
        Footer（背景仅为演示
      </veui-footer>
    </veui-layout>
  </veui-layout>
</veui-layout>
</template>

<script>
import { Layout, Header, Footer, Sidebar, Content, Switch } from 'veui'

export default {
  components: {
    'veui-layout': Layout,
    'veui-header': Header,
    'veui-footer': Footer,
    'veui-sidebar': Sidebar,
    'veui-content': Content,
    'veui-switch': Switch
  },
  data () {
    return {
      collapsible: true
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

.full {
  height: 100%;
}
</style>
