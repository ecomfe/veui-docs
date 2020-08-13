<template>
<header class="one-header">
  <h1>Baidu DLS</h1>
  <a
    href="http://dls.baidu.com/"
    target="_blank"
  >返回 DLS</a>
  <veui-dropdown
    label="Vue"
    :options="options"
    @click="redirect"
  />
</header>
</template>

<script>
import { Dropdown } from 'veui'

export default {
  name: 'one-header',
  components: {
    'veui-dropdown': Dropdown
  },
  data () {
    return {
      options: [
        {
          label: 'Vue',
          value: '/'
        },
        {
          label: 'React',
          value: 'http://one-ui.baidu-int.com/'
        },
        {
          label: 'Angular',
          value: 'http://cp01-wangfengjiao01.epc.baidu.com:8404/'
        }
      ]
    }
  },
  methods: {
    redirect (url) {
      location.href = url
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-header
  position fixed
  top 0
  left 0
  right 0
  z-index 20
  display flex
  align-items center
  height 60px
  background-color #070628
  color #ffffff
  padding 0 51px 0 17px

  h1
    display inline-block
    font-size 18px

  a
    margin-left auto
    color #ffffff
    font-size 16px

    &:hover
      color #ffffff

  .veui-dropdown
    margin-left 40px

    & >>> .veui-dropdown-button
      color #ffffff
      background-color transparent
      border-radius 6px
      height 28px
      display inline-flex
      align-items center

      .veui-dropdown-label
        line-height 1
</style>
