<template>
<article>
  <section>
    <h4>Simple style</h4>
    <veui-tabs
      ui="simple"
      :active.sync="active"
    >
      <veui-tab
        label="回答问题"
        name="answers"
      />
      <veui-tab
        label="文章评论"
        name="articles"
        status="error"
      />
      <veui-tab
        label="分享朋友圈"
        name="shares"
      />
    </veui-tabs>
  </section>
  <section>
    <h4>Strong style</h4>
    <veui-tabs
      ui="strong"
      :active.sync="active"
    >
      <veui-tab
        label="回答问题"
        name="answers"
        status="warning"
      />
      <veui-tab
        label="文章评论"
        name="articles"
      />
      <veui-tab
        label="分享朋友圈"
        name="shares"
      />
    </veui-tabs>
  </section>
</article>
</template>

<script>
import { Tabs, Tab } from 'veui'

export default {
  components: {
    'veui-tabs': Tabs,
    'veui-tab': Tab
  },
  data () {
    return {
      active: 'answers'
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}

h4 {
  margin-top: 0;
}
</style>
