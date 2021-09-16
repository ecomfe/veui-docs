<template>
<article
  @mouseenter="inDemo = true"
  @mouseleave="inDemo = false"
>
  <div
    v-outside="handleOutside"
    class="box"
  >
    目标元素 A
  </div>
</article>
</template>

<script>
import { outside, toast } from 'veui'

export default {
  directives: {
    outside
  },
  data () {
    return {
      timer: null,
      inDemo: false
    }
  },
  methods: {
    handleOutside () {
      if (this.inDemo) {
        toast.info('点击了目标元素 A 外部。')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 500px;
  height: 100px;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
}

article {
  margin: -30px;
  padding: 30px;
}
</style>
