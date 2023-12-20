<template>
<veui-layout style="--dls-layout-header-height: 64px;">
  <veui-header
    class="header"
    sticky
  >
    Header
  </veui-header>
  <veui-layout>
    <veui-sidebar sticky>
      <div class="center full">
        Sidebar
      </div>
    </veui-sidebar>
    <veui-layout>
      <veui-content class="content">
        <div
          class="center"
          style="height: 800px;"
        >
          Sidebar
        </div>
      </veui-content>
      <veui-footer
        class="footer"
        sticky
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

.full {
  height: 100%;
}
</style>
