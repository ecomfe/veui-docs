<template>
<article>
  <div
    v-outside.hover="handleOutside"
    class="box"
  >
    目标元素 B
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
      consoleVisible: false,
      timer: null
    }
  },
  methods: {
    handleOutside () {
      toast.info('鼠标移到了目标元素B外部。')
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
