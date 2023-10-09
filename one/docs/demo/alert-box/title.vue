<template>
<article>
  <veui-button @click="open1 = true">
    title prop
  </veui-button>
  <veui-button @click="open2 = true">
    title slot
  </veui-button>

  <veui-alert-box
    status="success"
    :open.sync="open1"
    title="Success"
    @ok="ok"
  >
    <p>Saved successfully!</p>
  </veui-alert-box>

  <veui-alert-box
    status="success"
    :open.sync="open2"
    @ok="ok"
  >
    <template #title>
      Success
      <veui-icon name="info-circle"/>
    </template>
    <p>Saved successfully!</p>
  </veui-alert-box>
</article>
</template>

<script>
import { AlertBox, Button, Icon, toast } from 'veui'
import 'veui-theme-dls-icons/info-circle'

export default {
  components: {
    'veui-alert-box': AlertBox,
    'veui-button': Button,
    'veui-icon': Icon
  },
  data () {
    return {
      open1: false,
      open2: false
    }
  },
  methods: {
    ok () {
      toast.info('Confirmed')
    }
  }
}
</script>

<style lang="less" scoped>
.veui-button {
  margin-right: 10px;
}

.icon {
  vertical-align: -2px;
}
</style>
