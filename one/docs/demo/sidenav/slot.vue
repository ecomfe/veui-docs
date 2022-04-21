<template>
<article>
  <veui-sidenav
    :items="items"
    collapsible
  >
    <template #icon>
      <veui-icon name="calendar"/>
    </template>
  </veui-sidenav>
</article>
</template>

<script>
import { Sidenav, Icon } from 'veui'
import 'veui-theme-dls-icons/calendar'

export default {
  name: 'veui-sidenav-demo',
  components: {
    'veui-sidenav': Sidenav,
    'veui-icon': Icon
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
                to: '/switch'
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
                to: '/link'
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
