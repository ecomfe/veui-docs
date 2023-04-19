<template>
<article>
  <section>
    <veui-tag color="turquoise">
      Steve
    </veui-tag>
    <veui-tag color="violet">
      Tony
    </veui-tag>
    <veui-tag color="green">
      Peter
    </veui-tag>
    <veui-tag
      ui="bordered"
      color="turquoise"
      removable
    >
      Natasha
    </veui-tag>
    <veui-tag
      ui="bordered"
      color="violet"
      removable
    >
      Bruce
    </veui-tag>
    <veui-tag
      ui="bordered"
      color="green"
      removable
    >
      Clint
    </veui-tag>
  </section>
  <section>
    <veui-tag
      ui="reverse"
      color="turquoise"
    >
      Steve
    </veui-tag>
    <veui-tag
      ui="reverse"
      color="violet"
    >
      Tony
    </veui-tag>
    <veui-tag
      ui="reverse"
      color="green"
    >
      Peter
    </veui-tag>
    <veui-tag
      ui="reverse"
      color="turquoise"
      removable
    >
      Natasha
    </veui-tag>
    <veui-tag
      ui="reverse"
      color="violet"
      removable
    >
      Bruce
    </veui-tag>
    <veui-tag
      ui="reverse"
      color="green"
      removable
    >
      Clint
    </veui-tag>
  </section>
</article>
</template>

<script>
import { Tag } from 'veui'

export default {
  components: {
    'veui-tag': Tag
  }
}
</script>

<style lang="less" scoped>
section {
  display: flex;
  gap: 10px;

  & + & {
    margin-top: 20px;
  }
}
</style>
