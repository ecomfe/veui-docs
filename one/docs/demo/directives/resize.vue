<template>
<article>
  <section>
    <veui-button
      @click="randomSize"
    >
      调整尺寸
    </veui-button>
    <div
      ref="demo"
      v-resize="updateSize"
      class="demo"
      :style="`width: ${size}px`"
    >
      v-resize="handler"
    </div>
    <p>当前尺寸: {{ caughtSize }}px</p>
    <div
      ref="demo1"
      v-resize.debounce.leading="updateSize1"
      class="demo"
      :style="`width: ${size}px`"
    >
      v-resize.debounce="handler"
    </div>
    <p>当前尺寸: {{ caughtSize1 }}px</p>
    <div
      ref="demo2"
      v-resize.throttle.500="updateSize2"
      class="demo"
      :style="`width: ${size}px`"
    >
      v-resize.throttle.500="handler"
    </div>
    <p>当前尺寸: {{ caughtSize2 }}px</p>
    <div
      ref="demo3"
      v-resize="{mode: 'throttle', handler: updateSize3}"
      class="demo"
      :style="`width: ${size}px`"
    >
      v-resize="{mode: 'throttle', handler}"
    </div>
    <p>当前尺寸: {{ caughtSize3 }}px</p>
  </section>
</article>
</template>

<script>
import { Button, resize } from 'veui'

export default {
  components: {
    'veui-button': Button
  },
  directives: {
    resize
  },
  data () {
    return {
      size: 315,
      caughtSize: 315,
      caughtSize1: 315,
      caughtSize2: 315,
      caughtSize3: 315
    }
  },
  methods: {
    randomSize () {
      this.size = Math.ceil(Math.random() * 480) + 315
    },
    updateSize () {
      this.caughtSize = this.$refs.demo.offsetWidth
    },
    updateSize1 () {
      this.caughtSize1 = this.$refs.demo1.offsetWidth
    },
    updateSize2 () {
      this.caughtSize2 = this.$refs.demo2.offsetWidth
    },
    updateSize3 () {
      this.caughtSize3 = this.$refs.demo3.offsetWidth
    }
  }
}
</script>

<style lang="less" scoped>
.demo {
  height: 50px;
  line-height: 50px;
  margin-top: 10px;
  padding-left: 10px;
  background-color: #eee;
  transition: width 2s;
}
</style>
