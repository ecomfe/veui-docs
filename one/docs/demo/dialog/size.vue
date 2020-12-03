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

<style lang="less" scoped docs>
.veui-button {
  margin-right: 20px;
}
</style>
