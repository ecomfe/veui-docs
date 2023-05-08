<template>
<one-changelog/>
</template>

<script>
import OneChangelog from '@/components/OneChangelog'

export default {
  name: 'one-changelog-page',
  layout: 'default',
  components: {
    'one-changelog': OneChangelog
  }
}
</script>
