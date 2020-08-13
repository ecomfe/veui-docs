<template>
<article>
  <div>
    <veui-textarea
      autoresize
      line-number
      value="Normal"
    />
  </div>
  <div>
    <veui-textarea
      autoresize
      line-number
      ui="s"
      value="Small"
    />
  </div>
</article>
</template>

<script>
import { Textarea } from 'veui'

export default {
  components: {
    'veui-textarea': Textarea
  }
}
</script>
