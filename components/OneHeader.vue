<template>
<header class="one-header">
  <section class="brand">
    <h2 class="veui">
      <nuxt-link to="/">
        VEUI
      </nuxt-link>
    </h2>
    <a
      class="stars"
      href="https://github.com/ecomfe/veui"
    >
      <img
        alt="VEUI on GitHub"
        src="https://img.shields.io/github/stars/ecomfe/veui?label=stars&logo=github"
        height="20"
      >
    </a>
  </section>
  <section class="desc">
    <veui-radio-button-group
      ui="s"
      :items="themes"
      :value="theme"
      @change="$emit('themechange', $event)"
    />
    <nuxt-link
      :class="{
        'locale-switch': true,
        disabled: altLocale.disabled
      }"
      :to="altLocale.disabled ? '' : altLocale.to"
    >
      <span class="locale-full">{{ altLocale.label }}</span><span class="locale-short">{{ altLocale.shortLabel }}</span>
    </nuxt-link>
    <one-search/>
    <a href="https://github.com/ecomfe/veui">
      <veui-icon name="one-header-github"/>
    </a>
  </section>
</header>
</template>

<script>
import { Icon, RadioButtonGroup } from 'veui'
import i18n from '../common/i18n'
import OneSearch from './OneSearch'

Icon.register({
  'one-header-github': {
    width: 16,
    height: 16,
    d:
      'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
  }
})

export default {
  name: 'one-header',
  components: {
    'veui-icon': Icon,
    'veui-radio-button-group': RadioButtonGroup,
    'one-search': OneSearch
  },
  mixins: [i18n],
  props: {
    theme: String
  },
  data () {
    return {
      themes: [
        { label: 'D20', value: '' },
        { label: 'D22', value: 'd22' }
      ]
    }
  },
  computed: {
    altLocale () {
      let { canonicalPath, locale, getLocalePath, isPathDisabled } = this
      let altLocale = locale === 'zh-Hans' ? 'en-US' : 'zh-Hans'
      let label = locale === 'zh-Hans' ? 'English' : '中文'
      let shortLabel = locale === 'zh-Hans' ? 'EN' : '中'
      let disabled = isPathDisabled(canonicalPath, altLocale)
      return {
        to: disabled ? '' : getLocalePath(canonicalPath, altLocale),
        disabled,
        label,
        shortLabel
      }
    }
  }
}
</script>

<style lang="styl" scoped>
.one-header
  display flex
  align-items center
  padding 0 32px

  h2
    display flex
    align-items center
    margin 0
    font-size 20px
    font-weight 500

  img
    display block

.veui
  font-family 'Alata', sans-serif

.brand,
.desc
  display flex
  align-items center
  gap 12px

.desc
  flex-grow 1
  justify-content flex-end

.veui-icon
  font-size 24px

.locale-switch
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

  .stars,
  .locale-full
    display none
</style>
