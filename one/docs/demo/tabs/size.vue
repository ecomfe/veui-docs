<template>
<article>
  <veui-tabs
    ui="l"
    :active.sync="active"
  >
    <veui-tab
      label="回答问题"
      name="answers"
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

  <veui-tabs :active.sync="active">
    <veui-tab
      label="回答问题"
      name="answers"
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

  <veui-tabs
    ui="s"
    :active.sync="active"
  >
    <veui-tab
      label="回答问题"
      name="answers"
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
