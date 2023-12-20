<template>
<article>
  <section>
    <veui-button
      ref="btn1"
      class="button"
    >
      按钮1
    </veui-button>
    <veui-button
      ref="btn2"
      class="button"
    >
      按钮2
    </veui-button>
    <veui-popover
      target="btn1"
      title="Popover Title"
      ok-label="好"
      cancel-label="否"
      foot
    >
      This is a popover.
    </veui-popover>
    <veui-popover
      target="btn2"
      title="Popover Title"
      foot
    >
      This is a popover.
      <template #foot>
        Popover foot
      </template>
    </veui-popover>
  </section>
</article>
</template>

<script>
import { Popover, Button } from 'veui'

export default {
  components: {
    'veui-button': Button,
    'veui-popover': Popover
  }
}
</script>

<style lang="less" scoped>
.button + .button {
  margin-left: 200px;
}
</style>
