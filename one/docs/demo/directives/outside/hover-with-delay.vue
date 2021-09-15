<template>
<article>
  <div
    v-outside:box2,box3.hover.1000="handleOutside"
    class="box1"
  >
    目标元素 C
  </div>
  <div
    ref="box2"
    class="box2"
  >
    目标元素 D
  </div>
  <div
    ref="box3"
    class="box3"
  >
    目标元素 E
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
      toast.info('在 1000ms 内未移回目标元素 C、D、E，触发外部事件。')
    }
  }
}
</script>

<style lang="less" scoped>
.box1,
.box2,
.box3 {
  width: 200px;
  height: 100px;
  background: #f7f7f7;
  margin-right: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

article {
  margin: -30px;
  padding: 30px;
}
</style>
