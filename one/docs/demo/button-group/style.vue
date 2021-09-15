<template>
<article>
  <section>
    <veui-button-group ui="primary">
      <veui-button>Undo</veui-button>
      <veui-button>Redo</veui-button>
    </veui-button-group>
  </section>
  <section>
    <veui-button-group>
      <veui-button>Undo</veui-button>
      <veui-button>Redo</veui-button>
    </veui-button-group>
  </section>
  <section>
    <veui-button-group ui="strong">
      <veui-button>Undo</veui-button>
      <veui-button>Redo</veui-button>
    </veui-button-group>
  </section>
  <section>
    <veui-button-group ui="basic">
      <veui-button>Undo</veui-button>
      <veui-button>Redo</veui-button>
    </veui-button-group>
  </section>
</article>
</template>

<script>
import { Button, ButtonGroup } from 'veui'

export default {
  components: {
    'veui-button': Button,
    'veui-button-group': ButtonGroup
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 1em;
}

.veui-button-group {
  margin-right: 1em;
}
</style>
