<template>
<article>
  <veui-empty/>
</article>
</template>

<script>
import { Empty } from 'veui'

export default {
  components: {
    'veui-empty': Empty
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
