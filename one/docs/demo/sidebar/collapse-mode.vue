<template>
<article>
  <veui-radio-button-group
    v-model="mode"
    :items="modes"
  />
  <div class="mock-window">
    <veui-layout>
      <veui-header>Header</veui-header>
      <veui-layout>
        <veui-sidebar :collapse-mode="mode">
          <div class="center full">Sidebar</div>
        </veui-sidebar>
        <veui-layout>
          <veui-content>Content</veui-content>
          <veui-footer style="background: #ccc;">Footer（背景仅为演示）</veui-footer>
        </veui-layout>
      </veui-layout>
    </veui-layout>
  </div>
</article>
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
.mock-window {
  height: 384px;
  transform: translate(0, 0); // bfc for fixed
  overflow: auto;
  border: 1px solid #eee;

  & > .veui-layout {
    min-width: 860px;
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

.veui-radio-button-group {
  margin-bottom: 12px;
}

.full {
  height: 100%;
}
</style>
