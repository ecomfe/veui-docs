<template>
<article>
  <veui-tabs>
    <veui-tab label="Tab 1">
      <p>This is Tab 1</p>
    </veui-tab>
    <veui-tab
      label="Tab 2"
      disabled
    >
      <p>This is Tab 2</p>
    </veui-tab>
    <veui-tab label="Tab 3">
      <p>This is Tab 3</p>
    </veui-tab>
    <veui-tab label="Tab 4">
      <p>This is Tab 4</p>
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
  }
}
</script>
