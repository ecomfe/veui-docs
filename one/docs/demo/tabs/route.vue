<template>
<article>
  <veui-tabs :active="$route.fullPath">
    <veui-tab
      label="Tab 1"
      to="/components/tabs/tab"
    />
    <veui-tab
      label="Tab 2"
      to="/components/tabs/tab2"
    />
    <veui-tab
      label="Tab 3 (custom panel slot)"
      to="/components/tabs/tab3"
    >
      <h3>Tab Header</h3>
      <router-view/>
      <footer>Tab footer</footer>
    </veui-tab>
    <veui-tab
      label="Redirect to Form"
      to="/components/form"
    />
    <template #panel>
      <router-view/>
    </template>
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
      active: 'answers',
      index: 0
    }
  }
}
</script>
