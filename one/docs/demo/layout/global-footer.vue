<template>
<article>
  <veui-layout>
    <veui-header>Header</veui-header>
    <veui-layout>
      <veui-sidebar>
        <div class="center full">
          Sidebar
        </div>
      </veui-sidebar>
      <veui-layout>
        <veui-content>Content</veui-content>
      </veui-layout>
    </veui-layout>
    <veui-footer style="background: #ccc;">
      Footer（背景仅为演示）
    </veui-footer>
  </veui-layout>
</article>
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
article {
  height: 100%;

  & > .veui-layout {
    min-width: 720px;
  }
}

.center,
.veui-layout-header,
.veui-layout-footer,
.veui-layout-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.full {
  height: 100%;
}
</style>
