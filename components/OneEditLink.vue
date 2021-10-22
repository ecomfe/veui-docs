<template>
<a
  class="one-edit-link"
  :href="href"
  target="_blank"
  rel="noopener"
>
  {{ t('editOnGitHub') }}
  <veui-icon
    class="icon"
    name="external-link"
  />
</a>
</template>

<script>
import { Icon } from 'veui'
import i18n from 'veui/mixins/i18n'
import 'veui-theme-dls-icons/external-link'

const BASE_URL = 'https://github.com/ecomfe/veui-docs/edit/master/one/docs/'

export default {
  name: 'one-edit-link',
  components: {
    'veui-icon': Icon
  },
  mixins: [i18n],
  props: {
    path: String
  },
  computed: {
    href () {
      return `${BASE_URL}${this.path}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-edit-link
  display inline-flex
  align-items center
  padding 4px 6px
  border-radius 4px
  background-color #fff
  color #848b99
  border 1px solid #e2e6f0
  transition background 0.2s, color 0.2s, border-color 0.2s
  text-decoration none

  &:hover
  &[data-focus-visible-added]
    background-color #f6f7fa
    color #282c33
    border-color #d3d9e6

  &:active
    background-color #e2e6f0
    color #000
    border-color #d3d9e6

.icon
  margin-left 4px
</style>
