<template>
<article>
  <veui-tabs>
    <veui-tab label="Tab 1"/>
    <veui-tab label="Tab 2"/>
    <veui-tab label="Tab 3"/>
    <template #extra>
      <veui-message status="aux">
        This is an extra message.
      </veui-message>
    </template>
  </veui-tabs>
</article>
</template>

<script>
import { Tabs, Tab, Message } from 'veui'

export default {
  components: {
    'veui-tabs': Tabs,
    'veui-tab': Tab,
    'veui-message': Message
  }
}
</script>
