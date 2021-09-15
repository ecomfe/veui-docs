<template>
<article>
  <veui-button
    ref="toggle"
    @click="open = !open"
  >
    Toggle
  </veui-button>
  <veui-overlay
    :open.sync="open"
    overlay-class="centered-overlay"
  >
    <div v-outside:toggle="hide">
      Centered
    </div>
  </veui-overlay>
</article>
</template>

<script>
import { Overlay, Button } from 'veui'
import outside from 'veui/directives/outside'

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
.centered-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
}

.centered-overlay {
  line-height: 100px;
  text-align: center;
  border: 1px solid #dbdbdb;
  background-color: #fff;
}
</style>

<docs>
使用常见的 CSS 定位方法，可以自定义。
</docs>
