<template>
<article>
  <button
    v-longpress.repeat="{ handler: handleLongpress, repeatInterval: 500 }"
    class="box"
  >
    Longpress me
  </button>
</article>
</template>

<script>
import Vue from 'vue'
import { longpress, $toast } from 'veui'

Vue.use($toast)

export default {
  directives: {
    longpress
  },
  methods: {
    handleLongpress () {
      this.$toast.info('Longpress triggered!')
    }
  }
}
</script>

<style lang="less" scoped>
article {
  display: flex;
}

.box {
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dbdbdb;
  background: #fff;
  outline: none;
  transition: background-color 0.3s;
  line-height: 1;

  &:active {
    background-color: #e7e7e7;
  }
}
</style>
