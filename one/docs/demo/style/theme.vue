<template>
<article>
  <veui-stack
    direction="column"
    gap="xs"
  >
    <veui-search-box
      placeholder="theme=&quot;d20&quot;"
      ui="strong"
      theme="d20"
    />
    <veui-search-box
      placeholder="theme=&quot;d22&quot;"
      ui="strong"
      theme="d22"
    />
    <veui-search-box
      placeholder="theme=&quot;ai&quot;"
      ui="strong"
      theme="ai"
    />
  </veui-stack>
</article>
</template>

<script>
import { Stack, SearchBox } from 'veui'

export default {
  components: {
    'veui-stack': Stack,
    'veui-search-box': SearchBox
  }
}
</script>
