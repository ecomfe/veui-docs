<template>
<article>
  <section>
    <h4>Borderless style</h4>
    <veui-tabs ui="borderless">
      <veui-tab label="Tab 1"/>
      <veui-tab label="Tab 2"/>
      <veui-tab label="Tab 3"/>
    </veui-tabs>
  </section>
  <section>
    <h4>Simple style</h4>
    <veui-tabs ui="simple">
      <veui-tab label="Tab 1"/>
      <veui-tab label="Tab 2"/>
      <veui-tab label="Tab 3"/>
    </veui-tabs>
  </section>
  <section>
    <h4>Strong style</h4>
    <veui-tabs ui="strong">
      <veui-tab label="Tab 1"/>
      <veui-tab label="Tab 2"/>
      <veui-tab label="Tab 3"/>
    </veui-tabs>
  </section>
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
