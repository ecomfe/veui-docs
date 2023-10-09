<template>
<nuxt-link
  :class="{
    'locale-link': true
  }"
  :to="toggle ? altLocale.to : getLocalePath(to)"
>
  <template v-if="toggle">
    <span class="locale-full">{{ altLocale.label }}</span><span class="locale-short">{{ altLocale.shortLabel }}</span>
  </template>
  <slot v-else/>
</nuxt-link>
</template>

<script>
import i18n from '../common/i18n'

export default {
  name: 'one-locale-link',
  mixins: [i18n],
  props: {
    toggle: Boolean,
    to: String,
    hash: String
  },
  computed: {
    altLocale () {
      let { canonicalPath, locale, getLocalePath } = this
      let altLocale = locale === 'zh-Hans' ? 'en-US' : 'zh-Hans'
      let label = locale === 'zh-Hans' ? 'English' : '中文'
      let shortLabel = locale === 'zh-Hans' ? 'EN' : '中'

      return {
        to: `${getLocalePath(canonicalPath, altLocale)}${this.hash || ''}`,
        label,
        shortLabel
      }
    }
  }
}
</script>

<style lang="styl">
.locale-link
  display flex
  align-items center
  padding 0 6px
  border 1px solid #dbdbdb
  border-radius 4px
  height 28px
  font-size 12px
  text-decoration none
  transition all 0.2s

  &:hover
    border-color #999

.locale-short
  display none

@media (max-width 480px)
  .locale-short
    display inline

  .locale-full
    display none
</style>
