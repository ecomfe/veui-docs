<template>
<article>
  <veui-alert
    type="success"
    ui="strong"
    message="恭喜你，你的请求已成功处理"
    closable
  >
    <template slot="title">
      恭喜你
    </template>
    <template slot="extra">
      <veui-button ui="text">
        查看详情
      </veui-button>
    </template>
    恭喜你，你的请求已成功处理
  </veui-alert>
</article>
</template>

<script>
import { Alert, Button } from 'veui'

export default {
  components: {
    'veui-alert': Alert,
    'veui-button': Button
  }
}
</script>

<style lang="less" scoped>
.veui-alert {
  margin-bottom: 20px;
}
</style>
