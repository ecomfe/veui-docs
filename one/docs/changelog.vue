<template>
<article
  class="content post"
  :class="{ 'filter-version': compareValid }"
>
  <h1 data-markdown>
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
            class="version"
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
            class="version"
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
    v-for="{ version, codeName, date, changeset } of pagedChangelog"
    :key="version"
    class="version-item"
    data-markdown
  >
    <h2
      :id="getHash(version)"
      :class="{
        major: isMajor(version),
        minor: isMinor(version),
      }"
    >
      <nuxt-link
        :to="`#${getHash(version)}`"
      >
        {{ version }}<small v-if="codeName">{{ codeName }}</small><time
          v-if="date"
          :datetime="date"
        >{{ date }}</time>
      </nuxt-link>
    </h2>
    <ul class="changeset">
      <li
        v-for="({ type, tags, content }, index) of changeset"
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
      @redirect="val => page = val"
    />
  </section>
</article>
</template>

<script>
import { cloneDeep } from 'lodash'
import { Form, Field, Fieldset, CheckboxGroup, Select, Checkbox, Pagination } from 'veui'
import changelog from '../assets/data/changelog.json'

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

const allVersions = changelog.map(({ version }) => ({ label: version, value: version }))
const allTags = [
  ...new Set(changelog.map(({ changeset }) => changeset.map(({ tags }) => tags).flat()).flat())
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
  const candidates = ['🤷🏻‍♀️', '🤷🏼‍♀️', '🤷🏽‍♀️', '🤷🏾‍♀️', '🤷🏿‍♀️', '🤷🏻‍♂️', '🤷🏼‍♂️', '🤷🏽‍♂️', '🤷🏾‍♂️', '🤷🏿‍♂️']
  return candidates[Math.floor(Math.random() * candidates.length)]
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
    'veui-pagination': Pagination
  },
  data () {
    return {
      changelog,
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

      result.forEach((versionLog) => {
        const { changeset } = versionLog
        versionLog.changeset = changeset
          .filter(({ type, tags }) => this.types.includes(type) && (!tag || tags.includes(tag)))
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
    ['from', 'to', 'compare', 'tag', 'types'].forEach((key) => {
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

.version
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

  a
    display inline-flex
    align-items center
    color #333 !important

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
