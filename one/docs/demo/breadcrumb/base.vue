<template>
<article>
  <veui-breadcrumb>
    <veui-breadcrumb-item to="./breadcrumb">
      Home
    </veui-breadcrumb-item>
    <veui-breadcrumb-item to="./breadcrumb">
      Components
    </veui-breadcrumb-item>
    <veui-breadcrumb-item type="text">
      Breadcrumb
    </veui-breadcrumb-item>
  </veui-breadcrumb>
</article>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from 'veui'

export default {
  components: {
    'veui-breadcrumb': Breadcrumb,
    'veui-breadcrumb-item': BreadcrumbItem
  }
}
</script>
