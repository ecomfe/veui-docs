<template>
<article>
  <veui-breadcrumb :routes="routes"/>
</article>
</template>

<script>
import { Breadcrumb } from 'veui'

export default {
  components: {
    'veui-breadcrumb': Breadcrumb
  },
  data () {
    return {
      routes: [
        {
          to: './breadcrumb',
          label: 'Home'
        },
        {
          to: './breadcrumb',
          label: 'Components'
        },
        {
          label: 'Breadcrumb'
        }
      ]
    }
  }
}
</script>
