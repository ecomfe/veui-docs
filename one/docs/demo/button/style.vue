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
    <veui-button ui="ghost">
      Ghost
    </veui-button>
    <veui-button ui="ghost strong">
      Strong Ghost
    </veui-button>
    <veui-button ui="ghost aux">
      Aux Ghost
    </veui-button>
    <div class="reverse">
      <veui-button ui="ghost reverse">
        Reverse Ghost
      </veui-button>
    </div>
  </section>
  <section>
    <veui-button ui="text">
      Text
    </veui-button>
    <veui-button ui="text strong">
      Text
    </veui-button>
    <veui-button ui="text aux">
      Text
    </veui-button>
    <veui-button ui="text subtle">
      Text
    </veui-button>
  </section>
  <section>
    <veui-button ui="icon">
      <veui-icon name="home"/>
    </veui-button>
    <veui-button ui="icon strong">
      <veui-icon name="home"/>
    </veui-button>
    <veui-button ui="icon aux">
      <veui-icon name="home"/>
    </veui-button>
    <veui-button ui="icon subtle">
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
import 'veui-theme-dls-icons/home'

export default {
  components: {
    'veui-button': Button,
    'veui-icon': Icon
  }
}
</script>

<style lang="less" scoped>
section {
  display: flex;
  gap: 12px;

  & + & {
    margin-top: 20px;
  }
}

.reverse {
  margin: -8px;
  padding: 8px;
  border-radius: 4px;
  background-color: #0052cc;
}
</style>
