<template>
<article>
  <veui-breadcrumb
    :routes="routes"
    @redirect="handleRedirect"
  />
  <div class="console">
    <template v-if="currentRoute">
      Redirected to <b>{{ currentRoute.label }}</b>.
    </template>
    <template v-else>
      Not redirected yet.
    </template>
  </div>
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
      currentRoute: null,
      routes: [
        {
          label: 'Home',
          type: 'link'
        },
        {
          label: 'Components',
          type: 'link'
        },
        {
          label: 'Breadcrumb'
        }
      ]
    }
  },
  methods: {
    handleRedirect (event, route) {
      this.currentRoute = route
    }
  }
}
</script>

<style lang="less" scoped>
.veui-breadcrumb:first-child {
  margin-bottom: 20px;
}
</style>
