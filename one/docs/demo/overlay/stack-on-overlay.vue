<template>
<article>
  <veui-button
    ref="parent"
    class="button"
    @click="parentOpen = !parentOpen"
  >
    Toggle
  </veui-button>
  <veui-overlay
    target="parent"
    position="top-start"
    :open.sync="parentOpen"
    overlay-class="relative-overlay"
  >
    <veui-button
      ref="child"
      class="button"
      @click="childOpen = !childOpen"
    >
      Toggle
    </veui-button>
    <veui-overlay
      target="child"
      position="top-start"
      :open.sync="childOpen"
      overlay-class="relative-overlay"
    >
      Child Overlay
    </veui-overlay>
  </veui-overlay>
  <veui-button
    class="button"
    ui="xs"
    @click="parentOpen = childOpen = false"
  >
    Hide all
  </veui-button>
</article>
</template>

<script>
import { Overlay, Button } from 'veui'

export default {
  components: {
    'veui-overlay': Overlay,
    'veui-button': Button
  },
  data () {
    return {
      parentOpen: false,
      childOpen: false
    }
  },
  watch: {
    parentOpen (val) {
      if (!val) {
        this.childOpen = false
      }
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
