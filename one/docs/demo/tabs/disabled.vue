<template>
<article>
  <veui-tabs :index.sync="index">
    <veui-tab label="Tab1">
      <p>This is Tab1</p>
    </veui-tab>
    <veui-tab
      label="Tab2"
      disabled
    >
      <p>This is Tab2</p>
    </veui-tab>
    <veui-tab label="Tab3">
      <p>This is Tab3</p>
    </veui-tab>
    <veui-tab label="Tab4">
      <p>This is Tab4</p>
    </veui-tab>
  </veui-tabs>
  <veui-tabs
    ui="strong"
    :index.sync="index"
  >
    <veui-tab label="Tab1">
      <p>This is Tab1</p>
    </veui-tab>
    <veui-tab
      label="Tab2"
      disabled
    >
      <p>This is Tab2</p>
    </veui-tab>
    <veui-tab label="Tab3">
      <p>This is Tab3</p>
    </veui-tab>
    <veui-tab label="Tab4">
      <p>This is Tab4</p>
    </veui-tab>
  </veui-tabs>
</article>
</template>

<script>
import { Tabs, Tab } from 'veui'

export default {
  components: {
    'veui-tabs': Tabs,
    'veui-tab': Tab
  },
  data () {
    return {
      index: 0
    }
  }
}
</script>
