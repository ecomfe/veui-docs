<template>
<article>
  <veui-select
    v-model="item"
    placeholder="Pick one..."
    clearable
  >
    <veui-option-group
      label="Editors"
      position="popup"
    >
      <veui-option
        value="vscode"
        label="VSCode"
      />
      <veui-option
        value="sublime"
        label="SublimeText"
      />
      <veui-option
        value="atom"
        label="Atom"
      />
    </veui-option-group>
    <veui-option-group
      label="Browsers"
      position="popup"
    >
      <veui-option-group
        label="Desktop"
        position="popup"
      >
        <veui-option
          value="ie"
          label="IE"
        />
        <veui-option
          value="edge"
          label="Edge"
        />
        <veui-option
          value="firefox"
          label="Firefox"
        />
        <veui-option
          value="chrome"
          label="Chrome"
        />
      </veui-option-group>
      <veui-option-group
        label="Mobile"
        position="popup"
      >
        <veui-option
          value="ios_safari"
          label="iOS Safari"
        />
        <veui-option
          value="android"
          label="Android Browser"
        />
        <veui-option
          value="android_chrome"
          label="Chrome for Android"
        />
      </veui-option-group>
    </veui-option-group>
  </veui-select>
  <p>Selected: {{ item || '-' }}</p>
</article>
</template>

<script>
import { Select, OptionGroup, Option } from 'veui'

export default {
  components: {
    'veui-select': Select,
    'veui-option-group': OptionGroup,
    'veui-option': Option
  },
  data () {
    return {
      item: null
    }
  }
}
</script>

<style lang="less" scoped>
.veui-select {
  width: 180px;
}
</style>

<docs>
可以使用 `clearable` 属性将 `Select` 组件设置为允许删除已选值的模式。将 `OptionGroup` 的 `position` 属性设置为 `popup` 后可以让子选项在新的浮动子菜单中展现。
</docs>

<docs locale="en-US">
`clearable` can be used to allow selected values to be discarded for `Select`. Set `position` of the embedded `OptionGroup`s to `popup` to display children options inside a popup menu.
</docs>
