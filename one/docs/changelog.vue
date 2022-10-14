<template>
<article
  class="content post"
  :class="{ 'filter-version': compareValid }"
>
  <h1 data-md>
    升级日志
  </h1>
  <veui-form
    style="--dls-field-label-width: calc(4em + 2px); /* WTF Safari? */"
    ui="s"
    class="form"
  >
    <veui-field
      ui="s"
      label="变更类型"
    >
      <veui-checkbox-group
        v-model="types"
        class="types"
        :items="allTypes"
      >
        <template #item="{ label, emoji }">
          <span class="emoji">{{ emoji }}</span> {{ label }}
        </template>
      </veui-checkbox-group>
    </veui-field>
    <veui-field
      ui="s"
      label="功能筛选"
    >
      <veui-select
        v-model="tag"
        searchable
        clearable
        :options="allTags"
        placeholder="根据组件/指令/插件/模块等进行过滤……"
      />
    </veui-field>
    <veui-fieldset
      ui="s"
      label="版本对比"
    >
      <veui-field>
        <veui-checkbox
          v-model="compare"
          class="compare-toggle"
        >
          开启
        </veui-checkbox>
      </veui-field>
      <template v-if="compare">
        <veui-field>
          <veui-select
            v-model="from"
            class="version-select"
            :options="allVersions"
            searchable
            clearable
            placeholder="选择起始版本……"
          />
        </veui-field>
        →
        <veui-field>
          <veui-select
            v-model="to"
            class="version-select"
            :options="allVersions"
            searchable
            clearable
            placeholder="选择目标版本……"
          />
        </veui-field>
      </template>
    </veui-fieldset>
  </veui-form>
  <section
    v-for="{ version, diffLink, codeName, date, changeset } of pagedChangelog"
    :key="version"
    class="version-item"
    data-md
  >
    <h2
      :id="getHash(version)"
      :class="{
        major: isMajor(version),
        minor: isMinor(version)
      }"
    >
      <nuxt-link
        class="version"
        :to="`#${getHash(version)}`"
      >
        {{ version }}
        <small v-if="codeName">{{ codeName }}</small>
        <time
          v-if="date"
          :datetime="date"
        >{{ date }}</time>
      </nuxt-link>
      <veui-link
        v-if="diffLink"
        v-tooltip="'代码变更'"
        class="compare-link"
        target="_blank"
        :to="diffLink"
      >
        <veui-icon
          label="比较"
          name="one-compare"
        />
      </veui-link>
    </h2>
    <ul class="changeset">
      <li
        v-for="({ type, content }, index) of changeset"
        :key="index"
        class="change"
        :class="type"
      >
        <span
          class="emoji"
          :title="getTypeLabel(type)"
        >{{
          getTypeEmoji(type)
        }}</span>
        <div v-html="content"/>
      </li>
    </ul>
  </section>
  <section
    v-if="pagedChangelog.length === 0"
    class="not-found"
    @click="updateShrugger"
  >
    <span class="emoji">{{ shrugger }} </span>
    <p>没有符合条件的变更记录。</p>
  </section>
  <section class="pagination">
    <veui-pagination
      :page="page"
      :page-size="pageSize"
      :total="filteredChangelog.length"
      @redirect="val => (page = val)"
    />
  </section>
</article>
</template>

<script>
import { cloneDeep } from 'lodash'
import {
  Form,
  Field,
  Fieldset,
  CheckboxGroup,
  Select,
  Checkbox,
  Pagination,
  Link,
  Icon
} from 'veui'
import tooltip from 'veui/directives/tooltip'
import changelog from '../assets/data/changelog.json'

Icon.register({
  'one-compare': {
    width: 16,
    height: 16,
    d:
      'M5 12H4c-.27-.02-.48-.11-.69-.31c-.21-.2-.3-.42-.31-.69V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V11c.03.78.34 1.47.94 2.06c.6.59 1.28.91 2.06.94h1v2l3-3l-3-3v2zM2 1.8c.66 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm11 9.48V5c-.03-.78-.34-1.47-.94-2.06c-.6-.59-1.28-.91-2.06-.94H9V0L6 3l3 3V4h1c.27.02.48.11.69.31c.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 12 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2z'
  }
})

const allTypes = [
  { label: '非兼容性变更', value: 'breaking', emoji: '⚠️' },
  { label: '主要变更', value: 'feature', emoji: '💡' },
  { label: '问题修复', value: 'bugfix', emoji: '🐞' },
  { label: '实验性功能', value: 'experimental', emoji: '🧪' }
]
const typeMap = allTypes.reduce((map, { label, value, emoji }) => {
  map[value] = { label, emoji }
  return map
}, {})

const allVersions = changelog.map(({ version }) => ({
  label: version,
  value: version
}))
const allTags = [
  ...new Set(
    changelog
      .map(({ changeset }) => changeset.map(({ tags }) => tags).flat())
      .flat()
  )
]
  .sort()
  .map(tag => ({ label: tag, value: tag }))

function isMajor (version) {
  return /^\d+\.0.0$/.test(version)
}

function isMinor (version) {
  return /^\d+\.(?:[1-9]|\d{2,}).0$/.test(version)
}

function getShrugger () {
  const candidates = [
    '🤷🏻‍♀️',
    '🤷🏼‍♀️',
    '🤷🏽‍♀️',
    '🤷🏾‍♀️',
    '🤷🏿‍♀️',
    '🤷🏻‍♂️',
    '🤷🏼‍♂️',
    '🤷🏽‍♂️',
    '🤷🏾‍♂️',
    '🤷🏿‍♂️'
  ]
  return candidates[Math.floor(Math.random() * candidates.length)]
}

function fillDiffLink (changelog) {
  return changelog.map((change, i) => {
    if (!changelog[i + 1]) {
      return change
    }

    return {
      ...change,
      diffLink: `https://github.com/ecomfe/veui/compare/v${
        changelog[i + 1].version
      }...v${change.version}#files_bucket`
    }
  })
}

export default {
  name: 'one-changelog',
  layout: 'default',
  components: {
    'veui-form': Form,
    'veui-field': Field,
    'veui-fieldset': Fieldset,
    'veui-checkbox-group': CheckboxGroup,
    'veui-select': Select,
    'veui-checkbox': Checkbox,
    'veui-pagination': Pagination,
    'veui-link': Link,
    'veui-icon': Icon
  },
  directives: {
    tooltip
  },
  data () {
    return {
      changelog: fillDiffLink(changelog),
      allTypes,
      types: allTypes.map(({ value }) => value),
      allVersions,
      allTags,
      compare: false,
      tag: null,
      from: null,
      to: allVersions[0].value,
      shrugger: getShrugger(),
      page: 1,
      pageSize: 10
    }
  },
  computed: {
    compareValid () {
      return this.from && this.to
    },
    filteredChangelog () {
      const { changelog, tag, from, to } = this

      let result = cloneDeep(changelog)

      if (from && to) {
        const fromIndex = result.findIndex(({ version }) => version === from)
        const toIndex = result.findIndex(({ version }) => version === to)
        result = result.slice(toIndex, fromIndex)
      }

      result.forEach(versionLog => {
        const { changeset } = versionLog
        versionLog.changeset = changeset.filter(
          ({ type, tags }) =>
            this.types.includes(type) && (!tag || tags.includes(tag))
        )
      })

      return result.filter(({ changeset }) => changeset.length !== 0)
    },
    pagedChangelog () {
      const { page, pageSize, filteredChangelog } = this
      return filteredChangelog.slice((page - 1) * pageSize, page * pageSize)
    }
  },
  watch: {
    compare (val) {
      if (!val) {
        this.from = null
        this.to = allVersions[0].value
      }
    }
  },
  mounted () {
    ['from', 'to', 'compare', 'tag', 'types'].forEach(key => {
      this.$watch(key, this.updateShrugger)
    })
  },
  methods: {
    isMajor,
    isMinor,
    getTypeEmoji (type) {
      return typeMap[type].emoji
    },
    getTypeLabel (type) {
      return typeMap[type].label
    },
    updateShrugger () {
      this.shrugger = getShrugger()
    },
    getHash (version) {
      return `v${version.replace(/\./g, '-')}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.emoji
  font-family "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Android Emoji", EmojiSymbols

.compare-toggle
  margin-right 8px

.version-select
  width 160px
  margin 0 8px

.veui-field
  --dls-field-label-width inherit

.form
  & >>> .veui-field
    margin-bottom 12px

    & .veui-field
      margin-bottom 0

  & >>> .veui-field .veui-field-no-label
    margin-bottom 0

.version-item
  position relative

  &::before
    content ""
    position absolute
    top -2px
    bottom -2px
    left -12px
    width 3px
    background-color #0052cc
    border-radius 1px
    opacity 0
    transform-origin 50% 0

  &[data-target]::before
    animation line-enter 6s ease 1 both

h2
  display flex
  align-items center
  font-size 20px
  margin 1.2em 0 0.6em

  &.minor
    font-size 24px

  &.major
    font-size 28px

  &.minor
  &.major
    &::before
      content "§"

  .version
    display inline-flex
    align-items center
    color #282c33 !important
    margin-right 8px

  small
  time
    display inline-flex
    align-items center

  small
    font-size 14px

    &::before
      content "·"
      font-size 20px
      margin 0 8px

  time
    font-size 12px
    color #999

    &::before
    &::after
      content "/"
      font-size 10px
      margin 0 8px
      color #ccc

.changeset
  list-style-type none
  padding-left 0

.change
  display flex

  .emoji
    flex none
    margin-right 8px
    cursor help

  & >>> p
    margin-top 0

    &:only-child
      margin 0

.not-found
  display inline-flex
  flex-direction column
  align-items center
  margin 32px
  color #ababab
  font-size 28px
  cursor pointer
  user-select none

  .emoji
    font-size 64px
    opacity 0.75

  p
    margin 0 -0.75em 0 0

.pagination
  margin-top 36px

@keyframes line-enter
  0%
  100%
    transform scaleY(0)
    opacity 0

  5%
  95%
    transform none
    opacity 1
</style>
