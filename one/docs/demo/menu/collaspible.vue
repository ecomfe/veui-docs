<template>
<article>
  <section>
    <veui-menu
      :items="items"
      collapsible
    />
  </section>
</article>
</template>

<script>
import { Menu } from 'veui'
import 'veui-theme-dls-icons/calendar'
import 'veui-theme-dls-icons/bullseye'
import 'veui-theme-dls-icons/clock'
import 'veui-theme-dls-icons/eye'

export default {
  name: 'veui-menu-demo',
  components: {
    'veui-menu': Menu
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
