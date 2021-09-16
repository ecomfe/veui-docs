<template>
<article>
  <section>
    <veui-nav
      class="more-nav-items"
      :items="items"
    />
  </section>
</article>
</template>

<script>
import { Nav } from 'veui'

export default {
  name: 'veui-nav-demo',
  components: {
    'veui-nav': Nav
  },
  data () {
    let items = [
      {
        label: 'Group One',
        name: 'group-one',
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
        disabled: true
      },
      {
        label: 'Navigation Four',
        name: 'nav-four',
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
.more-nav-items {
  max-width: 300px;
}
</style>
