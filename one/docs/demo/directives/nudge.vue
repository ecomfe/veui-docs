<template>
<article>
  <div class="box value">
    {{ displayValue }}
  </div>
  <div
    v-nudge.x="{update: handleNudgeUpdate}"
    class="box"
    tabindex="-1"
  >
    点我，按<strong>左右</strong>方向键
  </div>
  <div
    v-nudge.y="{update: handleNudgeUpdate}"
    class="box"
    tabindex="-1"
  >
    点我，按<strong>上下</strong>方向键
  </div>
</article>
</template>

<script>
import nudge from 'veui/directives/nudge'

export default {
  directives: {
    nudge
  },
  data () {
    return {
      value: 0
    }
  },
  computed: {
    displayValue () {
      return this.value.toFixed(1).replace('.0', '')
    }
  },
  methods: {
    handleNudgeUpdate (increase) {
      this.value += increase
    }
  }
}
</script>

<style lang="less" scoped docs>
@import "~veui-theme-dls/lib.less";

article {
  display: flex;
}

.box {
  .size(200px, 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid @veui-gray-color-5;
  background: #fff;
  margin-right: 40px;
  user-select: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  line-height: 1;

  &:focus {
    background-color: @veui-gray-color-6;
  }
}

.value {
  font-size: 1.5em;
}
</style>
