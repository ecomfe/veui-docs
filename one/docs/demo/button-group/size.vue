<template>
<article>
  <veui-button-group
    class="group"
    ui="xl"
  >
    <veui-button>Undo</veui-button>
    <veui-button>Redo</veui-button>
  </veui-button-group>
  <veui-button-group
    class="group"
    ui="l"
  >
    <veui-button>Undo</veui-button>
    <veui-button>Redo</veui-button>
  </veui-button-group>
  <veui-button-group
    class="group"
    ui="m"
  >
    <veui-button>Undo</veui-button>
    <veui-button>Redo</veui-button>
  </veui-button-group>
  <veui-button-group
    class="group"
    ui="s"
  >
    <veui-button>Undo</veui-button>
    <veui-button>Redo</veui-button>
  </veui-button-group>
  <veui-button-group
    class="group"
    ui="xs"
  >
    <veui-button>Undo</veui-button>
    <veui-button>Redo</veui-button>
  </veui-button-group>
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
.group {
  margin-right: 1em;
}
</style>
