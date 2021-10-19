<template>
<article>
  <veui-button @click="openDialog('s')">
    s
  </veui-button>
  <veui-button @click="openDialog('m')">
    m
  </veui-button>
  <veui-button @click="openDialog('narrow')">
    narrow
  </veui-button>
  <veui-button @click="openDialog('medium')">
    medium
  </veui-button>
  <veui-button @click="openDialog('wide')">
    wide
  </veui-button>
  <veui-button @click="openDialog('fullscreen')">
    fullscreen
  </veui-button>
  <veui-button @click="openDialog('auto')">
    auto
  </veui-button>
  <veui-dialog
    title="System"
    :ui="ui"
    :open.sync="open"
  >
    <p>Current UI: "{{ ui }}"</p>
    <p v-if="ui === 's' || ui === 'm'">
      <veui-button>Button size: {{ ui }}</veui-button>
      <veui-switch>{{ ui }}</veui-switch>
    </p>
  </veui-dialog>
</article>
</template>

<script>
import { Dialog, Button, Switch } from 'veui'

export default {
  components: {
    'veui-dialog': Dialog,
    'veui-button': Button,
    'veui-switch': Switch
  },
  data () {
    return {
      open: false,
      ui: null
    }
  },
  methods: {
    openDialog (size) {
      this.ui = size
      this.open = true
    }
  }
}
</script>

<style lang="less" scoped>
.veui-button {
  margin-right: 20px;
}
</style>

<docs>
`s` / `m` 用于指定内容的尺寸，会被继承到内部的组件上。而 `narrow` / `medium` / `wide` / `fullscreen` / `auto` 是对话框本身所占区域的大小，可以与 `s` / `m` 混合使用。
</docs>

<docs locale="en-US">
`s` / `m` are used to specify size for internal content and will be inherited by components inside the dialog. While `narrow` / `medium` / `wide` / `fullscreen` / `auto` are used to specify the dimension of the dialog itself, thus can be used together with `s` / `m`.
</docs>
