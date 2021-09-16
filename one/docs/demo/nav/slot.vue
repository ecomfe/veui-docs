<template>
<article>
  <section>
    <veui-nav
      :items="items"
    >
      <template #item-label="{ label }">
        <i>{{ label }}</i>
      </template>
    </veui-nav>
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
