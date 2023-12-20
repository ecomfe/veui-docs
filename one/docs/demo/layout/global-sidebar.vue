<template>
<veui-layout>
  <veui-sidebar>
    <div class="center full">
      Sidebar
    </div>
  </veui-sidebar>
  <veui-layout>
    <veui-header class="header">
      Header
    </veui-header>
    <veui-layout>
      <veui-content class="content">
        Content
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
import { Layout, Header, Footer, Sidebar, Content } from 'veui'

export default {
  components: {
    'veui-layout': Layout,
    'veui-header': Header,
    'veui-footer': Footer,
    'veui-sidebar': Sidebar,
    'veui-content': Content
  },
  data () {
    return {
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
