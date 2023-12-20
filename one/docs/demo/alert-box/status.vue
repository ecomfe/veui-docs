<template>
<article>
  <veui-button
    class="button"
    @click="successOpen = true"
  >
    Success
  </veui-button>
  <veui-button
    class="button"
    @click="errorOpen = true"
  >
    Error
  </veui-button>
  <veui-button
    class="button"
    @click="infoOpen = true"
  >
    Info
  </veui-button>

  <veui-alert-box
    status="success"
    :open.sync="successOpen"
  >
    <template #title>
      Success
    </template>
    <div>Saved successfully!</div>
  </veui-alert-box>

  <veui-alert-box
    status="error"
    :open.sync="errorOpen"
  >
    <template #title>
      Error
    </template>
    <div>Not enough disk space!</div>
  </veui-alert-box>

  <veui-alert-box
    status="info"
    :open.sync="infoOpen"
  >
    <template #title>
      Sytstem
    </template>
    <div>The total available storage is 5MB.</div>
  </veui-alert-box>
</article>
</template>

<script>
import { AlertBox, Button } from 'veui'

export default {
  components: {
    'veui-alert-box': AlertBox,
    'veui-button': Button
  },
  data () {
    return {
      successOpen: false,
      errorOpen: false,
      infoOpen: false
    }
  }
}
</script>

<style lang="less" scoped>
.button {
  margin-right: 10px;
}
</style>
