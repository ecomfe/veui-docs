<template>
<article>
  <section>
    <p>
      composition: <veui-switch v-model="composition"/>
    </p>
    <p>Input value: {{ value }}</p>
    <veui-input
      v-model="value"
      :composition="composition"
    />
  </section>
</article>
</template>

<script>
import { Input, Switch } from 'veui'

export default {
  components: {
    'veui-input': Input,
    'veui-switch': Switch
  },
  data () {
    return {
      composition: true,
      value: ''
    }
  }
}
</script>
