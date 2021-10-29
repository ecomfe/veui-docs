<template>
<a
  class="one-edit-link"
  :class="
    variant
      ? {
        [`one-edit-link-${variant}`]: true,
      }
      : {}
  "
  :href="href"
  target="_blank"
  rel="noopener"
>
  <slot :label="t('editOnGitHub')">
    <span class="full">{{ t('editOnGitHub') }}</span>
    <span class="short">{{ t('edit') }}</span>
    <veui-icon
      class="icon"
      name="external-link"
    />
  </slot>
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
    variant: {
      type: String,
      default: 'default'
    },
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
  text-decoration none
  transition background 0.2s, color 0.2s, border-color 0.2s

  .icon
    margin-left 4px

  &-default
    display inline-flex
    align-items center
    padding 4px 6px
    border-radius 4px
    background-color #fff
    color #848b99
    border 1px solid #e2e6f0

    &:hover
    &[data-focus-visible-added]
      background-color #f6f7fa
      color #282c33
      border-color #d3d9e6

    &:active
      background-color #e2e6f0
      color #000
      border-color #d3d9e6

  &-quiet
    color #282c33

    &:hover
    &[data-focus-visible-added]
      color #545b66

    &:active
      color #000

    .full
      display inline
    .short
      display none

@media (max-width 480px)
  .one-edit-link-quiet
    .full
      display none
    .short
      display inline
</style>
