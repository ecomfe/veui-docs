<template>
<article>
  <veui-button
    class="button"
    ui="primary"
  >
    Primary
  </veui-button>
  <veui-button
    class="button"
    ui="secondary"
  >
    Custom
  </veui-button>
</article>
</template>

<script>
import { Button } from 'veui'

export default {
  components: {
    'veui-button': Button
  }
}
</script>

<style lang="less" scoped>
.button {
  width: 120px;
  margin-right: 1em;
}

.button[ui~="secondary"] {
  background-color: #e5e5ff;

  &:hover {
    background-color: #ddf;
  }

  &:active {
    background-color: #ccf;
  }
}
</style>
