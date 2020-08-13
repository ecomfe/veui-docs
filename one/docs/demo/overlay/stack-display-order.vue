<template>
<article>
  <veui-button
    ref="a"
    @click="aOpen = !aOpen"
  >
    Toggle A
  </veui-button>
  <veui-overlay
    target="a"
    position="top-start"
    :open.sync="aOpen"
    overlay-class="relative-overlay"
  >
    A
  </veui-overlay>

  <veui-button
    ref="b"
    @click="bOpen = !bOpen"
  >
    Toggle B
  </veui-button>
  <veui-overlay
    target="b"
    position="top-start"
    :open.sync="bOpen"
    overlay-class="relative-overlay"
  >
    B
  </veui-overlay>

  <veui-button
    ref="c"
    @click="cOpen = !cOpen"
  >
    Toggle C
  </veui-button>
  <veui-overlay
    target="c"
    position="top-start"
    :open.sync="cOpen"
    overlay-class="relative-overlay"
  >
    C
  </veui-overlay>
  <veui-button
    ui="xs"
    @click="aOpen = bOpen = cOpen = false"
  >
    Hide all
  </veui-button>
</article>
</template>

<script>
import { Overlay, Button } from 'veui'

export default {
  components: {
    'veui-overlay': Overlay,
    'veui-button': Button
  },
  data () {
    return {
      aOpen: false,
      bOpen: false,
      cOpen: false
    }
  }
}
</script>

<style lang="less" docs scoped>
.veui-overlay {
  display: none;
}

.veui-button {
  margin-right: 10px;
}
</style>

<style lang="less" src="./relative.less" docs></style>
