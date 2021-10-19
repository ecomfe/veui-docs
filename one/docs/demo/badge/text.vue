<template>
<article>
  <veui-badge
    value="New"
    type="success"
  >
    <veui-button>View</veui-button>
  </veui-badge>
  <veui-badge
    value="New"
    type="info"
  >
    <veui-button>View</veui-button>
  </veui-badge>
  <veui-badge value="New">
    <veui-button>View</veui-button>
  </veui-badge>
  <veui-badge
    value="New"
    type="warning"
  >
    <veui-button>View</veui-button>
  </veui-badge>
  <veui-badge
    value="New"
    type="aux"
  >
    <veui-button>View</veui-button>
  </veui-badge>
</article>
</template>

<script>
import { Badge, Button } from 'veui'

export default {
  components: {
    'veui-badge': Badge,
    'veui-button': Button
  }
}
</script>

<style lang="less" scoped>
.veui-badge {
  & + & {
    margin-left: 2em;
  }
}
</style>

<docs>
可以使用 [`type`](#props-type) 属性，指定徽标在不同功能状态下的样式。
</docs>

<docs locale="en-US">
Use the [`type`](#props-type) prop to apply different contextual styles.
</docs>
