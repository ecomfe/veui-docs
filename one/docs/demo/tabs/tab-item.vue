<template>
<article>
  <section>
    <h4>Customizing tab item</h4>
    <veui-tabs ui="borderless">
      <veui-tab label="Tab 1"/>
      <veui-tab label="Tab 2"/>
      <veui-tab label="Tab 3"/>
      <template #tab-item="{ label, attrs, activate, index, active }">
        <button
          v-bind="attrs"
          :style="{
            fontWeight: active ? '600' : '400',
            textDecoration: active ? 'underline' : 'none'
          }"
          @click="activate"
        >
          #{{ index + 1 }} {{ label }}
        </button>
      </template>
    </veui-tabs>
  </section>
  <section>
    <h4>Customizing tab label</h4>
    <veui-tabs>
      <veui-tab label="Tab 1">
        <template #label="{ label, active }">
          <veui-icon :name="active ? 'envelope-open' : 'envelope'"/> {{ label }}
        </template>
      </veui-tab>
      <veui-tab label="Tab 2"/>
      <veui-tab label="Tab 3"/>
      <template #tab-label="{ label, active }">
        <veui-icon :name="active ? 'folder-open' : 'folder'"/> {{ label }}
      </template>
    </veui-tabs>
  </section>
</article>
</template>

<script>
import { Tabs, Tab, Icon } from 'veui'
import 'veui-theme-dls-icons/envelope'
import 'veui-theme-dls-icons/envelope-open'
import 'veui-theme-dls-icons/folder'
import 'veui-theme-dls-icons/folder-open'

export default {
  components: {
    'veui-tabs': Tabs,
    'veui-tab': Tab,
    'veui-icon': Icon
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

<docs>
`Tabs` 组件的 [`tab-item`](#slots-tab-item) 和 [`tab-label`](#slots-tab-label) 插槽会自动对所有页签生效。可以使用单个 [`Tab`](./tab) 组件的 [`item`](./tab#slots-item) 和 [`label`](./tab#slots-label) 插槽定义单个页签的内容，优先级高于 `Tabs` 组件整体自定义的逻辑。
</docs>
