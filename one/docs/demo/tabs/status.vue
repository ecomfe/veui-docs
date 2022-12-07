<template>
<article>
  <veui-tabs>
    <veui-tab
      label="Address 1"
      status="success"
    />
    <veui-tab
      label="Address 2"
      status="info"
    />
    <veui-tab
      label="Address 3"
      status="warning"
    />
    <veui-tab
      label="Address 4"
      status="error"
    />
  </veui-tabs>
</article>
</template>

<script>
import { Tabs, Tab } from 'veui'

export default {
  components: {
    'veui-tabs': Tabs,
    'veui-tab': Tab
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
