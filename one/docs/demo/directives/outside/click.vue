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
import outside from 'veui/directives/outside'
import toast from 'veui/managers/toast'

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

<style lang="less" scoped docs>
@import "~veui-theme-dls/lib.less";

.box {
  .size(500px, 100px);
  background: @veui-gray-color-8;
  display: flex;
  align-items: center;
  justify-content: center;
}

article {
  margin: -30px;
  padding: 30px;
}
</style>
