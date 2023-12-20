<template>
<article>
  <veui-button
    ref="toggle"
    class="button"
    @click="open = !open"
  >
    Toggle
  </veui-button>
  <veui-overlay
    target="toggle"
    position="top-start"
    :open.sync="open"
    overlay-class="relative-overlay"
  >
    <div v-outside:toggle="hide">
      Relatively Positioned
    </div>
  </veui-overlay>
</article>
</template>

<script>
import { Overlay, Button, outside } from 'veui'

export default {
  components: {
    'veui-overlay': Overlay,
    'veui-button': Button
  },
  directives: { outside },
  data () {
    return {
      open: false
    }
  },
  methods: {
    hide () {
      this.open = false
    }
  }
}
</script>

<style lang="less" scoped>
.relative-overlay {
  width: 200px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px solid #dbdbdb;
  background-color: #fff;

  .button {
    margin-left: 10px;
  }
}
</style>
