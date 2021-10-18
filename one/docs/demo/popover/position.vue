<template>
<article>
  <section>
    <veui-checkbox
      v-model="aimCenter"
      ui="s"
    >
      Aim center
    </veui-checkbox>
  </section>
  <section class="grid">
    <veui-popover
      :open.sync="open"
      :target="target"
      :position="position"
      :aim-center="aimCenter"
    >
      Hello.
    </veui-popover>
    <veui-button
      ref="top-start"
      style="grid-area: 1 / 2"
      @mouseenter="show('top-start')"
    >
      top-start
    </veui-button>
    <veui-button
      ref="top"
      style="grid-area: 1 / 3"
      @mouseenter="show('top')"
    >
      top
    </veui-button>
    <veui-button
      ref="top-end"
      style="grid-area: 1 / 4"
      @mouseenter="show('top-end')"
    >
      top-end
    </veui-button>
    <veui-button
      ref="right-start"
      style="grid-area: 2 / 5"
      @mouseenter="show('right-start')"
    >
      right-start
    </veui-button>
    <veui-button
      ref="right"
      style="grid-area: 3 / 5"
      @mouseenter="show('right')"
    >
      right
    </veui-button>
    <veui-button
      ref="right-end"
      style="grid-area: 4 / 5"
      @mouseenter="show('right-end')"
    >
      right-end
    </veui-button>
    <veui-button
      ref="bottom-start"
      style="grid-area: 5 / 2"
      @mouseenter="show('bottom-start')"
    >
      bottom-start
    </veui-button>
    <veui-button
      ref="bottom"
      style="grid-area: 5 / 3"
      @mouseenter="show('bottom')"
    >
      bottom
    </veui-button>
    <veui-button
      ref="bottom-end"
      style="grid-area: 5 / 4"
      @mouseenter="show('bottom-end')"
    >
      bottom-end
    </veui-button>
    <veui-button
      ref="left-start"
      style="grid-area: 2 / 1"
      @mouseenter="show('left-start')"
    >
      left-start
    </veui-button>
    <veui-button
      ref="left"
      style="grid-area: 3 / 1"
      @mouseenter="show('left')"
    >
      left
    </veui-button>
    <veui-button
      ref="left-end"
      style="grid-area: 4 / 1"
      @mouseenter="show('left-end')"
    >
      left-end
    </veui-button>
  </section>
</article>
</template>

<script>
import { Popover, Button, Checkbox } from 'veui'

export default {
  components: {
    'veui-popover': Popover,
    'veui-button': Button,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      target: null,
      position: null,
      open: false,
      aimCenter: false
    }
  },
  methods: {
    show (position) {
      this.target = this.$refs[position]
      this.position = position
      this.open = true
    }
  }
}
</script>

<style lang="less" scoped>
section + section {
  margin-top: 20px;
}

.grid {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 12px;
  justify-content: center;
  align-items: center;
}
</style>

<docs>
使用 `aim-center` 属性来设置浮层提示箭头始终对准目标元素中心，适合用于目标元素较小的场景。
</docs>
