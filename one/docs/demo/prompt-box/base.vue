<template>
<article>
  <veui-button @click="open = true">
    Prompt
  </veui-button>
  <veui-prompt-box
    v-model="value"
    title="Survey"
    :open.sync="open"
    @cancel="cancel"
    @ok="ok"
  >
    What's your favorite food?
  </veui-prompt-box>
</article>
</template>

<script>
import { PromptBox, Button, toast } from 'veui'

export default {
  components: {
    'veui-prompt-box': PromptBox,
    'veui-button': Button
  },
  data () {
    return {
      value: '',
      open: false
    }
  },
  methods: {
    ok () {
      this.open = false
      toast.info('Input: ' + (this.value || "''"))
    },
    cancel () {
      toast.info('Canceled')
    }
  }
}
</script>
