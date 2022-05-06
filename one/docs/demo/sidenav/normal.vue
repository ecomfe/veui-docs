<template>
<article>
  <veui-sidenav :items="items"/>
</article>
</template>

<script>
import { Sidenav } from 'veui'

export default {
  name: 'veui-sidenav-demo',
  components: {
    'veui-sidenav': Sidenav
  },
  data () {
    return {
      items: [
        {
          label: 'Basic',
          children: [
            {
              label: 'Button',
              to: '/components/button'
            },
            {
              label: 'Dropdown',
              to: '/components/dropdown'
            }
          ]
        },
        {
          label: 'Groups',
          children: [
            {
              label: 'RadioGroup',
              to: '/components/radio-group'
            },
            {
              label: 'CheckboxGroup',
              to: '/components/checkbox-group'
            }
          ]
        },
        {
          label: 'Form Controls',
          children: [
            {
              label: 'Text Fields',
              children: [
                {
                  label: 'Input',
                  to: '/components/input'
                },
                {
                  label: 'Textarea',
                  to: '/components/textarea'
                }
              ]
            },
            {
              label: 'Pickers',
              children: [
                {
                  label: 'Select',
                  to: '/components/select'
                },
                {
                  label: 'DatePicker',
                  to: '/components/date-picker'
                },
                {
                  label: 'TimePicker',
                  to: '/components/time-picker'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
