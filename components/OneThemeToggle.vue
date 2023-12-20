<template>
<veui-radio-button-group
  ui="s"
  :items="themes"
  :value="theme"
  @change="handleChange"
/>
</template>

<script>
import { RadioButtonGroup } from 'veui'
import config from '../common/config'
import { savePref } from '../common/util'

export default {
  name: 'one-theme-toggle',
  components: {
    'veui-radio-button-group': RadioButtonGroup
  },
  data () {
    return {
      themes: [
        { label: 'D20', value: '' },
        { label: 'D22', value: 'd22' },
        { label: 'AI', value: 'ai' }
      ]
    }
  },
  computed: {
    theme () {
      return config.value.theme
    }
  },
  methods: {
    handleChange (theme) {
      config.value.theme = theme
      savePref('theme', theme)
    }
  }
}
</script>
