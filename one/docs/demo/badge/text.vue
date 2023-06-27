<template>
<article>
  <veui-badge
    value="New"
    status="success"
  >
    <veui-button>View</veui-button>
  </veui-badge>
  <veui-badge
    value="New"
    status="info"
  >
    <veui-button>View</veui-button>
  </veui-badge>
  <veui-badge value="New">
    <veui-button>View</veui-button>
  </veui-badge>
  <veui-badge
    value="New"
    status="warning"
  >
    <veui-button>View</veui-button>
  </veui-badge>
  <veui-badge
    value="New"
    status="aux"
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
可以使用 [`status`](#props-status) 属性，指定徽标的不同状态。
</docs>

<docs locale="en-US">
Use the [`status`](#props-status) prop to apply different contextual status.
</docs>
