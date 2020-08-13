<template>
<article>
  <section>
    <veui-breadcrumb ui="m">
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
  </section>
  <section>
    <veui-breadcrumb ui="s">
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
  </section>
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

<style lang="less" scoped docs>
section {
  margin-bottom: 1em;
}
</style>
