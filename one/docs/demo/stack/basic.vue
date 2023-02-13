<template>
<article>
  <veui-stack gap="xs">
    <veui-button ui="primary">
      Submit
    </veui-button>
    <veui-button ui="normal">
      Save
    </veui-button>
    <veui-button ui="text">
      Cancel
    </veui-button>
  </veui-stack>
</article>
</template>

<script>
import { Stack, Button } from 'veui'

export default {
  components: {
    'veui-stack': Stack,
    'veui-button': Button
  }
}
</script>
