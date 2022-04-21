<template>
<article>
  <veui-layout>
    <veui-header>Header</veui-header>
    <veui-layout>
      <veui-sidebar collapsible>
        <veui-sidenav
          :items="items"
          collapsible
        />
      </veui-sidebar>
      <veui-layout>
        <veui-content>Content</veui-content>
        <veui-footer style="background: #ccc;">
          Footer（背景仅为演示）
        </veui-footer>
      </veui-layout>
    </veui-layout>
  </veui-layout>
</article>
</template>

<script>
import { Layout, Header, Footer, Sidebar, Content, Sidenav } from 'veui'
import 'veui-theme-dls-icons/calendar'
import 'veui-theme-dls-icons/bullseye'
import 'veui-theme-dls-icons/clock'
import 'veui-theme-dls-icons/eye'

export default {
  name: 'veui-sidenav-demo',
  components: {
    'veui-layout': Layout,
    'veui-header': Header,
    'veui-footer': Footer,
    'veui-sidebar': Sidebar,
    'veui-content': Content,
    'veui-sidenav': Sidenav
  },
  data () {
    let items = [
      {
        label: 'Group One',
        name: 'group-one',
        icon: 'calendar',
        children: [
          {
            label: 'Sub One',
            name: 'sub-one',
            children: [
              {
                label: 'Input',
                to: '/components/input'
              }
            ]
          },
          {
            label: 'Loading',
            name: 'Loading',
            to: '/components/loading',
            children: [
              {
                label: 'Switch',
                to: '/components/switch'
              }
            ]
          }
        ]
      },
      {
        label: 'Button',
        name: 'Button',
        to: '/components/button',
        icon: 'bullseye',
        children: [
          {
            label: 'Disabled',
            name: 'Disabled',
            disabled: true,
            children: [
              {
                label: 'Link',
                name: 'Link',
                to: '/components/link'
              }
            ]
          }
        ]
      },
      {
        label: 'Navigation Three',
        name: 'nav-three',
        icon: 'eye',
        disabled: true
      },
      {
        label: 'Navigation Four',
        name: 'nav-four',
        icon: 'clock',
        children: [
          {
            label: 'Progress',
            to: '/components/progress'
          }
        ]
      }
    ]
    return {
      items
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

.veui-layout-header,
.veui-layout-footer,
.veui-layout-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
