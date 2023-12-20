<template>
<article>
  <veui-breadcrumb
    class="breadcrumb"
    :routes="routes"
  >
    <template #separator>
      -
    </template>
  </veui-breadcrumb>
  <veui-breadcrumb
    class="breadcrumb"
    :routes="routes"
  >
    <template #separator>
      <veui-icon name="arrow-right"/>
    </template>
  </veui-breadcrumb>
</article>
</template>

<script>
import { Breadcrumb, Icon } from 'veui'
import 'veui-theme-dls-icons/arrow-right'

export default {
  components: {
    'veui-breadcrumb': Breadcrumb,
    'veui-icon': Icon
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

<style lang="less" scoped>
.breadcrumb {
  & + & {
    margin-top: 20px;
  }
}
</style>
