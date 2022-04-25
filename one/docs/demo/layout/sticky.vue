<template>
<veui-layout style="--dls-layout-header-height: 64px;">
  <veui-header sticky>
    Header
  </veui-header>
  <veui-layout>
    <!-- 这里 vh 达不到效果，直接计算：400 - 2(border) - 40 - 64 = 294 -->
    <veui-sidebar
      sticky
      style="max-height: 294px;"
    >
      <div class="center full">
        Sidebar
      </div>
    </veui-sidebar>
    <veui-layout>
      <veui-content>
        <div
          class="center"
          style="height: 800px;"
        >
          Sidebar
        </div>
      </veui-content>
      <veui-footer
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
