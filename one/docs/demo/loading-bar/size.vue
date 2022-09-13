<template>
<article>
  <section>
    <veui-switch v-model="loading">
      Loading
    </veui-switch>
  </section>
  <section class="bars">
    <veui-loading-bar
      :loading="loading"
      ui="m"
    />
    <veui-loading-bar
      :loading="loading"
      ui="s"
    />
    <veui-loading-bar
      :loading="loading"
      ui="xs"
    />
  </section>
</article>
</template>

<script>
import { Switch, LoadingBar } from 'veui'

export default {
  components: {
    'veui-switch': Switch,
    'veui-loading-bar': LoadingBar
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style lang="less" scoped>
article,
.bars {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bars {
  width: 50%;
  height: 80px;
}
</style>

<docs>
`LoadingBar` 组件目前只支持针对未知进度的加载状态提供假进度提示，类似 [NProgress.js](https://ricostacruz.com/nprogress/)。
</docs>
