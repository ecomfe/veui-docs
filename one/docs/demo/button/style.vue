<template>
<article>
  <section>
    <veui-button ui="primary">
      Primary
    </veui-button>
    <veui-button>Normal</veui-button>
    <veui-button ui="basic">
      Basic
    </veui-button>
    <veui-button ui="strong">
      Strong
    </veui-button>
    <veui-button ui="translucent">
      Translucent
    </veui-button>
  </section>
  <section>
    <veui-button ui="text">
      Text
    </veui-button>
    <veui-button ui="icon">
      <veui-icon name="home"/>
    </veui-button>
    <veui-button ui="icon strong">
      <veui-icon name="home"/>
    </veui-button>
    <veui-button ui="icon aux">
      <veui-icon name="home"/>
    </veui-button>
    <veui-button ui="primary square">
      <veui-icon name="home"/>
    </veui-button>
  </section>
</article>
</template>

<script>
import { Button, Icon } from 'veui'

export default {
  components: {
    'veui-button': Button,
    'veui-icon': Icon
  }
}
</script>

<style lang="less" scoped docs>
.veui-button {
  margin-right: 1em;
}

section {
  margin-top: 20px;
}
</style>
